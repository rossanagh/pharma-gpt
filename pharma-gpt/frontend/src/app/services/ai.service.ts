import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

export interface AskResponse {
  response: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private apiUrl = `${environment.apiUrl}/api/ai`;

  constructor(private http: HttpClient) {}

  async askQuestion(
    question: string,
    history?: Array<{ role: 'user' | 'assistant'; content: string }>
  ): Promise<AskResponse> {
    const body: {
      question: string;
      history?: Array<{ role: string; content: string }>;
    } = { question };
    if (history?.length) {
      body.history = history.map((h) => ({ role: h.role, content: h.content }));
    }
    const result = await firstValueFrom(this.http.post<AskResponse>(`${this.apiUrl}/ask`, body));
    return result;
  }
}
