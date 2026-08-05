# hritikbhandari.github.io

Personal portfolio site — [hritikbhandari.github.io](https://hritikbhandari.github.io)

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to
GitHub Pages via GitHub Actions on every push to `main`.

## Local development

```bash
npm install
npm run dev
```

| Command           | Action                                    |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321`  |
| `npm run build`   | Build the static site to `./dist`         |
| `npm run preview` | Preview the production build locally      |

## Updating content

All resume content lives in [`src/data/resume.ts`](src/data/resume.ts) — profile, stats, skills,
experience, projects, education, and certifications. Components read from that file, so editing
content rarely requires touching markup.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages. In the repository
settings, **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.
