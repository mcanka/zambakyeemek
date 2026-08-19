import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { SECTORS } from "@/lib/data";

const TONES = ["steel", "kirmizi", "yesil"] as const;

const SECTOR_IMAGES: Record<string, string> = {
  "egitim-kurumlari": "/images/egitim-kurumlari.jpg",
  "kamu-kurumlari": "/images/kamu-kurumlari.jpg",
};

export function Sectors() {
  return (
    <section className="bg-un-soft py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Sektörler"
            title="İzinize ve isteğe değer veriyoruz."
            description="Eğitim kurumlarından kamu kurumlarına, sanayi kuruluşlarına kadar; her sektörün kendine özgü ihtiyacına göre şekillenen bir hizmet modeli."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector.slug} delay={i * 110}>
              <Link
                href={`/sektorler#${sector.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(20,17,30,0.55)]"
              >
                <Placeholder
                  label={`${sector.title} — Yer Tutucu`}
                  src={SECTOR_IMAGES[sector.slug]}
                  alt={sector.title}
                  tone={TONES[i % TONES.length]}
                  className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-lacivert-2 via-lacivert-2/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-kirmizi">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-un-soft leading-tight">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-sm text-un-soft/70 leading-relaxed">
                    {sector.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-un-soft/0 transition-all duration-300 group-hover:text-un-soft/90">
                    İncele
                    <span aria-hidden className="transition-transform duration-300 -translate-x-1 group-hover:translate-x-0">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
