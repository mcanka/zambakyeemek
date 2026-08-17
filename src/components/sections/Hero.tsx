import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY, STATS } from "@/lib/data";

const CAPACITY = STATS.find((s) => s.unit.includes("öğün"))!;
const SUPPORT_STAT = STATS.find((s) => s.label === "Personel")!;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-celik">
      <Placeholder
        label="Tesis Fotoğrafı — Yer Tutucu"
        alt="Mekaş Yemek Sanayi üretim tesisi"
        tone="steel"
        className="absolute inset-0"
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-celik via-celik/85 to-celik/55"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-celik-2 via-transparent to-transparent"
      />

      <Container className="relative pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-end">
          <div>
            <Reveal>
              <p className="font-mono text-xs tracking-[0.24em] uppercase text-safran-soft mb-6">
                {COMPANY.city} · {COMPANY.district}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.03] tracking-tight text-un-soft max-w-2xl">
                Gerçek lezzeti <em className="italic text-safran-soft">endüstriyel</em> ölçekle buluşturuyoruz.
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
                <Button href="/hizmetlerimiz" variant="primary">
                  Hizmetlerimizi Keşfedin
                </Button>
                <Button href="/iletisim" variant="outline-light">
                  Bize Ulaşın
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:mb-1">
            <div className="border border-un-soft/15 bg-celik-2/70 backdrop-blur-sm p-7 md:p-8">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-un-soft/50">
                Günlük Üretim Kapasitesi
              </p>
              <div className="mt-4 flex items-baseline gap-2 font-mono text-safran-soft">
                <Counter
                  value={CAPACITY.value}
                  className="text-[clamp(2.6rem,5vw,3.6rem)] leading-none tabular-nums"
                />
                <span className="text-sm text-un-soft/50">öğün / gün</span>
              </div>
              <div className="mt-6 pt-6 border-t rule-dark flex items-center justify-between">
                <p className="text-xs text-un-soft/50 leading-snug max-w-[13rem]">
                  {SUPPORT_STAT.value}{SUPPORT_STAT.suffix} kişilik ekibimizle, kesintisiz üretim disiplini.
                </p>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-un-soft/30">
                  24 / 7
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
