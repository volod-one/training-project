# QR Code Component — React + CSS

[![CI](https://github.com/volod-one/training-project/actions/workflows/001-react-css.yml/badge.svg)](https://github.com/volod-one/training-project/actions/workflows/001-react-css.yml)

## Lighthouse scores

| Performance | Accessibility | Best Practices | SEO |
|-------------|---------------|----------------|-----|
| 100         | 100           | 100            | 100 |

## How to run

```bash
npm install        # first time only
npm run dev        # dev server at http://localhost:5173 with hot reload
```

To preview the production build locally (what Lighthouse sees):

```bash
npm run build && npm run preview
```

## Linting

```bash
npm run lint:js    # ESLint — TypeScript + React rules
npm run lint:css   # stylelint — enforces modern CSS syntax and BEM naming
```

## Testing

Two layers — unit tests for component rendering, visual regression for pixel accuracy.

### Unit tests (Vitest + React Testing Library)

```bash
npm run test:unit
```

Fast, no browser needed. Tests that the component renders the right content — image, heading, body text.

### Visual regression (Playwright)

```bash
npm install                                        # first time only
npx playwright install chromium firefox webkit     # first time only — downloads browser binaries
npm run test:visual                                # compare against committed baselines
npm run test:visual:update                         # re-take screenshots and update baselines
```

Compares screenshots against committed baselines across Chromium, Firefox, and WebKit at desktop (1440px) and mobile (375px). Baselines are committed per OS in `tests/snapshots/{platform}/{browser}/` because font rendering differs between macOS and Linux.

## CI

Three checks run automatically on every push or PR that touches this folder:

- **lint** — runs `lint:js`, `lint:css`, and `test:unit`
- **test** — builds the app and runs visual regression across all three browsers

Workflow: [`.github/workflows/001-react-css.yml`](../../../.github/workflows/001-react-css.yml)

To generate Linux baselines after the repo is on GitHub: go to Actions → "001 QR Code — React+CSS" → Run workflow → check "Regenerate and commit Linux baseline snapshots".

## Live URL

Deployed automatically to GitHub Pages on every push to `main`:
`https://volod-one.github.io/training-project/001-qr-code-component/react-css/`

## Key learnings

**React component model** — the UI is split into `App` (page shell: main + footer) and `QrCard` (the card itself). Each component owns its own CSS file. This is the same BEM markup as the HTML+CSS solution, demonstrating that React doesn't require a different CSS strategy.

**`display: contents` on `#root`** — React mounts into a `<div id="root">` which would otherwise sit between `body` and `<main>` as a flex child, breaking the `gap` and centering. `display: contents` makes `#root` invisible to layout — `body`'s flex sees `<main>` and `<footer>` directly, identical to the plain HTML structure.

**Async font loading** — Google Fonts loaded with `media="print" onload="this.media='all'"` makes the stylesheet non-render-blocking. The browser paints immediately with the fallback font, then swaps in Outfit once it loads. `display=swap` in the font URL handles the FOUT gracefully. This is what pushed Performance from 95 → 100.

**Two test layers** — unit tests (Vitest + React Testing Library) verify that a component renders the right content; visual regression (Playwright) verifies that it looks right. They complement each other: unit tests are fast and run in Node, visual tests catch CSS regressions across real browser engines.

**Vite build pipeline** — `tsc -b && vite build` first type-checks, then bundles and minifies. The `VITE_BASE_URL` env var injects the correct subpath for GitHub Pages at build time without hardcoding it in source.
