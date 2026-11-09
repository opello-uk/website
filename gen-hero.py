#!/usr/bin/env python3
"""Hero background, built to the brand collateral (card, email signature):

- ground: deep blue that lifts to mid blue towards the upper right,
  with a faint peach warmth in the top-right corner
- two large circles, same size, same height, side by side and overlapping,
  translucent peach (the deck's 20% / 40% rule). Where they overlap the tint
  doubles, which makes the lens. Both fade out towards the bottom.

Writes assets/hero.svg. It is used as a full-bleed layer
(preserveAspectRatio slice), so keep the subject in the right half.
"""
from pathlib import Path

ROOT = Path(__file__).parent
W, H = 1600, 1000

# circle geometry (canvas units)
R = 640
CY = 440
C1 = 1150           # left circle centre x
C2 = 1560           # right circle centre x (overlap = 2R - (C2 - C1))

HERO = f'''<svg viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="ground" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#03142A"/>
      <stop offset="0.45" stop-color="#051E36"/>
      <stop offset="0.78" stop-color="#14405F"/>
      <stop offset="1" stop-color="#245675"/>
    </linearGradient>
    <radialGradient id="warm" cx="0.98" cy="0.02" r="0.5">
      <stop offset="0" stop-color="#F58851" stop-opacity="0.38"/>
      <stop offset="0.5" stop-color="#F58851" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#F58851" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="deepen" cx="0.08" cy="0.95" r="0.75">
      <stop offset="0" stop-color="#010E1F" stop-opacity="0.75"/>
      <stop offset="1" stop-color="#010E1F" stop-opacity="0"/>
    </radialGradient>
    <!-- peach that fades out downward, like the card -->
    <linearGradient id="tint" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse"
                    x1="0" y1="{CY - R}" x2="0" y2="{CY + R}">
      <stop offset="0" stop-color="#F58851" stop-opacity="0.19"/>
      <stop offset="0.35" stop-color="#E9845A" stop-opacity="0.09"/>
      <stop offset="0.7" stop-color="#C47258" stop-opacity="0.03"/>
      <stop offset="1" stop-color="#C47258" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="edge" gradientUnits="userSpaceOnUse" x1="0" y1="{CY - R}" x2="0" y2="{CY + R}">
      <stop offset="0" stop-color="#FFB08A" stop-opacity="0.22"/>
      <stop offset="0.55" stop-color="#F58851" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#F58851" stop-opacity="0"/>
    </linearGradient>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.035 0"/>
    </filter>
  </defs>

  <rect width="{W}" height="{H}" fill="url(#ground)"/>
  <rect width="{W}" height="{H}" fill="url(#warm)"/>
  <rect width="{W}" height="{H}" fill="url(#deepen)"/>

  <g class="rings">
    <circle cx="{C1}" cy="{CY}" r="{R}" fill="url(#tint)"/>
    <circle cx="{C2}" cy="{CY}" r="{R}" fill="url(#tint)"/>
    <circle cx="{C1}" cy="{CY}" r="{R}" fill="none" stroke="url(#edge)" stroke-width="1.5"/>
    <circle cx="{C2}" cy="{CY}" r="{R}" fill="none" stroke="url(#edge)" stroke-width="1.5"/>
  </g>

  <rect width="{W}" height="{H}" filter="url(#grain)"/>
</svg>'''

# the duplicate x1/y1 on #tint is invalid XML; keep only the userSpace ones
HERO = HERO.replace('x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse"\n                    ',
                    'gradientUnits="userSpaceOnUse" ')

(ROOT / "assets/hero.svg").write_text(HERO)
print(f"hero.svg written ({len(HERO)} bytes)")
