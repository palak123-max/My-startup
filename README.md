# Cadence AI — Marketing Website

The public marketing site for **Cadence AI**, built with Next.js 16 (App
Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    layout.tsx        Root layout, fonts, SEO metadata, JSON-LD
    page.tsx           Assembles all landing page sections
    globals.css         Tailwind v4 theme tokens + base styles
    sitemap.ts           Generates /sitemap.xml
    robots.ts             Generates /robots.txt
  components/
    ui/                  Reusable primitives (Button, Container, Reveal, ...)
    layout/               Navbar, Footer, ScrollProgress, ThemeToggle
    sections/               One component per landing page section
  lib/
    data.ts                 All site copy and content in one place
    utils.ts                 Small class-name helper
public/                       Founder photo, favicons, OG image
```

All marketing copy, pricing, testimonials, and FAQ content live in
`src/lib/data.ts` — edit that single file to update the site's content
without touching component code.

## Editing the founder section

The founder's photo, bio, email, and LinkedIn link are defined in the
`founder` object in `src/lib/data.ts`. The photo itself is
`public/founder.jpg`.

## Building for production

```bash
npm run build
```

This produces a fully static export in the `out/` directory (configured via
`output: "export"` in `next.config.ts`), so the site can be hosted on any
static file host.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration changes are required.
   Deploy.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. If the site will live at `https://<username>.github.io/<repo-name>/`
   (a project page, not a user/org page or custom domain), set the base
   path before building:

   ```bash
   NEXT_PUBLIC_BASE_PATH="/<repo-name>" npm run build
   ```

   If you're using a custom domain or a `<username>.github.io` user page,
   skip this step and just run `npm run build`.

3. Deploy the `out/` folder. The simplest approach is a GitHub Actions
   workflow — create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm install
         - run: npm run build
           env:
             NEXT_PUBLIC_BASE_PATH: /<repo-name>
         - uses: actions/upload-pages-artifact@v3
           with:
             path: out
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

4. In the repository's **Settings → Pages**, set the source to
   "GitHub Actions".

## Updating SEO details

`site.url` in `src/lib/data.ts` should be updated to the site's real
production domain before launch — it's used for the canonical URL,
OpenGraph tags, and the generated sitemap.

## Tech stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first theme configuration)
- **Framer Motion** for scroll reveals, hover states, and the animated
  hero diagram
- **Lucide** for icons
- **next-themes** for the light/dark mode toggle
- **Geist** (Sans + Mono) for typography, bundled locally — no external
  font requests at runtime
