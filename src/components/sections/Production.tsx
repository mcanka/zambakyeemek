import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CERTIFICATIONS, PRODUCTION_STEPS } from "@/lib/data";

export function Production() {
  return (
    <section className="bg-lacivert texture-steel py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Üretim"
            title="Dört aşamalı, izlenebilir bir üretim disiplini."
            description="Yatırdığımız teknolojik yatırımlar ve modern tesisimizle, dünya standartlarında hazır yemek üretimi sunuyoruz."
            tone="dark"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
          <Reveal delay={100}>
            <Placeholder
              label="Üretim Hattı — Yer Tutucu"
              alt="Zirve Yemek üretim tesisi"
              tone="steel"
              className="aspect-[4/5] w-full border border-un-soft/10"
            />
          </Reveal>

          <div>
            <ol className="divide-y rule-dark border-y rule-dark">
              {PRODUCTION_STEPS.map((step, i) => (
                <Reveal key={step.step} delay={150 + i * 90} as="li">
                  <div className="flex gap-6 py-6 md:py-7">
                    <span className="font-mono text-sm text-kirmizi pt-1 w-8 shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-un-soft">{step.title}</h3>
                      <p className="mt-1.5 text-sm md:text-base text-un-soft/65 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={150 + PRODUCTION_STEPS.length * 90}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert}
                    className="font-mono text-[11px] tracking-[0.1em] uppercase text-un-soft/60 border border-un-soft/20 px-3 py-1.5"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <div className="mt-9">
                <Button href="/uretim" variant="outline-light">
                  Detaylı Bilgi
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
