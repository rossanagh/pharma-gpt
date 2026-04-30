-- Baseline schema for PostgreSQL deployments (Render/Neon)
-- This runs at startup to ensure required tables/columns exist.

CREATE TABLE IF NOT EXISTS public.users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  full_name TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone_number TEXT,
  parafa TEXT,
  provider_type TEXT,
  specialty TEXT,
  medic_grade TEXT,
  academic_titles TEXT,
  avatar_bytes BYTEA,
  avatar_content_type TEXT,
  role TEXT NOT NULL DEFAULT 'ROLE_USER',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- In case the table existed but was missing columns (legacy schemas)
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS full_name TEXT,
  ADD COLUMN IF NOT EXISTS first_name TEXT,
  ADD COLUMN IF NOT EXISTS last_name TEXT,
  ADD COLUMN IF NOT EXISTS phone_number TEXT,
  ADD COLUMN IF NOT EXISTS parafa TEXT,
  ADD COLUMN IF NOT EXISTS provider_type TEXT,
  ADD COLUMN IF NOT EXISTS specialty TEXT,
  ADD COLUMN IF NOT EXISTS medic_grade TEXT,
  ADD COLUMN IF NOT EXISTS academic_titles TEXT,
  ADD COLUMN IF NOT EXISTS avatar_bytes BYTEA,
  ADD COLUMN IF NOT EXISTS avatar_content_type TEXT,
  ADD COLUMN IF NOT EXISTS role TEXT,
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ;

-- Ensure defaults for critical fields if they were created nullable in the past
UPDATE public.users
SET
  role = COALESCE(role, 'ROLE_USER'),
  created_at = COALESCE(created_at, now())
WHERE role IS NULL OR created_at IS NULL;

-- Password reset codes
CREATE TABLE IF NOT EXISTS public.password_reset_codes (
  id BIGSERIAL PRIMARY KEY,
  target_normalized TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  used BOOLEAN NOT NULL DEFAULT FALSE
);

-- Legacy compatibility: older tables may have different columns (target / used_at)
ALTER TABLE public.password_reset_codes
  ADD COLUMN IF NOT EXISTS target_normalized TEXT,
  ADD COLUMN IF NOT EXISTS code_hash TEXT,
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS expires_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS attempts INTEGER,
  ADD COLUMN IF NOT EXISTS used BOOLEAN;

-- Legacy cleanup: previous schemas used `target` and/or `used_at`.
-- They can break inserts because the app writes only `target_normalized`.
ALTER TABLE public.password_reset_codes
  DROP COLUMN IF EXISTS target,
  DROP COLUMN IF EXISTS used_at;

UPDATE public.password_reset_codes
SET
  created_at = COALESCE(created_at, now()),
  attempts = COALESCE(attempts, 0),
  used = COALESCE(used, FALSE)
WHERE created_at IS NULL OR attempts IS NULL OR used IS NULL;

CREATE INDEX IF NOT EXISTS idx_users_email_upper ON public.users (upper(email));
CREATE INDEX IF NOT EXISTS idx_prc_target ON public.password_reset_codes (target_normalized);
CREATE INDEX IF NOT EXISTS idx_prc_expires ON public.password_reset_codes (expires_at);
