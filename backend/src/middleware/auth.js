const jwt = require("jsonwebtoken");

function authRequired(req, res, next) {
  const h = req.headers.authorization || "";
  const m = /^Bearer\s+(.+)$/.exec(h);
  if (!m) return res.status(401).json({ error: "Missing token" });

  try {
    const payload = jwt.verify(m[1], process.env.JWT_SECRET);
    req.auth = payload;
    return next();
  } catch (e) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = { authRequired };

