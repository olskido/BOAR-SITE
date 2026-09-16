import type { SVGProps } from "react";

/** Official X (Twitter) wordmark glyph. */
export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/** Telegram paper-plane glyph. */
export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.944 4.3c.32-1.28-.49-1.86-1.33-1.48L2.9 11.64c-.9.36-.89.88-.16 1.1l4.87 1.51 1.88 5.96c.24.66.12.92.81.92.53 0 .76-.24 1.06-.53l2.27-2.2 4.72 3.48c.87.48 1.5.23 1.72-.81zM9.6 13.86l9.02-5.69c.42-.25.8-.11.49.16l-7.34 6.63-.29 3.86z" />
    </svg>
  );
}

/** Minimal candlestick/chart glyph for DexScreener. */
export function DexIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 4v3M7 15v5" />
      <rect x="5" y="7" width="4" height="8" rx="1" />
      <path d="M17 4v5M17 17v3" />
      <rect x="15" y="9" width="4" height="8" rx="1" />
    </svg>
  );
}
