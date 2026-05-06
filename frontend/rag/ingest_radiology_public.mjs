/**
 * Public-source Radiology RAG ingestion (Node.js, no deps).
 *
 * What it does:
 * - Fetches a list of PUBLIC pages that are typically accessible without login/bot challenges.
 * - Extracts visible text (best-effort) and summarizes into short bullet lines.
 * - Appends each page as a chunk to `frontend/rag/knowledge.txt` using `---` separators.
 *
 * What it does NOT do:
 * - It does not bypass bot protections (e.g., Radiopaedia Cloudflare challenge).
 * - It does not scrape paywalled/login-required guideline full text.
 * - It does not download/parse PDFs (keep KB short + avoid deps).
 *
 * Run:
 *   node frontend/rag/ingest_radiology_public.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KB_PATH = path.join(__dirname, "knowledge.txt");

/** @type {{tag:string,url:string,note?:string}[]} */
const SOURCES = [
  { tag: "ESC Guidelines hub", url: "https://www.escardio.org/Guidelines", note: "hub page (links to all guidelines)" },
  { tag: "ERS Guidelines hub", url: "https://www.ersnet.org/guidelines/", note: "filterable list of ERS/Joint docs" },
  { tag: "EURETINA Guidelines", url: "https://www.euretina.org/guidelines", note: "guideline list page" },
  { tag: "ESMO Guidelines hub", url: "https://www.esmo.org/guidelines", note: "may show limited content without login" },
  { tag: "ACR RADS hub", url: "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems", note: "often dynamic" },
  { tag: "ACR Lung-RADS", url: "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/Lung-RADS", note: "often dynamic" },
  { tag: "ACR BI-RADS", url: "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/Bi-Rads", note: "often dynamic" },
  { tag: "ACR PI-RADS", url: "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/PI-RADS", note: "often dynamic" },
  { tag: "ACR TI-RADS", url: "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/TI-RADS", note: "often dynamic" },
  { tag: "ACR LI-RADS", url: "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/LI-RADS", note: "often dynamic" },
  { tag: "ACR NI-RADS", url: "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/NI-RADS", note: "often dynamic" },
  // Radiopaedia intentionally omitted from fetching (bot protection); keep only link index in KB.
];

function nowISODate() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

async function fetchText(url) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "user-agent": "MedicinEvidence-RAG-Ingest/1.0 (public pages only)",
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  });
  const body = await res.text();
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return body;
}

function htmlToText(html) {
  let s = String(html || "");
  // Remove scripts/styles/noscript
  s = s.replace(/<(script|style|noscript)[^>]*>[\s\S]*?<\/\1>/gi, " ");
  // Breaks for common block-ish tags
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<\/(p|div|li|h1|h2|h3|h4|h5|tr|section|article)>/gi, "\n");
  // Strip tags
  s = s.replace(/<[^>]+>/g, " ");
  // Decode a few common entities
  s = s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  // Collapse whitespace
  s = s.replace(/[ \t\r\f\v]+/g, " ");
  s = s.replace(/\n\s*\n\s*\n+/g, "\n\n");
  return s.trim();
}

function summarizeToBullets(text, maxLines = 18) {
  const rawLines = String(text || "").split("\n").map((l) => l.trim()).filter(Boolean);
  const drop = ["cookie", "privacy", "terms", "copyright", "©", "login", "subscribe"];
  const out = [];
  for (let ln of rawLines) {
    const low = ln.toLowerCase();
    if (drop.some((k) => low.includes(k))) continue;
    if (ln.length < 10) continue;
    if (ln.length > 220) ln = ln.slice(0, 220).trimEnd() + "…";
    out.push(`- ${ln}`);
    if (out.length >= maxLines) break;
  }
  return out.join("\n");
}

function appendChunk({ tag, url, note }, bullets) {
  const ts = nowISODate();
  const parts = [];
  parts.push(`[${tag}] (public ingest, ${ts})`);
  parts.push(`- URL: ${url}`);
  if (note) parts.push(`- Note: ${note}`);
  if (bullets && bullets.trim()) parts.push(bullets.trim());
  else parts.push(`- (No extractable text from this page via public ingest.)`);

  const chunk = `\n---\n\n${parts.join("\n").trim()}\n`;
  fs.appendFileSync(KB_PATH, chunk, "utf8");
}

async function main() {
  if (!fs.existsSync(KB_PATH)) {
    console.error(`ERROR: knowledge file not found at ${KB_PATH}`);
    process.exitCode = 2;
    return;
  }

  let ok = 0;
  let fail = 0;

  for (const src of SOURCES) {
    try {
      const html = await fetchText(src.url);

      // Detect common bot challenge page markers (don’t attempt bypass)
      const lower = html.toLowerCase();
      if (lower.includes("cloudflare") && lower.includes("challenge")) {
        throw new Error("Bot challenge page (cloudflare)");
      }

      const txt = htmlToText(html);
      const bullets = summarizeToBullets(txt);
      appendChunk(src, bullets);
      ok++;
      console.log(`OK: ${src.tag}`);
    } catch (e) {
      appendChunk(src, `- ERROR: ${String(e?.message || e)}`);
      fail++;
      console.error(`FAIL: ${src.tag} (${String(e?.message || e)})`);
    }
  }

  console.log(`Done. ok=${ok} fail=${fail}. Updated: ${KB_PATH}`);
}

await main();

