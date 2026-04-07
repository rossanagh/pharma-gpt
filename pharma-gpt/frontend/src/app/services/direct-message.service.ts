import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export type UserSummary = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  parafa: string | null;
  providerType: string | null;
  specialty: string | null;
  hasAvatar: boolean;
  online?: boolean;
};

export type Message = {
  id: number;
  conversationId: number;
  senderUserId: number;
  recipientUserId: number;
  content: string;
  createdAt: string;
};

export type Conversation = {
  id: number;
  lastMessageAt: string | null;
  peer: UserSummary | null;
  lastMessage: Message | null;
};

@Injectable({ providedIn: 'root' })
export class DirectMessageService {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  async searchUsers(q: string): Promise<UserSummary[]> {
    return await firstValueFrom(
      this.http.get<UserSummary[]>(`${environment.apiUrl}/api/users/search`, {
        params: { q }
      })
    );
  }

  async listConversations(): Promise<Conversation[]> {
    return await firstValueFrom(
      this.http.get<Conversation[]>(`${environment.apiUrl}/api/dm/conversations`)
    );
  }

  async listMessages(conversationId: number, before?: string, limit = 30): Promise<Message[]> {
    const params: Record<string, string> = { limit: String(limit) };
    if (before) params['before'] = before;
    return await firstValueFrom(
      this.http.get<Message[]>(
        `${environment.apiUrl}/api/dm/conversations/${conversationId}/messages`,
        { params }
      )
    );
  }

  async sendMessage(peerUserId: number, content: string): Promise<Message> {
    return await firstValueFrom(
      this.http.post<Message>(`${environment.apiUrl}/api/dm/peers/${peerUserId}/messages`, {
        content
      })
    );
  }

  subscribeRealtime(onMessage: (msg: Message) => void): () => void {
    const token = this.auth.getToken();
    if (!token) return () => {};

    const url = `${environment.apiUrl}/api/dm/stream`;
    const controller = new AbortController();

    void this.startSse(url, token, controller.signal, onMessage);

    return () => controller.abort();
  }

  private async startSse(
    url: string,
    token: string,
    signal: AbortSignal,
    onMessage: (msg: Message) => void
  ): Promise<void> {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'text/event-stream',
        Authorization: `Bearer ${token}`
      },
      signal
    });

    if (!res.ok || !res.body) return;

    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      // SSE events are separated by blank line
      let idx = buffer.indexOf('\n\n');
      while (idx !== -1) {
        const rawEvent = buffer.slice(0, idx);
        buffer = buffer.slice(idx + 2);
        this.handleSseEvent(rawEvent, onMessage);
        idx = buffer.indexOf('\n\n');
      }
    }
  }

  private handleSseEvent(rawEvent: string, onMessage: (msg: Message) => void): void {
    const lines = rawEvent.split('\n').map((l) => l.trimEnd());
    let eventName = '';
    let data = '';

    for (const line of lines) {
      if (line.startsWith('event:')) eventName = line.slice('event:'.length).trim();
      if (line.startsWith('data:')) data += line.slice('data:'.length).trim();
    }

    if (eventName !== 'dm' || !data) return;
    try {
      const msg = JSON.parse(data) as Message;
      onMessage(msg);
    } catch {
      // ignore
    }
  }
}

