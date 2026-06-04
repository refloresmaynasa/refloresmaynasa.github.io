# refloresmaynasa.github.io

Personal portfolio and online résumé for **Ricardo Edwin Flores Maynasa**, a software developer with 10+ years of experience building and maintaining enterprise applications in Java and C#/.NET.

🔗 **Live site:** [refloresmaynasa.github.io](https://refloresmaynasa.github.io)

---

## Overview

A single-page, responsive portfolio that presents an interactive résumé. It is built with plain **HTML, CSS, and vanilla JavaScript** — no build tools, bundlers, or frameworks — and is hosted on **GitHub Pages**.

### Sections

| Section        | Content                                                              |
|----------------|----------------------------------------------------------------------|
| **Home**       | Profile photo, contact details, social links, and a short bio        |
| **Experience** | Chronological work history from 2007 to present                      |
| **Skills**     | Highlight cards plus tabbed lists (languages, databases, tools, etc.)|
| **Education**  | Degrees and certifications                                           |
| **Contact**    | Contact form, social links, and downloadable CV                      |

---

## Tech stack

- **HTML5** — semantic single-page layout
- **CSS3** — custom properties (theming), Flexbox, and responsive design (600px breakpoint)
- **Vanilla JavaScript** — tab switching, mobile menu, and form submission
- **[Google Fonts](https://fonts.google.com/specimen/Quicksand)** — Quicksand (weights 300, 500)
- **[Font Awesome](https://fontawesome.com/)** — icons via Kit
- **Google Apps Script** — contact form backend (writes submissions to a Google Sheet)

---

## Project structure

```
.
├── index.html        # Single-page app (Home, Experience, Skills, Education, Contact)
├── style.css         # All styles — CSS custom properties + responsive layout
├── images/
│   ├── user.jpg              # Profile photo
│   ├── logo.png              # Site logo
│   ├── phone-background.png  # Background image
│   └── CV-Ricardo-Flores.pdf # Downloadable CV
├── CLAUDE.md         # Guidance for Claude Code
├── LICENSE
└── README.md
```

---

## Theme

Colors are defined as CSS custom properties in `:root` (see `style.css`):

| Variable              | Value     | Role                 |
|-----------------------|-----------|----------------------|
| `--background-color`  | `#26282b` | Main page background |
| `--background-color2` | `#262626` | Secondary surfaces   |
| `--highlight-color`   | `#ff004f` | Accent / brand color |
| `--font-color`        | `#ffffff` | Primary text         |

---

## Key interactions

- **`opentab(tabname)`** — toggles the active tab in the Skills section.
- **`openmenu()` / `closemenu()`** — slides the mobile navigation menu in and out (≤600px).
- **Contact form** — submits `Name`, `Email`, and `Message` to a Google Apps Script endpoint via `fetch`.

---

## Running locally

No build step is required. Clone the repo and open the page in a browser:

```bash
git clone https://github.com/refloresmaynasa/refloresmaynasa.github.io.git
cd refloresmaynasa.github.io
```

Then open `index.html` directly, or serve the folder with any static server:

```bash
# Python
python -m http.server 8000

# Node
npx serve
```

---

## Deployment

The site is published with **GitHub Pages** from the `main` branch — pushing to `main` updates the live site automatically.

---

## Contact

- **Email:** ricky.reflores@gmail.com
- **LinkedIn:** [ricardo-flores-maynasa](https://www.linkedin.com/in/ricardo-flores-maynasa/)
- **GitHub:** [@refloresmaynasa](https://github.com/refloresmaynasa)

---

## License

See [LICENSE](LICENSE) for details.
