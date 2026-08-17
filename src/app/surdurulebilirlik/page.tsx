import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SUSTAINABILITY_PILLARS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sürdürülebilirlik",
  description:
    "Mekaş Yemek Sanayi'nin insan, toplum ve çevre odaklı sürdürülebilirlik yaklaşımı.",
};

const DETAILS: Record<string, string[]> = {
  İnsan: [
    "Çalışanlarımıza düzenli iş sağlığı ve güvenliği eğitimleri veriyoruz.",
    "Mesleki gelişim ve kariyer planlaması için içeriden yükseltme kültürünü destekliyoruz.",
  ],
  Toplum: [
    "Hizmet verdiğimiz kurumlarda beslenme bilincini artıran bilgilendirme çalışmaları yürütüyoruz.",
    "Gıda güvenliği konusunda toplumu bilgilendiren şeffaflık ilkesini benimsiyoruz.",
  ],
  Çevre: [
    "Üretim sürecinde su ve enerji verimliliğini artıracak yatırımlar yapıyoruz.",
    "Atık yönetimi ve geri dönüşüm süreçlerini düzenli olarak iyileştiriyoruz.",
  ],
};

export default function SurdurulebilirlikPage() {
  return (
    <>
      <PageHero
        eyebrow="Sürdürülebilirlik"
        title="Tarladan başlayan sorumluluk, sofrada tamamlanır."
        description="Sürdürülebilirliği; insan, toplum ve çevre eksenlerinde bütünsel bir sorumluluk olarak ele alıyoruz."
        imageLabel="Tarım Arazisi — Yer Tutucu"
      />

      <section className="bg-un-soft py-20 md:py-28">
        <Container>
          <div className="space-y-16">
            {SUSTAINABILITY_PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-4 md:gap-10 border-t rule-light pt-8">
                  <h2 className="font-display text-3xl text-komur">{pillar.title}</h2>
                  <div>
                    <p className="text-komur/70 leading-relaxed max-w-2xl">{pillar.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {DETAILS[pillar.title]?.map((line) => (
                        <li key={line} className="flex gap-3 text-sm text-komur/60 leading-relaxed">
                          <span aria-hidden className="text-biber mt-1">—</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Sürdürülebilirlik politikamız hakkında bilgi alın."
        description="Detaylı raporlarımız ve politika belgelerimiz için bizimle iletişime geçin."
      />
    </>
  );
}
