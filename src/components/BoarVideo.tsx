"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

export interface BoarVideoProps {
  src: string;
  poster: string;
  /** accessible description of the clip */
  label: string;
  orientation?: "landscape" | "portrait";
  className?: string;
  /** eager loading + full preload for the primary/hero clip */
  priority?: boolean;
  loop?: boolean;
  /** show the small mute/unmute control (default true) */
  controls?: boolean;
  /** extra overlay content (e.g. the "PLAYING FOREVER" caption) */
  children?: React.ReactNode;
}

/**
 * Reusable, performance-conscious autoplay video.
 *
 * - muted + playsInline + loop so browsers permit autoplay
 * - IntersectionObserver plays only while sufficiently in view, pauses off-screen
 * - preload="metadata" for secondary clips, "auto" for priority
 * - respects prefers-reduced-motion (no auto-play; offers a manual play button)
 * - graceful loading + error states, never distorts aspect ratio
 */
export function BoarVideo({
  src,
  poster,
  label,
  orientation = "landscape",
  className = "",
  priority = false,
  loop = true,
  controls = true,
  children,
}: BoarVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const inViewRef = useRef(false);

  // Detect reduced-motion preference (client only).
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const tryPlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const p = v.play();
    if (p && typeof p.then === "function") {
      p.then(() => {
        setIsPlaying(true);
        setAutoplayBlocked(false);
      }).catch(() => {
        // Autoplay may be blocked; leave paused with poster + play affordance.
        setIsPlaying(false);
        setAutoplayBlocked(true);
      });
    }
  }, []);

  // Play only while in the viewport; pause when out.
  useEffect(() => {
    const el = containerRef.current;
    const v = videoRef.current;
    if (!el || !v) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        inViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (!reducedMotion) tryPlay();
        } else {
          v.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, tryPlay]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    // Unmuting counts as a user gesture — make sure it is playing.
    if (!next && inViewRef.current) tryPlay();
  };

  const manualPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    tryPlay();
  };

  const aspect =
    orientation === "portrait" ? "aspect-[9/16]" : "aspect-video";

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden ${aspect} ${className}`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster={poster}
        muted={muted}
        loop={loop}
        playsInline
        preload={priority ? "auto" : "metadata"}
        aria-label={label}
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => setIsReady(true)}
        onError={() => setHasError(true)}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Loading shimmer until first frame is decodable */}
      {!isReady && !hasError && (
        <div
          className="absolute inset-0 animate-pulse bg-surface-raised"
          aria-hidden="true"
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-raised px-4 text-center text-sm text-ink-muted">
          Video unavailable.
        </div>
      )}

      {/* Manual play affordance only when we are NOT autoplaying
          (reduced motion, or autoplay was blocked) — never a flashing
          play button over a video that is already playing. */}
      {!hasError && !isPlaying && (reducedMotion || autoplayBlocked) && (
        <button
          type="button"
          onClick={manualPlay}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/10"
          aria-label={`Play ${label}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/50 backdrop-blur-sm">
            <Play className="h-6 w-6 translate-x-0.5 text-ink" aria-hidden="true" />
          </span>
        </button>
      )}

      {/* Mute / unmute — small and unobtrusive */}
      {controls && !hasError && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-3 left-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-ink backdrop-blur-sm transition hover:border-boar-green/60 hover:text-boar-green"
          aria-label={muted ? "Unmute video" : "Mute video"}
          aria-pressed={!muted}
        >
          {muted ? (
            <VolumeX className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      )}

      {children}
    </div>
  );
}
