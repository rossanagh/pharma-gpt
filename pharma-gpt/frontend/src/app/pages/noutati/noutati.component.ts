import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { compareNewsByPublishedDesc, formatNewsDateRo } from '../../utils/news-date';

type NewsApiItem = {
  source: string;
  title: string;
  url: string;
  publishedAt: string;
  /** Text afișat de pe sursă; opțional */
  dateDisplay?: string | null;
};

@Component({
  selector: 'app-noutati',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './noutati.component.html',
  styleUrl: './noutati.component.scss'
})
export class NoutatiComponent implements OnInit, OnDestroy {
  private readonly http = inject(HttpClient);

  loading = false;
  refreshing = false;
  /** După refresh: polling discret până apar știri noi în DB */
  backgroundSync = false;
  private pollCancelled = false;

  error = '';

  news: Array<{ title: string; excerpt: string; date: string; source: string; url: string }> = [];

  readonly skeletonPlaceholders = [1, 2, 3, 4];

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  ngOnDestroy(): void {
    this.pollCancelled = true;
  }

  private sortByPublishedDesc(items: NewsApiItem[]): NewsApiItem[] {
    return [...items].sort(compareNewsByPublishedDesc);
  }

  private async fetchItems(): Promise<NewsApiItem[]> {
    return await firstValueFrom(
      this.http.get<NewsApiItem[]>(`${environment.apiUrl}/api/news`)
    );
  }

  private mapFromApi(items: NewsApiItem[]): void {
    const sorted = this.sortByPublishedDesc(items);
    this.news = sorted.map((i) => ({
      title: i.title,
      excerpt: '',
      date: i.dateDisplay?.trim() || formatNewsDateRo(i.publishedAt),
      source: i.source,
      url: i.url
    }));
  }

  async load(): Promise<void> {
    this.loading = true;
    this.error = '';
    try {
      const items = await this.fetchItems();
      this.mapFromApi(items);
    } catch {
      this.error =
        'Nu am putut încărca știrile. Verifică dacă backend-ul rulează (ex. port 8082) și că folosești „ng serve” cu proxy pentru /api.';
    } finally {
      this.loading = false;
    }
  }

  async refreshFeed(): Promise<void> {
    this.refreshing = true;
    this.error = '';
    try {
      await firstValueFrom(this.http.post(`${environment.apiUrl}/api/news/refresh`, {}));
      await this.applyFetched();
    } catch {
      this.error = 'Nu am putut reîmprospăta știrile. Încearcă din nou.';
    } finally {
      this.refreshing = false;
    }
    void this.pollForNewItemsAfterRefresh();
  }

  /** Încarcă lista fără skeleton (pentru polling după refresh). */
  private async applyFetched(): Promise<void> {
    const items = await this.fetchItems();
    this.mapFromApi(items);
  }

  /**
   * Backend-ul răspunde instant; scanarea e în fundal — reîmprospătăm lista la câteva secunde
   * până apar intrări noi sau expiră intervalul.
   */
  private async pollForNewItemsAfterRefresh(): Promise<void> {
    if (this.pollCancelled) {
      return;
    }
    const urlsBefore = new Set(this.news.map((n) => n.url));
    const countBefore = this.news.length;
    this.backgroundSync = true;
    try {
      for (let i = 0; i < 30 && !this.pollCancelled; i++) {
        await new Promise((r) => setTimeout(r, 3000));
        if (this.pollCancelled) {
          break;
        }
        try {
          const raw = await this.fetchItems();
          const sorted = this.sortByPublishedDesc(raw);
          const hasNewUrl = sorted.some((x) => !urlsBefore.has(x.url));
          const countUp = sorted.length > countBefore;
          this.mapFromApi(raw);
          if (hasNewUrl || countUp) {
            break;
          }
        } catch {
          break;
        }
      }
    } finally {
      this.backgroundSync = false;
    }
  }
}
