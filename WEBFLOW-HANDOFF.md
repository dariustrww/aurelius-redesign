# D Aurelius Group — Webflow Rebuild Handoff

## Fonts (Add in Webflow Project Settings → Fonts)
- **Cormorant Garamond** (Google Font) — Headings, numbers, quotes
  - Weights: 300, 400, 500, 600, 700 + Italic
- **Outfit** (Google Font) — Body text, labels, buttons
  - Weights: 200, 300, 400, 500, 600, 700

## Color Palette (Add as Swatches)
| Name | Hex |
|------|-----|
| Gold | #C6A55C |
| Gold Light | #E2CC8F |
| Gold Bright | #D4AF37 |
| Gold Dark | #8B7332 |
| Black | #0A0A0A |
| Black Rich | #111111 |
| Black Card | #161616 |
| Black Elevated | #1A1A1A |
| Cream | #F5F0E8 |
| White | #FAFAFA |
| Gray | #888888 |

---

## Section-by-Section Build Guide

### 1. NAV (Fixed, transparent → solid on scroll)
- **Structure:** Flex row, space-between, centered
- **Left:** Logo image + "Aurelius" text
- **Right:** Links (About, Values, Services, Founder) + "Contact" button (gold border)
- **Logo URL:** `https://cdn.prod.website-files.com/689a126646e7dc6b882a5aa5/689a18c0413b7b2a935cd86e_image_2025-08-12_002224256.png`
- **Behavior:** Background changes from transparent to #0A0A0A on scroll (use Webflow scroll interaction)
- **Mobile:** Hamburger menu → fullscreen overlay with nav links

### 2. HERO (Full viewport height, centered)
- **Background:** #0A0A0A with subtle radial gradient glow (gold, very low opacity)
- **Label:** "D AURELIUS GROUP" — Outfit, 0.72rem, weight 500, letter-spacing 0.25em, uppercase, color: Gold
- **Heading:** "Great Careers Start With One Conversation" — Cormorant Garamond, clamp(2.8rem, 6vw, 5.5rem), weight 300, "One Conversation" in italic gold
- **Subtext:** "We're a face-to-face sales company. And we're looking for people who believe the best version of themselves is still ahead." — Outfit, 1.05rem, color: rgba(255,255,255,0.55)
- **CTA Button:** "DISCOVER OUR APPROACH →" — Gold background, black text, 0.82rem, uppercase, letter-spacing 0.2em, links to #about
- **Scroll indicator:** Thin white line at bottom, animated

### 3. ABOUT (Two-column grid)
- **Layout:** Grid — 1.1fr (text) | 0.9fr (stats), gap 3rem, max-width 1100px
- **Label:** "WHO WE ARE"
- **Heading:** "We Grow People. The Results Follow." — "Follow." in italic gold
- **Paragraph 1:** "Aurelius is a sales and marketing company built on one simple idea: when you invest in people, performance takes care of itself. We specialise in face-to-face sales because we believe real relationships still close the best deals."
- **Paragraph 2:** "Most of our team didn't come in with years of experience. They came in willing to learn, open to being coached, and ready to put in the work. That's what we look for. The skill, we teach. The confidence, you build here."
- **Stats Grid (2x2):**
  - 100% / CLIENT FOCUSED
  - F2F / DIRECT SALES
  - 360° / FULL STRATEGY
  - 24/7 / COMMITMENT
- Each stat: border 1px rgba(198,165,92,0.15), gold gradient top line, Cormorant Garamond number (2.8rem, gold), uppercase label

### 4. PHOTO CAROUSEL (Inside About section, spans full width)
- **Label:** "LIFE AT AURELIUS"
- **Layout:** Horizontal scrolling carousel with CSS animation (40s infinite loop)
- **Images (upload to Webflow Assets):**
  1. `https://cdn.prod.website-files.com/689a126646e7dc6b882a5aa5/689a126646e7dc6b882a5b76_IMG_1813.JPG`
  2. images/syfe-team.jpg
  3. images/salesworks-30th.jpg
  4. images/office-group.jpg
  5. images/ballroom-event.jpg
  6. images/dinner-team.jpg
