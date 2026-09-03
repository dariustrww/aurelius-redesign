#!/usr/bin/env python3
"""Generate the site's favicons from images/aurelius-crest.png.

Run from anywhere:   python3 scripts/make-favicons.py
Needs Pillow:        python3 -m pip install pillow

Writes to the repo root:
  favicon.ico             16/32/48 bundled (browsers request /favicon.ico automatically)
  favicon-16x16.png       browser tab
  favicon-32x32.png       browser tab (HiDPI) / bookmarks
  favicon-192x192.png     Android home screen
  apple-touch-icon.png    iOS home screen (180x180, full-bleed square; iOS rounds it)

The crest sits on the same dark coin the nav logo uses in light mode, so the
icon stays legible on both light and dark browser chrome.
"""
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
CREST = ROOT / "images" / "aurelius-crest.png"
COIN = (0x15, 0x12, 0x0C, 255)  # matches `.logo-icon { background: #15120C }` in styles.css

src = Image.open(CREST).convert("RGBA")


def render(size: int, shape: str, crest_scale: float) -> Image.Image:
    """Crest centred on a dark coin (circle) or tile (square), drawn 4x and downsampled."""
    big = size * 4
    img = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    if shape == "circle":
        draw.ellipse([0, 0, big - 1, big - 1], fill=COIN)
    else:
        draw.rectangle([0, 0, big - 1, big - 1], fill=COIN)
    inner = int(big * crest_scale)
    crest = src.copy()
    crest.thumbnail((inner, inner), Image.LANCZOS)
    img.alpha_composite(crest, ((big - crest.width) // 2, (big - crest.height) // 2))
    return img.resize((size, size), Image.LANCZOS)


# Tab icons: round coin, crest nearly edge to edge so it still reads at 16px.
for s in (16, 32, 192):
    render(s, "circle", 0.9).save(ROOT / f"favicon-{s}x{s}.png")

# favicon.ico bundles three sizes; pass our own renders so each size is crisp.
render(48, "circle", 0.9).save(
    ROOT / "favicon.ico",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=[render(16, "circle", 0.9), render(32, "circle", 0.9)],
)

# iOS home screen: full-bleed square (iOS applies its own rounded mask), crest a touch smaller.
render(180, "square", 0.8).save(ROOT / "apple-touch-icon.png")

print("favicons written to", ROOT)
