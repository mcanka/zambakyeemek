import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/lib/data";

export function About() {
  return (
    <section className="bg-un-soft py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Hakkımızda"
              title="Sanayi disipliniyle, ev sıcaklığında yemek."
              tone="light"
            />
            <p className="mt-6 text-base md:text-lg leading-relaxed text-komur/70 max-w-xl">
              {COMPANY.name}, modern üretim tesisinde; hijyen standartlarından
              ödün vermeden, endüstriyel ölçekte gerçek lezzeti üretme
              vizyonuyla çalışır. Merkezi
              mutfağımızdan çıkan her öğün, aynı titizlikle hazırlanır ve
              soğuk zincir korunarak sofralara ulaşır.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-komur/70 max-w-xl">
              Eğitim kurumlarından kamu kuruluşlarına, sanayi tesislerinden
              özel organizasyonlara kadar geniş bir yelpazede; ölçek büyüdükçe
              artan değil, ölçekten bağımsız sabit kalan bir kalite anlayışı
              sunuyoruz.
            </p>
            <div className="mt-9">
              <Button href="/hakkimizda" variant="outline-dark">
                Detaylı Bilgi
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <Placeholder
                label="Tesis Binası — Yer Tutucu"
                alt={`${COMPANY.name} tesis binası`}
                tone="un"
                className="aspect-[4/5] w-full"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:block bg-lacivert text-un-soft px-6 py-5 max-w-[13rem]">
                <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-kirmizi">
                  Kuruluş
                </p>
                <p className="mt-1.5 text-sm leading-snug text-un-soft/80">
                  Uzun yıllardır kesintisiz üretimde. {/* TODO: kuruluş yılı teyit edilecek */}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
