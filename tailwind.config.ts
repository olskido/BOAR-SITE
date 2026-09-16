import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // BOAR color system — ~80% dark, ~15% grey/white, ~5% green
        carbon: "#050706", // primary background (near-black)
        surface: {
          DEFAULT: "#090C0A",
          raised: "#0D100E",
        },
        boar: {
          // radioactive lime green — used sparingly
          green: "#B6FF36",
          greenDim: "#9BE22A",
          greenGlow: "rgba(182, 255, 54, 0.35)",
        },
        ink: {
          DEFAULT: "#F4F4F0", // primary text
          muted: "#929892", // secondary text
        },
      },
      borderColor: {
        hairline: "rgba(255,255,255,0.10)",
        faint: "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Barlow Condensed", "sans-serif"],
        heading: ["var(--font-heading)", "Anton", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        marker: ["var(--font-marker)", "Comic Sans MS", "cursive"],
      },
      maxWidth: {
        content: "1500px",
      },
      boxShadow: {
        greenGlow: "0 0 0 1px rgba(182,255,54,0.5), 0 0 24px rgba(182,255,54,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
