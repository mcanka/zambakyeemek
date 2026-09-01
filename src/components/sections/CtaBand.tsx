import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/lib/data";

export function CtaBand({
  title = "Menü planlaması ve kapasite hakkında konuşalım.",
  description = "İhtiyacınızı bize iletin, size en uygun servis modelini birlikte kurgulayalım.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-un-soft py-20 md:py-24 border-t rule-light">
      <Container>
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.6rem)] leading-tight tracking-tight text-komur">
                {title}
              </h2>
              <p className="mt-4 text-komur/65 leading-relaxed">{description}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <a href={`tel:${COMPANY.phoneHref}`} className="font-mono text-sm text-komur/70 hover:text-koyu transition-colors">
                {COMPANY.phoneDisplay}
              </a>
              <Button href="/iletisim" variant="primary">
                İletişime Geç
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
