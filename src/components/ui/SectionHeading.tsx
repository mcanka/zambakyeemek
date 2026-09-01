import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`font-mono text-xs tracking-[0.22em] uppercase mb-4 ${
            isDark ? "text-un-soft" : "text-koyu"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-tight ${
          isDark ? "text-un-soft" : "text-komur"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            isDark ? "text-un/75" : "text-komur/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