- **Slide size:** 380px × 260px, border-radius 6px, object-fit cover
- **Navigation:** Two small arrow buttons (prev/next)
- **Edge fade:** Gradient overlay on left and right edges

### 5. CORE VALUES (3+2 grid layout)
- **Label:** "WHAT WE STAND FOR"
- **Heading:** "Core Values" — "Values" in italic gold
- **Divider:** Gold line — diamond — gold line
- **Top row:** 3 columns, gap 2rem, max-width 1100px
- **Bottom row:** 2 columns, gap 2rem, max-width 740px, centered
- **Each card:** Black Card bg, 1px border rgba(198,165,92,0.12), border-radius 6px, padding 2.5rem 2rem
  - Hover: border brightens, translateY(-4px), gold line appears on top
  - Header: flex row — number (Cormorant, 2.2rem, faded gold) + name (Cormorant, 1.25rem, Gold Light)
  - Description below

**Values Copy:**
| # | Name | Description |
|---|------|-------------|
| 1 | Grit | Some days are hard. You'll hear "no" more than "yes." We don't pretend otherwise. But we've seen what happens when someone decides not to quit. That's where the growth is. |
| 2 | Respect | We treat everyone the way we'd want to be treated. Clients, teammates, the person making your coffee. How you carry yourself when no one's watching matters here. |
| 3 | Excellence | Not perfection. Progress. We're not asking you to be the best on day one. We're asking you to care enough to get better every single day. |
| 4 | Achievement | We celebrate wins. Big ones, small ones, first ones. Because when people feel recognised for their effort, they reach for more. That's the culture we've built. |
| 5 | Trust | We say what we mean and follow through. You'll always know where you stand with us. No politics, no hidden agendas. Just honest people doing honest work. |

### 6. SERVICES (3-column grid)
- **Label:** "WHAT WE DO"
- **Heading:** "How We Deliver" — "Deliver" in italic gold
- **Layout:** 3 columns, gap 2rem, max-width 1200px
- **Each card:** Black Card bg, 1px gold border, border-radius 6px, padding 2.5rem 2rem
  - Hover: gold gradient overlay from top, translateY(-4px)
  - Title: Cormorant, 1.8rem, white
  - Description: Outfit, 0.92rem, rgba(255,255,255,0.5)

**Services Copy:**
| Service | Description |
|---------|-------------|
| Sales | We knock on doors. We shake hands. We have real conversations with real people. In a world that hides behind screens, we still believe the best sales happen in person. That's our edge, and it's what our clients pay us for. |
| Marketing | We take brands to where their customers actually are. On the ground, in the community, face to face. It's not about going viral. It's about making sure the right people hear the right message and actually do something about it. |
| Strategy | Before we make a move, we make a plan. We study the market, understand the audience, and map out the clearest path to results. Our clients don't hope their campaigns work. They know, because we've done the homework. |

### 7. FOUNDER (Two-column grid)
- **Layout:** Grid — image (1fr) | content (1fr), gap 5rem, max-width 1100px
- **Image:** `https://cdn.prod.website-files.com/689a126646e7dc6b882a5aa5/69495ad7fb27631f84601904_Darius%20Tan%20Renwei%20(Smart%20Casual).png`
  - aspect-ratio 3/4, object-fit cover, subtle gold border offset effect
- **Label:** "MEET OUR FOUNDER"
- **Name:** "Darius Tan" — Cormorant, 3rem
- **Role:** "MANAGING DIRECTOR" — Outfit, 0.78rem, uppercase, letter-spacing 0.2em, gold
- **Bio:** "Darius started Aurelius because he saw something most companies miss: that ordinary people can do extraordinary things when someone actually believes in them and gives them the right environment to grow. He still leads from the front, coaches personally, and keeps the bar high because he knows what this team is capable of."
- **Quote:** "You don't need to have it all figured out. You just need to be willing to start." — Italic, Cormorant, 1.3rem, gold-light, left gold border

