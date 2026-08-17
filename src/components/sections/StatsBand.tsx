import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { STATS } from "@/lib/data";

export function StatsBand() {
  return (
    <section className="bg-celik texture-steel">
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 90}
              className={`px-1 md:px-8 ${i > 0 ? "border-l rule-dark" : ""}`}
            >
              <div className="flex items-baseline gap-1 font-mono text-safran-soft">
                {stat.unit === "m" ? (
                  <span className="text-2xl md:text-3xl">m</span>
                ) : null}
                <Counter value={stat.value} className="text-3xl md:text-4xl tabular-nums" />
                <span className="text-2xl md:text-3xl">{stat.suffix}</span>
              </div>
              <p className="mt-2 font-mono text-[11px] md:text-xs tracking-[0.12em] uppercase text-un-soft/55">
                {stat.label}
                {stat.unit && stat.unit !== "m" ? (
                  <span className="block text-un-soft/35 normal-case tracking-normal mt-0.5">{stat.unit}</span>
                ) : null}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
