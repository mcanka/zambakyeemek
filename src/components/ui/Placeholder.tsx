import Image from "next/image";

/**
 * Gerçek fotoğraflar teslim edildiğinde `src` prop'u geçilerek bu bileşen
 * doğrudan optimize edilmiş bir next/image çıktısına döner; `src` yoksa
 * düzeni doğrulamak için dokulu bir yer tutucu render eder.
 */
export function Placeholder({
  label,
  src,
  alt = "",
  tone = "koyu",
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  label: string;
  src?: string;
  alt?: string;
  tone?: "koyu" | "un";
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  // Bir üst pozisyon utility'si (absolute/fixed/sticky) zaten className içinde
  // geliyorsa, kendi "relative" değerimizi eklemiyoruz — aynı elemanda ikisi
  // birden bulunursa Tailwind'in "relative" kuralı kazanıp sarmalayıcıyı
  // inset-0'ı yok sayan, yüksekliği 0'a çöken bir kutuya dönüştürüyor.
  const isPositioned = /\b(absolute|fixed|sticky)\b/.test(className);
  const positionClass = isPositioned ? "" : "relative";

  if (src) {
    return (
      <div className={`${positionClass} overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const toneClasses: Record<string, string> = {
    koyu: "bg-koyu text-un/50",
    un: "bg-un-line/60 text-komur/40",
  };

  return (
    <div
      className={`${positionClass} overflow-hidden flex items-end p-5 ${toneClasses[tone]} ${className}`}
      role="img"
      aria-label={alt || label}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 14px)",
        }}
      />
      <span className="relative font-mono text-[11px] tracking-[0.14em] uppercase">
        {label}
      </span>
    </div>
  );
}
