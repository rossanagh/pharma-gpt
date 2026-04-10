import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';

export interface AskResponse {
  response: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  /** Baza /api/ai — recalculată la fiecare apel (după încărcarea api-url.json). */
  private aiRoot(): string {
    const base = environment.apiUrl.replace(/\/$/, '');
    return base ? `${base}/api/ai` : '/api/ai';
  }

  async askQuestion(
    question: string,
    history?: Array<{ role: 'user' | 'assistant'; content: string }>
  ): Promise<AskResponse> {
    const body: {
      question: string;
      history?: Array<{ role: string; content: string }>;
    } = { question };
    if (history?.length) {
      body.history = history.map((h) => ({ role: h.role, content: h.content }));
    }
    const result = await firstValueFrom(this.http.post<AskResponse>(`${this.aiRoot()}/ask`, body));
    return result;
  }

  /**
   * Progressive answer: POST /api/ai/ask/stream (SSE with JSON lines: {"delta":"..."} or {"error":"..."}).
   */
  async askQuestionStream(
    question: string,
    history: Array<{ role: 'user' | 'assistant'; content: string }> | undefined,
    onDelta: (chunk: string) => void
  ): Promise<void> {
    const body: {
      question: string;
      history?: Array<{ role: string; content: string }>;
    } = { question };
    if (history?.length) {
      body.history = history.map((h) => ({ role: h.role, content: h.content }));
    }
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'text/event-stream'
    };
    const token = this.auth.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const res = await fetch(`${this.aiRoot()}/ask/stream`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(t || `HTTP ${res.status}`);
    }
    const reader = res.body?.getReader();
    if (!reader) {
      throw new Error('No response body');
    }
    const decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      buffer += decoder.decode(value, { stream: true });
      const blocks = buffer.split(/\r?\n\r?\n/);
      buffer = blocks.pop() ?? '';
      for (const block of blocks) {
        for (const line of block.split('\n')) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data:')) {
            continue;
          }
          const payload = trimmed.slice(5).trim();
          if (payload === '[DONE]') {
            continue;
          }
          try {
            const j = JSON.parse(payload) as { delta?: string; error?: string };
            if (j.error) {
              throw new Error(j.error);
            }
            if (j.delta) {
              onDelta(j.delta);
            }
          } catch (e) {
            if (e instanceof SyntaxError) {
              continue;
            }
            throw e;
          }
        }
      }
    }
  }
}
