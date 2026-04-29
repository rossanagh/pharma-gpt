import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaNavComponent } from '../../components/pharma-nav/pharma-nav.component';
import { MarkdownPipe } from '../../pipes/markdown.pipe';
import { RadiologyService } from '../../services/radiology.service';

type UploadState = 'idle' | 'uploading' | 'done' | 'error';

@Component({
  selector: 'app-radiology',
  standalone: true,
  imports: [CommonModule, PharmaNavComponent, MarkdownPipe],
  templateUrl: './radiology.component.html',
  styleUrl: './radiology.component.scss'
})
export class RadiologyComponent {
  private readonly radiology = inject(RadiologyService);

  readonly file = signal<File | null>(null);
  readonly previewUrl = signal<string | null>(null);
  readonly state = signal<UploadState>('idle');
  readonly result = signal<string>('');
  readonly error = signal<string>('');

  readonly canAnalyze = computed(() => this.file() != null && this.state() !== 'uploading');

  onPickFile(ev: Event): void {
    const input = ev.target as HTMLInputElement;
    const f = input.files?.[0] ?? null;
    this.setFile(f);
    input.value = '';
  }

  onDrop(ev: DragEvent): void {
    ev.preventDefault();
    const f = ev.dataTransfer?.files?.[0] ?? null;
    this.setFile(f);
  }

  onDragOver(ev: DragEvent): void {
    ev.preventDefault();
  }

  clear(): void {
    this.file.set(null);
    const prev = this.previewUrl();
    if (prev) URL.revokeObjectURL(prev);
    this.previewUrl.set(null);
    this.result.set('');
    this.error.set('');
    this.state.set('idle');
  }

  async analyze(): Promise<void> {
    const f = this.file();
    if (!f) return;
    this.state.set('uploading');
    this.error.set('');
    this.result.set('');
    try {
      const res = await this.radiology.analyze(f);
      this.result.set(res.reportMarkdown);
      this.state.set('done');
    } catch (e) {
      this.state.set('error');
      this.error.set(e instanceof Error ? e.message : String(e));
    }
  }

  private setFile(f: File | null): void {
    this.result.set('');
    this.error.set('');
    this.state.set('idle');

    if (!f) {
      this.file.set(null);
      const prev = this.previewUrl();
      if (prev) URL.revokeObjectURL(prev);
      this.previewUrl.set(null);
      return;
    }

    // hard limits similar to medicinevidence: JPG/PNG, <= 5MB
    const okType = f.type === 'image/jpeg' || f.type === 'image/png';
    const okSize = f.size <= 5 * 1024 * 1024;
    if (!okType) {
      this.file.set(null);
      this.error.set('Unsupported file type. Please upload JPG or PNG.');
      return;
    }
    if (!okSize) {
      this.file.set(null);
      this.error.set('File too large. Max 5MB.');
      return;
    }

    const prev = this.previewUrl();
    if (prev) URL.revokeObjectURL(prev);
    this.file.set(f);
    this.previewUrl.set(URL.createObjectURL(f));
  }
}

