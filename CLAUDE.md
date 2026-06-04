# CLAUDE.md

Guidance for Claude Code when working with this repository.

## Project overview

Static personal portfolio/resume for **Ricardo Flores Maynasa**, hosted on GitHub Pages at `refloresmaynasa.github.io`.

**Stack:** Plain HTML, CSS (custom properties), and vanilla JS — no build tools, bundlers, or frameworks.

---

## File structure

```
├── index.html       # Single-page app (Home, Experience, Skills, Education, Contact)
├── style.css        # All styles — CSS custom properties + responsive layout
└── images/
    ├── profile photo
    ├── logo
    ├── phone background
    └── cv.pdf       # Downloadable CV
```

---

## Design system

### Theme (CSS custom properties in `:root`)

| Variable               | Value     | Role                  |
|------------------------|-----------|-----------------------|
| `--background-color`   | `#26282b` | Main page background  |
| `--background-color2`  | `#262626` | Secondary surfaces    |
| `--highlight-color`    | `#ff004f` | Accent / brand color  |
| `--font-color`         | `#ffffff` | Primary text          |

> When modernizing styles, extend this palette using CSS custom properties — don't hardcode new hex values.

### Typography & icons

- **Font:** Google Fonts — [Quicksand](https://fonts.google.com/specimen/Quicksand) (weights 300, 500)
- **Icons:** Font Awesome Kit — `https://kit.fontawesome.com/cc05ecf1ea.js`

---

## Key components

### Skills tabs

```js
opentab(tabname)   // toggles active-link / active-tab CSS classes
```

Tab IDs must be consistent across `.tab-titles` `onclick` attributes and `<article id="...">` elements:

| Tab ID         | Description           |
|----------------|-----------------------|
| `languages`    | Programming languages |
| `databases`    | Databases             |
| `technologies` | Frameworks & tools    |
| `systems`      | Operating systems     |
| `softskills`   | Soft skills           |

### Mobile navigation

- Controlled via `openmenu()` / `closemenu()` — animates the side menu using the CSS `right` property
- Hamburger/close icons: hidden on desktop via `nav .fa-solid { display: none }`, shown only at `≤600px`
- Responsive breakpoint: **600px**

### Contact form

- Submits to a **Google Apps Script** endpoint (stored as `scriptURL` in `index.html`)
- Field names (`Name`, `Email`, `Message`) must match the Google Sheet mapping in Apps Script — don't rename them without updating the Sheet

---

## Modernization goals

When updating this project, prefer these approaches:

- **CSS:** Use modern layout (CSS Grid, Flexbox) where applicable; extend via CSS custom properties
- **Animations:** CSS transitions/animations over JS-driven ones
- **Accessibility:** Semantic HTML5 elements (`<nav>`, `<section>`, `<article>`, `<main>`), ARIA labels where needed
- **Performance:** Lazy-load images (`loading="lazy"`), minimize render-blocking resources
- **Responsiveness:** Mobile-first approach; test at 375px, 600px, and 1024px breakpoints
- **Fonts/Icons:** Keep existing providers (Google Fonts, Font Awesome Kit) — just update usage patterns if needed

---

## Deployment

**Do not push to `main` or auto-deploy.** Preview changes by opening `index.html` directly in a browser.