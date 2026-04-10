/**
 * Încarcă /assets/api-url.json înainte de restul app-ului.
 * Pe cPanel poți edita doar acest fișier (după build), fără rebuild: pune URL-ul Render la apiBaseUrl.
 */
export function apiUrlInitFactory(): () => Promise<void> {
  return async () => {
    if (typeof window === 'undefined') {
      return;
    }
    const w = window as Window & { __PHARMA_API_URL__?: string };
    try {
      const res = await fetch('/assets/api-url.json', { cache: 'no-store' });
      if (res.ok) {
        const cfg = (await res.json()) as { apiBaseUrl?: string };
        const url = cfg.apiBaseUrl;
        if (typeof url === 'string' && url.trim() !== '') {
          w.__PHARMA_API_URL__ = url.trim().replace(/\/$/, '');
        }
      }
    } catch {
      /* ignoră */
    }

    const hasUrl = w.__PHARMA_API_URL__ != null && String(w.__PHARMA_API_URL__).trim() !== '';
    const isLocal =
      window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (!hasUrl && !isLocal) {
      console.warn(
        '[Pharma-GPT] Lipsește URL-ul backend. Editează assets/api-url.json (câmpul apiBaseUrl) cu URL-ul Render, sau index.html (window.__PHARMA_API_URL__). Altfel /api pe hosting dă 404.'
      );
    }
  };
}
