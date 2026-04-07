import { Component, OnInit, signal, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForumService, ForumPost, ForumComment } from '../../../services/forum.service';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent implements OnInit {
  private readonly forum = inject(ForumService);

  /** Single column (composer above feed) — folosit în pagina Comunitate lângă Mesaje. */
  stacked = input(false);

  loading = signal(false);
  posts = signal<ForumPost[]>([]);
  sort = signal<'recent' | 'popular'>('recent');

  title = signal('');
  content = signal('');
  creating = signal(false);

  openCommentsFor = signal<number | null>(null);
  comments = signal<Record<number, ForumComment[]>>({});
  commentDraft = signal<Record<number, string>>({});
  loadingComments = signal<Record<number, boolean>>({});
  submittingComment = signal<Record<number, boolean>>({});

  async ngOnInit(): Promise<void> {
    await this.loadPosts();
  }

  async loadPosts(): Promise<void> {
    this.loading.set(true);
    try {
      this.posts.set(await this.forum.listPosts(30, this.sort()));
    } finally {
      this.loading.set(false);
    }
  }

  setSort(s: 'recent' | 'popular'): void {
    if (this.sort() === s) return;
    this.sort.set(s);
    void this.loadPosts();
  }

  async create(): Promise<void> {
    const t = this.title().trim();
    const c = this.content().trim();
    if (!t || !c) return;

    this.creating.set(true);
    try {
      await this.forum.createPost(t, c);
      this.title.set('');
      this.content.set('');
      await this.loadPosts();
    } finally {
      this.creating.set(false);
    }
  }

  async toggleLike(p: ForumPost): Promise<void> {
    const res = await this.forum.toggleLike(p.id);
    this.posts.set(
      this.posts().map((x) =>
        x.id === p.id ? { ...x, likedByMe: res.liked, likeCount: res.likeCount } : x
      )
    );
  }

  async toggleComments(p: ForumPost): Promise<void> {
    const open = this.openCommentsFor();
    if (open === p.id) {
      this.openCommentsFor.set(null);
      return;
    }
    this.openCommentsFor.set(p.id);
    if (!this.comments()[p.id]) {
      await this.loadComments(p.id);
    }
  }

  private setMapFlag(map: Record<number, boolean>, key: number, value: boolean) {
    return { ...map, [key]: value };
  }

  async loadComments(postId: number): Promise<void> {
    this.loadingComments.set(this.setMapFlag(this.loadingComments(), postId, true));
    try {
      const list = await this.forum.listComments(postId, 100);
      this.comments.set({ ...this.comments(), [postId]: list });
    } finally {
      this.loadingComments.set(this.setMapFlag(this.loadingComments(), postId, false));
    }
  }

  draftFor(postId: number): string {
    return this.commentDraft()[postId] || '';
  }

  setDraft(postId: number, v: string): void {
    this.commentDraft.set({ ...this.commentDraft(), [postId]: v });
  }

  async addComment(postId: number): Promise<void> {
    const text = (this.commentDraft()[postId] || '').trim();
    if (!text) return;

    this.submittingComment.set(this.setMapFlag(this.submittingComment(), postId, true));
    try {
      const created = await this.forum.addComment(postId, text);
      this.setDraft(postId, '');
      const existing = this.comments()[postId] || [];
      this.comments.set({ ...this.comments(), [postId]: [...existing, created] });
      this.posts.set(
        this.posts().map((p) => (p.id === postId ? { ...p, commentCount: p.commentCount + 1 } : p))
      );
    } finally {
      this.submittingComment.set(this.setMapFlag(this.submittingComment(), postId, false));
    }
  }
}

