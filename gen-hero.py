#!/usr/bin/env python3
"""Generate the hero artwork: the brand 'o' on a gradient ground with
concentric iris arcs, matching the brand's key visual.

Writes assets/hero.svg (viewBox 0 0 1000 1000, square), which the page inlines.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
sys.path.insert(0, str(ROOT / "tools"))
from flatpath import xform  # noqa: E402

WORDMARK = (ROOT / "assets/opello-wordmark.svg").read_text()
GLYPH = re.findall(r'<path d="([^"]+)"/>', WORDMARK)[4]

# potrace transform inside the wordmark: translate(0,436) scale(0.1,-0.1)
O_PATH = xform(GLYPH, (0.1, 0, 0, -0.1, 0, 436))
OUTER, COUNTER = O_PATH.split(" M ", 1)
COUNTER = "M " + COUNTER

nums = [float(n) for n in re.findall(r"-?\d*\.?\d+", O_PATH)]
xs, ys = nums[0::2], nums[1::2]
X0, X1, Y0, Y1 = min(xs), max(xs), min(ys), max(ys)
CX, CY = (X0 + X1) / 2, (Y0 + Y1) / 2
H = Y1 - Y0

# fit the glyph into the canvas, slightly right of centre and oversized so it
# reads as a form rather than an icon
BOX = 1000.0
GH = 640.0            # glyph height in canvas units
S = GH / H
GX = 585.0            # glyph centre x in canvas units
GY = 470.0            # glyph centre y
SLANT = -13.0         # degrees, matches the wordmark's lean

def arcs() -> str:
    """Concentric bands behind the o, echoing the lens counters."""
    out = []
    specs = [
        # (radius, width, opacity, dx, dy)
        (476, 130, 0.05, -80, 66),
        (372, 58, 0.07, -46, 36),
        (306, 140, 0.045, 14, -12),
    ]
    for r, w, op, dx, dy in specs:
        out.append(
            f'<circle cx="{GX + dx}" cy="{GY + dy}" r="{r}" fill="none" '
            f'stroke="url(#arcStroke)" stroke-width="{w}" opacity="{op}"/>'
        )
    return "".join(out)


PAD = 200.0

HERO = f'''<svg viewBox="{-PAD:.0f} {-PAD:.0f} {BOX + 2 * PAD:.0f} {BOX + 2 * PAD:.0f}" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="oFill" x1="0.1" y1="0" x2="0.95" y2="1">
      <stop offset="0" stop-color="#FFA678"/>
      <stop offset="0.26" stop-color="#F58851"/>
      <stop offset="0.46" stop-color="#B96A55"/>
      <stop offset="0.60" stop-color="#6F5153"/>
      <stop offset="0.74" stop-color="#1C4463"/>
      <stop offset="0.88" stop-color="#0B4A70"/>
      <stop offset="1" stop-color="#0A2C46"/>
    </linearGradient>
    <linearGradient id="arcStroke" x1="0.85" y1="0.05" x2="0.15" y2="0.95">
      <stop offset="0" stop-color="#F58851"/>
      <stop offset="0.32" stop-color="#D8895F"/>
      <stop offset="0.68" stop-color="#8C5A55"/>
      <stop offset="1" stop-color="#2A4A66"/>
    </linearGradient>
    <radialGradient id="oGlow" cx="0.3" cy="0.24" r="0.85">
      <stop offset="0" stop-color="#FFC49B" stop-opacity="0.55"/>
      <stop offset="0.55" stop-color="#F58851" stop-opacity="0.06"/>
      <stop offset="1" stop-color="#F58851" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="9"/>
    </filter>
    <filter id="softer" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="26"/>
    </filter>
    <radialGradient id="counterFill" cx="0.38" cy="0.3" r="0.95">
      <stop offset="0" stop-color="#062A44"/>
      <stop offset="0.55" stop-color="#01203A"/>
      <stop offset="1" stop-color="#00121F"/>
    </radialGradient>
    <clipPath id="oClip">
      <path d="{O_PATH}" transform="rotate({SLANT}) translate({GX:.1f},{GY:.1f}) scale({S:.6f}) translate({-CX:.3f},{-CY:.3f})"/>
    </clipPath>
  </defs>

  <g filter="url(#softer)" opacity="0.85">{arcs()}</g>
  <g filter="url(#soft)">{arcs()}</g>

  <g>
    <path d="{O_PATH}"
          transform="rotate({SLANT} {GX:.1f} {GY:.1f}) translate({GX:.1f},{GY:.1f}) scale({S:.6f}) translate({-CX:.3f},{-CY:.3f})"
          fill="url(#oFill)" fill-rule="evenodd"/>
    <g clip-path="url(#oClip)">
      <rect x="{-PAD:.0f}" y="{-PAD:.0f}" width="{BOX + 2 * PAD:.0f}" height="{BOX + 2 * PAD:.0f}" fill="url(#oGlow)"/>
      <ellipse cx="{GX - 120:.0f}" cy="{GY - 280:.0f}" rx="420" ry="300"
               fill="#FFD9BE" opacity="0.16" filter="url(#softer)"/>
    </g>
  </g>

  <!-- counter: a clean dark field, so the arcs read as outside the form -->
  <path d="{COUNTER}"
        transform="rotate({SLANT} {GX:.1f} {GY:.1f}) translate({GX:.1f},{GY:.1f}) scale({S:.6f}) translate({-CX:.3f},{-CY:.3f})"
        fill="url(#counterFill)"/>
</svg>'''

(ROOT / "assets/hero.svg").write_text(HERO)
print(f"hero.svg written ({len(HERO)} bytes)")
