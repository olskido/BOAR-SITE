"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { buyUrl } from "@/config/site";

const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Memes", href: "#memes", id: "memes" },
  { label: "Videos", href: "#videos", id: "videos" },
  { label: "Lore", href: "#lore", id: "lore" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Translucent/blurred background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lightweight scrollspy for the active nav item.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-carbon/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-boar flex h-16 items-center justify-between gap-4 md:h-[72px]">
        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center"
          aria-label="$BOAR — home"
        >
          <Image
            src="/boar/logo/boar-wordmark.jpg"
            alt="$BOAR"
            width={1080}
            height={350}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </a>

        {/* Center links (desktop) */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                className="group relative py-2 font-display text-sm font-semibold uppercase tracking-[0.18em] transition-colors"
              >
                <span
                  className={
                    active === link.id
                      ? "text-boar-green"
                      : "text-ink-muted group-hover:text-ink"
                  }
                >
                  {link.label}
                </span>
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-boar-green transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={buyUrl || "#"}
            target={buyUrl ? "_blank" : undefined}
            rel={buyUrl ? "noopener noreferrer" : undefined}
            className="inline-flex items-center rounded-full bg-boar-green px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-carbon transition hover:brightness-110 sm:px-5"
          >
            Buy $BOAR
          </a>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink transition hover:border-boar-green/50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-carbon/95 backdrop-blur-md md:hidden"
      >
        <ul className="container-boar flex flex-col py-2">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "true" : undefined}
                className={`block py-3 font-display text-base font-semibold uppercase tracking-[0.18em] ${
                  active === link.id ? "text-boar-green" : "text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
