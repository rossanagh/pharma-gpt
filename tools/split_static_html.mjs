import fs from "node:fs";
import path from "node:path";

function usage() {
  console.error("Usage: node split_static_html.mjs <input_html> <output_dir>");
}

function readFileUtf8(p) {
  return fs.readFileSync(p, { encoding: "utf8" });
}

function writeFileUtf8(p, content) {
  fs.writeFileSync(p, content, { encoding: "utf8" });
}

const args = process.argv.slice(2);
if (args.length !== 2) {
  usage();
  process.exit(2);
}

const inputPath = path.resolve(args[0]);
const outDir = path.resolve(args[1]);

const html = readFileUtf8(inputPath);

const styleRe = /<style>([\s\S]*?)<\/style>/i;
const styleMatch = html.match(styleRe);
if (!styleMatch) {
  console.error("No <style>...</style> block found.");
  process.exit(1);
}
const styleCss = styleMatch[1].replace(/^\n+|\n+$/g, "");

// inline scripts only (no src=)
const scriptRe = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi;
let m;
const scripts = [];
while ((m = scriptRe.exec(html)) !== null) {
  const body = (m[2] ?? "").replace(/^\n+|\n+$/g, "");
  if (body.trim()) scripts.push(body);
}
if (!scripts.length) {
  console.error("No inline <script>...</script> blocks found.");
  process.exit(1);
}
const scriptJs = scripts.join("\n\n") + "\n";

// Replace first <style>...</style> with <link>
let html2 = html.replace(styleRe, '<link rel="stylesheet" href="styles.css">\n');

// Remove all inline scripts; insert script.js where the last inline script was.
const matches = [...html2.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi)];
if (!matches.length) {
  console.error("No inline <script>...</script> blocks found after style replace.");
  process.exit(1);
}

const last = matches[matches.length - 1];
const lastIndex = last.index ?? -1;
if (lastIndex < 0) {
  console.error("Unexpected: last inline script index missing.");
  process.exit(1);
}

html2 =
  html2.slice(0, lastIndex) +
  '<script src="script.js"></script>\n' +
  html2.slice(lastIndex + last[0].length);

// Remove remaining inline scripts (from end to start for index stability)
const remaining = [...html2.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi)];
for (let i = remaining.length - 1; i >= 0; i--) {
  const r = remaining[i];
  const idx = r.index ?? -1;
  if (idx >= 0) html2 = html2.slice(0, idx) + html2.slice(idx + r[0].length);
}

fs.mkdirSync(outDir, { recursive: true });
writeFileUtf8(path.join(outDir, "index.html"), html2.replace(/\r\n/g, "\n"));
writeFileUtf8(path.join(outDir, "styles.css"), styleCss.replace(/\r\n/g, "\n") + "\n");
writeFileUtf8(path.join(outDir, "script.js"), scriptJs.replace(/\r\n/g, "\n"));

console.log("Wrote:", path.join(outDir, "index.html"));
console.log("Wrote:", path.join(outDir, "styles.css"));
console.log("Wrote:", path.join(outDir, "script.js"));

