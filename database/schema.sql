-- MedicinEvidence auth schema (MySQL 8+)

CREATE DATABASE IF NOT EXISTS medicinevidence
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

USE medicinevidence;

CREATE TABLE IF NOT EXISTS users (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'user',
  parafa VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_email (email)
);

