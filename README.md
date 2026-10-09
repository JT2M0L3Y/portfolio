# Portfolio

A personal portfolio site built with Astro, Svelte, and Tailwind CSS.

## Project plan

Development is intentionally staged so the site stays simple until a feature
creates a real need for more infrastructure. See the
[development roadmap](./docs/development-plan.md) for the goals and completion
criteria for each stage:

1. [ ] Build and refine the portfolio locally as a static site.
2. [ ] Establish consistent local and GitHub CI checks.
3. [ ] Deploy the static site to Cloudflare and connect its custom domain.
4. [ ] Add Cloudflare D1 only for content that benefits from being managed as data,
   with a small read-only API.
5. [ ] Evaluate whether Terraform is worth introducing for the Cloudflare
   infrastructure that actually exists.

The current repository has work in progress across the website, CI, deployment,
D1, and Terraform. The roadmap is the source of truth for the intended order;
existing scaffolding does not mean a later stage is complete or should be kept
without review.

## Local development

Use Node.js 24 and npm:

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
