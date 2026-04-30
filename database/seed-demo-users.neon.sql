-- Seed 3 demo accounts for Spring Boot (Neon Postgres)
-- Generates BCrypt hashes directly in SQL via pgcrypto (crypt/gen_salt).
--
-- Demo password for all 3 accounts: password123
--
-- Run this in Neon SQL Editor while connected to the same DB/schema
-- used by your Spring app (the one containing the `users` table).

CREATE EXTENSION IF NOT EXISTS pgcrypto;

INSERT INTO users (
  email,
  password,
  full_name,
  first_name,
  last_name,
  phone_number,
  parafa,
  provider_type,
  medic_grade,
  specialty,
  academic_titles,
  role,
  created_at
)
VALUES
(
  'demo.doctor@medicinevidence.com',
  crypt('password123', gen_salt('bf', 10)),
  'Demo Doctor',
  'Demo',
  'Doctor',
  NULL,
  'RO-MED-0001',
  'medic',
  'rezident',
  'Medicină internă',
  'Dr.',
  'ROLE_USER',
  NOW()
),
(
  'demo.pharmacist@medicinevidence.com',
  crypt('password123', gen_salt('bf', 10)),
  'Demo Pharmacist',
  'Demo',
  'Pharmacist',
  NULL,
  'RO-FAR-0001',
  'farmacist',
  NULL,
  NULL,
  NULL,
  'ROLE_USER',
  NOW()
),
(
  'demo.student@medicinevidence.com',
  crypt('password123', gen_salt('bf', 10)),
  'Demo Student',
  'Demo',
  'Student',
  NULL,
  'RO-STUD-0001',
  'student',
  NULL,
  NULL,
  NULL,
  'ROLE_USER',
  NOW()
)
ON CONFLICT (email) DO NOTHING;

-- Quick sanity check:
-- SELECT email, provider_type, parafa, created_at FROM users
-- WHERE email LIKE 'demo.%@medicinevidence.com'
-- ORDER BY email;
