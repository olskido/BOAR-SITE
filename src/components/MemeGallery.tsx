"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { memes } from "@/data/memes";
import { Lightbox } from "./Lightbox";

export function MemeGallery() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: "smooth" });
  };

  return (
    <section id="memes" className="border-t border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="container-boar">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl">Memes</h2>
            <p className="mt-3 font-display text-base uppercase tracking-[0.2em] text-ink-muted">
              The culture.
              <br className="hidden sm:block" /> In pictures.
            </p>
            <span className="accent-rule mt-5" />
            <button
              type="button"
              onClick={() => setOpenIndex(0)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition hover:border-boar-green/60 hover:text-boar-green"
            >
              View all memes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Scroll controls (desktop) */}
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              aria-label="Scroll memes left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink transition hover:border-boar-green/60 hover:text-boar-green"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              aria-label="Scroll memes right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink transition hover:border-boar-green/60 hover:text-boar-green"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Editorial horizontal gallery */}
        <ul
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {memes.map((meme, i) => (
            <li
              key={meme.src}
              className="h-64 shrink-0 snap-start sm:h-80 lg:h-[26rem]"
              style={{ aspectRatio: `${meme.width} / ${meme.height}` }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block h-full w-full overflow-hidden rounded-xl border border-white/[0.08] transition duration-300 hover:border-boar-green/50 hover:shadow-greenGlow"
                aria-label={`Open meme: ${meme.alt}`}
              >
                <Image
                  src={meme.src}
                  alt={meme.alt}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {openIndex !== null && (
        <Lightbox
          items={memes}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
