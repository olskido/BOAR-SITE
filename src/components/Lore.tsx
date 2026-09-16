import Image from "next/image";
import { Reveal } from "./Reveal";

export function Lore() {
  return (
    <section id="lore" className="border-t border-white/10 py-14 sm:py-16 lg:py-20">
      <div className="container-boar">
        {/* Heading */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-3">The Lore</p>
          <h2 className="text-4xl leading-[0.95] sm:text-5xl md:text-6xl">
            Nikita Bier
            <br />
            <span className="text-boar-green">&amp; the Boar</span>
          </h2>
          <span className="accent-rule mt-6" />
          <p className="mt-6 font-display text-lg uppercase tracking-[0.16em] text-ink sm:text-xl">
            Some memes are posted once and disappear. The boar kept coming back.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Cinematic image */}
          <Reveal className="lg:col-span-2">
            <figure className="relative m-0 h-full min-h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 sm:min-h-[460px]">
              <Image
                src="/boar/lore/boar-clouds.jpg"
                alt="A colossal $BOAR wreathed in storm clouds and green energy over the mountains"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon/85 via-transparent to-transparent"
              />
              <figcaption className="absolute bottom-6 left-6 right-6">
                <p className="font-marker text-2xl leading-tight text-ink drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:text-3xl">
                  “thank you for the hog.”
                </p>
                <p className="mt-2 font-display text-xs uppercase tracking-[0.25em] text-ink-muted">
                  — Nikita, one boar later
                </p>
              </figcaption>
            </figure>
          </Reveal>

          {/* Narrative */}
          <Reveal className="lg:col-span-3" delay={0.08}>
            <div className="space-y-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
              <p>
                Over time, the internet started turning Nikita Bier into the
                “Nikita Boar” — edits, images, jokes, merch and increasingly
                ridiculous versions of the same character.
              </p>
              <p>
                And instead of killing the joke,{" "}
                <span className="text-ink">Nikita kept feeding it.</span>
              </p>
              <p>
                In January 2026, he responded to a ceramic “Nikita Boar” and
                discovered that an entire community was already making Nikita
                Boar merchandise.
              </p>
              <p className="text-ink">Then the meme escaped the screen.</p>
              <p>
                After Nikita reached one million followers, his friends had an
                actual boar delivered to the office. His response?
              </p>

              {/* Pull quotes — the running posts */}
              <div className="my-6 space-y-3 border-l-2 border-boar-green/70 pl-5">
                <p className="font-marker text-2xl text-ink sm:text-3xl">
                  “thank you for the hog.”
                </p>
                <p className="font-marker text-2xl text-ink sm:text-3xl">
                  “Posting hog.”
                </p>
                <p className="font-marker text-2xl text-ink sm:text-3xl">
                  “The Book of Boar.”
                </p>
              </div>

              <p>
                By that point, the boar wasn’t a random image anymore. It had
                become a recurring piece of Nikita’s internet identity —
                something the community could instantly recognize and remix.
              </p>
              <p>
                $BOAR grew out of that culture. Not an official Nikita Bier
                project. Not an X project. Just the internet doing what the
                internet does best:{" "}
                <span className="text-ink">taking a running joke way too far.</span>
              </p>

              <p className="pt-2 font-display text-base uppercase tracking-[0.22em] text-boar-green sm:text-lg">
                Same internet. Different animal.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Disclaimer */}
        <Reveal>
          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-ink-muted/80">
            $BOAR is a community meme project and is not affiliated with,
            endorsed by, or connected to Nikita Bier or X. All references are
            part of internet culture and parody.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
