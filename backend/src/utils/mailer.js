const nodemailer = require("nodemailer");

function isConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function transport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || "").toLowerCase() === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

async function sendPasswordResetCode({ to, code }) {
  const from = process.env.MAIL_FROM || "contact@medicinevidence.com";
  const subject = "MedicinEvidence password reset code";
  const text = `Your MedicinEvidence password reset code is: ${code}\n\nThis code expires in 10 minutes. If you did not request this, ignore this email.`;

  if (!isConfigured()) {
    // Dev fallback: don't fail auth flow; just log.
    // eslint-disable-next-line no-console
    console.log("[DEV] Password reset code for", to, "=", code);
    return;
  }

  const t = transport();
  await t.sendMail({ from, to, subject, text });
}

module.exports = { sendPasswordResetCode };

