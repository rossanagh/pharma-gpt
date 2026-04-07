import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaNavComponent } from '../../components/pharma-nav/pharma-nav.component';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, timeout } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

type Profile = {
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
};

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, PharmaNavComponent],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent implements OnInit {
  private readonly http = inject(HttpClient);
  readonly auth = inject(AuthService);

  readonly loading = signal(true);
  readonly error = signal('');
  readonly profile = signal<Profile | null>(null);

  ngOnInit(): void {
    void this.load();
  }

  async load(): Promise<void> {
    this.error.set('');
    this.loading.set(true);
    try {
      const p = await firstValueFrom(
        this.http.get<Profile>(`${environment.apiUrl}/api/users/me`).pipe(timeout(8000))
      );
      this.profile.set(p);
    } catch {
      this.error.set('Could not load profile. Check that you are signed in and the server is running.');
      this.profile.set(null);
    } finally {
      this.loading.set(false);
    }
  }

  providerLabel(code: string | null): string {
    if (!code) return '—';
    const map: Record<string, string> = {
      medic: 'Medic',
      farmacist: 'Farmacist',
      asistent_medical: 'Asistent medical',
      asistent_farmacist: 'Asistent farmacist',
      veterinar: 'Veterinarian',
      asistent: 'Asistent',
      altul: 'Altul'
    };
    return map[code] ?? code;
  }

  medicGradeLabel(code: string | null): string {
    if (!code) return '—';
    const map: Record<string, string> = {
      rezident: 'Rezident',
      specialist: 'Specialist',
      primar: 'Medic primar'
    };
    return map[code] ?? code;
  }
}
