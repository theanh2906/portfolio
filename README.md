# Tang The Anh - Portfolio

A responsive, CV-led portfolio built with React, TypeScript and Vite. The Career Profile design uses a sticky desktop profile and a single-column mobile layout.

## Development

Requires Node.js 22.12+.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

```sh
npm run lint
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

The production output is `dist/`. The site is static and does not need a backend or environment variables.

## Content

- `src/data/profile.ts`: CV-derived identity, work history, projects and skills.
- `public/Tang_The_Anh_Senior_Fullstack_NZ_Resume.pdf`: original downloadable CV.
- `src/App.tsx`: navigation, timeline disclosures, project details and contact actions.
- `src/App.css`: responsive layout and component styles.
- `src/index.scss`: local Inter font, base styles and reduced-motion support.

Career information is CV-derived. ProductCrew is a separate source-researched project in `src/components/ProductCrew.tsx`; see `docs/productcrew-source-notes.md` for evidence and scope. Adding a project does not change the original downloadable CV.

## Assets

Inter is self-hosted under `public/fonts/`; its SIL Open Font License is included. The AI Trip Planner thumbnail is a screenshot of the public demo captured on 2026-09-08. System Monitor uses a generated conceptual illustration, identified as such on the page. Project images are optimized WebP files.

## Verification

See `design-qa.md` for browser checks and design comparison evidence. Local screenshots and original assets are in the git-ignored `resources/` directory. Verification covers Chrome desktop/mobile emulation, navigation, disclosures, email copying, PDF integrity and image loading. No automated unit-test suite is configured.
