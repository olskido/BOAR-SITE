import type { Metadata, Viewport } from "next";
import { Anton, Barlow_Condensed, Inter, Permanent_Marker } from "next/font/google";
import { siteUrl } from "@/config/site";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const barlow = Barlow_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "$BOAR — Posting Hog",
  description: "Same internet. Different animal.",
  applicationName: "$BOAR",
  keywords: ["$BOAR", "BOAR", "memecoin", "Solana", "posting hog", "boar meme"],
  openGraph: {
    title: "$BOAR — Posting Hog",
    description: "Same internet. Different animal.",
    url: "/",
    siteName: "$BOAR",
    type: "website",
    images: [
      {
        url: "/boar/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "$BOAR — Posting Hog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$BOAR — Posting Hog",
    description: "Same internet. Different animal.",
    images: ["/boar/og/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050706",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${barlow.variable} ${inter.variable} ${marker.variable}`}
    >
      <body className="bg-carbon text-ink antialiased">{children}</body>
    </html>
  );
}
