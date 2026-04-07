import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    { label: 'Acasă', route: '/dashboard', icon: 'home', active: true },
    { label: 'AI Tools', route: '/ai-tools', icon: 'sparkles' },
    { label: 'Ghiduri Medicale', route: '/ghiduri', icon: 'book' },
    { label: 'Interacțiuni Medicamente', route: '/interactiuni', icon: 'pill' },
    { label: 'Noutăți', route: '/noutati', icon: 'news' },
    { label: 'Anunțuri', route: '/anunturi', icon: 'briefcase' }
  ];
}
