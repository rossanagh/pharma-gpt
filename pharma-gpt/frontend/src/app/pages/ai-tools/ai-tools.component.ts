import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AiChatComponent } from '../../components/ai-chat/ai-chat.component';
import { PharmaNavComponent } from '../../components/pharma-nav/pharma-nav.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ai-tools',
  standalone: true,
  imports: [CommonModule, PharmaNavComponent, AiChatComponent],
  templateUrl: './ai-tools.component.html',
  styleUrl: './ai-tools.component.scss'
})
export class AiToolsComponent implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);

  @ViewChild(AiChatComponent) private aiChat?: AiChatComponent;

  ngAfterViewInit(): void {
    const q = this.route.snapshot.queryParamMap.get('q')?.trim();
    if (!q) {
      return;
    }
    queueMicrotask(() => {
      this.aiChat?.newChat();
      this.aiChat?.setQuestion(q);
      if (this.auth.isAuthenticated()) {
        void this.aiChat?.runAskFromHero();
      }
      void this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { q: null },
        queryParamsHandling: 'merge',
        replaceUrl: true
      });
    });
  }
}
