import { BoarVideo } from "./BoarVideo";
import { Reveal } from "./Reveal";
import { featuredVideo } from "@/data/videos";

export function FeaturedVideo() {
  return (
    <section id="videos" className="border-t border-white/10 py-14 sm:py-16 lg:py-20">
      <div className="container-boar">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Left — copy */}
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">Featured Video</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl">
              Enter
              <br />
              The <span className="text-boar-green">Boarverse</span>
            </h2>
            <p className="mt-4 font-display text-base uppercase tracking-[0.2em] text-ink-muted">
              The man. The meme. The boar. The coin.
            </p>
            <span className="accent-rule mt-6" />
          </Reveal>

          {/* Right — cinematic video (autoplays, muted, loops) */}
          <Reveal className="lg:col-span-8" delay={0.08}>
            <BoarVideo
              src={featuredVideo.src}
              poster={featuredVideo.poster}
              label={featuredVideo.label}
              orientation="landscape"
              priority
              className="rounded-2xl border border-white/10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center pb-5"
              >
                <span className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.35em] text-ink/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-boar-green" />
                  Playing forever
                </span>
              </div>
            </BoarVideo>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
