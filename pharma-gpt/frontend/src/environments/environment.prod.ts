declare global {
  interface Window {
    /** Setat din index.html pe hosting (ex. URL Render), fără slash final. */
    __PHARMA_API_URL__?: string;
  }
}

function readProdApiUrl(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  const v = window.__PHARMA_API_URL__;
  if (v == null || String(v).trim() === '') {
    return '';
  }
  return String(v).trim().replace(/\/$/, '');
}

export const environment = {
  production: true,
  /**
   * Citește `window.__PHARMA_API_URL__` din index.html (poți edita pe cPanel după build).
   * Dacă rămâne gol, cererile merg la același domeniu ca site-ul (/api/...) — necesită proxy pe server.
   */
  apiUrl: readProdApiUrl()
};
