import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PharmaNavComponent } from '../../components/pharma-nav/pharma-nav.component';

@Component({
  selector: 'app-legislation',
  standalone: true,
  imports: [RouterLink, PharmaNavComponent],
  templateUrl: './legislation.component.html',
  styleUrl: './legislation.component.scss'
})
export class LegislationComponent {
  /** Update when legal text is revised. */
  readonly lastUpdatedLabel = '1 April 2026';
}
