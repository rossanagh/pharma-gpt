const { pool } = require("../db");

function toPublicUser(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role,
    parafa: row.parafa,
    created_at: row.created_at
  };
}

async function findByEmail(email) {
  const r = await pool.query(
    "SELECT id,name,email,password,role,parafa,created_at FROM users WHERE email=$1 LIMIT 1",
    [email]
  );
  return r.rows[0] || null;
}

async function findById(id) {
  const r = await pool.query(
    "SELECT id,name,email,role,parafa,created_at FROM users WHERE id=$1 LIMIT 1",
    [id]
  );
  return r.rows[0] || null;
}

async function createUser({ name, email, passwordHash, parafa, role = "user" }) {
  const r = await pool.query(
    "INSERT INTO users (name,email,password,role,parafa) VALUES ($1,$2,$3,$4,$5) RETURNING id",
    [name, email, passwordHash, role, parafa]
  );
  const id = r.rows?.[0]?.id;
  return await findById(id);
}

async function updatePasswordByEmail(email, passwordHash) {
  await pool.query(`UPDATE users SET password=$2 WHERE email=$1`, [email, passwordHash]);
}

module.exports = { toPublicUser, findByEmail, findById, createUser, updatePasswordByEmail };

