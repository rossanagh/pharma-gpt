const { Pool } = require("pg");

function required(name) {
  const v = process.env[name];
  if (v == null || v === "") throw new Error(`Missing env ${name}`);
  return v;
}

const pool = new Pool({
  connectionString: required("DATABASE_URL"),
  // Neon requires SSL. This is the standard dev-safe config for managed Postgres.
  ssl: { rejectUnauthorized: false }
});

async function ping() {
  const c = await pool.connect();
  try {
    await c.query("SELECT 1");
  } finally {
    c.release();
  }
}

module.exports = { pool, ping };

