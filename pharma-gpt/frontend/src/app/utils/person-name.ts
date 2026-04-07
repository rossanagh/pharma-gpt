const RO = 'ro-RO';

function capitalizeSegment(segment: string): string {
  const t = segment.trim();
  if (!t) return segment;
  const lower = t.toLocaleLowerCase(RO);
  return lower.charAt(0).toLocaleUpperCase(RO) + lower.slice(1);
}

/** Prenume / nume: fiecare cuvânt și segment după „-” cu inițială mare (ex. ion → Ion, ana-maria → Ana-Maria). */
export function formatPersonName(raw: string): string {
  const s = raw.trim();
  if (!s) return '';
  return s
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.split('-').map(capitalizeSegment).join('-'))
    .join(' ');
}
