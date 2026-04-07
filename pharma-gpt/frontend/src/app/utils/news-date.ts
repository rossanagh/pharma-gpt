/**
 * Dată în română: „20 Martie 2026” (fără oră, lună cu majusculă).
 */
const MONTHS_RO_CAP = [
  'Ianuarie',
  'Februarie',
  'Martie',
  'Aprilie',
  'Mai',
  'Iunie',
  'Iulie',
  'August',
  'Septembrie',
  'Octombrie',
  'Noiembrie',
  'Decembrie'
] as const;

/** Pentru sortare: cele mai noi primele (publishedAt desc). */
export function compareNewsByPublishedDesc(
  a: { publishedAt: string },
  b: { publishedAt: string }
): number {
  const ta = Date.parse(a.publishedAt);
  const tb = Date.parse(b.publishedAt);
  const na = Number.isFinite(ta) ? ta : 0;
  const nb = Number.isFinite(tb) ? tb : 0;
  return nb - na;
}

export function formatNewsDateRo(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    return '';
  }
  const day = d.getDate();
  const month = MONTHS_RO_CAP[d.getMonth()];
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}
