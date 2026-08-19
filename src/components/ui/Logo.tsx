import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isDark = tone === "dark";
  return (
    <Link
      href="/"
      className="group inline-flex items-baseline gap-2 shrink-0 transition-opacity duration-200 hover:opacity-80"
      aria-label="Zirve Yemek Catering — Anasayfa"
    >
      <span
        className={`font-display text-2xl tracking-tight ${isDark ? "text-un-soft" : "text-komur"}`}
      >
        Zirve <span className="font-normal">Yemek</span>
      </span>
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase hidden sm:inline text-kirmizi transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        Catering
      </span>
    </Link>
  );
}
