import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentCardComponent } from '../../components/treatment-card/treatment-card.component';

@Component({
  selector: 'app-ghiduri',
  standalone: true,
  imports: [CommonModule, TreatmentCardComponent],
  templateUrl: './ghiduri.component.html',
  styleUrl: './ghiduri.component.scss'
})
export class GhiduriComponent {}
