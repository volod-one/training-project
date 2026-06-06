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
│   ├── react-css/             ← React + CSS implementation
│   ├── react-tailwind/        ← React + Tailwind CSS implementation
│   ├── swiftui/
│   └── flutter/
└── 002-next-challenge/
    └── …
```

Platform folder slugs: `android-compose`, `swiftui`, `flutter`, `react`, `react-css`, `react-tailwind`, `react-native`, `html-css`

Not every challenge has every platform — folders are added only when that port is done.

Each platform folder that has tests includes a `package.json` with `npm test` (Playwright visual regression).

## Development flow

`main` is always deployable — GitHub Pages serves from it, so only finished implementations land there.

Branch naming: `<challenge-number>/<platform>`

```
001/html-css
001/react-css
002/html-css
```

Typical flow for a new implementation:
1. Create a branch: `git checkout main && git pull && git checkout -b 001/html-css`
2. Build and iterate — CI runs tests on every push
3. Open a PR → CI runs lint + unit tests + visual regression
4. Merge to `main` → Pages deploys automatically

Work in progress stays off the live site until the PR is merged.

**First PR for any platform that uses Playwright** — Linux baselines don't exist yet, so
the visual test job will fail on the first push. Fix it before merging:

1. Trigger baseline generation via the CLI (the GitHub UI button only works on the default branch):
   ```bash
   gh workflow run <workflow-file>.yml --ref <your-branch> -f update_snapshots=true
   ```
   Example: `gh workflow run 001-react-tailwind.yml --ref 001/react-tailwind -f update_snapshots=true`
2. Wait for the run to finish — it commits baselines with `[skip ci]` and pushes to your branch
3. Pull the baseline commit locally: `git pull`
4. Push an empty commit to trigger a fresh CI run:
   ```bash
   git commit --allow-empty -m "ci: trigger CI after Linux baseline commit"
   git push
   ```
5. Wait for CI to go green, then merge

## Deployment

HTML+CSS, React+CSS, and React+Tailwind implementations are auto-deployed to GitHub Pages on push to `main`.
Each challenge lives at its own subpath — no config needed when adding new challenges.

Live site: `https://volod-one.github.io/training-project/`  
Enable in repo Settings → Pages → Source: **GitHub Actions**.

## Challenges

| #   | Challenge                                     | Difficulty | Platforms done |
|-----|-----------------------------------------------|------------|----------------|
| 001 | [QR Code Component](./001-qr-code-component/) | Newbie     | HTML+CSS, React+CSS, React+Tailwind |
