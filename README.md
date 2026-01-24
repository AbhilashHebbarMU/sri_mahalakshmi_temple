# Sri Mahalakshmi Temple, Mysuru — Website

A responsive, multi-page website for **Sri Mahalakshmi Temple** (Mysuru). Built with HTML, CSS, JavaScript, and Bootstrap 5. No build step; runs from static files.

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home: hero with front-view image, upcoming events, about, testimonials carousel, contact strip |
| `darshana.html` | Darshana and seva info with booking links |
| `event.html` | Events and programs |
| `gallery.html` | Photo gallery (Daily Rituals, Navaratri, Special Events) with lightbox |
| `banner.html` | Banners and notices |
| `contact.html` | Contact details, map embed, and contact form |

---

## Project structure

```
temple/
├── index.html
├── darshana.html
├── event.html
├── gallery.html
├── banner.html
├── contact.html
├── styles.css      # Custom styles (hero, cards, lightbox, etc.)
├── main.js         # Smooth scroll, lightbox, contact form, carousel
├── README.md
└── images/
    ├── front_view.jpeg
    ├── side_view.jpeg
    ├── namam.jpg
    ├── user1.png, user2.png, user3.png
    ├── gallery/
    │   ├── Daily Rituals/
    │   ├── Navaratri/
    │   └── Special Events/
    └── seva/
        ├── Abhishekha.jpeg
        ├── Archana.jpeg
        ├── prasadam.jpeg
        └── Special_pooja.jpg
```

---

## Features

- **Hero:** Full-bleed `front_view.jpeg` background with overlaid welcome text and soft shadow for readability.
- **Lightbox:** Gallery images open in a lightbox (prev/next, close) without extra libraries.
- **Contact form:** Validation and submit; uses `{{CONTACT_ENDPOINT}}` or mailto fallback.
- **Carousel:** Bootstrap carousel for testimonials on the home page.
- **View-source safeguards (index.html):** Right-click, Ctrl+U, F12, Ctrl+Shift+I/J/C, and Ctrl+S are disabled.

---

## Running locally

1. Open `index.html` in a browser (double-click or **File → Open**).
2. Assets load from local files and Bootstrap via CDN; no server or build needed.
3. For `mailto:` and form behavior, a local server is optional (e.g. `npx serve .` or VS Code Live Server).

---

## Placeholders to update

Before going live, replace these in the HTML (and `main.js` where noted):

| Placeholder | Where | Example |
|-------------|-------|---------|
| `{{GOOGLE_FORM_URL}}` | index (Special Requests) | Your Google Form URL |
| `{{GOOGLE_FORM_URL_4}}` | darshana (Register / Book) | Your booking form URL |
| `{{CONTACT_ENDPOINT}}` | contact form `action`, `main.js` | Backend or form service URL |
| `{{TEMPLE_EMAIL}}` | `main.js` (mailto fallback) | e.g. `admin@srimahalakshmitemplemysuru.com` |
| Phone | `index.html`, `contact.html` | Use `href="tel:9945368776"` (no `{{}}` around the number) |
| Email | `index.html`, `contact.html` | Use `href="mailto:admin@..."` (no `{{}}` around the address) |
| Instagram | All footers | Use `href="https://www.instagram.com/shri.mahalakshmitemple/"` (no `{{}}` around the URL) |

Also set `meta property="og:image"` in `index.html` to your preferred share image (e.g. `images/front_view.jpeg`).

---

## Deploying (e.g. GitHub Pages)

1. Push the project to a GitHub repo.
2. **Settings → Pages** → Source: **Deploy from a branch**.
3. Branch: `main` (or your default), folder: **/ (root)**.
4. Save; the site will be available at `https://<username>.github.io/<repo>/` after a short delay.
5. If using a custom domain or subpath, adjust any absolute links.

---

## Tech notes

- **Bootstrap:** 5.3.3 from cdn.jsdelivr.net.
- **Testing:** Checked across common viewports (e.g. 320–1440px); navbar collapses on small screens.
- **Progressive enhancement:** Core links and content work without JavaScript; lightbox and carousel require JS.
- **Images:** Replace or add files under `images/` and `images/gallery/` as needed; update `alt` where necessary.

---

## Credits

**Developed by ABHI Integral**

© Shri Mahalakshmi Temple, Mysuru. All rights reserved.
