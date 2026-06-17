# Rio Vincent Portfolio

Dark glassmorphism portfolio website.

## Stack
- Vanilla JS (ES modules)
- Vite (bundler & dev server)
- Vanilla CSS (no framework)

## Cara run

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build untuk deploy

```bash
npm run build
```
Output ada di folder `dist/` — bisa langsung upload ke Netlify, Vercel, atau GitHub Pages.

## Struktur folder

```
rio-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.js                  ← entry point
    ├── styles/
    │   ├── globals.css          ← design system & variables
    │   ├── navbar.css
    │   ├── hero.css
    │   └── sections.css         ← semua section selain hero
    ├── components/
    │   ├── background.js        ← animated canvas orbs
    │   ├── navbar.js            ← sticky navbar + theme toggle
    │   ├── scroll-reveal.js     ← intersection observer animations
    │   └── scroll-top.js        ← scroll to top button
    └── sections/
        ├── hero.js
        ├── skills.js
        ├── portfolio.js
        ├── testimonials.js      ← juga berisi blog, contact, footer
        ├── blog.js
        ├── contact.js
        └── footer.js
```

## Edit konten

Semua data/teks ada di file JS masing-masing section:

| Mau edit apa | File yang dibuka |
|---|---|
| Nama, bio, stats hero | `src/sections/hero.js` |
| Daftar skill & persentase | `src/sections/skills.js` |
| Proyek portfolio | `src/sections/portfolio.js` |
| Testimoni | `src/sections/testimonials.js` |
| Artikel blog | `src/sections/testimonials.js` |
| Info kontak & sosial | `src/sections/testimonials.js` |
| Warna & variabel desain | `src/styles/globals.css` |

## Deploy ke Vercel / Netlify

1. Push ke GitHub
2. Connect repo di Vercel/Netlify
3. Build command: `npm run build`
4. Output dir: `dist`
