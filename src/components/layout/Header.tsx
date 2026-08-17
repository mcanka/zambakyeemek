import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-lacivert/95 backdrop-blur supports-[backdrop-filter]:bg-lacivert/90 border-b rule-dark">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        <Logo tone="dark" />

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Ana menü">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-mono text-[10px] xl:text-[11px] tracking-[0.1em] xl:tracking-[0.14em] uppercase text-un-soft/75 hover:text-kirmizi transition-colors"
            >
              {link.label}
            </Link>
          ))}
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
            className="bg-kirmizi text-un-soft px-5 py-2.5 text-xs font-medium tracking-[0.08em] uppercase hover:bg-kirmizi-dark transition-colors"
          >
            Teklif Al
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
