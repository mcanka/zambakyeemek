import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Zambak Yemek ile iletişime geçin — adres, telefon, e-posta ve iletişim formu.",
};

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-koyu text-un-soft">
      {children}
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function IletisimPage() {
  return (
    <section className="bg-un-soft py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <Reveal>
            <h1 className="font-display text-[clamp(2.1rem,4vw,3rem)] leading-[1.08] tracking-tight text-komur max-w-md">
              {COMPANY.name} ile İletişime Geçin
            </h1>
            <p className="mt-6 text-komur/65 leading-relaxed max-w-sm">
              Formu doldurduktan sonra danışmanlarımız en kısa sürede sizinle irtibata geçecektir.
            </p>

            <div className="mt-12 space-y-7">
              <div className="flex items-center gap-4">
                <IconBadge>
                  <PhoneIcon />
                </IconBadge>
                <a href={`tel:${COMPANY.phoneHref}`} className="text-lg text-koyu hover:text-koyu-2 transition-colors">
                  {COMPANY.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <IconBadge>
                  <MailIcon />
                </IconBadge>
                <a href={`mailto:${COMPANY.email}`} className="text-lg text-koyu hover:text-koyu-2 transition-colors break-all">
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <IconBadge>
                  <PinIcon />
                </IconBadge>
                <address className="not-italic text-komur/75 leading-relaxed">
                  {COMPANY.addressLine}
                </address>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
