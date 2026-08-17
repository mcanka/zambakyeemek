import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PARTNERS } from "@/lib/data";

export function Partners() {
  return (
    <section className="bg-un-soft py-16 md:py-20 border-b rule-light">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] uppercase text-komur/40 text-center">
            Ortak İştiraklerimiz
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {PARTNERS.map((partner) => (
              <span
                key={partner.name}
                className="font-display text-2xl md:text-3xl text-komur/30 hover:text-komur/60 transition-colors"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
