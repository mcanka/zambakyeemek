import Link from "next/link";

export function Logo({
  tone = "dark",
  textClassName = "text-2xl",
}: {
  tone?: "dark" | "light";
  textClassName?: string;
}) {
  const isDark = tone === "dark";

  return (
    <Link
      href="/"
      className="group inline-flex items-baseline gap-2 shrink-0 transition-opacity duration-200 hover:opacity-80"
      aria-label="Zambak Yemek Catering — Anasayfa"
    >
      <span
        className={`font-display ${textClassName} tracking-tight ${isDark ? "text-un-soft" : "text-komur"}`}
      >
        Zambak <span className="font-normal">Yemek</span>
      </span>
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase hidden sm:inline text-kirmizi transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        Catering
      </span>
    </Link>
  );
}
