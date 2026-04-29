-- Neon (PostgreSQL) schema for MedicinEvidence auth
-- Run this in Neon Console → SQL Editor.

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'doctor',
  parafa TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

