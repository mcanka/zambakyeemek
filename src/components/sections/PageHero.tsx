import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  imageLabel,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  imageLabel: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-koyu">
      <Placeholder label={imageLabel} src={image} tone="koyu" className="absolute inset-0" priority />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-koyu via-koyu/88 to-koyu/60" />

      <Container className="relative pt-16 pb-16 md:pt-24 md:pb-20">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.24em] uppercase text-un-soft mb-5">
            {eyebrow}
          </p>
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.06] tracking-tight text-un-soft max-w-2xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-base md:text-lg text-un-soft/70 max-w-xl leading-relaxed">
              {description}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
