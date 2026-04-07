import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anunturi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anunturi.component.html',
  styleUrl: './anunturi.component.scss'
})
export class AnunturiComponent {
  jobs = [
    { title: 'Medic Specialist Cardiologie', company: 'Spitalul Municipal', location: 'București', date: '22 Mar 2025' },
    { title: 'Farmacist Senior', company: 'Catena', location: 'Cluj-Napoca', date: '20 Mar 2025' },
    { title: 'Cercetător Farmacologie', company: 'Institutul de Cercetări Farmaceutice', location: 'Iași', date: '18 Mar 2025' }
  ];
}
