# Roadmap

**Target:** Live v2 this week.  
**Constraint:** No build step. Plain HTML/CSS/JS + `data.json`.

---

## Step 1 — Extract content into `data.json`

Create `data.json` with the full resume content:
- `profile` — name, bio, phone, email, social links
- `experience[]` — all jobs (company, role, period, location, description)
- `skills` — main cards + tabbed lists (languages, databases, technologies, systems, softskills)
- `education[]` — degrees and certifications

**Done when:** All content is in `data.json`; no resume text remains hardcoded in `index.html`.

---

## Step 2 — JS renderer

Write `render.js` (loaded by `index.html`) that:
- `fetch`es `data.json` on `DOMContentLoaded`
- Injects each section using `innerHTML` or `insertAdjacentHTML`
- Preserves current CSS class names so existing styles still apply

**Done when:** The page looks and works exactly as before, but content comes from JSON.

---

## Step 3 — Projects section

Add a new `#projects` section between Experience and Skills:
- Data shape in `data.json`: `projects[]` → `{ title, company, period, tech[], outcome, link? }`
- Focus: **work projects with outcomes** (Mojix/Towbook, Hakan fintech services, Mojix IoT platform, DGI tax audit system)
- Card layout: project title, company, tech tags, one-sentence outcome
- Nav link: add "Projects" to the navbar

**Done when:** 3–5 project cards are live and linked from the navbar.

---

## Step 4 — Visual polish

Targeted improvements that reinforce the personal brand without a full redesign:
- Hero section: stronger headline that leads with the brand statement ("10+ years building enterprise software across Java, .NET, and cloud")
- Consistent spacing and section rhythm
- Skills cards: fix the "More..." anchor; ensure hover state works on touch
- Responsive: verify layout at 375px, 600px, 1024px
- Images: add `loading="lazy"` to profile photo

**Done when:** The site passes a personal "would I send this to a recruiter today?" check.

---

## Step 5 — Deploy and verify

- Push `main` → GitHub Pages auto-deploys
- Verify live URL: [refloresmaynasa.github.io](https://refloresmaynasa.github.io)
- Check contact form still submits to Google Sheet
- Check downloadable CV link works

**Done when:** Live site is confirmed working end-to-end.

---

## Deferred (post-v2)

These are good ideas but not this week:

| Item | Why deferred |
|---|---|
| Dark/light mode toggle | Requires JS + CSS variable swap; polish feature |
| Animated skill bars or charts | Risk of feeling gimmicky; revisit with real data |
| Blog / writing section | No content ready yet |
| i18n (Spanish) | Worthwhile but a separate effort |
