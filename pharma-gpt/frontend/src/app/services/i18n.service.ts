import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export const I18N_LANGS = ['en', 'ro', 'de', 'fr', 'it', 'es'] as const;
export type I18nLang = (typeof I18N_LANGS)[number];

const STORAGE_KEY = 'pharma_gpt_lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly http = inject(HttpClient);

  readonly dict = signal<Record<string, string>>({});

  readonly lang = signal<I18nLang>(this.readStoredLang());

  /** Bootstrap: load dictionary before first paint */
  async init(): Promise<void> {
    await this.loadLang(this.lang());
  }

  private readStoredLang(): I18nLang {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s && (I18N_LANGS as readonly string[]).includes(s)) {
        return s as I18nLang;
      }
    } catch {
      /* ignore */
    }
    return 'en';
  }

  async setLang(code: I18nLang): Promise<void> {
    await this.loadLang(code);
  }

  private async loadLang(code: I18nLang): Promise<void> {
    const flat = await firstValueFrom(
      this.http.get<Record<string, string>>(`assets/i18n/${code}.json`)
    );
    this.dict.set(flat);
    this.lang.set(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
      document.documentElement.lang = code;
    } catch {
      /* ignore */
    }
  }

  t(key: string): string {
    return this.dict()[key] ?? key;
  }
}
