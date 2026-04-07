import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService, LoginResponse } from '../../services/auth.service';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MEDICAL_SPECIALTIES } from '../../data/medical-specialties';
import { formatPersonName } from '../../utils/person-name';

export type ProviderCategory = 'medic' | 'farmacist' | 'asistent_medical' | 'asistent_farmacist';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  firstName = '';
  lastName = '';
  phoneNumber = '';
  parafa = '';
  /** medic | farmacist | asistent_medical | asistent_farmacist */
  providerType: ProviderCategory = 'medic';
  medicGrade = 'specialist';
  specialty = '';
  academicTitles = '';

  readonly specialties = MEDICAL_SPECIALTIES;
  readonly medicGrades: { value: string; label: string }[] = [
    { value: 'rezident', label: 'Rezident' },
    { value: 'specialist', label: 'Specialist' },
    { value: 'primar', label: 'Medic primar' }
  ];

  error = '';
  loading = false;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.initFromStorage();
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  get showMedicFields(): boolean {
    return this.providerType === 'medic';
  }

  async onSubmit(): Promise<void> {
    this.error = '';
    if (this.showMedicFields) {
      if (!this.medicGrade) {
        this.error = 'Selectați gradul profesional.';
        return;
      }
      if (!this.specialty?.trim()) {
        this.error = 'Selectați specialitatea medicală.';
        return;
      }
    }
    if (!this.parafa?.trim()) {
      this.error = 'Introduceți parafa (obligatoriu).';
      return;
    }
    this.firstName = formatPersonName(this.firstName);
    this.lastName = formatPersonName(this.lastName);
    this.loading = true;
    try {
      const res = await firstValueFrom(
        this.http.post<LoginResponse>(`${environment.apiUrl}/api/auth/register`, {
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber?.trim() || null,
          parafa: this.parafa.trim(),
          providerType: this.providerType,
          medicGrade: this.showMedicFields ? this.medicGrade : null,
          specialty: this.showMedicFields ? this.specialty.trim() : null,
          academicTitles: this.academicTitles?.trim() || null
        })
      );
      this.auth.applySession(res);
      this.router.navigate(['/dashboard']);
    } catch (err: unknown) {
      const e = err as { error?: { error?: string } };
      this.error = e?.error?.error || 'A apărut o eroare. Încercați din nou.';
    } finally {
      this.loading = false;
    }
  }
}
