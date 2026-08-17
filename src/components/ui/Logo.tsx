import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isDark = tone === "dark";
  return (
    <Link href="/" className="inline-flex items-baseline gap-2 shrink-0" aria-label="Zirve Yemek Catering — Anasayfa">
      <span
        className={`font-display text-2xl tracking-tight ${isDark ? "text-un-soft" : "text-komur"}`}
      >
        Zirve <span className="font-normal">Yemek</span>
      </span>
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase hidden sm:inline text-kirmizi">
        Catering
      </span>
    </Link>
  );
}
