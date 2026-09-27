import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = {
  dark: "/images/zambak-logo-dark-compact.png",
  light: "/images/zambak-logo-light-compact.png",
} as const;

export function Logo({
  tone = "dark",
  imgClassName = "h-11 md:h-12 w-auto",
}: {
  tone?: "dark" | "light";
  imgClassName?: string;
}) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center shrink-0 transition-opacity duration-200 hover:opacity-80"
      aria-label="Zambak Yemek Catering — Anasayfa"
    >
      <Image
        src={LOGO_SRC[tone]}
        alt="Zambak Yemek Catering"
        width={1867}
        height={886}
        priority
        className={imgClassName}
      />
    </Link>
  );
}
