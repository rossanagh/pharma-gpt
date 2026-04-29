import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export interface RadiologyAnalyzeResponse {
  reportMarkdown: string;
}

@Injectable({ providedIn: 'root' })
export class RadiologyService {
  private readonly auth = inject(AuthService);

  private baseUrl(): string {
    const base = environment.apiUrl.replace(/\/$/, '');
    return base ? `${base}/api/radiology` : '/api/radiology';
  }

  async analyze(file: File): Promise<RadiologyAnalyzeResponse> {
    const form = new FormData();
    form.append('image', file, file.name);

    const headers: Record<string, string> = {};
    const token = this.auth.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${this.baseUrl()}/analyze`, {
      method: 'POST',
      headers,
      body: form
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(t || `HTTP ${res.status}`);
    }
    return (await res.json()) as RadiologyAnalyzeResponse;
  }
}

