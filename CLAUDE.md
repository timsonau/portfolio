# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Tim Son's personal portfolio site: a single-page React app (no router) built with Vite, TypeScript, and Tailwind. Deployed to GitHub Pages.

## Commands

```
npm run dev       # start Vite dev server
npm run build     # tsc -b && vite build -> dist/
npm run preview   # preview the production build locally
npm run lint      # eslint .
```

There is no test suite and no test script in package.json.

Both `package-lock.json` and `pnpm-lock.yaml` are present, but CI (`.github/workflows/pages.yaml`) uses `npm ci` — use npm for installs unless told otherwise.

## Deployment

Pushing to `main` triggers `.github/workflows/pages.yaml`, which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. `vite.config.ts` sets `base: '/portfolio/'` only when `NODE_ENV === 'production'`, so built asset/absolute paths differ from dev — keep that in mind when adding links or assets.

## Architecture

- `src/main.tsx` mounts `<Portfolio />`, the only top-level component. There is no routing; the whole site is one scrolling page (`src/Portfolio.tsx`) split into `<section>`s (`about`, `experience`, `articles`, `skills`, `education`) rendered by the components in `src/components/`.
- Layout is a sticky two-column shell: a fixed left sidebar (name, nav, social links) and a scrollable right column of sections. `Navigation.tsx` renders anchor links (`#about`, etc.) rather than using a router.
- `useActiveSection` (`src/hooks/`) drives the nav's active-state highlighting. It manually computes which section is "active" from scroll position (no IntersectionObserver for this part — it's a custom activation-line calculation) and locks itself during programmatic scrolls triggered by nav clicks so the highlight doesn't flicker mid-scroll.
- Scroll-reveal animations use a `data-reveal` attribute convention: `Portfolio.tsx` sets up an `IntersectionObserver` (adds a `.revealed` class on intersect) plus a `MutationObserver` so reveal works for elements added after mount. Add `data-reveal` to any new element that should fade/slide in on scroll; the actual animation keyframes live in `src/index.css`.
- `useMouseGlow` tracks pointer position to drive the CSS radial-gradient cursor spotlight (desktop only, `lg:` breakpoint).
- `ArticlesSection` fetches the "My Articles" list live at runtime via `useMediumArticles`, which pulls Tim's Medium RSS feed through `api.rss2json.com` (no build-time content). Loading/error/empty states are all handled in `ArticlesSection.tsx`.
- Theming is CSS-variable based, defined in `src/index.css`: a `:root` "spaceship HUD" dark theme, and a `body.theme-xkcd` override block (comic/sketch look, hand-drawn SVG borders) that is toggled by hardcoding `class="theme-xkcd"` on `<body>` in `index.html` — there is no in-app theme switcher/JS toggle currently wired up. If asked to add theme switching, this is the mechanism to hook into.
- Tailwind's `theme.extend.colors` in `tailwind.config.js` maps utility classes (`bg-background`, `text-foreground`, `text-muted-foreground`, `text-highlight`, etc.) straight to these CSS variables, so components style themselves via Tailwind classes rather than raw CSS.

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues (github.com/timsonau/portfolio) via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
