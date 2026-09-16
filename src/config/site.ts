/**
 * Central site configuration.
 *
 * All external links and the contract address live here so they are trivial
 * to change. Every value reads from an environment variable first and falls
 * back to a sensible default. See `.env.example`.
 *
 * IMPORTANT: no fake data, statistics, or invented social accounts live here.
 * Links that cannot be derived and are not configured are simply omitted.
 */

/** The $BOAR contract address (mint). Falls back to the approved reference CA. */
export const contractAddress =
  process.env.NEXT_PUBLIC_BOAR_CA ||
  "CvhPmJe1BgQLcR3ncDgx2Q8Xg9iVT9wJxBxA1Jbjpump";

/**
 * Buy link. Uses NEXT_PUBLIC_BUY_URL when provided, otherwise derives a
 * pump.fun coin page from the CA (the reference CA ends in `pump`).
 */
export const buyUrl =
  process.env.NEXT_PUBLIC_BUY_URL ||
  "https://pump.fun/coin/CvhPmJe1BgQLcR3ncDgx2Q8Xg9iVT9wJxBxA1Jbjpump";

/**
 * Official X / Twitter URL. Not derivable, so it is only shown where it makes
 * sense. The hero CTA falls back to the X platform home when this is empty.
 */
export const xUrl = process.env.NEXT_PUBLIC_X_URL || "";

/** Telegram invite. Only rendered when configured. */
export const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL || "";

/** DexScreener. Configured value wins, otherwise derived from the CA. */
export const dexscreenerUrl =
  process.env.NEXT_PUBLIC_DEXSCREENER_URL ||
  (contractAddress ? `https://dexscreener.com/solana/${contractAddress}` : "");

/** Absolute site URL for OpenGraph/Twitter image URLs. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://boar.example";

export const siteConfig = {
  name: "$BOAR",
  tagline: "Posting Hog",
  slogan: "Same internet. Different animal.",
  description: "Same internet. Different animal. The media home of $BOAR.",
  contractAddress,
  buyUrl,
  xUrl,
  telegramUrl,
  dexscreenerUrl,
  siteUrl,
} as const;

/** Hero "VIEW ON X" button target — X platform home if no account configured. */
export const heroXHref = xUrl || "https://x.com";

export type SiteConfig = typeof siteConfig;
