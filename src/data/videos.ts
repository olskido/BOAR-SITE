export interface BoarClip {
  src: string;
  poster: string;
  label: string;
  /** "landscape" (16:9) or "portrait" (9:16) — drives the container shape */
  orientation: "landscape" | "portrait";
}

/** The cinematic featured video ("ENTER THE BOARVERSE"). */
export const featuredVideo: BoarClip = {
  src: "/boar/videos/featured.mp4",
  poster: "/boar/videos/featured.jpg",
  label: "Enter the Boarverse — featured film",
  orientation: "landscape",
};

/** Secondary clips shown in the "MORE VIDEOS" section. */
export const moreVideos: BoarClip[] = [
  {
    src: "/boar/videos/boar-clip.mp4",
    poster: "/boar/videos/boar-clip.jpg",
    label: "$BOAR clip",
    orientation: "landscape",
  },
  {
    src: "/boar/videos/hog-vertical.mp4",
    poster: "/boar/videos/hog-vertical.jpg",
    label: "$BOAR vertical clip",
    orientation: "portrait",
  },
];
