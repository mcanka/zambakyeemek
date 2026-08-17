import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NEWS } from "@/lib/data";

const formatter = new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "long", year: "numeric" });

export function MediaCenter() {
  return (
    <section className="bg-lacivert texture-steel py-20 md:py-28">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Medya Merkezi"
              title="Zirve Yemek'ten güncel haberler ve daha fazlası."
              tone="dark"
              className="max-w-xl"
            />
          </Reveal>
          <Reveal delay={80}>
            <Button href="/medya-merkezi" variant="outline-light" className="shrink-0">
              Tüm Haberler
            </Button>
          </Reveal>
        </div>

        <ul className="mt-14 divide-y rule-dark border-y rule-dark">
          {NEWS.map((item, i) => (
            <Reveal key={item.slug} delay={120 + i * 90} as="li">
              <a
                href={`/medya-merkezi#${item.slug}`}
                className="group grid grid-cols-1 md:grid-cols-[9rem_1fr_auto] items-baseline md:items-center gap-2 md:gap-8 py-7"
              >
                <time
                  dateTime={item.date}
                  className="font-mono text-xs text-un-soft/45 tracking-wide"
                >
                  {formatter.format(new Date(item.date))}
                </time>
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-un-soft transition-transform duration-300 group-hover:translate-x-2">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-un-soft/55 max-w-xl">{item.excerpt}</p>
                </div>
                <span
                  aria-hidden
                  className="hidden md:inline text-kirmizi text-xl transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
