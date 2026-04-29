## MedicinEvidence backend (Express + Neon Postgres + JWT)

### 1) Configure Neon / Postgres connection

Edit `backend/.env` and set:

- `DATABASE_URL` from Neon (must include `sslmode=require`)

### 2) Create schema

Run:

```bash
npm install
npm run init-db
```

This applies `database/schema.neon.postgres.sql` (creates `users` table with unique email).

### 3) Start API

```bash
npm run dev
```

API will listen on `http://127.0.0.1:8085` (or `PORT` from `.env`).

### 4) Frontend

The static frontend reads the API base from:

```html
window.__API_BASE__
```

In `medicinevidence-clean/index.html` it is set to `http://127.0.0.1:8085`.

### Endpoints

- `POST /api/auth/register` `{ name, email, password, parafa }`
- `POST /api/auth/login` `{ email, password }`
- `GET /api/user/me` (Bearer JWT)

