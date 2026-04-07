import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { AvatarService } from '../../services/avatar.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  menuItems = [
    { label: 'AI Tools', route: '/ai-tools' },
    { label: 'Snap & Learn', route: '/snap-learn' },
    { label: 'Teste', route: '/teste' },
    { label: 'Comunitate', route: '/comunitate' }
  ];

  constructor(
    public auth: AuthService,
    public avatar: AvatarService
  ) {}

  async ngOnInit(): Promise<void> {
    void this.avatar.refresh();
  }

  logout(): void {
    this.auth.logout();
    this.avatar.clear();
  }
}
