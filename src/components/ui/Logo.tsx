import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isDark = tone === "dark";
  return (
    <Link href="/" className="inline-flex items-baseline gap-2 shrink-0" aria-label="Mekaş Yemek Sanayi — Anasayfa">
      <span
        className={`font-display text-2xl tracking-tight ${isDark ? "text-un-soft" : "text-komur"}`}
      >
        Mekaş
      </span>
      <span
        className={`font-mono text-[10px] tracking-[0.2em] uppercase hidden sm:inline ${
          isDark ? "text-safran-soft" : "text-biber"
        }`}
      >
        Yemek Sanayi
      </span>
    </Link>
  );
}
