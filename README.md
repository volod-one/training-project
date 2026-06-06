# Frontend Mentor Challenges

Multi-platform challenge portfolio. Each challenge is implemented in Jetpack Compose first,
then ported to other platforms on request.

## Structure

```
FrontendMentor/
├── README.md                  ← you are here
├── 001-challenge-name/
│   ├── README.md              ← challenge overview + platform status table
│   ├── style-guide.md         ← colors and typography from Frontend Mentor
│   ├── assets/                ← shared images and design mockups
│   ├── android-compose/       ← Jetpack Compose implementation
│   ├── html-css/              ← HTML + CSS implementation
│   ├── swiftui/
│   ├── flutter/
│   └── react/
└── 002-next-challenge/
    └── …
```

Platform folder slugs: `android-compose`, `swiftui`, `flutter`, `react`, `react-native`, `html-css`

Not every challenge has every platform — folders are added only when that port is done.

Each platform folder that has tests includes a `package.json` with `npm test` (Playwright visual regression).

## Development flow

`main` is always deployable — GitHub Pages serves from it, so only finished implementations land there.

Branch naming: `<challenge-number>/<platform>`

```
001/html-css
001/react
002/html-css
```

Typical flow for a new implementation:
1. Create a branch: `git checkout -b 001/html-css`
2. Build and iterate — CI runs tests on every push
3. Open a PR → review → merge to `main` → Pages deploys automatically

Work in progress stays off the live site until the PR is merged.

## Deployment

HTML+CSS implementations are auto-deployed to GitHub Pages on push to `main`.
Each challenge lives at its own subpath — no config needed when adding new challenges.

Live site: `https://volod-one.github.io/training-project/`  
Enable in repo Settings → Pages → Source: **GitHub Actions**.

## Challenges

| #   | Challenge                                     | Difficulty | Platforms done |
|-----|-----------------------------------------------|------------|----------------|
| 001 | [QR Code Component](./001-qr-code-component/) | Newbie     | HTML+CSS       |
