const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { cleanString, isEmail, fail } = require("../utils/validation");
const { findByEmail, createUser, toPublicUser } = require("../models/users");

const router = express.Router();

function signToken(user) {
  return jwt.sign(
    { sub: String(user.id), role: user.role, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
}

router.post("/register", async (req, res) => {
  try {
    const name = cleanString(req.body?.name);
    const email = cleanString(req.body?.email).toLowerCase();
    const password = String(req.body?.password || "");
    const parafa = cleanString(req.body?.parafa);
    const roleRaw = cleanString(req.body?.role).toLowerCase();
    const role = ["doctor", "pharmacist", "student"].includes(roleRaw) ? roleRaw : "doctor";

    if (!name) return fail(res, 400, "Name is required");
    if (!email || !isEmail(email)) return fail(res, 400, "Valid email is required");
    if (!parafa) return fail(res, 400, "Parafa is required");
    if (!password || password.length < 6) return fail(res, 400, "Password must be at least 6 characters");

    const existing = await findByEmail(email);
    if (existing) return fail(res, 409, "Email already in use");

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await createUser({ name, email, passwordHash, parafa, role });
    const token = signToken(user);
    return res.status(201).json({ token, user: toPublicUser(user) });
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = cleanString(req.body?.email).toLowerCase();
    const password = String(req.body?.password || "");

    if (!email || !isEmail(email)) return fail(res, 400, "Valid email is required");
    if (!password) return fail(res, 400, "Password is required");

    const userRow = await findByEmail(email);
    if (!userRow) return fail(res, 401, "Invalid credentials");

    const ok = await bcrypt.compare(password, userRow.password);
    if (!ok) return fail(res, 401, "Invalid credentials");

    const user = {
      id: userRow.id,
      name: userRow.name,
      email: userRow.email,
      role: userRow.role,
      parafa: userRow.parafa,
      created_at: userRow.created_at
    };

    const token = signToken(user);
    return res.json({ token, user: toPublicUser(user) });
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

