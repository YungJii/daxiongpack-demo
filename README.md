# Daxiong Pack public website

A Vue 3 + Nuxt static-site redesign built from the text, image and video materials on `https://www.daxiongpack.com/`.

The public pages are pre-rendered as complete HTML for SEO and preserve the current legacy routes:

- `/`
- `/aboutus.html`
- `/products.html`
- `/Support.html`
- `/news.html`

## Run locally

```bash
npm install
npm run dev
```

## Generate the deployable static site

```bash
npm run generate
```

The generated site is written to `.output/public` and can be deployed to any static host. It includes page-specific metadata, canonical links, JSON-LD, `robots.txt` and `sitemap.xml`.

## GitHub Pages demo

Pushes to `main` automatically deploy through `.github/workflows/deploy-pages.yml`. The workflow builds with `/daxiongpack-demo/` as the base URL and marks the public demo as `noindex` so it does not compete with the production domain in search results.

The inquiry form is intentionally front-end-only in this demo. Connect it to a mail service or API before production use.

The complete source-site archive is delivered separately at `../daxiongpack-source-archive`.
