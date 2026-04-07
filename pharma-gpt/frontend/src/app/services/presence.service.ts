import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

const PING_INTERVAL_MS = 25_000;

@Injectable({ providedIn: 'root' })
export class PresenceService {
  private readonly http = inject(HttpClient);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  start(): void {
    if (this.intervalId !== null) return;
    void this.ping();
    this.intervalId = setInterval(() => void this.ping(), PING_INTERVAL_MS);
  }

  stop(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private async ping(): Promise<void> {
    try {
      await firstValueFrom(this.http.post<{ ok: boolean }>(`${environment.apiUrl}/api/presence/ping`, {}));
    } catch {
      /* offline / 401 */
    }
  }
}
