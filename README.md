## Temple Website

Responsive multi-page temple site built with HTML, CSS, JavaScript, and Bootstrap 5. Includes Home, Darshana, Gallery, and Contact pages.

### Structure
- `index.html` – Home
- `darshana.html` – Darshana/booking tiles
- `gallery.html` – Photo gallery with lightbox
- `contact.html` – Contact details, map, and form
- `styles.css` – Custom styles
- `main.js` – Behavior (lightbox, validation, smooth scroll)
- `images/` – Replace placeholder images as needed

### Running locally
1) Open `index.html` in any modern browser (double-click or drag into the browser).  
2) All assets load from local files and CDNs—no build step required.

### Updating placeholders
- Google Forms: replace `{{GOOGLE_FORM_URL}}` (and `_2` etc.) in the HTML.
- Map embed: replace `{{MAP_EMBED_URL}}` in `contact.html`.
- Contact info: `{{TEMPLE_PHONE}}`, `{{TEMPLE_EMAIL}}`, `{{SOCIAL_LINKS}}`, `{{CONTACT_ENDPOINT}}`.
- Images: swap files in `assets/images/` and adjust `alt` text.

### Deploying (GitHub Pages)
1) Commit/push to GitHub.  
2) In repository settings → Pages, pick `main` branch and `/ (root)`.  
3) After a few minutes your site is live at the provided URL. Update any absolute links if needed.

### Notes
- Tested with Chrome responsive devtools breakpoints (320–1440px).
- Lightbox and modals work without additional libraries.
- Progressive enhancement: links/buttons still function when JS is disabled.

