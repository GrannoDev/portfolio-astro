# Magnus Granno Portfolio

Personal portfolio built with Astro and Tailwind CSS.

## Stack

- Astro
- Tailwind CSS
- Netlify adapter

## Local Development

```sh
pnpm install
pnpm dev
```

## Production Notes

- Canonical production URL: `https://magnusgranno.com/`
- Static SEO assets live in `public/robots.txt`, `public/sitemap.xml`, and `public/og-image.png`
- Core metadata and structured data inputs live in `src/data/site.ts`

## Scripts

- `pnpm dev` starts the local Astro dev server
- `pnpm build` builds the production site
- `pnpm preview` previews the production build locally
