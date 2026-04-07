# Pharma-GPT - Medical AI Platform

A production-ready medical AI platform for healthcare professionals, built with Angular and Spring Boot.

## Features

- **AI Question Box**: Ask medical questions and get AI-powered responses via Claude API
- **Treatment Cards**: Browse sponsored treatment options (RAMACE, AMLODIX, Indapamidă)
- **News & Webinars**: Stay updated with medical news and webinar opportunities
- **Responsive Design**: Desktop-first, mobile-ready layout with blue/white medical theme
- **JWT Authentication**: Login, Register, protected routes, profile dropdown with logout
- **Full Navigation**: Ghiduri, Interacțiuni Medicamente, Noutăți, Anunțuri, Snap & Learn, Teste, Comunitate

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Angular 21, SCSS, Standalone Components |
| Backend | Java 17, Spring Boot 4.0 |
| Database | PostgreSQL (opțional profil `h2` pentru dev fără Postgres) |
| AI | Anthropic Claude API |
| Auth | JWT |

## Quick Start

### Prerequisites

- Node.js 18+
- Java 17+
- PostgreSQL (implicit pentru `dev`; fără Postgres: `SPRING_PROFILES_ACTIVE=dev,h2`)
- Anthropic API key (for AI features)

### Backend

```bash
# Create PostgreSQL database (sau folosește docker compose)
createdb pharma_gpt

# Rulează cu același tip de conexiune ca în producție (implicit dev + Postgres local)
mvnw spring-boot:run

# Fără PostgreSQL — H2 în ./data/
mvnw spring-boot:run -Dspring-boot.run.profiles=dev,h2
```

Aceleași variabile `SPRING_DATASOURCE_*` ca pe server dacă vrei aceeași bază remote.

Set environment variable for Claude API:
```bash
export ANTHROPIC_API_KEY=your-api-key
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Open http://localhost:4200

### Bază de date (local = producție)

Conexiunea PostgreSQL e unificată în `application.properties` prin **`SPRING_DATASOURCE_URL`**, **`SPRING_DATASOURCE_USERNAME`**, **`SPRING_DATASOURCE_PASSWORD`**. Pune **aceleași valori** pe mașina locală și pe server ca să folosești aceeași instanță de bază (sau aceleași credențiale).

- Dev fără PostgreSQL (H2 în `./data/`): `SPRING_PROFILES_ACTIVE=dev,h2`
- Reset automat seed la pornire: implicit **dezactivat**; setează `PHARMA_SEED_FULL_RESET_ON_STARTUP=true` doar pe mediu cu DB dedicat.

### Docker: PostgreSQL + API (backend)

În rădăcina proiectului (lângă `pom.xml`): copiază `.env.example` → `.env`, completează `POSTGRES_PASSWORD` și `JWT_SECRET`, apoi:

```bash
docker compose up -d --build
```

- API: `http://localhost:8083`
- DBeaver: `localhost`, port `5432`, baza `pharma_gpt`, user `pharma_app`, parola din `.env`
- Profil Spring: `prod`

### Utilizatori seed (dev, după `pharma.seed.full-reset-on-startup=true`)

Parola pentru toți utilizatorii creați de seed: `password123`. Exemple de email: `andrei.vasile@pharma-gpt.ro`, `maria.georgescu@pharma-gpt.ro` (vezi `DataInitializer.TEN_USERS`).

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai/ask` | Ask a medical question (no auth required) |
| POST | `/api/auth/login` | Login and get JWT token |
| POST | `/api/auth/register` | Register new user and get JWT token |

## Project Structure

```
pharma-gpt/
├── frontend/                 # Angular app
│   └── src/
│       ├── app/
│       │   ├── components/   # Navbar, Sidebar, AiChat, TreatmentCard, NewsCard
│       │   ├── layout/       # Main layout with nav + sidebar
│       │   ├── pages/        # Dashboard
│       │   └── services/     # AI service
│       └── environments/
├── src/main/java/
│   └── com/example/pharma_gpt/
│       ├── config/           # Security, JWT, CORS
│       ├── controller/       # AiController, AuthController
│       ├── dto/
│       ├── entity/           # User
│       ├── repository/
│       └── service/          # ClaudeService
└── src/main/resources/
```

## Configuration

| Property | Description | Default |
|----------|-------------|---------|
| `ANTHROPIC_API_KEY` | Claude API key | - |
| `JWT_SECRET` | JWT signing secret | (dev default) |
| `spring.datasource.url` | Database URL | localhost:5432/pharma_gpt |

## License

Proprietary
