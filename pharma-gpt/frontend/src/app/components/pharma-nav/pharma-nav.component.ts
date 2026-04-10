import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { I18nService, I18N_LANGS, type I18nLang } from '../../services/i18n.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-pharma-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe, UpperCasePipe],
  templateUrl: './pharma-nav.component.html',
  styleUrl: './pharma-nav.component.scss'
})
export class PharmaNavComponent {
  readonly auth = inject(AuthService);
  readonly i18n = inject(I18nService);

  readonly langs = I18N_LANGS;

  onLangChange(ev: Event): void {
    const v = (ev.target as HTMLSelectElement).value as I18nLang;
    if ((I18N_LANGS as readonly string[]).includes(v)) {
      void this.i18n.setLang(v);
    }
  }
}
