import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GhiduriComponent } from './pages/ghiduri/ghiduri.component';
import { InteractiuniComponent } from './pages/interactiuni/interactiuni.component';
import { NoutatiComponent } from './pages/noutati/noutati.component';
import { AnunturiComponent } from './pages/anunturi/anunturi.component';
import { SnapLearnComponent } from './pages/snap-learn/snap-learn.component';
import { TesteComponent } from './pages/teste/teste.component';
import { ComunitateComponent } from './pages/comunitate/comunitate.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { LegislationComponent } from './pages/legislation/legislation.component';
import { StudentsComponent } from './pages/students/students.component';
import { AiToolsComponent } from './pages/ai-tools/ai-tools.component';
import { RadiologyComponent } from './pages/radiology/radiology.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      /* Public: landing + legal fără cont */
      { path: 'dashboard', component: DashboardComponent, data: { fullBleed: true } },
      { path: 'ai-tools', component: AiToolsComponent, data: { fullBleed: true } },
      { path: 'legislation', component: LegislationComponent, data: { fullBleed: true } },
      /* Restul necesită autentificare */
      { path: 'students', component: StudentsComponent, data: { fullBleed: true }, canActivate: [authGuard] },
      { path: 'radiology', component: RadiologyComponent, data: { fullBleed: true }, canActivate: [authGuard] },
      { path: 'ghiduri', component: GhiduriComponent, canActivate: [authGuard] },
      { path: 'interactiuni', component: InteractiuniComponent, canActivate: [authGuard] },
      { path: 'noutati', component: NoutatiComponent, canActivate: [authGuard] },
      { path: 'anunturi', component: AnunturiComponent, canActivate: [authGuard] },
      { path: 'snap-learn', component: SnapLearnComponent, canActivate: [authGuard] },
      { path: 'teste', component: TesteComponent, canActivate: [authGuard] },
      { path: 'comunitate', component: ComunitateComponent, data: { fullBleed: true }, canActivate: [authGuard] },
      { path: 'mesaje', redirectTo: 'comunitate', pathMatch: 'full' },
      { path: 'profil', component: ProfilComponent, data: { fullBleed: true }, canActivate: [authGuard] },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];
