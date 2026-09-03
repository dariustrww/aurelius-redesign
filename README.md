# D Aurelius Group — Website

Marketing + careers site for D Aurelius Group (Singapore sales & marketing agency).
Live: https://d-aureliusgroup.com

## Stack
Plain static **HTML / CSS / JS** — no framework, no build step, no dependencies.
Hosted on **Vercel**, auto-deployed from the `main` branch on GitHub.

## Files
| File | What it is |
|------|-----------|
| `index.html` | Homepage (hero, who we are, how it works, culture gallery, values, founder, contact) |
| `careers.html` | Careers page (roles, why Aurelius) |
| `styles.css` | **All styling for every page** — palette, theme, components, and page sections (careers-only styles are grouped at the bottom) |
| `main.js` | **All shared behaviour** — light/dark toggle, scroll-reveal, sticky nav, mobile menu |
| `images/` | All image assets (logo `aurelius-crest.png`, team photos) |
| `vercel.json` | Clean URLs + security headers (incl. CSP) |
| `sitemap.xml`, `robots.txt` | SEO |

Styling and behaviour each live in **one** file, so a change to the nav, a colour, or the theme applies to every page at once. The only inline script left in each page's `<head>` is a one-liner that sets the initial light/dark theme before first paint (it has to be inline to avoid a flash) — leave that as is.

## Run locally
No build needed — just serve the folder. (The pages load `/styles.css` and `/main.js` by absolute path, so use a local server rather than opening the file directly.)
```bash
npx serve .          # then open the printed http://localhost:xxxx
```

## Deploy
Push to `main` → Vercel builds and deploys automatically to d-aureliusgroup.com. That's it.
```bash
git add -A && git commit -m "your change" && git push origin main
```

## Where to change common things
- **Copy / text** — edit directly in `index.html` / `careers.html` (plain HTML; search for the text).
- **Colours & theme** — `styles.css`, at the top: the CSS custom properties in `:root { … }` (dark palette) and the overrides in `:root[data-theme="light"] { … }`. Change a value once and it applies site-wide.
- **Logo** — `images/aurelius-crest.png` (used in the nav and as the hero watermark). Replace the file to change it everywhere.
- **Fonts** — Cormorant Garamond (headings) + Outfit (body), loaded from Google Fonts via the `<link>` in each page's `<head>`; the font-family variables are in `styles.css` `:root`.
- **Contact form** — in `index.html`, submits to JotForm (`form.jotform.com/242739042821455`) via POST. Change the `action` URL to point at a different form.
- **Light / dark** — the nav toggle (`main.js`) sets `data-theme` on `<html>` and saves the choice to `localStorage`. Light is the default for first-time visitors (set in the inline `<head>` script).
- **Careers-only styles** — the `CAREERS PAGE` section at the bottom of `styles.css`.

## Security headers
`vercel.json` sets HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, and a **Content-Security-Policy in Report-Only mode** (it reports violations but doesn't block). Once confirmed clean in the browser console, change the header key `Content-Security-Policy-Report-Only` → `Content-Security-Policy` to enforce it.
