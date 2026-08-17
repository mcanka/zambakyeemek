import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SUSTAINABILITY_PILLARS } from "@/lib/data";

export function Sustainability() {
  return (
    <section className="relative overflow-hidden bg-yesil-2">
      <Placeholder
        label="Tarım Arazisi — Yer Tutucu"
        src="/images/tarim-arazisi.jpg"
        alt="Sürdürülebilirlik — tarladan sofraya"
        tone="yesil"
        className="absolute inset-0"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-yesil-2 via-yesil-2/90 to-yesil-2/60" />

      <Container className="relative py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.24em] uppercase text-kirmizi">
            Sürdürülebilirlik
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] tracking-tight text-un-soft max-w-3xl">
            Tarladan başlayan sorumluluk, sofrada tamamlanır.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8 max-w-4xl">
          {SUSTAINABILITY_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={120 + i * 100}>
              <div className="border-l-2 border-kirmizi/60 pl-5">
                <h3 className="font-display text-xl text-un-soft">{pillar.title}</h3>
                <p className="mt-2 text-sm text-un-soft/65 leading-relaxed">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={450}>
          <div className="mt-14">
            <Button href="/surdurulebilirlik" variant="outline-light">
              Detaylı Bilgi
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
