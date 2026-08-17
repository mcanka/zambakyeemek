import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { SECTORS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sektörler",
  description:
    "Eğitim kurumları, kamu kurumları ve sanayi kuruluşlarına özel toplu yemek hizmeti çözümlerimiz.",
};

const TONES = ["steel", "biber", "zeytin"] as const;

export default function SektorlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Sektörler"
        title="Her sektörün kendine özgü ihtiyacına göre şekillenen hizmet."
        description="İzinize ve isteğe değer veriyoruz; eğitim, kamu ve sanayi kuruluşlarına uygun menü ve servis planlaması sunuyoruz."
        imageLabel="Sektör Genel Bakış — Yer Tutucu"
      />

      <section className="bg-un-soft py-20 md:py-28">
        <Container>
          <div className="space-y-6">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.slug} delay={i * 100} as="div">
                <div id={sector.slug} className="scroll-mt-24 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 md:gap-10 border rule-light p-7 md:p-10 items-center">
                  <Placeholder
                    label={`${sector.title} — Yer Tutucu`}
                    alt={sector.title}
                    tone={TONES[i % TONES.length]}
                    className="aspect-[16/10] w-full"
                  />
                  <div>
                    <span className="font-mono text-xs tracking-[0.14em] uppercase text-biber">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 font-display text-2xl md:text-3xl text-komur leading-tight">
                      {sector.title}
                    </h2>
                    <p className="mt-4 text-komur/65 leading-relaxed max-w-xl">{sector.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Sektörünüze uygun menü planlamasını konuşalım."
        description="Kurumunuzun türüne göre uyarlanmış bir servis modeli için bizimle iletişime geçin."
      />
    </>
  );
}
