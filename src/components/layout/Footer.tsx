import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { COMPANY, FOOTER_LINKS } from "@/lib/data";

const SOCIALS = [
  { href: COMPANY.social.instagram, label: "Instagram" },
  { href: COMPANY.social.facebook, label: "Facebook" },
  { href: COMPANY.social.x, label: "X" },
  { href: COMPANY.social.youtube, label: "YouTube" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-lacivert-2 texture-steel">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1.1fr] gap-12 md:gap-8">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 text-sm leading-relaxed text-un-soft/60 max-w-xs">
              Modern üretim tesisimizde, endüstriyel ölçekte gerçek lezzeti
              hijyen ve disiplinle üretiyoruz.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-kirmizi mb-4">
              Site Haritası
            </p>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-un-soft/70 hover:text-un-soft transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-kirmizi mb-4 md:opacity-0">
              &nbsp;
            </p>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.slice(3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-un-soft/70 hover:text-un-soft transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-kirmizi mb-4">
              İletişim
            </p>
            <address className="not-italic text-sm text-un-soft/70 leading-relaxed space-y-2">
              <p>{COMPANY.addressLine}</p>
              <p>
                <a href={`tel:${COMPANY.phoneHref}`} className="hover:text-un-soft transition-colors">
                  {COMPANY.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-un-soft transition-colors">
                  {COMPANY.email}
                </a>
              </p>
            </address>

            <div className="flex items-center gap-4 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-un-soft/50 hover:text-un-soft transition-all duration-200 ease-out font-mono text-[10px] tracking-wide uppercase border border-un-soft/20 hover:border-kirmizi hover:bg-kirmizi hover:-translate-y-0.5 px-2.5 py-1.5"
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t rule-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-un-soft/40 tracking-wide">
            © {year} {COMPANY.legalName}. Tüm hakları saklıdır.
          </p>
          <p className="font-mono text-[11px] text-un-soft/40 tracking-wide">
            Türkiye
          </p>
        </div>
      </Container>
    </footer>
  );
}
