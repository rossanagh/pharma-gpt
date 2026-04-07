import { Injectable, inject, signal } from '@angular/core';
import { AuthService } from './auth.service';

export type ChatRole = 'user' | 'assistant';

export interface ChatTurn {
  role: ChatRole;
  content: string;
}

export interface AiChatHistoryItem {
  id: string;
  at: number;
  /** Primul mesaj user — afișat în listă */
  title: string;
  messages: ChatTurn[];
  /** Migrare din format vechi (un singur Q&A) */
  question?: string;
  answer?: string;
}

const MAX_ITEMS = 40;
const PREFIX = 'pharma_gpt_ai_hist_v2_';
const LEGACY_PREFIX = 'pharma_gpt_ai_hist_';

function extractTitle(messages: ChatTurn[]): string {
  const first = messages.find((m) => m.role === 'user');
  const t = first?.content?.trim() || 'Conversație';
  return t.length > 100 ? `${t.slice(0, 97)}…` : t;
}

@Injectable({
  providedIn: 'root'
})
export class AiChatHistoryService {
  private readonly auth = inject(AuthService);

  readonly revision = signal(0);

  private key(): string | null {
    const email = this.auth.currentUser()?.email;
    return email ? `${PREFIX}${email}` : null;
  }

  private normalizeRaw(raw: unknown): AiChatHistoryItem | null {
    if (!raw || typeof raw !== 'object') {
      return null;
    }
    const o = raw as Record<string, unknown>;
    if (typeof o['id'] !== 'string') {
      return null;
    }
    const at = typeof o['at'] === 'number' ? o['at'] : Date.now();
    if (Array.isArray(o['messages']) && o['messages'].length > 0) {
      const messages = (o['messages'] as unknown[])
        .map((m) => {
          if (!m || typeof m !== 'object') {
            return null;
          }
          const r = m as Record<string, unknown>;
          const role = r['role'] === 'assistant' ? 'assistant' : 'user';
          const content = typeof r['content'] === 'string' ? r['content'] : '';
          if (!content.trim()) {
            return null;
          }
          return { role: role as ChatRole, content };
        })
        .filter((x): x is ChatTurn => x !== null);
      if (messages.length === 0) {
        return null;
      }
      const title =
        typeof o['title'] === 'string' && o['title'].trim()
          ? String(o['title'])
          : extractTitle(messages);
      return { id: o['id'], at, title, messages };
    }
    if (typeof o['question'] === 'string' && typeof o['answer'] === 'string') {
      const q = o['question'].trim();
      const a = o['answer'].trim();
      if (!q) {
        return null;
      }
      return {
        id: o['id'],
        at,
        title: q.length > 100 ? `${q.slice(0, 97)}…` : q,
        messages: [
          { role: 'user', content: q },
          { role: 'assistant', content: a }
        ]
      };
    }
    return null;
  }

  load(): AiChatHistoryItem[] {
    const k = this.key();
    if (!k) {
      return [];
    }
    try {
      let raw = localStorage.getItem(k);
      let fromLegacy = false;
      const email = this.auth.currentUser()?.email;
      if (!raw && email) {
        const lk = `${LEGACY_PREFIX}${email}`;
        const legacy = localStorage.getItem(lk);
        if (legacy) {
          raw = legacy;
          fromLegacy = true;
          localStorage.removeItem(lk);
        }
      }
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) {
        return [];
      }
      const items = parsed
        .map((x) => this.normalizeRaw(x))
        .filter((x): x is AiChatHistoryItem => x !== null);
      if (fromLegacy && items.length) {
        localStorage.setItem(k, JSON.stringify(items));
      }
      return items;
    } catch {
      return [];
    }
  }

  /** Salvează sau actualizează conversația curentă (același id sesiune). */
  saveSession(sessionId: string, messages: ChatTurn[]): AiChatHistoryItem[] {
    const k = this.key();
    if (!k || !messages.length) {
      return this.load();
    }
    const title = extractTitle(messages);
    const item: AiChatHistoryItem = {
      id: sessionId,
      at: Date.now(),
      title,
      messages: messages.map((m) => ({ ...m }))
    };
    const prev = this.load();
    const idx = prev.findIndex((i) => i.id === sessionId);
    let next: AiChatHistoryItem[];
    if (idx >= 0) {
      next = [...prev];
      next[idx] = item;
    } else {
      next = [item, ...prev].slice(0, MAX_ITEMS);
    }
    localStorage.setItem(k, JSON.stringify(next));
    this.revision.update((r: number) => r + 1);
    return next;
  }

  clear(): void {
    const k = this.key();
    if (k) {
      localStorage.removeItem(k);
    }
    this.revision.update((r: number) => r + 1);
  }
}
