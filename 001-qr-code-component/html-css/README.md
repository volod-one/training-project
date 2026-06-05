# QR Code Component — HTML + CSS

## How to run

Open `index.html` directly in a browser. No build tools, no server needed.

```
open 001-qr-code-component/html-css/index.html
```

## Key learnings

**CSS reset** — `box-sizing: border-box` makes padding subtract from width instead of adding to it (avoids surprise overflow). Zeroing `margin`/`padding` eliminates browser defaults that vary across browsers.

**Full-page vertical centering** — `min-height: 100vh` on `body` makes it fill the viewport, then `display: flex` + `justify-content: center` + `align-items: center` centers child elements both axes. `min-height` (not `height`) lets the body grow taller if content overflows.

**`display: block` on `img`** — Images are inline by default, which adds a small gap below them (descended from text baseline). `display: block` eliminates that gap so the image sits flush in the card.

**BEM naming** — `.card`, `.card__image`, `.card__body`, `.card__title`, `.card__text`: block (`card`) + element (`__image`). Makes the HTML-CSS relationship obvious and avoids specificity conflicts.

**`gap` on flex containers** — cleaner than margin on children; the container owns the spacing, not each item.
