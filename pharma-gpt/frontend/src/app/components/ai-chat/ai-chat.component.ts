import {
  Component,
  effect,
  ElementRef,
  HostBinding,
  inject,
  input,
  output,
  signal,
  viewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AiService } from '../../services/ai.service';
import { AuthService } from '../../services/auth.service';
import { AiChatCoordinatorService } from '../../services/ai-chat-coordinator.service';
import {
  AiChatHistoryItem,
  AiChatHistoryService,
  ChatTurn
} from '../../services/ai-chat-history.service';

function newSessionId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.scss'
})
export class AiChatComponent {
  private readonly aiService = inject(AiService);
  private readonly historyService = inject(AiChatHistoryService);
  private readonly coordinator = inject(AiChatCoordinatorService);
  private readonly router = inject(Router);

  readonly auth = inject(AuthService);

  readonly embedInHero = input(false, { alias: 'embedInHero' });
  /** Sugestii (chips) sub input pe dashboard — doar când embedInHero. */
  readonly embedSuggestions = input<string[]>([], { alias: 'embedSuggestions' });
  readonly workspaceLayout = input(false, { alias: 'workspaceLayout' });

  @HostBinding('class.ai-chat-host-workspace')
  get hostWorkspaceClass(): boolean {
    return this.workspaceLayout();
  }

  readonly questionChange = output<string>();

  private readonly workspaceMessagesEl = viewChild<ElementRef<HTMLElement>>('workspaceMessages');

  /** Conversația curentă (toate mesajele din sesiune). */
  readonly threadMessages = signal<ChatTurn[]>([]);

  readonly sessionId = signal<string>(newSessionId());

  question = '';

  loading = signal(false);
  error = signal<string | null>(null);

  readonly historyItems = signal<AiChatHistoryItem[]>([]);
  readonly historyCollapsed = signal(false);
  readonly showAuthModal = signal(false);

  /** Called by parent (ex. landing search) to pre-fill the question field. */
  setQuestion(q: string): void {
    this.question = q;
  }

  constructor() {
    effect(() => {
      if (this.auth.isAuthenticated()) {
        this.showAuthModal.set(false);
      }
      if (this.workspaceLayout()) {
        this.historyCollapsed.set(false);
      }
      if (this.embedInHero()) {
        return;
      }
      if (this.auth.isAuthenticated()) {
        this.historyItems.set(this.historyService.load());
      } else {
        this.historyItems.set([]);
      }
    });

    effect(() => {
      const item = this.coordinator.pendingHistoryPick();
      if (!item) {
        return;
      }
      this.sessionId.set(item.id);
      this.threadMessages.set(item.messages.map((m) => ({ ...m })));
      this.question = '';
      this.error.set(null);
      this.loading.set(false);
      this.questionChange.emit(item.title);
      this.coordinator.clearHistoryPick();
      queueMicrotask(() => this.scrollBoth());
    });

    effect(() => {
      void this.threadMessages();
      void this.loading();
      void this.error();
      queueMicrotask(() => this.scrollBoth());
    });
  }

  private scrollBoth(): void {
    this.scrollEl(this.workspaceMessagesEl()?.nativeElement);
  }

  private scrollEl(el: HTMLElement | undefined): void {
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }

  newChat(): void {
    this.sessionId.set(newSessionId());
    this.threadMessages.set([]);
    this.question = '';
    this.error.set(null);
    this.loading.set(false);
    this.questionChange.emit('');
  }

  openLoginPrompt(): void {
    this.showAuthModal.set(true);
  }

  closeAuthModal(): void {
    this.showAuthModal.set(false);
  }

  selectHistory(item: AiChatHistoryItem): void {
    this.sessionId.set(item.id);
    this.threadMessages.set(item.messages.map((m) => ({ ...m })));
    this.question = '';
    this.error.set(null);
    this.loading.set(false);
    this.questionChange.emit(item.title);
    queueMicrotask(() => this.scrollBoth());
  }

  async onSubmit(): Promise<void> {
    if (this.embedInHero()) {
      await this.submitEmbedGoToAiTools();
      return;
    }
    await this.runAsk();
  }

  /** Dashboard: nu rulează API aici — deschide AI Tools cu întrebarea, ca sesiune nouă. */
  private async submitEmbedGoToAiTools(): Promise<void> {
    if (!this.auth.isAuthenticated()) {
      this.openLoginPrompt();
      return;
    }
    const q = this.question.trim();
    if (!q) {
      return;
    }
    this.question = '';
    await this.router.navigate(['/ai-tools'], { queryParams: { q } });
  }

  async runAskFromHero(): Promise<void> {
    await this.runAsk();
  }

  private async runAsk(): Promise<void> {
    if (!this.auth.isAuthenticated()) {
      this.openLoginPrompt();
      return;
    }

    const q = this.question.trim();
    if (!q) {
      return;
    }

    const prior = this.threadMessages();
    const historyForApi: Array<{ role: 'user' | 'assistant'; content: string }> = prior.map((m) => ({
      role: m.role,
      content: m.content
    }));

    this.threadMessages.set([...prior, { role: 'user', content: q }]);
    this.question = '';
    this.loading.set(true);
    this.error.set(null);

    try {
      const result = await this.aiService.askQuestion(q, historyForApi);
      this.threadMessages.update((t) => [...t, { role: 'assistant', content: result.response }]);
      this.historyItems.set(this.historyService.saveSession(this.sessionId(), this.threadMessages()));
    } catch (err) {
      this.error.set(err instanceof Error ? err.message : 'A apărut o eroare. Încercați din nou.');
      this.threadMessages.set(prior);
    } finally {
      this.loading.set(false);
      queueMicrotask(() => this.scrollBoth());
    }
  }
}
