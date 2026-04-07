import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  title = input.required<string>();
  excerpt = input<string>('');
  date = input<string>('');
  imageUrl = input<string | null>(null);
  source = input<string>('');
  url = input<string>('');
  /** Dark glass style for home lateral rail */
  rail = input(false);
}
