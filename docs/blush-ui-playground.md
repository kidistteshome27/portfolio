# Blush UI Playground

A small interactive UI kit showcase built for **Kidist Teshome's** portfolio and GitHub profile.

## What it does

- **4 color themes** — Rose Garden, Lavender Dream, Peach Sorbet, Evening Mauve
- **4 button variants** — Filled, Soft, Outline, Ghost
- **Live preview card** — updates instantly when you change options
- **Copy palette** — copies theme colors to clipboard
- **Micro-interactions** — like button, hover animations via Framer Motion

## Tech stack

| Tool | Purpose |
|------|---------|
| React 19 | UI components |
| TypeScript | Type-safe theme tokens |
| Framer Motion | Animations & transitions |
| CSS custom properties | Runtime theme switching |

## File structure

```
src/showcase/blush-ui/
├── BlushUIPlayground.tsx   # Main interactive demo
├── themes.ts               # Theme tokens & button variants
docs/
└── blush-ui-playground.md  # This file
```

## Run locally

```bash
git clone https://github.com/kidistteshome27/portfolio.git
cd portfolio
npm install
npm run dev
```

Open the portfolio and scroll to **Showcase Project → Blush UI Playground**.

## Push to GitHub

### Option A — Push the full portfolio (recommended)

```bash
cd portfolio
git init
git add .
git commit -m "Add portfolio with Blush UI Playground showcase"
git branch -M main
git remote add origin https://github.com/kidistteshome27/portfolio.git
git push -u origin main
```

### Option B — Push showcase as its own repo

1. Create a new repo on GitHub: `blush-ui-playground`
2. Copy `src/showcase/blush-ui/` into a fresh Vite project
3. Push to `https://github.com/kidistteshome27/blush-ui-playground`

## Deploy

Deploy the portfolio to **Vercel**, **Netlify**, or **GitHub Pages**:

```bash
npm run build
# dist/ folder is ready to deploy
```

## License

MIT — free to use and modify.
