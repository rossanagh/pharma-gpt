const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { cleanString, isEmail, fail } = require("../utils/validation");
const { findByEmail, createUser, toPublicUser, updatePasswordByEmail } = require("../models/users");
const { createCode, findLatestActiveCode, incrementAttempts, markUsed } = require("../models/passwordReset");
const { sendPasswordResetCode } = require("../utils/mailer");

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

router.post("/password-reset/request", async (req, res) => {
  try {
    const email = cleanString(req.body?.email).toLowerCase();
    if (!email || !isEmail(email)) return fail(res, 400, "Valid email is required");

    // Do not leak whether user exists.
    const user = await findByEmail(email);
    if (user) {
      const code = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
      const codeHash = await bcrypt.hash(code, 12);
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
      await createCode({ email, codeHash, expiresAt });
      await sendPasswordResetCode({ to: email, code });
    }
    return res.json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
});

router.post("/password-reset/confirm", async (req, res) => {
  try {
    const email = cleanString(req.body?.email).toLowerCase();
    const code = cleanString(req.body?.code);
    const newPassword = String(req.body?.newPassword || "");
    if (!email || !isEmail(email)) return fail(res, 400, "Valid email is required");
    if (!code || code.length !== 6) return fail(res, 400, "Invalid code");
    if (!newPassword || newPassword.length < 6) return fail(res, 400, "Password must be at least 6 characters");

    const user = await findByEmail(email);
    if (!user) return fail(res, 400, "Invalid code or expired");

    const rec = await findLatestActiveCode(email);
    if (!rec) return fail(res, 400, "Invalid code or expired");

    const ok = await bcrypt.compare(code, rec.code_hash);
    if (!ok) {
      await incrementAttempts(rec.id);
      return fail(res, 400, "Invalid code or expired");
    }

    const passwordHash = await bcrypt.hash(newPassword, 12);
    await updatePasswordByEmail(email, passwordHash);
    await markUsed(rec.id);
    return res.json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

