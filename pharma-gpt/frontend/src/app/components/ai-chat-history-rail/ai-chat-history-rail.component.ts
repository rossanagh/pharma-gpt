import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { AiChatCoordinatorService } from '../../services/ai-chat-coordinator.service';
import {
  AiChatHistoryItem,
  AiChatHistoryService
} from '../../services/ai-chat-history.service';

@Component({
  selector: 'app-ai-chat-history-rail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-chat-history-rail.component.html',
  styleUrl: './ai-chat-history-rail.component.scss'
})
export class AiChatHistoryRailComponent {
  readonly auth = inject(AuthService);
  private readonly historyService = inject(AiChatHistoryService);
  private readonly coordinator = inject(AiChatCoordinatorService);

  readonly items = signal<AiChatHistoryItem[]>([]);
  /** true = doar tab expand (implicit). */
  readonly collapsed = signal(true);

  constructor() {
    effect(() => {
      this.auth.isAuthenticated();
      this.historyService.revision();
      if (!this.auth.isAuthenticated()) {
        this.items.set([]);
        return;
      }
      this.items.set(this.historyService.load());
    });
  }

  pick(item: AiChatHistoryItem): void {
    this.coordinator.emitHistoryPick(item);
  }
}
