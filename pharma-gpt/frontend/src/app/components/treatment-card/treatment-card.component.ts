import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-treatment-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './treatment-card.component.html',
  styleUrl: './treatment-card.component.scss'
})
export class TreatmentCardComponent {
  treatments = [
    { name: 'RAMACE 10mg', substance: 'Ramipril' },
    { name: 'AMLODIX', substance: 'Amlodipină' },
    { name: 'Indapamidă', substance: '' }
  ];
}
