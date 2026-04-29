from __future__ import annotations

import os
import re
import sys
from pathlib import Path


STYLE_RE = re.compile(r"<style>([\s\S]*?)</style>", re.IGNORECASE)
SCRIPT_RE = re.compile(r"<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)</script>", re.IGNORECASE)


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: split_static_html.py <input_html> <output_dir>", file=sys.stderr)
        return 2

    input_path = Path(sys.argv[1]).expanduser().resolve()
    out_dir = Path(sys.argv[2]).expanduser().resolve()

    html = input_path.read_text(encoding="utf-8", errors="strict")

    style_m = STYLE_RE.search(html)
    if not style_m:
        raise SystemExit("No <style>...</style> block found.")
    style_css = style_m.group(1).strip("\n")

    # Collect inline scripts in document order.
    scripts: list[str] = []
    for m in SCRIPT_RE.finditer(html):
        attrs = m.group(1) or ""
        # keep script type/module semantics if present by prefixing as comment (no behavior change)
        body = m.group(2)
        scripts.append(body.strip("\n"))

    script_js = "\n\n".join(s for s in scripts if s.strip())

    # Replace the FIRST style block with a stylesheet link.
    html2 = html[: style_m.start()] + '<link rel="stylesheet" href="styles.css">\n' + html[style_m.end() :]

    # Remove all inline scripts and replace the LAST removed one with script.js include
    # to preserve execution after DOM is defined (original big script is near bottom).
    script_matches = list(SCRIPT_RE.finditer(html2))
    if not script_matches:
        raise SystemExit("No inline <script>...</script> blocks found.")

    # Remove from end to start so indices don't shift.
    replaced = html2
    # Insert external script tag where the last inline script was.
    last = script_matches[-1]
    replaced = replaced[: last.start()] + '<script src="script.js"></script>\n' + replaced[last.end() :]
    for m in reversed(script_matches[:-1]):
        replaced = replaced[: m.start()] + "" + replaced[m.end() :]

    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "index.html").write_text(replaced, encoding="utf-8", newline="\n")
    (out_dir / "styles.css").write_text(style_css + "\n", encoding="utf-8", newline="\n")
    (out_dir / "script.js").write_text(script_js + "\n", encoding="utf-8", newline="\n")

    print(f"Wrote: {out_dir / 'index.html'}")
    print(f"Wrote: {out_dir / 'styles.css'}")
    print(f"Wrote: {out_dir / 'script.js'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

