import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline-dark" | "outline-light" | "ghost-dark";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-kirmizi text-un-soft hover:bg-kirmizi-dark",
  "outline-dark":
    "border border-komur/25 text-komur hover:border-komur hover:bg-komur/5",
  "outline-light":
    "border border-un/30 text-un-soft hover:border-un hover:bg-un/10",
  "ghost-dark":
    "text-un-soft hover:text-kirmizi",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
      {arrow ? (
        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      ) : null}
    </Link>
  );
}
