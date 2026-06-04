# Tech Stack

## Constraints

- **No build step** — deploy by pushing files; GitHub Pages serves them directly
- **No npm / bundler** — zero toolchain overhead
- **No framework** — plain HTML, CSS, and vanilla JS only

These are non-negotiable. They keep the site fast, simple, and permanently maintainable without dependency rot.

## Stack

| Layer | Choice | Rationale |
|---|---|---|
| Markup | HTML5 (semantic) | `<nav>`, `<section>`, `<article>`, `<main>` — accessible by default |
| Styles | CSS3 — custom properties + Flexbox/Grid | Theming via `:root` variables; layout without frameworks |
| Logic | Vanilla ES6 JS | Tab switching, mobile menu, form submit, JSON rendering |
| **Content** | **`index.html`** | **All resume content lives directly in HTML — edit in one place** |
| Icons | Font Awesome Kit | Already integrated; keep as-is |
| Fonts | Google Fonts — Quicksand (300, 500) | Already integrated; keep as-is |
| Form backend | Google Apps Script | Writes contact submissions to a Google Sheet |
| Hosting | GitHub Pages (`main` branch) | Push to deploy |

## Content editing

All resume content lives directly in `index.html`. Each section is clearly commented (`<!-- Experience -->`, `<!-- Projects -->`, etc.). To update content, edit the relevant section in the file — no build step, no separate data file.

## Theme

CSS custom properties in `:root` — extend here, never hardcode new hex values:

```css
--background-color:  #26282b   /* main background */
--background-color2: #262626   /* secondary surfaces */
--highlight-color:   #ff004f   /* accent / brand */
--font-color:        #ffffff   /* primary text */
```

## Browser targets

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). No IE11 support required.
