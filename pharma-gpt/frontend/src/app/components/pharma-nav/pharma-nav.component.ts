import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pharma-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './pharma-nav.component.html',
  styleUrl: './pharma-nav.component.scss'
})
export class PharmaNavComponent {
  readonly auth = inject(AuthService);
}
