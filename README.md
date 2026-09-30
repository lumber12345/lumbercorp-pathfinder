# LUMBERCORP // PATHFINDER

An interactive profession & career guide for [Torn City](https://www.torn.com) — pick a profession and get a step-by-step roadmap from Day 1 to endgame, with checkable milestones that adapt to your actual account.

> **Unofficial fan tool.** Not affiliated with or endorsed by Torn / Chedburn Studios. Game mechanics change — always verify requirements in-game or on the [official wiki](https://wiki.torn.com).

## What's inside

**12 profession guides**, each broken into phases with checkable steps, tips, education priorities, merit guidance, company picks, daily routines and milestones:

- **City careers** — Grocer, Army, Casino, Medical, Education, Law, with the full position ladder (real work-stat requirements, pay and specials from the official wiki)
- **Career paths** — International Runner (plushie/flower flying), Combat Medic (revives), War Machine (PvP/faction war), Crime Specialist (Crimes 2.0), Market Shark (trading/stocks), Company Director

**Live account integration** via the Torn API (optional):

- Paste a **Limited Access** (read-only) key from `torn.com → Preferences → API`
- The app reads your level, bars, battle stats, work stats, education and networth
- **City-job qualification tracker** — shows your highest qualifying rank on every city ladder and exactly how far each work stat is from the next promotion
- **Big-3 passive tracker** — Medical (revive), Education (10% faster courses), Law (+5% crime gains)
- Personalized insight cards (Level 15 rush, education nudges, stat advice)
- Calls are proxied through the local dev server, so no CORS issues and no key in URLs you share
- Your key is stored only in your browser's `localStorage` and used exclusively for read-only calls

**Also included:**

- Progress checklists per guide, persisted in `localStorage`
- Hash-based deep links (`#/guide/medical`, `#/dashboard`) — refresh-safe and shareable
- 4 demo citizens (Day-3 rookie → endgame titan) to explore the dashboard without an API key

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173 (dev server incl. the /api/torn proxy)
npm run build    # production build in dist/
npm start        # serve dist/ + proxy /api/torn (Node >= 18, PORT env or 3000)
```

## Deploy to Render

No environment variables are required — every visitor enters their own Torn API key in the UI, and the browser talks to `api.torn.com` directly (Torn's API sends `access-control-allow-origin: *`). The client first tries a local `/api/torn` proxy and automatically falls back to the direct call when none exists.

### Option A — Static Site (recommended, free, never sleeps)

1. Push this folder to a GitHub/GitLab repo
2. In Render: **New + → Blueprint**, pick the repo — `render.yaml` configures everything
   (or **New + → Static Site** manually: build `npm install && npm run build`, publish `dist`)
3. Done. The app is pure static files; API calls go browser → api.torn.com

### Option B — Web Service (with server-side proxy)

If you'd rather proxy Torn API calls through your server (keeps the exact dev behavior):

1. **New + → Web Service**, Node runtime
2. Build command: `npm install && npm run build`
3. Start command: `npm start` (runs `server.js`: serves `dist/`, proxies `/api/torn`, health check at `/api/health`, binds `0.0.0.0:$PORT`)

### Notes

- `render.yaml` currently defines the static-site variant; see the comment inside it for the Web Service fields
- Hash-based routing (`#/guide/...`) means no rewrite rules are needed on any host
- API keys are stored only in each visitor's browser `localStorage` and used exclusively for read-only calls

## Guide sources

Content is distilled from long-standing community knowledge — Baldr's flying & leveling advice, the Crimes 2.0 *Criminal Primer*, and the official Torn wiki (city-job requirements mirror `wiki.torn.com/wiki/Job`). Numbers shift with patches; the app flags in-game verification where it matters.

## Tech

React 19 · Vite · Tailwind CSS v4 · lucide-react. No backend, no tracking, everything client-side except the read-only Torn API proxy.
