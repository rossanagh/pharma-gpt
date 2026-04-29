require("dotenv").config();

const fs = require("node:fs");
const path = require("node:path");
const { Pool } = require("pg");

async function main() {
  const schemaPath = path.resolve(__dirname, "../../database/schema.neon.postgres.sql");
  const sql = fs.readFileSync(schemaPath, "utf8");

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  const c = await pool.connect();
  try {
    await c.query(sql);
    console.log("Database schema applied.");
  } finally {
    c.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e?.code || e?.message || e);
  process.exit(1);
});

