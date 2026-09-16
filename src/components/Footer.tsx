import Image from "next/image";
import { XIcon, TelegramIcon, DexIcon } from "./BrandIcons";
import { xUrl, telegramUrl, dexscreenerUrl } from "@/config/site";

const links = [
  { label: "Twitter / X", href: xUrl, Icon: XIcon },
  { label: "Telegram", href: telegramUrl, Icon: TelegramIcon },
  { label: "DexScreener", href: dexscreenerUrl, Icon: DexIcon },
].filter((l) => Boolean(l.href));

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-boar flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Image
            src="/boar/logo/boar-wordmark.jpg"
            alt="$BOAR"
            width={1080}
            height={350}
            className="h-6 w-auto"
          />
          <p className="text-xs leading-relaxed text-ink-muted">
            A community memecoin.
            <br />
            Not affiliated with Nikita Bier or X.
          </p>
        </div>

        {/* Right — only configured links render */}
        {links.length > 0 && (
          <nav aria-label="Community links">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {links.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-ink-muted transition hover:text-boar-green"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-display uppercase tracking-wide">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </footer>
  );
}
