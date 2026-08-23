import Image from "next/image";
import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isDark = tone === "dark";

  return (
    <Link
      href="/"
      className="group inline-flex items-center shrink-0 transition-opacity duration-200 hover:opacity-80"
      aria-label="Zirve Yemek Catering — Anasayfa"
    >
      {isDark ? (
        <Image
          src="/images/logo-navy-compact.png"
          alt="Zirve Yemek Catering"
          width={1676}
          height={1010}
          priority
          className="h-9 md:h-10 w-auto"
        />
      ) : (
        <span className="inline-flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-komur">
            Zirve <span className="font-normal">Yemek</span>
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase hidden sm:inline text-kirmizi transition-transform duration-300 ease-out group-hover:translate-x-0.5">
            Catering
          </span>
        </span>
      )}
    </Link>
  );
}
