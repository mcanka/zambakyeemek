import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kariyer",
  description: "Zambak Yemek ekibine katılın — açık pozisyonlar ve başvuru bilgileri.",
};

const REASONS = [
  {
    title: "Büyüyen Bir Ekip",
    description: "250'nin üzerinde çalışanımızla, kesintisiz üretim disiplinine sahip geniş bir ekibin parçası olun.",
  },
  {
    title: "Gelişim Fırsatı",
    description: "Mesleki eğitim ve içeriden yükseltme kültürüyle uzun soluklu bir kariyer inşa edin.",
  },
  {
    title: "Modern Çalışma Ortamı",
    description: "Sanayi standartlarına uygun, güvenli ve modern tesisimizde çalışın.",
  },
] as const;

export default function KariyerPage() {
  return (
    <>
      <PageHero
        eyebrow="Kariyer"
        title="Ekibimize katılın."
        description="Toplu yemek üretiminde sektörün önde gelen kuruluşlarından birinde kariyer fırsatlarını keşfedin."
        imageLabel="Ekip — Yer Tutucu"
      />

      <section className="bg-un-soft py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Neden Zambak Yemek?" title="Kesintisiz üretimin arkasındaki ekibin parçası olun." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 100}>
                <div className="border rule-light p-8 h-full">
                  <span className="font-mono text-xs text-koyu tracking-[0.14em] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-komur">{reason.title}</h3>
                  <p className="mt-2 text-komur/65 leading-relaxed">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-koyu texture-steel py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-xl">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-un-soft mb-4">
                Açık Pozisyonlar
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-un-soft leading-tight">
                Şu anda ilan edilmiş açık pozisyon bulunmuyor.
              </h2>
              <p className="mt-4 text-un-soft/65 leading-relaxed">
                Öz geçmişinizi iletebilir, uygun bir pozisyon açıldığında sizinle
                iletişime geçmemizi sağlayabilirsiniz.
              </p>
              <div className="mt-8">
                <Button href={`mailto:${COMPANY.email}?subject=${encodeURIComponent("İş Başvurusu")}`} variant="outline-light">
                  Öz Geçmiş Gönder
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
