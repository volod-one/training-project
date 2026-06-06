# QR Code Component — React + Tailwind

[![CI](https://github.com/volod-one/training-project/actions/workflows/001-react-tailwind.yml/badge.svg)](https://github.com/volod-one/training-project/actions/workflows/001-react-tailwind.yml)

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
```

No CSS linting — Tailwind utility classes are generated; BEM enforcement does not apply.

## Testing

Two layers — unit tests for component rendering, visual regression for pixel accuracy.

### Unit tests (Vitest + React Testing Library)

```bash
npm run test:unit
```

### Visual regression (Playwright)

```bash
npm install                                        # first time only
npx playwright install chromium firefox webkit     # first time only
npm run test:visual                                # compare against committed baselines
npm run test:visual:update                         # re-take screenshots and update baselines
```

Compares screenshots across Chromium, Firefox, and WebKit at desktop (1440px) and mobile (375px). Baselines are committed per OS in `tests/snapshots/{platform}/{browser}/`.

## CI

Two checks run automatically on every push or PR that touches this folder:

- **lint** — runs `lint:js` and `test:unit`
- **test** — builds the app and runs visual regression across all three browsers

Workflow: [`.github/workflows/001-react-tailwind.yml`](../../../.github/workflows/001-react-tailwind.yml)

To generate Linux baselines after the repo is on GitHub: go to Actions → "001 QR Code — React+Tailwind" → Run workflow → check "Regenerate and commit Linux baseline snapshots".

## Live URL

Deployed automatically to GitHub Pages on every push to `main`:
`https://volod-one.github.io/training-project/001-qr-code-component/react-tailwind/`

## Key learnings

**Tailwind v4 setup** — CSS-first configuration: `@import "tailwindcss"` in the entry CSS file plus the `@tailwindcss/vite` plugin. No `tailwind.config.js` needed.

**Custom `@theme` tokens** — Tailwind's built-in `slate` color scale doesn't match the challenge style-guide values. Defining `--color-slate-300/500/900` in `@theme {}` makes them available as `bg-slate-300`, `text-slate-500` etc. This is the v4 way to extend the design system.

**`@layer base` for body styles** — Tailwind's preflight resets `body` margin and font. Body-level layout (centering, background, font-family) goes inside `@layer base` to sit at the right specificity tier after the reset.

**`#root { display: contents }`** — same fix as the React+CSS variant: makes React's mount div invisible to `body`'s flex layout so `<main>` and `<footer>` are direct flex children.

**Arbitrary values** — design measurements that don't map to Tailwind's default scale (`rounded-[20px]`, `text-[1.375rem]`, etc.) use the arbitrary value syntax `[value]`. Keeps the Figma specs exact without defining custom tokens for every dimension.

**Comparison with react-css** — same JSX structure, same component split, same public assets, same test suite. The only difference is how styles are applied: CSS files with BEM classes vs Tailwind utility classes inline in JSX.
