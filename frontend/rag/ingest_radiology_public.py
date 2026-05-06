#!/usr/bin/env python3
"""
Public-source RAG ingestion (best-effort).

Goal:
- Download a small set of PUBLIC pages that are accessible without login/bot-challenges.
- Extract plain text + lightweight bullet points.
- Append as RAG chunks into frontend/rag/knowledge.txt using '---' separators.

Notes:
- Radiopaedia blocks unsanctioned scraping (Cloudflare challenge). This script does NOT attempt to bypass it.
- ACR RADS pages are often dynamic; this script records the URL and keeps only accessible text.
- For PDFs, reliable extraction requires a PDF text library; not included here to avoid extra deps.
"""

from __future__ import annotations

import html
import re
import sys
import time
import urllib.request
from dataclasses import dataclass
from pathlib import Path


KB_PATH = Path(__file__).resolve().parent / "knowledge.txt"


@dataclass(frozen=True)
class Source:
    tag: str
    url: str
    note: str = ""


SOURCES: list[Source] = [
    Source(tag="ESC Guidelines hub", url="https://www.escardio.org/Guidelines", note="hub page (links to all guidelines)"),
    Source(tag="ERS Guidelines hub", url="https://www.ersnet.org/guidelines/", note="filterable list of ERS/Joint docs"),
    Source(tag="EURETINA Guidelines", url="https://www.euretina.org/guidelines", note="guideline list page"),
    Source(tag="ESMO Guidelines hub", url="https://www.esmo.org/guidelines", note="may show limited content without login"),
    Source(tag="ACR RADS hub", url="https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems", note="often dynamic"),
    Source(tag="ACR Lung-RADS", url="https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/Lung-RADS", note="often dynamic"),
    Source(tag="ACR BI-RADS", url="https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/Bi-Rads", note="often dynamic"),
    Source(tag="ACR PI-RADS", url="https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/PI-RADS", note="often dynamic"),
    Source(tag="ACR TI-RADS", url="https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/TI-RADS", note="often dynamic"),
    Source(tag="ACR LI-RADS", url="https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/LI-RADS", note="often dynamic"),
    Source(tag="ACR NI-RADS", url="https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/NI-RADS", note="often dynamic"),
]


def fetch(url: str, timeout_s: int = 30) -> str:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "MedicinEvidence-RAG-Ingest/1.0 (+non-bot; public pages only)",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
        method="GET",
    )
    with urllib.request.urlopen(req, timeout=timeout_s) as resp:
        raw = resp.read()
    # best-effort decode
    try:
        return raw.decode("utf-8", errors="replace")
    except Exception:
        return raw.decode(errors="replace")


def html_to_text(s: str) -> str:
    # remove scripts/styles
    s = re.sub(r"(?is)<(script|style|noscript).*?>.*?</\1>", " ", s)
    # replace <br> and block tags with newlines
    s = re.sub(r"(?i)<br\\s*/?>", "\n", s)
    s = re.sub(r"(?i)</(p|div|li|h1|h2|h3|h4|h5|tr)>", "\n", s)
    # strip tags
    s = re.sub(r"(?s)<[^>]+>", " ", s)
    s = html.unescape(s)
    # collapse whitespace
    s = re.sub(r"[ \t\r\f\v]+", " ", s)
    s = re.sub(r"\n\\s*\n\\s*\n+", "\n\n", s)
    return s.strip()


def summarize_lines(text: str, max_lines: int = 18) -> str:
    lines = [ln.strip() for ln in text.splitlines()]
    lines = [ln for ln in lines if ln and len(ln) >= 8]
    # remove obviously boilerplate lines
    drop = ("cookie", "privacy", "terms", "©", "copyright", "login", "subscribe")
    filtered: list[str] = []
    for ln in lines:
        low = ln.lower()
        if any(k in low for k in drop):
            continue
        if len(ln) > 220:
            ln = ln[:220].rstrip() + "…"
        filtered.append(ln)
        if len(filtered) >= max_lines:
            break
    return "\n".join(f"- {ln}" for ln in filtered)


def append_chunk(tag: str, url: str, note: str, bullets: str) -> None:
    ts = time.strftime("%Y-%m-%d")
    chunk = []
    chunk.append(f"[{tag}] (public ingest, {ts})")
    chunk.append(f"- URL: {url}")
    if note:
        chunk.append(f"- Note: {note}")
    if bullets.strip():
        chunk.append(bullets)
    else:
        chunk.append("- (No extractable text from this page via public ingest.)")
    chunk_txt = "\n".join(chunk).strip() + "\n"
    with KB_PATH.open("a", encoding="utf-8") as f:
        f.write("\n---\n\n")
        f.write(chunk_txt)


def main() -> int:
    if not KB_PATH.exists():
        print(f"ERROR: knowledge file not found at {KB_PATH}", file=sys.stderr)
        return 2
    ok = 0
    fail = 0
    for src in SOURCES:
        try:
            html_raw = fetch(src.url)
            text = html_to_text(html_raw)
            bullets = summarize_lines(text)
            append_chunk(src.tag, src.url, src.note, bullets)
            ok += 1
            print(f"OK: {src.tag}")
        except Exception as e:
            append_chunk(src.tag, src.url, src.note, f"- ERROR: {type(e).__name__}: {e}")
            fail += 1
            print(f"FAIL: {src.tag} ({e})", file=sys.stderr)
    print(f"Done. ok={ok} fail={fail}. Updated: {KB_PATH}")
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())

