import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-koyu">
      <Placeholder
        label="Tesis Fotoğrafı — Yer Tutucu"
        src="/images/ekipman-detay.jpg"
        alt="Zambak Yemek üretim tesisi"
        tone="koyu"
        className="absolute inset-0"
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-koyu via-koyu/85 to-koyu/55"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-koyu-2 via-transparent to-transparent"
      />

      <Container className="relative pt-16 pb-14 md:pt-24 md:pb-24">
        <div>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.24em] uppercase text-un-soft mb-6">
              {COMPANY.shortName} · {COMPANY.tagline}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.03] tracking-tight text-un-soft max-w-2xl">
              Lezzetin <em className="italic">zirvesi</em>, hizmetin güvencesi.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 text-base md:text-lg text-un-soft/70 max-w-lg leading-relaxed">
              Merkezi mutfağımızda hazırladığımız yemekleri, soğuk zincir
              korunarak eğitim, kamu ve sanayi kuruluşlarına hijyenik ve
              zamanında ulaştırıyoruz.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/hizmetlerimiz" variant="primary-light">
                Hizmetlerimizi Keşfedin
              </Button>
              <Button href="/iletisim" variant="outline-light">
                Bize Ulaşın
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
