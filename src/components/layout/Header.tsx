"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300 backdrop-blur supports-[backdrop-filter]:bg-lacivert/90 ${
        scrolled
          ? "bg-lacivert/95 border-un-soft/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)]"
          : "bg-lacivert/80 border-transparent shadow-none"
      }`}
    >
      <div
        className={`mx-auto w-full max-w-[1240px] px-6 md:px-10 flex items-center justify-between gap-6 transition-[height] duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Logo tone="dark" textClassName="text-3xl md:text-4xl" />

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Ana menü">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-md px-3 py-2 text-[13.5px] font-medium transition-colors duration-200 ease-out hover:bg-kirmizi hover:text-un-soft ${
                  active ? "text-un-soft" : "text-un-soft/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className="hidden xl:block font-mono text-xs tracking-wide text-un-soft/80 hover:text-kirmizi transition-colors whitespace-nowrap"
          >
            {COMPANY.phoneDisplay}
          </a>
          <Link
            href="/iletisim"
            className="group relative overflow-hidden bg-kirmizi text-un-soft px-5 py-2.5 text-xs font-medium tracking-[0.08em] uppercase transition-all duration-300 hover:shadow-[0_10px_24px_-8px_rgba(249,66,58,0.55)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-kirmizi-dark transition-transform duration-300 ease-out group-hover:translate-x-0"
            />
            <span className="relative">Teklif Al</span>
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
