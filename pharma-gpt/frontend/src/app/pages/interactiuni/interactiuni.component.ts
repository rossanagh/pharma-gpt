import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interactiuni',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactiuni.component.html',
  styleUrl: './interactiuni.component.scss'
})
export class InteractiuniComponent {
  interactions = [
    { drug1: 'Ramipril', drug2: 'Potasiu', risk: 'Ridicat', note: 'Hiperkaliemie' },
    { drug1: 'Amlodipină', drug2: 'Simvastatină', risk: 'Moderat', note: 'Risc de miopatie' },
    { drug1: 'Indapamidă', drug2: 'Digoxină', risk: 'Moderat', note: 'Hipokaliemie' }
  ];
}
