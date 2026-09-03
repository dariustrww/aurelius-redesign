# D Aurelius Group — Website

Marketing + careers site for **D Aurelius Group**, a Singapore sales & marketing agency.
Live: <https://d-aureliusgroup.com>

## Stack

Plain static **HTML / CSS / JS** — no framework, no build step, no dependencies.
Hosted on **Vercel**, auto‑deployed from the `main` branch on GitHub.

## Files

| Path | What it is |
|------|------------|
| `index.html` | Homepage (hero → who we are → how it works → culture gallery → values → founder → contact) |
| `careers.html` | Careers page (why Aurelius, the roles) |
| `images/` | All image assets — logo `aurelius-crest.png`, team photos |
| `vercel.json` | Clean URLs + security headers (incl. a Content‑Security‑Policy) |
| `sitemap.xml`, `robots.txt` | SEO |

> **Heads‑up on structure:** each page's CSS and JS are **inline** (in `<style>` / `<script>` blocks), and the shared parts — nav, colour palette, fonts, the light/dark theme, and the theme‑toggle / mobile‑menu / scroll‑reveal scripts — are **duplicated in both pages**. If you change anything shared (the nav, a brand colour, the theme), update **both `index.html` and `careers.html`** so they don't drift. (A worthwhile future refactor: pull the shared CSS into `styles.css` and shared JS into `main.js` linked by both pages.)

## Run locally

No build needed:

```bash
npx serve .        # open the http://localhost:PORT it prints
```

…or just open `index.html` in a browser (fonts, map, and analytics load from the network).

## Deploy

Push to `main` → Vercel builds and deploys to d-aureliusgroup.com automatically.

```bash
git add -A && git commit -m "describe your change" && git push origin main
```

## Where to change common things

- **Copy / text** — edit `index.html` / `careers.html` directly (plain HTML; search for the text you see on the page).
- **Colours & theme** — the CSS custom properties in `:root { … }` at the top of each file's `<style>` block; light‑mode overrides live in `:root[data-theme="light"] { … }`. Change in **both** files.
- **Logo** — `images/aurelius-crest.png` (used in the nav and as the faint hero watermark). Replace the file to change it everywhere.
- **Fonts** — Cormorant Garamond (headings/numbers) + Outfit (body), loaded from Google Fonts in each page's `<head>`.
- **Contact form** — posts to JotForm (`form.jotform.com/242739042821455`). Change the form's `action` to point at a different form.
- **Light / dark mode** — a nav toggle sets `data-theme` on `<html>` and saves the choice in `localStorage`. Light is the default for first‑time visitors.

## Security headers

`vercel.json` sets HSTS, `X-Frame-Options: DENY`, `nosniff`, a `Referrer-Policy`, a `Permissions-Policy`, and a **Content‑Security‑Policy in Report‑Only mode** (it reports violations to the browser console but does not block yet). Once you've confirmed the live site produces no CSP violations in DevTools, change the header key `Content-Security-Policy-Report-Only` → `Content-Security-Policy` to enforce it.
