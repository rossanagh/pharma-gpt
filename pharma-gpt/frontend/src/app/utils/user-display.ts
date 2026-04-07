import type { AppUser } from '../models/user.model';

/** Prenume + nume (preferă câmpurile separate din profil) */
function displayFirstLast(user: AppUser): string {
  const fn = user.firstName?.trim();
  const ln = user.lastName?.trim();
  if (fn || ln) {
    return [fn, ln].filter(Boolean).join(' ');
  }
  return user.fullName?.trim() || '';
}

/**
 * Mapare robustă — uneori în DB/API apar variații de scriere.
 */
function canonicalRole(raw: string | null | undefined): 'medic' | 'farmacist' | 'asistent_medical' | 'asistent_farmacist' | '' {
  const t = (raw ?? '').trim().toLowerCase().replace(/\s+/g, '_');
  if (!t) return '';
  if (t === 'medic' || t === 'doctor') return 'medic';
  if (t === 'farmacist' || t === 'pharmacist') return 'farmacist';
  if (t === 'asistent_medical' || t === 'asistentmedical') return 'asistent_medical';
  if (t === 'asistent_farmacist' || t === 'asistentfarmacist') return 'asistent_farmacist';
  return '';
}

/** Header: prefix + prenume + nume */
export function formatHeaderDisplayName(user: AppUser): string {
  const name = displayFirstLast(user);
  const role = canonicalRole(user.providerType);
  if (role === 'medic') {
    return name ? `Dr. ${name}` : 'Dr.';
  }
  if (role === 'farmacist') {
    return name ? `Farmacist ${name}` : 'Farmacist';
  }
  if (role === 'asistent_medical') {
    return name ? `Asistent medical ${name}` : 'Asistent medical';
  }
  if (role === 'asistent_farmacist') {
    return name ? `Asistent farmacist ${name}` : 'Asistent farmacist';
  }
  return name;
}
