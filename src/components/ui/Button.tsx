import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline-dark" | "outline-light" | "ghost-dark";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-kirmizi text-un-soft hover:bg-kirmizi-dark hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(249,66,58,0.55)] active:translate-y-0 active:shadow-none",
  "outline-dark":
    "border border-komur/25 text-komur hover:border-komur hover:bg-komur/5 hover:-translate-y-0.5 active:translate-y-0",
  "outline-light":
    "border border-un/30 text-un-soft hover:border-un hover:bg-un/10 hover:-translate-y-0.5 active:translate-y-0",
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
      className={`group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-200 ease-out ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
      {arrow ? (
        <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-1.5">
          →
        </span>
      ) : null}
    </Link>
  );
}
