import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

type Step = 'request' | 'confirm';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  step = signal<Step>('request');
  loading = signal(false);
  error = signal<string>('');
  info = signal<string>('');

  target = '';
  code = '';
  newPassword = '';

  constructor(private router: Router) {}

  async requestCode(): Promise<void> {
    this.error.set('');
    this.info.set('');
    this.loading.set(true);
    try {
      const res = await fetch(`${environment.apiUrl}/api/auth/password-reset/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target: this.target })
      });
      // Always 200, but keep generic.
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      this.info.set('If an account exists, a code was sent. Check your email/SMS.');
      this.step.set('confirm');
    } catch (e) {
      this.error.set(e instanceof Error ? e.message : String(e));
    } finally {
      this.loading.set(false);
    }
  }

  async confirm(): Promise<void> {
    this.error.set('');
    this.info.set('');
    this.loading.set(true);
    try {
      const res = await fetch(`${environment.apiUrl}/api/auth/password-reset/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target: this.target, code: this.code, newPassword: this.newPassword })
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || `HTTP ${res.status}`);
      }
      this.info.set('Password updated. You can sign in now.');
      await new Promise((r) => setTimeout(r, 450));
      this.router.navigate(['/login']);
    } catch (e) {
      this.error.set(e instanceof Error ? e.message : String(e));
    } finally {
      this.loading.set(false);
    }
  }
}

