const express = require("express");
const { authRequired } = require("../middleware/auth");
const { findById, toPublicUser } = require("../models/users");

const router = express.Router();

router.get("/me", authRequired, async (req, res) => {
  try {
    const id = Number(req.auth?.sub);
    if (!id) return res.status(401).json({ error: "Invalid token" });

    const user = await findById(id);
    if (!user) return res.status(404).json({ error: "User not found" });

    return res.json({ user: toPublicUser(user) });
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

