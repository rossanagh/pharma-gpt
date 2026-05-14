-- Rulează o dată în Neon (SQL Editor) dacă /api/auth/register/start dă eroare de bază de date
-- legată de coloana password_hash pe pending_registrations.

ALTER TABLE public.pending_registrations
  ADD COLUMN IF NOT EXISTS password_hash TEXT;

-- Opțional: șterge înregistrări vechi incomplete (fără hash de parolă), dacă există după migrare
-- DELETE FROM public.pending_registrations WHERE password_hash IS NULL;
