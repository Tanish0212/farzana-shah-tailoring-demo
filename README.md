# Farzana Shah Tailoring: demo website

A static, bilingual (English / Arabic) one-page site for **Farzana Shah Tailoring** (FS Tailoring),
Shop G104, Meena Bazaar, Bur Dubai.

- **Live demo:** https://tanish0212.github.io/farzana-shah-tailoring-demo/
- **Counter poster (A5, printable):** https://tanish0212.github.io/farzana-shah-tailoring-demo/poster.html

No frameworks, no build step, no API keys. Open `index.html` through any static server
(e.g. `python -m http.server`) or host it on GitHub Pages.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page structure (section order, icons, `<head>` meta tags) |
| `style.css` | All styling. Mobile-first, logical properties so Arabic RTL mirrors automatically |
| `script.js` | The `SHOP` content object (top) + the site logic (bottom, no need to edit) |
| `poster.html` | Printable A5 counter poster with two inline SVG QR codes (WhatsApp + website) |
| `images/` | Monogram logo, illustrations, `og-image.jpg` (1200×630 share image, under 100 KB), touch icon |

## Reusing the site for another shop

1. **Edit the `SHOP` object at the top of `script.js`.** Everything on the page comes from it:
   name, phone, WhatsApp number, map links, hours, rating, services, reviews, the owner's story,
   and every English and Arabic text.
   - `whatsappNumber`: digits only. Every WhatsApp button opens `https://wa.me/<number>` with the
     pre-filled message from `text.en.waMessage` / `text.ar.waMessage` (matches the page language).
     Each service card pre-fills a message about that service.
   - `hours`: one entry per weekday (index 0 = Sunday … 6 = Saturday), `["HH:MM", "HH:MM"]` in shop
     time, or `null` for a closed day. The "Open now / Closed now · opens …" badge uses `timeZone`
     (`Asia/Dubai`), so it is correct wherever the visitor is. `hoursGroups` controls how the rows are
     grouped in the hours table.
   - `showDemoBanner: false` hides the "Demo preview" banner (or delete the `<p class="demo-banner">` line).
   - JSON-LD structured data (`LocalBusiness`, opening hours, rating) is built from `SHOP` automatically.
2. **Edit the `<head>` of `index.html`**: `<title>`, description, and the `og:` / `twitter:` tags.
   WhatsApp link previews don't run JavaScript, so these must be plain text.
3. **Replace `images/og-image.jpg`** (1200×630), `images/logo.svg` and `images/apple-touch-icon.png` (180×180).
4. **Poster:** edit the text in `poster.html`. The QR codes are static inline SVG generated locally
   with [segno](https://pypi.org/project/segno/) (no online QR service). To regenerate one:

   ```bash
   pip install segno
   python -c "import segno; print(segno.make('https://your-link/', error='m').svg_inline(dark='#2B1F27', border=2, omitsize=True))"
   ```

   Paste the printed `<svg …>` inside `.qr-box` (keep `class="qr"`). Print with
   **Margins: none** and **Background graphics: on**. It fits exactly one A5 page.

Only put **real, confirmed facts** in the content: no made-up prices, services, staff, years, awards or reviews.

## Swapping illustrations for real photos

Each image slot is a single file in a fixed frame, so a photo drops straight in:

| Slot | Where to change it | Frame |
| --- | --- | --- |
| Hero (dress form) | `SHOP.images.hero.src` | 4:5 arch |
| Her story (sewing machine) | `SHOP.images.story.src` | 4:5 arch |
| Service cards | `image` of each entry in `SHOP.services` | 4:5 (5:4 on phones) |

Add the photo to `images/` (e.g. `images/dress.jpg`), change that one path, and update the `alt`
text in both languages.
Photos use `object-fit: cover`; illustrations (`.svg`) use `contain` so they're never cropped.

Use portrait photos (about 1200×1500), compress them (e.g. squoosh.app, WebP/JPEG ~75 %) and keep
each under 250 KB.

## Design

Warm ivory and blush "paper" with a single accent, deep plum. Headings in Cormorant Garamond,
body in Jost, Arabic in IBM Plex Sans Arabic. The dashed "stitch" line is the recurring motif.
The fine-line illustrations share one style (2.4px plum stroke on a blush background).

## Notes

- `<meta name="robots" content="noindex">` keeps the demo out of Google. Remove it when the site goes live.
- The language choice is saved in `localStorage` (if available) under `site-lang`.
- Animations are subtle and switch off for visitors with "reduce motion" enabled.
- `screenshots/` is local QA output only and is git-ignored.
