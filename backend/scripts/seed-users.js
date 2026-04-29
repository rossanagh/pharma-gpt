require("dotenv").config();

const bcrypt = require("bcrypt");
const { Pool } = require("pg");

const SEED_USERS = [
  {
    name: "Dr. Demo Doctor",
    email: "doctor@demo.local",
    password: "Demo123!",
    role: "doctor",
    parafa: "RO-DR-0001"
  },
  {
    name: "Demo Pharmacist",
    email: "pharmacist@demo.local",
    password: "Demo123!",
    role: "pharmacist",
    parafa: "RO-PH-0002"
  },
  {
    name: "Demo Student",
    email: "student@demo.local",
    password: "Demo123!",
    role: "student",
    parafa: "RO-ST-0003"
  }
];

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  const c = await pool.connect();
  try {
    for (const u of SEED_USERS) {
      const passwordHash = await bcrypt.hash(u.password, 12);
      await c.query(
        `
        INSERT INTO users (name,email,password,role,parafa)
        VALUES ($1,$2,$3,$4,$5)
        ON CONFLICT (email) DO UPDATE SET
          name=EXCLUDED.name,
          password=EXCLUDED.password,
          role=EXCLUDED.role,
          parafa=EXCLUDED.parafa
        `,
        [u.name, u.email.toLowerCase(), passwordHash, u.role, u.parafa]
      );
    }
  } finally {
    c.release();
    await pool.end();
  }

  console.log("Seeded users:");
  for (const u of SEED_USERS) {
    console.log(`- ${u.role}: ${u.email} / ${u.password} (parafa: ${u.parafa})`);
  }
}

main().catch((e) => {
  console.error(e?.code || e?.message || e);
  process.exit(1);
});

