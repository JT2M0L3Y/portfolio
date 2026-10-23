# Portfolio

A minimal portfolio built with Astro, Svelte, and Tailwind CSS, based on the
structure and visual direction of
[Astro Nano](https://github.com/markhorn-dev/astro-nano). The site is rendered
with Astro on Cloudflare Workers.

## Local development

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

Available commands:

| Command | Action |
| --- | --- |
| `npm run dev` | Start Astro at `localhost:4321` |
| `npm run check` | Check Astro, Svelte, and TypeScript diagnostics |
| `npm run build` | Check diagnostics, then build the production site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run generate-types` | Generate Cloudflare Worker types |

Routes live in `src/pages/`, shared page UI is built from Svelte components in
`src/components/`, and site copy, skills, and contact links are in
`src/data/site.ts`. Astro renders the pages and content on the server; Svelte
provides reusable UI and the hydrated theme control.

Single-segment pages such as `about.astro` and `skills.astro` live directly in
`src/pages/`. The `projects/[...slug].astro` route generates a detail page for
each project entry, so it belongs in a nested folder.

## Content

Add Markdown files to `src/content/projects/` and `src/content/work/`.
Projects use `title`, `summary`, and optional `order`, `featured`, `draft`,
`url`, and `repository` fields. Work entries use `company`, `role`, `startDate`,
and optional `endDate`, `order`, and `draft`; use the Markdown body as the role
description. Draft examples are excluded until you set `draft: false` or remove
the field. Collection schemas are in `src/content.config.ts`, and detail pages
are generated from the project file paths.

The `/about` page's section copy and `/skills` page's categorized skills are
configured in `src/data/site.ts`.

## Deployment

On pushes to `main`, GitHub Actions installs dependencies, builds the site, and
deploys the resulting Astro Worker and client assets with Wrangler. The Worker
serves the Astro routes; project and work Markdown collections are bundled at
build time, so content changes go live with the next deployment (they are not
read from the repository at request time).

Configure the `CLOUDFLARE_API_TOKEN` and `ACCOUNT_ID` repository secrets before
enabling deployment. The Cloudflare API token needs permission to deploy
Workers.
