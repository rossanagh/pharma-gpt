import { Injectable, signal } from '@angular/core';
import type { AiChatHistoryItem } from './ai-chat-history.service';

/**
 * Sincronizează selecția din rail-ul de istoric (stânga) cu {@link AiChatComponent}.
 */
@Injectable({
  providedIn: 'root'
})
export class AiChatCoordinatorService {
  readonly pendingHistoryPick = signal<AiChatHistoryItem | null>(null);

  emitHistoryPick(item: AiChatHistoryItem): void {
    this.pendingHistoryPick.set(item);
  }

  clearHistoryPick(): void {
    this.pendingHistoryPick.set(null);
  }
}
