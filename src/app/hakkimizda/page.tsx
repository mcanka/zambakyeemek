import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { CERTIFICATIONS, COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Zirve Yemek'in hikayesi, vizyonu ve üretim tesisi hakkında bilgi edinin.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Sanayi disipliniyle, ev sıcaklığında yemek üretiyoruz."
        description={`${COMPANY.name}, modern üretim tesisinde endüstriyel ölçekte gerçek lezzeti üretme vizyonuyla çalışır.`}
        imageLabel="Tesis Girişi — Yer Tutucu"
      />

      <section className="bg-un-soft py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            <Reveal>
              <Placeholder
                label="Kurumsal Bina — Yer Tutucu"
                alt={`${COMPANY.name} kurumsal binası`}
                tone="un"
                className="aspect-[4/5] w-full"
              />
            </Reveal>
            <Reveal delay={100}>
              <SectionHeading eyebrow="Hikayemiz" title="Lezzeti, ölçeğe rağmen değil ölçekle birlikte büyütüyoruz." />
              <p className="mt-6 text-komur/70 leading-relaxed">
                Üretim tesisimiz, geniş kapalı alanı ve modern üretim
                ekipmanlarıyla günlük binlerce
                öğünü aynı hijyen ve kalite standardında hazırlayabilecek
                kapasiteye sahiptir.
              </p>
              <p className="mt-4 text-komur/70 leading-relaxed">
                Büyümemizi; yatırım yaptığımız teknoloji, işe aldığımız
                uzman kadro ve sahada uyguladığımız denetim disipliniyle
                sürdürülebilir kılıyoruz. Her müşterimize, ölçeği ne olursa
                olsun aynı titizlikle yaklaşıyoruz.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="border rule-light p-8 md:p-10 h-full">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-kirmizi">Vizyon</span>
                <p className="mt-4 font-display text-xl leading-snug text-komur">
                  Toplu yemek üretiminde, güvenilirliği ve şeffaflığı sektör
                  standardı haline getiren referans kuruluş olmak.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="border rule-light p-8 md:p-10 h-full">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-kirmizi">Misyon</span>
                <p className="mt-4 font-display text-xl leading-snug text-komur">
                  Hizmet verdiğimiz her kuruma; hijyenik, dengeli ve zamanında
                  ulaşan bir yemek deneyimi sunmak.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <StatsBand />

      <section className="bg-un-soft py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Belgelerimiz"
              title="Denetlenebilir ve belgeli bir üretim süreci."
              description="Gıda güvenliği yönetim sistemimiz, bağımsız kuruluşlar tarafından düzenli olarak denetlenir."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-3">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="font-mono text-xs tracking-[0.1em] uppercase text-komur/70 border rule-light px-4 py-2.5"
                >
                  {cert}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
