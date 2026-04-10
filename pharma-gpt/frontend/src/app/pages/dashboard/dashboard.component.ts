import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  computed,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { compareNewsByPublishedDesc, formatNewsDateRo } from '../../utils/news-date';
import { AiChatComponent } from '../../components/ai-chat/ai-chat.component';
import { PharmaNavComponent } from '../../components/pharma-nav/pharma-nav.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { I18nService } from '../../services/i18n.service';

type StatRow = {
  target: number;
  decimals: number;
  suffix: string;
  labelKey: string;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AiChatComponent,
    PharmaNavComponent,
    NewsCardComponent,
    TranslatePipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly i18n = inject(I18nService);
  @ViewChild('statsBar', { read: ElementRef }) private statsBar?: ElementRef<HTMLElement>;

  /** Home sidebar: latest headlines (max 5) */
  homeNews: Array<{ title: string; excerpt: string; date: string; source: string; url: string }> = [];
  homeNewsLoading = true;
  homeNewsError = false;

  /** Landing stats: count-up targets + i18n label keys */
  readonly statRows: readonly StatRow[] = [
    { target: 14, decimals: 0, suffix: 'K+', labelKey: 'dashboard.stat0' },
    { target: 3, decimals: 0, suffix: 'M+', labelKey: 'dashboard.stat1' },
    { target: 850, decimals: 0, suffix: '+', labelKey: 'dashboard.stat2' },
    { target: 99.2, decimals: 1, suffix: '%', labelKey: 'dashboard.stat3' }
  ];

  readonly statDisplay = signal<number[]>([0, 0, 0, 0]);
  readonly statsEntered = signal(false);

  private statsObserver?: IntersectionObserver;
  private statsAnimated = false;
  private revealObserver?: IntersectionObserver;

  private static readonly SUGGESTION_KEYS = [
    'dashboard.sug0',
    'dashboard.sug1',
    'dashboard.sug2',
    'dashboard.sug3',
    'dashboard.sug4',
    'dashboard.sug5'
  ] as const;

  /** Exactly 6 suggestion chips — text follows UI language */
  readonly embedSuggestionLabels = computed(() => {
    this.i18n.dict();
    return DashboardComponent.SUGGESTION_KEYS.map((k) => this.i18n.t(k));
  });

  async ngOnInit(): Promise<void> {
    await this.loadHomeNews();
  }

  private sortNewsByPublishedDesc<T extends { publishedAt: string }>(items: T[]): T[] {
    return [...items].sort(compareNewsByPublishedDesc);
  }

  private async loadHomeNews(): Promise<void> {
    this.homeNewsLoading = true;
    this.homeNewsError = false;
    try {
      const items = await firstValueFrom(
        this.http.get<
          Array<{
            source: string;
            title: string;
            url: string;
            publishedAt: string;
            dateDisplay?: string | null;
          }>
        >(`${environment.apiUrl}/api/news`)
      );
      const sorted = this.sortNewsByPublishedDesc(items);
      this.homeNews = sorted.map((i) => ({
        title: i.title,
        excerpt: '',
        date: i.dateDisplay?.trim() || formatNewsDateRo(i.publishedAt),
        source: i.source,
        url: i.url
      }));
    } catch {
      this.homeNewsError = true;
    } finally {
      this.homeNewsLoading = false;
    }
    this.cdr.detectChanges();
    this.scheduleNewsRailPaintFix();
  }

  /**
   * Workaround: în unele browsere zona cu overflow nu desenează cardurile până la un scroll.
   * Micro-scroll programatic (0→1px→0) pe container și pe fereastră forțează repaint-ul.
   */
  private scheduleNewsRailPaintFix(): void {
    const run = () => this.microScrollNewsRailFix();
    queueMicrotask(run);
    setTimeout(run, 0);
    setTimeout(run, 50);
    setTimeout(run, 200);
    requestAnimationFrame(() => requestAnimationFrame(run));
  }

  private microScrollNewsRailFix(): void {
    const inner = document.querySelector('.pharma-landing .home-news-inner');
    if (inner instanceof HTMLElement) {
      const t = inner.scrollTop;
      inner.scrollTop = t + 1;
      inner.scrollTop = t;
    }
    const list = document.querySelector('.pharma-landing .home-news-list');
    if (list instanceof HTMLElement) {
      void list.offsetHeight;
    }
    const y = window.scrollY;
    window.scrollTo({ top: y + 1, left: 0, behavior: 'auto' });
    window.scrollTo({ top: y, left: 0, behavior: 'auto' });
  }

  ngAfterViewInit(): void {
    this.initScrollReveals();

    const el = this.statsBar?.nativeElement;
    if (!el) {
      return;
    }
    this.statsObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            this.runStatAnimations();
            this.statsObserver?.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );
    this.statsObserver.observe(el);
  }

  /** Secțiuni cu clasa js-reveal: intrare la scroll */
  private initScrollReveals(): void {
    queueMicrotask(() => {
      const nodes = document.querySelectorAll('.pharma-landing .js-reveal');
      if (!nodes.length) {
        return;
      }
      this.revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }
            entry.target.classList.add('reveal--visible');
            this.revealObserver?.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
      );
      nodes.forEach((n) => this.revealObserver!.observe(n));
    });
  }

  ngOnDestroy(): void {
    this.statsObserver?.disconnect();
    this.revealObserver?.disconnect();
  }

  statInt(i: number): number {
    return Math.round(this.statDisplay()[i]);
  }

  /** Fourth stat: split so integer vs `.x%` matches original styling */
  statSplitPercent(i: number): { main: string; rest: string } {
    const v = this.statDisplay()[i];
    const s = v.toFixed(1);
    const dot = s.indexOf('.');
    if (dot === -1) {
      return { main: s, rest: '%' };
    }
    return { main: s.slice(0, dot), rest: `${s.slice(dot)}%` };
  }

  private runStatAnimations(): void {
    if (this.statsAnimated) {
      return;
    }
    this.statsAnimated = true;

    const reduced =
      typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      this.statDisplay.set(this.statRows.map((c) => c.target));
      this.statsEntered.set(true);
      return;
    }

    this.statsEntered.set(true);

    const duration = 1650;
    const staggerMs = 110;
    const base = performance.now();

    this.statRows.forEach((cfg, i) => {
      const startAt = base + i * staggerMs;
      const from = 0;
      const to = cfg.target;

      const step = (now: number): void => {
        if (now < startAt) {
          requestAnimationFrame(step);
          return;
        }
        const elapsed = now - startAt;
        const t = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const raw = from + (to - from) * eased;
        const val = t >= 1 ? to : cfg.decimals ? Math.round(raw * 10) / 10 : Math.round(raw);

        this.statDisplay.update((arr) => {
          const next = [...arr];
          next[i] = val;
          return next;
        });

        if (t < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    });
  }
}
