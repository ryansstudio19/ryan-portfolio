# ryanzannah.online

Personal portfolio of Ryan Zannah, founder and CEO of QORVAYN.

Built with Next.js (static export), React, Framer Motion and Lenis. Fonts (Orbitron, Rajdhani) are self-hosted through Fontsource.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
```

## Where things live

- `src/data/site.ts` — all content: bio, skills, languages, timeline, QORVAYN details, products, social links. Edit text here.
- `src/app/*` — one folder per page (`about`, `qorvayn`, `eskypixx`, `goalwear`, `ryneka`, `coming-soon`).
- `src/components/motion.tsx` — reveals, word-by-word headings, magnetic buttons, tilt cards, marquee, parallax, scroll progress.
- `src/components/InteractiveName.tsx` — the hero name whose letters react to the cursor and to touch.
- `public/images` — optimized WebP photos (`ryan/`, `sky/`, `brand/`).
- `public/favicon.svg` — RZ monogram; PNG and ICO versions sit next to it.

## Deploy

Vercel builds it as a Next.js project (`vercel.json` holds the old-URL redirects, including `/skypics` → `/eskypixx`).
