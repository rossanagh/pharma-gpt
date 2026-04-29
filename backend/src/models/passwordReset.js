const { pool } = require("../db");

async function createCode({ email, codeHash, expiresAt }) {
  await pool.query(
    `INSERT INTO password_reset_codes (email, code_hash, expires_at)
     VALUES ($1,$2,$3)`,
    [email, codeHash, expiresAt]
  );
}

async function findLatestActiveCode(email) {
  const r = await pool.query(
    `SELECT id, email, code_hash, expires_at, attempts, used_at, created_at
     FROM password_reset_codes
     WHERE email=$1
       AND used_at IS NULL
       AND expires_at > now()
       AND attempts < 5
     ORDER BY created_at DESC
     LIMIT 1`,
    [email]
  );
  return r.rows[0] || null;
}

async function incrementAttempts(id) {
  await pool.query(
    `UPDATE password_reset_codes SET attempts = attempts + 1 WHERE id=$1`,
    [id]
  );
}

async function markUsed(id) {
  await pool.query(
    `UPDATE password_reset_codes SET used_at = now() WHERE id=$1`,
    [id]
  );
}

module.exports = { createCode, findLatestActiveCode, incrementAttempts, markUsed };

