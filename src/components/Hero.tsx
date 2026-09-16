import Image from "next/image";
import { CopyAddress } from "./CopyAddress";
import { XIcon } from "./BrandIcons";
import { buyUrl, heroXHref, xUrl } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="hero pt-[92px] pb-10 sm:pt-[104px]"
    >
      {/* faint green glow, kept extremely subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-8%] h-[520px] w-[520px] rounded-full bg-boar-green/10 blur-[150px]"
      />

      {/* ============================================================
          DESKTOP ARTWORK STAGE (lg+)
          A background visual layer, not a card. The Wall Street scene
          emerges from darkness behind the interface.
         ============================================================ */}
      <div aria-hidden="true" className="hero-art hidden lg:block">
        {/* blurred twin — softens only the emerging edge */}
        <Image
          src="/boar/hero/nikita-wallstreet.jpg"
          alt=""
          fill
          priority
          sizes="80vw"
          className="hero-art__img hero-art__img--blur"
        />
        {/* sharp base — left edge dissolves via mask */}
        <Image
          src="/boar/hero/nikita-wallstreet.jpg"
          alt="$BOAR — a hog in a pinstripe suit checking a gold watch on Wall Street, the Charging Bull behind him"
          fill
          priority
          sizes="80vw"
          className="hero-art__img hero-art__img--sharp"
        />
        {/* black gradient — the primary blend into the page */}
        <div className="hero-art__fade-left" />
        <div className="hero-art__fade-bottom" />
        <div className="hero-art__fade-top" />
      </div>

      {/* handwritten accent, desktop only */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-[3vw] top-[128px] z-10 hidden max-w-[9rem] rotate-[6deg] text-right font-marker text-xl leading-tight text-ink/70 lg:block xl:text-2xl"
      >
        Same internet. Different animal.
      </p>

      {/* ============================================================
          CONTENT COLUMN (left) — always perfectly sharp
         ============================================================ */}
      <div className="container-boar relative w-full">
        <div className="max-w-[640px] lg:max-w-[46%] xl:max-w-[620px]">
          <p className="eyebrow mb-3">Nikita Boar</p>

          <Image
            src="/boar/logo/boar-wordmark.jpg"
            alt="$BOAR"
            width={1080}
            height={350}
            priority
            sizes="(max-width: 1024px) 88vw, 640px"
            className="hero-wordmark select-none"
          />

          <p className="hero-posting mt-2 font-marker text-ink">
            Posting Hog.
          </p>

          <p className="mt-4 font-display text-sm font-medium uppercase tracking-[0.24em] text-ink-muted sm:text-base lg:text-lg">
            Same internet. Different animal.
          </p>

          {/* mobile / tablet artwork — stacked, no left-fade needed */}
          <div className="hero-art-mobile mt-7 lg:hidden">
            <Image
              src="/boar/hero/nikita-wallstreet.jpg"
              alt="$BOAR — a hog in a pinstripe suit checking a gold watch on Wall Street, the Charging Bull behind him"
              width={1080}
              height={1080}
              priority
              sizes="88vw"
              className="hero-art-mobile__img"
            />
            <div aria-hidden="true" className="hero-art-mobile__fade" />
          </div>

          <div className="mt-6 max-w-md">
            <CopyAddress />
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={buyUrl || "#"}
              target={buyUrl ? "_blank" : undefined}
              rel={buyUrl ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center rounded-full bg-boar-green px-8 py-3.5 font-display text-base font-bold uppercase tracking-wide text-carbon transition hover:brightness-110 sm:text-lg"
            >
              Buy $BOAR
            </a>

            <a
              href={heroXHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={xUrl ? "View $BOAR on X" : "Open X"}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-surface-raised px-8 py-3.5 font-display text-base font-semibold uppercase tracking-wide text-ink transition hover:border-white/40 sm:text-lg"
            >
              <XIcon className="h-4 w-4" />
              View on X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
