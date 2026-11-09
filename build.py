#!/usr/bin/env python3
"""Inline the brand SVG marks into index.template.html -> index.html."""
import re
from pathlib import Path

root = Path(__file__).parent
mark = (root / "assets/hero.svg").read_text()
wordmark = (root / "assets/opello-wordmark.svg").read_text()

mark_inner = re.search(r"<svg[^>]*>(.*)</svg>", mark, re.S).group(1).strip()
mark_open = re.search(r"<svg([^>]*)>", mark).group(1)
wm = re.search(r'<svg[^>]*viewBox="([^"]+)"[^>]*>(.*)</svg>', wordmark, re.S)

mark_svg = f'<svg{mark_open}>{mark_inner}</svg>'
wordmark_svg = (
    f'<svg viewBox="{wm.group(1)}" aria-hidden="true" focusable="false" fill="currentColor">'
    f"{wm.group(2).strip()}</svg>"
)

out = (
    (root / "index.template.html")
    .read_text()
    .replace("{{MARK_SVG}}", mark_svg)
    .replace("{{WORDMARK_SVG}}", wordmark_svg)
)
(root / "index.html").write_text(out)
print(f"index.html written ({len(out)} bytes)")
