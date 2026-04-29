import { Component, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  error = signal<string | null>(null);
  loading = signal(false);

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.initFromStorage();
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  private messageForLoginError(err: unknown): string {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 0) {
        return 'Nu mă pot conecta la server. Pornește backend-ul și folosește același port ca în proxy (8083 pentru postgres, 8082 pentru dev).';
      }
      if (err.error && typeof err.error === 'object' && 'error' in err.error) {
        const e = (err.error as { error?: string }).error;
        if (e) return e;
      }
      if (err.status === 401) {
        return 'Credențiale invalide.';
      }
      if (err.status === 400) {
        return 'Date invalide (verifică formatul emailului).';
      }
    }
    return 'A apărut o eroare. Încercați din nou.';
  }

  async onSubmit(): Promise<void> {
    this.error.set(null);
    this.loading.set(true);
    try {
      await this.auth.login(this.email.trim(), this.password.trim());
      this.router.navigate(['/dashboard']);
    } catch (err: unknown) {
      this.error.set(this.messageForLoginError(err));
    } finally {
      this.loading.set(false);
    }
  }
}
