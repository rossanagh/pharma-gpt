import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

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

export type ForumPost = {
  id: number;
  createdAt: string;
  author: UserSummary | null;
  title: string;
  content: string;
  likeCount: number;
  likedByMe: boolean;
  commentCount: number;
};

export type ForumComment = {
  id: number;
  postId: number;
  createdAt: string;
  author: UserSummary | null;
  content: string;
};

export type LikeToggleResponse = {
  liked: boolean;
  likeCount: number;
};

@Injectable({ providedIn: 'root' })
export class ForumService {
  private readonly http = inject(HttpClient);

  async listPosts(limit = 20, sort: 'recent' | 'popular' = 'recent'): Promise<ForumPost[]> {
    return await firstValueFrom(
      this.http.get<ForumPost[]>(`${environment.apiUrl}/api/forum/posts`, {
        params: { limit: String(limit), sort }
      })
    );
  }

  async createPost(title: string, content: string): Promise<ForumPost> {
    return await firstValueFrom(
      this.http.post<ForumPost>(`${environment.apiUrl}/api/forum/posts`, { title, content })
    );
  }

  async toggleLike(postId: number): Promise<LikeToggleResponse> {
    return await firstValueFrom(
      this.http.post<LikeToggleResponse>(`${environment.apiUrl}/api/forum/posts/${postId}/like`, {})
    );
  }

  async listComments(postId: number, limit = 50): Promise<ForumComment[]> {
    return await firstValueFrom(
      this.http.get<ForumComment[]>(`${environment.apiUrl}/api/forum/posts/${postId}/comments`, {
        params: { limit: String(limit) }
      })
    );
  }

  async addComment(postId: number, content: string): Promise<ForumComment> {
    return await firstValueFrom(
      this.http.post<ForumComment>(`${environment.apiUrl}/api/forum/posts/${postId}/comments`, {
        content
      })
    );
  }
}

