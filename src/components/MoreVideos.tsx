import { BoarVideo } from "./BoarVideo";
import { Reveal } from "./Reveal";
import { moreVideos } from "@/data/videos";

export function MoreVideos() {
  const [landscape, portrait] = moreVideos;

  return (
    <section className="border-t border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="container-boar">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl">More Videos</h2>
            <p className="mt-3 font-display text-base uppercase tracking-[0.2em] text-ink-muted">
              Watch. Share. Post hog.
            </p>
            <span className="accent-rule mt-5" />
          </div>
          <p
            aria-hidden="true"
            className="font-marker text-3xl text-ink/70 sm:text-4xl"
          >
            Hog forever.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr] lg:items-start">
          <Reveal>
            <BoarVideo
              src={landscape.src}
              poster={landscape.poster}
              label={landscape.label}
              orientation="landscape"
              className="rounded-2xl border border-white/10"
            />
          </Reveal>

          <Reveal delay={0.08} className="mx-auto w-full max-w-[300px] lg:mx-0">
            <BoarVideo
              src={portrait.src}
              poster={portrait.poster}
              label={portrait.label}
              orientation="portrait"
              className="rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
