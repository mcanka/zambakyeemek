import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NEWS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Medya Merkezi",
  description: "Mekaş Yemek Sanayi'nden güncel haberler, basın bültenleri ve duyurular.",
};

const formatter = new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "long", year: "numeric" });

export default function MedyaMerkeziPage() {
  return (
    <>
      <PageHero
        eyebrow="Medya Merkezi"
        title="Mekaş'tan güncel haberler ve duyurular."
        description="Üretim tesisimizden, sektörel gelişmelerden ve kurumsal faaliyetlerimizden haberler."
        imageLabel="Basın Arşivi — Yer Tutucu"
      />

      <section className="bg-un-soft py-20 md:py-28">
        <Container>
          <ul className="divide-y rule-light border-y rule-light">
            {NEWS.map((item, i) => (
              <Reveal key={item.slug} delay={i * 90} as="li">
                <article id={item.slug} className="scroll-mt-24 grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-3 md:gap-10 py-9">
                  <time dateTime={item.date} className="font-mono text-xs text-komur/45 tracking-wide">
                    {formatter.format(new Date(item.date))}
                  </time>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-komur leading-tight">{item.title}</h2>
                    <p className="mt-3 text-komur/65 leading-relaxed max-w-2xl">{item.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Basın ve iş birliği talepleri için bize ulaşın."
        description="Medya talepleriniz ve kurumsal iş birlikleri için doğrudan iletişime geçebilirsiniz."
      />
    </>
  );
}
