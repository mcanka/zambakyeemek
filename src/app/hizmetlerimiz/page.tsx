import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Taşıma yemek servisi, kurumsal catering ve özel organizasyon yemek hizmetlerimiz hakkında detaylı bilgi alın.",
};

const TONES = ["koyu", "un", "koyu"] as const;
const SERVICE_IMAGES: Record<string, string> = {
  "kurumsal-catering": "/images/mutfak-ekip.jpg",
};

export default function HizmetlerimizPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Ölçeğe özel çözümlerle, uçtan uca yemek hizmeti."
        description="Üretimden servise kadar tüm süreci kendi filomuz ve ekibimizle yönetiyoruz."
        imageLabel="Servis Ekibi — Yer Tutucu"
      />

      {SERVICES.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-24 py-20 md:py-24 ${i % 2 === 0 ? "bg-un-soft" : "bg-koyu texture-steel"}`}
        >
          <Container>
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <Placeholder
                  label={`${service.title} — Yer Tutucu`}
                  src={SERVICE_IMAGES[service.slug]}
                  alt={service.title}
                  tone={TONES[i % TONES.length]}
                  className="aspect-[4/3] w-full"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </Reveal>
              <Reveal delay={100}>
                <span
                  className={`font-mono text-xs tracking-[0.14em] uppercase ${
                    i % 2 === 0 ? "text-koyu" : "text-un-soft"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                </span>
                <h2
                  className={`mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight ${
                    i % 2 === 0 ? "text-komur" : "text-un-soft"
                  }`}
                >
                  {service.title}
                </h2>
                <p className={`mt-5 text-base md:text-lg leading-relaxed ${i % 2 === 0 ? "text-komur/70" : "text-un-soft/70"}`}>
                  {service.summary}
                </p>
                <p className={`mt-4 leading-relaxed ${i % 2 === 0 ? "text-komur/60" : "text-un-soft/60"}`}>
                  {service.detail}
                </p>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <CtaBand
        title="İhtiyacınıza uygun servis modelini birlikte kurgulayalım."
        description="Kurumunuzun ölçeğine ve vardiya düzenine göre özelleştirilmiş bir teklif hazırlayalım."
      />
    </>
  );
}
