import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/data";

const [main, ...rest] = SERVICES;

export function Services() {
  return (
    <section className="bg-un-soft py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title="Her gün binlerce insana lezzetli yemekler sunuyoruz."
            description="Ölçeğe özel çözümlerle, üretimden servise kadar tüm süreci kendi filomuz ve ekibimizle yönetiyoruz."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 border rule-light">
            <Placeholder
              label="Soğutmalı Nakliye Filosu — Yer Tutucu"
              alt="Zambak Yemek taşıma yemek servisi aracı"
              tone="un"
              className="aspect-[16/11] lg:aspect-auto"
            />
            <div className="p-8 md:p-12 flex flex-col justify-center bg-lacivert texture-steel">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-kirmizi">
                Ana Hizmet
              </p>
              <h3 className="mt-4 font-display text-3xl md:text-[2.2rem] leading-tight text-un-soft">
                {main.title}
              </h3>
              <p className="mt-4 text-un-soft/70 leading-relaxed">{main.summary}</p>
              <div className="mt-8">
                <Button href={`/hizmetlerimiz#${main.slug}`} variant="outline-light">
                  Hizmeti İncele
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((service, i) => (
            <Reveal key={service.slug} delay={150 + i * 100}>
              <div className="h-full border rule-light p-8 md:p-10 hover:border-kirmizi/40 transition-colors">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-kirmizi">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl leading-tight text-komur">
                  {service.title}
                </h3>
                <p className="mt-3 text-komur/65 leading-relaxed">{service.summary}</p>
                <div className="mt-6">
                  <Button href={`/hizmetlerimiz#${service.slug}`} variant="outline-dark" arrow>
                    İncele
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
