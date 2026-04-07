import { Injectable, OnDestroy, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, timeout } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AvatarService implements OnDestroy {
  private objectUrl: string | null = null;
  readonly avatarUrl = signal<string>('');

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  ngOnDestroy(): void {
    this.revoke();
  }

  private revoke(): void {
    if (this.objectUrl) {
      URL.revokeObjectURL(this.objectUrl);
      this.objectUrl = null;
    }
  }

  clear(): void {
    this.revoke();
    this.avatarUrl.set('');
  }

  async refresh(): Promise<void> {
    this.revoke();
    if (!this.auth.isAuthenticated()) {
      this.avatarUrl.set('');
      return;
    }
    try {
      const blob = await firstValueFrom(
        this.http.get(`${environment.apiUrl}/api/users/me/avatar`, { responseType: 'blob' }).pipe(timeout(4000))
      );
      this.objectUrl = URL.createObjectURL(blob);
      this.avatarUrl.set(this.objectUrl);
    } catch {
      this.avatarUrl.set('');
    }
  }
}

