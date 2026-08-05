# Maitri Thummar — Portfolio

A premium, animated portfolio built entirely from Maitri's resume. React + Vite + TypeScript + Tailwind CSS + Framer Motion.

Design direction: a "blueprint / schema" aesthetic — deep navy background with a faint grid, cyan/amber accents, monospace labels — chosen because the subject is a backend-leaning full stack developer (ASP.NET MVC, SQL Server, APIs, Git). The hero shows an animated request-lifecycle diagram of her actual stack, and the experience section is styled like a git commit log.

## What's real vs. placeholder

Everything in `src/data/resume.ts` is sourced directly from the resume. No projects, certifications, or achievements are shown because none are listed on the resume yet — the components for those sections are intentionally not built in. When real ones exist, add data objects to `resume.ts` and create matching components following the pattern of `Skills.tsx` or `Education.tsx`.

Three things are explicit, visually-marked placeholders (dashed borders, "add link" labels) because the resume doesn't include them:
- GitHub profile URL (`profile.socials.github`)
- LinkedIn profile URL (`profile.socials.linkedin`)
- Hosted resume PDF link (`profile.socials.resumeUrl`) — drop `resume.pdf` into `/public` and set this to `/resume.pdf`

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

Requires Node 18+.

## Project structure

```
src/
  components/       # One component per section (Hero, About, Skills, Experience, Education, Contact, Footer)
                     # + Navbar, Loader, ScrollProgress, CursorGlow, Reveal (scroll-animation helpers)
  data/
    resume.ts        # Single source of truth for all content — edit this, not the components
  hooks/
    useTheme.ts       # Dark/light mode, persisted to localStorage
  index.css           # Design tokens (CSS variables) + Tailwind directives
  App.tsx
  main.tsx
public/
  robots.txt
  sitemap.xml         # update the domain once you have one
index.html            # meta tags, Open Graph, JSON-LD structured data
tailwind.config.js
vercel.json           # SPA rewrite rule, kept for future React Router use
```

## Contact form

The contact form uses `react-hook-form` for validation but does not send email yet — submitting shows a local confirmation toast. To make it actually send:

1. Create a free account at EmailJS (emailjs.com) and set up a service + template.
2. `npm install @emailjs/browser`
3. In `src/components/Contact.tsx`, replace the body of `onSubmit` with:
   ```ts
   import emailjs from "@emailjs/browser";
   await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
   ```
4. Store the IDs in a `.env` file (`VITE_EMAILJS_SERVICE_ID`, etc.) — never commit real keys.

## Dark / light mode

Defaults to dark. Toggled via the sun/moon icon in the navbar; preference persists in `localStorage`. All colors are CSS custom properties in `src/index.css`, swapped via a `.light` class on `<html>` — see `useTheme.ts`.

## Deploying to Vercel

**Option A — CLI**
```bash
npm install -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — Git integration (recommended)**
1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`. (Vercel usually detects these automatically.)
4. Deploy. Every push to `main` auto-deploys.

After deploying, update `public/sitemap.xml` and the Open Graph tags in `index.html` with your real domain.

## Scaling this later

The structure supports adding, without major refactoring:
- **Projects / Certifications / Achievements** — add data + a component per the pattern above, drop it into `App.tsx`
- **Blog** — add `react-router-dom`, a `/blog` route, and a `content/` folder (MDX or a headless CMS)
- **Multi-language** — wrap strings from `resume.ts` with `react-i18next`
- **Analytics** — drop a Vercel Analytics or Plausible script tag into `index.html`
