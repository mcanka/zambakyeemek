import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { RECIPE_CARD } from "@/lib/data";

export function ContentCards() {
  return (
    <section className="bg-un-soft py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Mutfağımızdan"
            title="Lezzeti ve şeffaflığı bir arada sunuyoruz."
            description="Menülerimizden örnek tarifler ve beslenme bilgileriyle, sofraya gelen her öğünün arkasındaki emeği paylaşıyoruz."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal delay={100}>
            <article className="group border rule-light">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Placeholder
                  label="Etli Sultan Kebabı — Yer Tutucu"
                  alt={RECIPE_CARD.title}
                  tone="kirmizi"
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7 md:p-8">
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-kirmizi">
                  {RECIPE_CARD.category}
                </span>
                <h3 className="mt-3 font-display text-2xl text-komur">{RECIPE_CARD.title}</h3>
                <div className="mt-4 flex items-center gap-5 font-mono text-xs text-komur/50 tracking-wide">
                  <span>{RECIPE_CARD.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-komur/30" aria-hidden />
                  <span>{RECIPE_CARD.calorie}</span>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={200}>
            <article className="h-full border rule-light bg-yesil-2 text-un-soft flex flex-col justify-between p-7 md:p-8">
              <div>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-kirmizi">
                  Beslenme Bilgisi
                </span>
                <h3 className="mt-3 font-display text-2xl">Kalori Cetveli</h3>
                <p className="mt-4 text-sm md:text-base text-un-soft/70 leading-relaxed">
                  Menülerimizde yer alan yemeklerin porsiyon başına kalori ve
                  besin değeri bilgilerine buradan ulaşabilirsiniz.
                </p>
              </div>
              <div className="mt-8 font-mono text-xs tracking-[0.14em] uppercase text-kirmizi">
                Yakında →
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
