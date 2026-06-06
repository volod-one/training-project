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

## Challenges

| #   | Challenge                                     | Difficulty | Platforms done |
|-----|-----------------------------------------------|------------|----------------|
| 001 | [QR Code Component](./001-qr-code-component/) | Newbie     | HTML+CSS       |
