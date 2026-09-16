# $BOAR — Posting Hog

The official community media site for **$BOAR**. A fast, single-page, media-first
site: hero, featured film, meme gallery, lore, and more videos. Built to feel like
X culture × memecoin culture × premium dark editorial design — not a generic crypto
template.

> Same internet. Different animal.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion** — small in-view reveals only
- `next/image` + `next/font` (Anton, Barlow Condensed, Inter, Permanent Marker)
- Native HTML5 `<video>` with viewport-aware autoplay
- `lucide-react` for generic UI icons

No Three.js/WebGL, no database, no auth, no wallet-connect, no fake metrics.

## Requirements

- **Node.js 20.9+** (or 18.18+) and **npm**

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — sensible defaults are baked in
npm run dev                  # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

Other scripts: `npm run lint`, `npm run typecheck`.

## Where to change the CA and links

Everything lives in **`src/config/site.ts`**, which reads from environment
variables first (see `.env.example`). You do not need to touch component code.

| What | Env var | Default behaviour |
| --- | --- | --- |
| Contract address | `NEXT_PUBLIC_BOAR_CA` | Falls back to the CA shown in the reference design |
| Buy button | `NEXT_PUBLIC_BUY_URL` | Derived as `https://pump.fun/coin/<CA>` if unset |
| X / Twitter | `NEXT_PUBLIC_X_URL` | Hidden in footer if unset; hero "View on X" falls back to `https://x.com` |
| Telegram | `NEXT_PUBLIC_TELEGRAM_URL` | Hidden if unset |
| DexScreener | `NEXT_PUBLIC_DEXSCREENER_URL` | Derived as `https://dexscreener.com/solana/<CA>` if unset |
| Site URL (OG images) | `NEXT_PUBLIC_SITE_URL` | `https://boar.example` |

Set these in `.env.local` for local dev, and in your host's environment variables
for production. Footer links only render when their URL exists — nothing is invented.

## Media

All media is local, under `public/boar/`:

```
public/boar/
  logo/      boar-logo.jpg, boar-wordmark.jpg
  hero/      nikita-wallstreet.jpg
  memes/     meme-*.jpg
  lore/      boar-clouds.jpg
  videos/    featured.mp4 (+.jpg), boar-clip.mp4 (+.jpg), hog-vertical.mp4 (+.jpg)
  og/        og-image.jpg
```

The three source videos were transcoded to web-friendly H.264 MP4 (faststart,
scaled down) and each has a poster frame. To swap media, replace the files and
update `src/data/memes.ts` / `src/data/videos.ts` (each entry carries its
intrinsic width/height / orientation so there is no layout shift or distortion).

Content editing:
- Meme gallery items: `src/data/memes.ts`
- Videos (featured + more): `src/data/videos.ts`
- Lore copy: `src/components/Lore.tsx`

## Notes / decisions

- **Contract address** defaults to the one printed in the approved reference
  screenshot (`CvhPm…jpump`). Override via `NEXT_PUBLIC_BOAR_CA` if needed.
- **Buy / DexScreener** links are derived from the CA by default (pump.fun /
  DexScreener). Set the env vars to point at your real links.
- **X handle** was not supplied, so no `@handle` is invented. Set
  `NEXT_PUBLIC_X_URL` to reveal the footer X link and target the hero button.
- The lore rally line is attributed to **the $BOAR community**, not quoted as a
  real person, to avoid putting words in anyone's mouth. The footer disclaimer
  states the project is **not affiliated with Nikita Bier or X**.

## Behaviour highlights

- Videos autoplay **muted**, loop, `playsInline`; a shared `BoarVideo` component
  uses `IntersectionObserver` to play only what's on screen and pause the rest,
  with a small mute/unmute control and `prefers-reduced-motion` support.
- Meme gallery opens a keyboard-accessible lightbox (←/→ navigate, Esc closes).
- Sticky navbar blurs on scroll, scroll-spy highlights the active section, and a
  compact hamburger menu handles small screens.
- Fully responsive from 320px up to 4K, with a centered `max-w-[1500px]` column.
