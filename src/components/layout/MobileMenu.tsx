"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // `open` only ever flips to true from a browser click handler below, so by
  // the time it's true we're guaranteed to be on the client — no separate
  // "mounted" effect/state needed to guard the document.body portal target.

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menüyü aç"
        aria-expanded={open}
        className="flex flex-col justify-center gap-1.5 w-10 h-10 items-center"
      >
        <span className="block h-px w-6 bg-un-soft" />
        <span className="block h-px w-6 bg-un-soft" />
        <span className="block h-px w-4 self-end bg-safran-soft" />
      </button>

      {open
        ? createPortal(
            <div className="fixed inset-0 z-50 bg-celik-2 texture-steel flex flex-col">
              <div className="flex items-center justify-between px-6 h-20 border-b rule-dark">
                <span className="font-display text-2xl text-un-soft">Mekaş</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Menüyü kapat"
                  className="text-un-soft text-3xl leading-none font-display"
                >
                  ×
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center px-6 gap-1 overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-un-soft py-3 border-b rule-dark flex items-center justify-between"
                  >
                    {link.label}
                    <span className="font-mono text-xs text-safran-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                ))}
              </nav>
              <div className="px-6 py-8 border-t rule-dark">
                <a href={`tel:${COMPANY.phoneHref}`} className="font-mono text-sm text-safran-soft tracking-wide">
                  {COMPANY.phoneDisplay}
                </a>
                <Link
                  href="/iletisim"
                  onClick={() => setOpen(false)}
                  className="mt-4 block text-center bg-biber text-un-soft py-3.5 text-sm font-medium tracking-wide"
                >
                  Teklif Al
                </Link>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
