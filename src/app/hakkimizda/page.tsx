import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { CERTIFICATIONS, COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Zambak Yemek'in hikayesi, vizyonu ve üretim tesisi hakkında bilgi edinin.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Sanayi disipliniyle, ev sıcaklığında yemek üretiyoruz."
        description={`${COMPANY.name}, modern üretim tesisinde endüstriyel ölçekte gerçek lezzeti üretme vizyonuyla çalışır.`}
        imageLabel="Tesis Girişi — Yer Tutucu"
        image="/images/mutfak-ekip.jpg"
      />

      <section className="bg-un-soft py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            <Reveal>
              <Placeholder
                label="Kurumsal Bina — Yer Tutucu"
                src="/images/tesis-bina.jpg"
                alt={`${COMPANY.name} kurumsal binası`}
                tone="un"
                className="aspect-[4/5] w-full"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal delay={100}>
              <SectionHeading eyebrow="Markanın Hikayesi" title="Her gün aynı özen, her gün yeni bir lezzet." />
              <p className="mt-6 text-komur/70 leading-relaxed">
                Zambak Yemek, yemeğin yalnızca karın doyurmak olmadığını; emek,
                güven ve memnuniyetin bir araya geldiği önemli bir deneyim
                olduğunu bilerek yola çıktı.
              </p>
              <p className="mt-4 text-komur/70 leading-relaxed">
                Her gün sofralara ulaşan bir yemeğin arkasında; doğru malzeme
                seçimi, titiz bir hazırlık süreci, hijyen, deneyimli bir ekip
                ve zamanında hizmet vardır. Biz, bu sürecin her aşamasında
                aynı özeni göstermeyi kendimize ilke edindik.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 max-w-3xl">
            <Reveal>
              <p className="text-komur/70 leading-relaxed">
                Zambak Yemek olarak; işletmelerin, fabrikaların, kurumların ve
                çalışanların günlük yemek ihtiyacını güvenilir ve
                sürdürülebilir bir hizmet anlayışıyla karşılıyoruz. Günlük ve
                taze üretimden hijyenik hazırlığa, porsiyonlamadan zamanında
                teslimata kadar tüm süreci titizlikle yönetiyoruz.
              </p>
              <p className="mt-4 text-komur/70 leading-relaxed">
                Bizim için başarı, yalnızca yemeğin zamanında ulaşması değil;
                ilk lokmada beğenilmesi, son lokmada memnuniyet bırakmasıdır.
              </p>
              <p className="mt-6 font-display text-xl md:text-2xl italic leading-snug text-koyu">
                Çünkü biliyoruz ki iyi yemek hatırlanır, iyi hizmet ise güven
                verir.
              </p>
              <p className="mt-6 text-komur/70 leading-relaxed">
                Bugün olduğu gibi yarın da aynı kaliteyi korumak, kendimizi
                geliştirmek ve her sofrada Zirve kalitesini hissettirmek için
                çalışıyoruz.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-10 pt-8 border-t rule-light">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-koyu">Zambak Yemek</p>
                <p className="mt-2 font-display text-xl md:text-2xl italic text-komur">
                  Lezzetin Zirvesi, Hizmetin Güvencesi
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="border rule-light p-8 md:p-10 h-full">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-koyu">Vizyon</span>
                <p className="mt-4 font-display text-xl leading-snug text-komur">
                  Yemek hizmetinde kalite, lezzet ve güven denildiğinde akla
                  gelen, hizmet standartlarıyla fark yaratan ve sürekli
                  gelişen öncü bir marka olmak. Her sofrada aynı Zambak Yemek
                  kalitesini sunarak, faaliyet gösterdiğimiz bölgede güçlü ve
                  güvenilir bir marka olarak büyümek.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="border rule-light p-8 md:p-10 h-full">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-koyu">Misyon</span>
                <p className="mt-4 font-display text-xl leading-snug text-komur">
                  Taze, lezzetli ve güvenilir yemekleri; hijyenik üretim ve
                  zamanında hizmet anlayışıyla sofralara ulaştırmak.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <StatsBand />

      <section className="bg-un-soft py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Belgelerimiz"
              title="Denetlenebilir ve belgeli bir üretim süreci."
              description="Gıda güvenliği yönetim sistemimiz, bağımsız kuruluşlar tarafından düzenli olarak denetlenir."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-3">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="font-mono text-xs tracking-[0.1em] uppercase text-komur/70 border rule-light px-4 py-2.5"
                >
                  {cert}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
