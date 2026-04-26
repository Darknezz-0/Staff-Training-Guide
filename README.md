# Discord Staff Training Guide

A static React + Vite site that serves as a training guide for Discord server staff members. Covers roles, responsibilities, moderation procedures, and conduct expectations.

## Tech Stack

- **React 18** (with TypeScript)
- **Vite 5** (build tool)
- **Vercel** (hosting)

## Project Structure

```
├── index.html          # App entry point
├── src/
│   ├── main.tsx        # React root render
│   ├── App.tsx         # Root component
│   ├── styles.css      # Global styles
│   ├── components/
│   │   ├── StaffTrainingGuide.tsx
│   │   ├── ModuleCard.tsx
│   │   ├── ProgressBar.tsx
│   │   └── QuizCard.tsx
│   └── data/
│       ├── modules.ts  # Training module definitions
│       └── quizzes.ts  # Quiz question data
├── vercel.json         # Vercel SPA routing config
├── vite.config.js      # Vite build config
└── tsconfig.json       # TypeScript config
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Preview production build locally
npm run build && npm run preview
```

## Deploy to Vercel

### Option 1 — One-click (recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Darknezz-0/Staff-Training-Guide)

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 3 — Vercel Dashboard

1. Import the repository at [vercel.com/new](https://vercel.com/new)
2. Vercel auto-detects **Vite** — no extra configuration required
3. Default settings work out of the box:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

> SPA routing is handled by `vercel.json` — all paths are rewritten to `index.html`.

