export interface Meme {
  src: string;
  alt: string;
  /** intrinsic width/height for correct aspect ratio + no layout shift */
  width: number;
  height: number;
}

/**
 * Meme gallery assets. Only real, supplied $BOAR artwork — no placeholders,
 * no duplicates to fill space.
 */
export const memes: Meme[] = [
  {
    src: "/boar/hero/nikita-wallstreet.jpg",
    alt: "$BOAR hog in a pinstripe suit checking a gold watch outside the New York Stock Exchange",
    width: 1080,
    height: 1080,
  },
  {
    src: "/boar/memes/meme-flying.jpg",
    alt: "$BOAR leaping over a colorful city skyline",
    width: 389,
    height: 680,
  },
  {
    src: "/boar/memes/meme-floral.jpg",
    alt: "$BOAR in a floral shirt on a hilltop breathing rainbow energy at sunset",
    width: 510,
    height: 680,
  },
  {
    src: "/boar/memes/meme-throne.jpg",
    alt: "$BOAR climbing a mountain toward a golden throne in the clouds",
    width: 383,
    height: 680,
  },
  {
    src: "/boar/memes/meme-acorn.jpg",
    alt: "$BOAR unearthing a giant golden acorn beneath an ancient tree",
    width: 383,
    height: 680,
  },
  {
    src: "/boar/memes/meme-minecart.jpg",
    alt: "$BOAR pushing a minecart overflowing with golden coins across a lava field",
    width: 544,
    height: 680,
  },
];
