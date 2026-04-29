function isEmail(s) {
  // pragmatic email check (RFC-complete validation is not required here)
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

function cleanString(s) {
  return typeof s === "string" ? s.trim() : "";
}

function fail(res, status, message) {
  return res.status(status).json({ error: message });
}

module.exports = { isEmail, cleanString, fail };

