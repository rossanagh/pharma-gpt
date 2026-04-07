import { Component, OnDestroy, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectMessageService, Conversation, Message, UserSummary } from '../../services/direct-message.service';

@Component({
  selector: 'app-mesaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mesaje.component.html',
  styleUrl: './mesaje.component.scss'
})
export class MesajeComponent implements OnInit, OnDestroy {
  private readonly dm = inject(DirectMessageService);

  conversations = signal<Conversation[]>([]);
  selected = signal<Conversation | null>(null);
  messages = signal<Message[]>([]);

  loadingConversations = signal(false);
  loadingMessages = signal(false);
  sending = signal(false);

  searchQuery = signal('');
  searchResults = signal<UserSummary[]>([]);
  searching = signal(false);

  draft = signal('');

  peerName = computed(() => {
    const c = this.selected();
    if (!c?.peer) return '';
    const name = `${c.peer.firstName} ${c.peer.lastName}`.trim();
    const type = (c.peer.providerType || '').trim();
    return type ? `${name} (${type})` : name;
  });

  private unsubscribeSse: (() => void) | null = null;
  private convPoll: ReturnType<typeof setInterval> | null = null;

  async ngOnInit(): Promise<void> {
    await this.refreshConversations();
    this.convPoll = setInterval(() => void this.refreshConversations(), 45_000);
    this.unsubscribeSse = this.dm.subscribeRealtime((msg) => {
      const sel = this.selected();
      if (sel && msg.conversationId === sel.id) {
        this.messages.set([...this.messages(), msg]);
      }
      void this.refreshConversations();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeSse?.();
    if (this.convPoll !== null) {
      clearInterval(this.convPoll);
      this.convPoll = null;
    }
  }

  async refreshConversations(): Promise<void> {
    this.loadingConversations.set(true);
    try {
      const list = await this.dm.listConversations();
      this.conversations.set(list);
      const sel = this.selected();
      if (sel) {
        const updated = list.find((c) => c.id === sel.id) ?? null;
        if (updated) this.selected.set(updated);
      }
    } finally {
      this.loadingConversations.set(false);
    }
  }

  async openConversation(c: Conversation): Promise<void> {
    this.selected.set(c);
    await this.loadMessages();
  }

  async loadMessages(): Promise<void> {
    const c = this.selected();
    if (!c) return;
    this.loadingMessages.set(true);
    try {
      const msgs = await this.dm.listMessages(c.id);
      this.messages.set(msgs);
    } finally {
      this.loadingMessages.set(false);
    }
  }

  async onSearchChange(): Promise<void> {
    const q = this.searchQuery().trim();
    if (q.length < 1) {
      this.searchResults.set([]);
      return;
    }
    this.searching.set(true);
    try {
      const res = await this.dm.searchUsers(q);
      this.searchResults.set(res);
    } finally {
      this.searching.set(false);
    }
  }

  async startConversationWith(u: UserSummary): Promise<void> {
    // Sending first message will create conversation, but we want the thread UI ready.
    // We do: refresh conversations after a tiny no-op send is avoided; instead, select peer and wait for first send.
    this.searchQuery.set('');
    this.searchResults.set([]);

    const placeholder: Conversation = {
      id: -1,
      lastMessageAt: null,
      peer: u,
      lastMessage: null
    };
    this.selected.set(placeholder);
    this.messages.set([]);
  }

  async send(): Promise<void> {
    const sel = this.selected();
    const text = this.draft().trim();
    if (!sel?.peer || !text) return;

    this.sending.set(true);
    try {
      const msg = await this.dm.sendMessage(sel.peer.id, text);
      this.draft.set('');

      // If this was a placeholder conversation, refresh and select the real one.
      if (sel.id === -1) {
        await this.refreshConversations();
        const conv = this.conversations().find((c) => c.id === msg.conversationId);
        if (conv) this.selected.set(conv);
      }

      if (this.selected() && msg.conversationId === this.selected()!.id) {
        this.messages.set([...this.messages(), msg]);
      }
    } finally {
      this.sending.set(false);
    }
  }
}

