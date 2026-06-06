# QR Code Component — HTML + CSS

[![CI](https://github.com/volod-one/training-project/actions/workflows/001-html-css.yml/badge.svg)](https://github.com/volod-one/training-project/actions/workflows/001-html-css.yml)

## Lighthouse scores

| Performance | Accessibility | Best Practices | SEO |
|-------------|---------------|----------------|-----|
| 100         | 100           | 100            | 100 |

## How to run

Open `index.html` directly in a browser. No build tools, no server needed.

```
open 001-qr-code-component/html-css/index.html
```

## Linting

```bash
npm run validate:html   # html-validate — catches invalid markup browsers silently fix
npm run lint:css        # stylelint — enforces modern CSS syntax and consistent style
```

## Testing

Visual regression with Playwright — compares screenshots against committed baselines.

```bash
npm install                                        # first time only
npx playwright install chromium firefox webkit     # first time only — downloads browser binaries
npm test                                           # run tests against baseline (fails if pixels changed)
npm run test:update                                # re-take screenshots and update baselines
```

Baselines are committed per OS and per browser in `tests/snapshots/{platform}/{browser}/` — desktop (1440px) and mobile (375px).
Each OS keeps its own baselines because font rendering differs between macOS, Linux, and Windows.

## CI

Two jobs run automatically on every push or PR that touches this folder:

- **lint** — runs `validate:html` and `lint:css`
- **test** — runs visual regression across Chromium, Firefox, and WebKit

Workflow: [`.github/workflows/001-html-css.yml`](../../../.github/workflows/001-html-css.yml)

To generate Linux baselines after the repo is on GitHub: go to Actions → "001 QR Code — HTML+CSS" → Run workflow → check "Regenerate and commit Linux baseline snapshots".

## Live URL

Deployed automatically to GitHub Pages on every push to `main`:
`https://volod-one.github.io/training-project/001-qr-code-component/html-css/`

## Key learnings

**CSS reset** — `box-sizing: border-box` makes padding subtract from width instead of adding to it (avoids surprise overflow). Zeroing `margin`/`padding` eliminates browser defaults that vary across browsers.

**Full-page vertical centering** — `min-height: 100vh` on `body` makes it fill the viewport, then `display: flex` + `justify-content: center` + `align-items: center` centers child elements both axes. `min-height` (not `height`) lets the body grow taller if content overflows.

**`display: block` on `img`** — Images are inline by default, which adds a small gap below them (descended from text baseline). `display: block` eliminates that gap so the image sits flush in the card.

**BEM naming** — `.card`, `.card__image`, `.card__body`, `.card__title`, `.card__text`: block (`card`) + element (`__image`). Makes the HTML-CSS relationship obvious and avoids specificity conflicts.

**`gap` on flex containers** — cleaner than margin on children; the container owns the spacing, not each item.

**`aspect-ratio` on images** — instead of setting explicit `width`/`height` HTML attributes (which can fight CSS sizing), `aspect-ratio: 1` in CSS tells the browser the image is square before it loads. Prevents layout shift without locking the render size to the intrinsic pixel dimensions.