### 8. VIDEO INTRO (Centered section)
- **Label:** "BEFORE YOU WALK IN"
- **Heading:** "See What It's Really Like" — "Like" in italic gold
- **Subtext:** "We'd rather show you than tell you. Watch this short video to get a feel for the culture, the people, and what your first few weeks could look like."
- **Video container:** Max-width 700px, centered, border 1px gold, border-radius 8px
  - Placeholder: Play button + "Watch the Introduction" + "2–3 min"
  - Replace with YouTube/Vimeo embed when video is ready
- **Caption:** "No pressure. Just a few minutes to see if this feels like the right fit for you." — Italic, Cormorant

### 9. CTA (Full-width centered)
- **Background:** #0A0A0A with radial gradient glow (gold, very low opacity)
- **Divider:** Gold line — diamond — gold line
- **Heading:** "You Don't Have to Be Ready. Just Willing." — "Ready." in italic gold
- **Subtext:** "Most people who joined us weren't sure if they could do it either. The ones who showed up anyway are now leading teams. Your move."
- **Button:** "GET IN TOUCH →" — Gold border, gold text, hover fills gold, links to #contact

### 10. CONTACT (Two-column grid)
- **Layout:** Grid — info (1fr) | form (1fr), gap 4rem, max-width 1100px
- **Background:** Black Rich (#111111)
- **Left column:**
  - "Locate Us" — Cormorant, 2.2rem
  - Address: 110 Robinson Rd, #02-00, Singapore 068901
  - Hours: Monday to Friday, 9am to 6pm
  - Phone: (M) 93391548 (T) 60221005
  - Email: admin@d-aureliusgroup.com
  - Google Maps embed (grayscale filter)
- **Right column:**
  - "Reach Out To Us" — Cormorant, 1.8rem
  - Form fields: Name, Contact Number, Email Address
  - Submit button: Gold bg, black text
  - Form action: https://form.jotform.com/242739042821455

### 11. FOOTER
- **Layout:** Flex row, space-between, max-width 1200px
- **Left:** "D AURELIUS GROUP" — Outfit, letter-spacing
- **Center:** Links — About, Values, Services, Contact
- **Right:** "© 2026 D Aurelius Group. All rights reserved."
- **Border top:** 1px rgba(198,165,92,0.1)

---

## Webflow-Specific Tips

### Scroll Animations (Webflow Interactions)
- **Reveal on scroll:** Each section fades in + slides up 40px (0.8s ease). Use "While scrolling into view" trigger on each section wrapper.
- **Nav background:** Use "While page is scrolling" → after 100px scroll, change nav background to #0A0A0A

### Carousel
- Webflow's native slider won't auto-scroll infinitely. Options:
  1. Use Webflow's Slider component + set autoplay
  2. Use a custom code embed with the CSS animation approach from the HTML file
  3. Use Finsweet or Splide.js library via embed

### Responsive Breakpoints
- **Desktop:** Default styles
- **Tablet (1024px):** Single column about, 3-col values stays, single column services
- **Mobile Landscape (768px):** 2-col values, hamburger nav, scaled typography
- **Mobile Portrait (480px):** Single column everything

### Custom Code (Project Settings → Custom Code)
Add to `<head>`:
```html
<style>
  /* Smooth scrolling */
  html { scroll-behavior: smooth; }
</style>
```

---

## Asset Checklist
- [ ] Upload logo PNG to Webflow Assets
- [ ] Upload 6 team photos to Webflow Assets (from images/ folder)
- [ ] Founder photo already on Webflow CDN (reuse existing URL)
- [ ] Team photo already on Webflow CDN (reuse existing URL)
- [ ] Record and upload intro video
- [ ] Connect Jotform to contact form
