-- =============================================================================
-- users de la zero (Neon / PostgreSQL) — aliniat la entitatea JPA User
-- =============================================================================
-- ATENȚIE: DROP șterge TOȚI utilizatorii. Dacă există FK-uri către users (ex. din
-- Hibernate), CASCADE le elimină. Forum/chat folosesc user_id ca BIGINT fără FK
-- în schema.sql; verifică în DB dacă ai constrâgeri în plus.
--
-- Pași: 1) backup dacă ai date 2) rulează în SQL Editor 3) repornește app dacă e nevoie
-- =============================================================================

DROP TABLE IF EXISTS public.users CASCADE;

CREATE TABLE public.users (
  id                 BIGSERIAL PRIMARY KEY,
  email              TEXT        NOT NULL,
  password           TEXT        NOT NULL,
  full_name          TEXT        NOT NULL,
  first_name         VARCHAR(100) NOT NULL,
  last_name          VARCHAR(100) NOT NULL,
  phone_number       VARCHAR(30),
  parafa             VARCHAR(255),
  provider_type      VARCHAR(50),
  specialty          VARCHAR(120),
  medic_grade        VARCHAR(50),
  academic_titles    VARCHAR(500),
  county             VARCHAR(80),
  login_code         VARCHAR(6),
  avatar_bytes       BYTEA,
  avatar_content_type TEXT,
  role               TEXT        NOT NULL DEFAULT 'ROLE_USER',
  created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT users_email_unique UNIQUE (email)
);

CREATE UNIQUE INDEX uq_users_login_code
  ON public.users (login_code)
  WHERE login_code IS NOT NULL;
