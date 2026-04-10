declare global {
  interface Window {
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
   * Getter: citește după APP_INITIALIZER (api-url.json + index.html).
   * Nu folosi valoare „înghețată” la încărcarea modulului.
   */
  get apiUrl(): string {
    return readProdApiUrl();
  }
};
