import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { SECTORS } from "@/lib/data";

const TONES = ["steel", "kirmizi", "yesil"] as const;

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
              <div className="group relative aspect-[3/4] overflow-hidden">
                <Placeholder
                  label={`${sector.title} — Yer Tutucu`}
                  alt={sector.title}
                  tone={TONES[i % TONES.length]}
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
