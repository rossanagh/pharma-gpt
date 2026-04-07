import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { firstValueFrom, tap } from 'rxjs';
import type { AppUser } from '../models/user.model';
import { formatHeaderDisplayName } from '../utils/user-display';
import { PresenceService } from './presence.service';

export type User = AppUser;

export interface LoginResponse {
  token: string;
  fullName: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  providerType: string | null;
  medicGrade: string | null;
  specialty: string | null;
  academicTitles: string | null;
  parafa: string | null;
}

const TOKEN_KEY = 'pharma_gpt_token';
const USER_KEY = 'pharma_gpt_user';

export function mapLoginResponseToUser(res: LoginResponse): User {
  return {
    fullName: res.fullName,
    email: res.email,
    firstName: res.firstName,
    lastName: res.lastName,
    providerType: res.providerType != null ? String(res.providerType).trim() : null,
    medicGrade: res.medicGrade,
    specialty: res.specialty,
    academicTitles: res.academicTitles,
    parafa: res.parafa
  };
}

/** Răspuns /api/users/me — aliniază prefixul Dr. / Pharmacist în header după refresh */
export interface UserProfileApi {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  parafa: string | null;
  providerType: string | null;
  medicGrade: string | null;
  specialty: string | null;
  academicTitles: string | null;
  hasAvatar: boolean;
}

export function mapProfileApiToUser(p: UserProfileApi): User {
  const fullName = `${p.firstName} ${p.lastName}`.trim();
  return {
    fullName,
    email: p.email,
    firstName: p.firstName,
    lastName: p.lastName,
    providerType: p.providerType != null ? String(p.providerType).trim() : null,
    medicGrade: p.medicGrade,
    specialty: p.specialty,
    academicTitles: p.academicTitles,
    parafa: p.parafa
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly token = signal<string | null>(this.getStoredToken());
  private readonly user = signal<User | null>(this.getStoredUser());

  readonly isAuthenticated = computed(() => !!this.token());
  readonly currentUser = computed(() => this.user());
  /** Text pentru pharma-nav / navbar: prefix + prenume + nume */
  readonly headerDisplayName = computed(() => {
    const u = this.user();
    if (!u) return '';
    return formatHeaderDisplayName(u);
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private presence: PresenceService
  ) {}

  getToken(): string | null {
    return this.token();
  }

  private getStoredToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  private getStoredUser(): User | null {
    const stored = localStorage.getItem(USER_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  async login(email: string, password: string): Promise<void> {
    await firstValueFrom(
      this.http.post<LoginResponse>(`${environment.apiUrl}/api/auth/login`, {
        email,
        password
      }).pipe(
        tap((res) => {
          const u = mapLoginResponseToUser(res);
          localStorage.setItem(TOKEN_KEY, res.token);
          localStorage.setItem(USER_KEY, JSON.stringify(u));
          this.token.set(res.token);
          this.user.set(u);
          this.presence.start();
        })
      )
    );
    await this.hydrateUserFromProfile();
  }

  logout(): void {
    this.presence.stop();
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.token.set(null);
    this.user.set(null);
    this.router.navigate(['/login']);
  }

  setCurrentUser(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.user.set(user);
  }

  initFromStorage(): void {
    const token = this.getStoredToken();
    const user = this.getStoredUser();
    this.token.set(token);
    this.user.set(user);
    if (token) {
      this.presence.start();
    } else {
      this.presence.stop();
    }
  }

  /** După register — aceeași structură ca login */
  applySession(res: LoginResponse): void {
    const u = mapLoginResponseToUser(res);
    localStorage.setItem(TOKEN_KEY, res.token);
    localStorage.setItem(USER_KEY, JSON.stringify(u));
    this.token.set(res.token);
    this.user.set(u);
    this.presence.start();
    void this.hydrateUserFromProfile();
  }

  /**
   * Completează providerType, parafa etc. din API (sesiuni vechi doar fullName+email în localStorage).
   * Apelat la pornirea app-ului când există token.
   */
  async hydrateUserFromProfile(): Promise<void> {
    const token = this.getStoredToken();
    if (!token) {
      return;
    }
    try {
      const p = await firstValueFrom(
        this.http.get<UserProfileApi>(`${environment.apiUrl}/api/users/me`)
      );
      const u = mapProfileApiToUser(p);
      localStorage.setItem(USER_KEY, JSON.stringify(u));
      this.user.set(u);
    } catch {
      /* 401 / offline — păstrăm userul din storage */
    }
  }
}
