import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Mekaş Yemek Sanayi ile iletişime geçin — adres, telefon, e-posta ve iletişim formu.",
};

export default function IletisimPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapsQuery)}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Sizi dinlemek isteriz."
        description="Menü planlaması, kapasite ya da genel sorularınız için bize ulaşın."
        imageLabel="İletişim — Yer Tutucu"
      />

      <section className="bg-un-soft py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-14 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl text-komur mb-8">Mesaj Gönderin</h2>
              <ContactForm />
            </div>

            <div className="space-y-10">
              <div>
                <p className="font-mono text-xs tracking-[0.18em] uppercase text-biber mb-4">Adres</p>
                <address className="not-italic text-komur/75 leading-relaxed">
                  {COMPANY.legalName}
                  <br />
                  {COMPANY.addressLine}
                </address>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] uppercase text-biber mb-3">Telefon</p>
                  <a href={`tel:${COMPANY.phoneHref}`} className="text-komur/75 hover:text-biber transition-colors">
                    {COMPANY.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] uppercase text-biber mb-3">E-posta</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-komur/75 hover:text-biber transition-colors break-all">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="aspect-[4/3] w-full border rule-light overflow-hidden">
                <iframe
                  title="Tesis konumu haritası"
                  src={mapSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
