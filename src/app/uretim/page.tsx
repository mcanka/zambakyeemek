import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { CERTIFICATIONS, PRODUCTION_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Üretim",
  description:
    "Zirve Yemek üretim tesisi, teknolojik altyapısı, hijyen standartları ve kalite belgeleri hakkında bilgi edinin.",
};

export default function UretimPage() {
  return (
    <>
      <PageHero
        eyebrow="Üretim"
        title="Modern tesisimizde, dünya standartlarında üretim."
        description="Yatırdığımız teknolojik yatırımlar ve deneyimli ekibimizle, hijyenden ödün vermeden yüksek kapasiteli üretim gerçekleştiriyoruz."
        imageLabel="Üretim Hattı Genel Görünüm — Yer Tutucu"
        image="/images/mutfak-ekip.jpg"
      />

      <section className="bg-un-soft py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Süreç"
            title="Dört aşamalı, izlenebilir bir üretim disiplini."
            description="Tedarikten teslimata kadar her aşama, kritik kontrol noktaları ile kayıt altına alınır."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTION_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 90}>
                <div className="border rule-light p-8 h-full">
                  <span className="font-mono text-2xl text-kirmizi">{step.step}</span>
                  <h3 className="mt-4 font-display text-xl text-komur">{step.title}</h3>
                  <p className="mt-2 text-komur/65 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-lacivert texture-steel py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <Placeholder
                label="Hijyen Uygulamaları — Yer Tutucu"
                src="/images/ekipman-detay.jpg"
                alt="Zirve Yemek hijyen ve kalite kontrol"
                tone="steel"
                className="aspect-[4/5] w-full border border-un-soft/10"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal delay={100}>
              <SectionHeading
                eyebrow="Kalite ve Hijyen"
                title="Belgeli, denetlenebilir bir gıda güvenliği yönetimi."
                tone="dark"
              />
              <p className="mt-6 text-un-soft/70 leading-relaxed">
                Üretim sürecimizin her aşaması, gıda güvenliği yönetim
                sistemlerine uygun şekilde planlanır ve bağımsız kuruluşlar
                tarafından düzenli olarak denetlenir.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert}
                    className="font-mono text-xs tracking-[0.1em] uppercase text-un-soft/70 border border-un-soft/20 px-4 py-2.5"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <StatsBand />

      <CtaBand
        title="Üretim kapasitemiz hakkında bilgi alın."
        description="Tesisimizi yerinde görmek veya kapasite planlaması hakkında görüşmek için bize ulaşın."
      />
    </>
  );
}
