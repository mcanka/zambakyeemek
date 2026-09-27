"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { COMPANY, NAV_LINKS } from "@/lib/data";

const TRANSITION_MS = 320;

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  function openMenu() {
    setMounted(true);
    setOpen(true);
  }

  function closeMenu() {
    setVisible(false);
    setOpen(false);
    window.setTimeout(() => setMounted(false), TRANSITION_MS);
  }

  // Mount happens first with the "hidden" transition styles applied; flipping
  // to `visible` a frame later is what makes the CSS transition actually
  // animate instead of snapping straight to its end state.
  useEffect(() => {
    if (!mounted) return;
    const frame = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    return () => cancelAnimationFrame(frame);
  }, [mounted]);

  useEffect(() => {
    document.body.style.overflow = mounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={openMenu}
        aria-label="Menüyü aç"
        aria-expanded={open}
        className="relative flex flex-col justify-center gap-1.5 w-10 h-10 items-center"
      >
        <span
          className={`block h-px w-6 bg-un-soft transition-transform duration-300 ease-out ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-6 bg-un-soft transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-px transition-all duration-300 ease-out ${
            open ? "w-6 self-center -translate-y-[7px] -rotate-45 bg-un-soft" : "w-4 self-end bg-un-soft"
          }`}
        />
      </button>

      {mounted
        ? createPortal(
            <div
              className={`fixed inset-0 z-50 bg-koyu-2 texture-steel flex flex-col transition-opacity duration-300 ease-out ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center justify-between px-6 h-20 border-b rule-dark">
                <Image
                  src="/images/zambak-logo-dark-compact.png"
                  alt="Zambak Yemek Catering"
                  width={1867}
                  height={886}
                  className="h-11 w-auto"
                />
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Menüyü kapat"
                  className="text-un-soft text-3xl leading-none font-display transition-transform duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center px-6 gap-1 overflow-y-auto">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={`font-display text-3xl py-3 border-b rule-dark flex items-center justify-between transition-all ease-out ${
                        active ? "text-un-soft" : "text-un-soft/70"
                      } ${visible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                      style={{
                        transitionDuration: "400ms",
                        transitionDelay: visible ? `${80 + i * 45}ms` : "0ms",
                      }}
                    >
                      {link.label}
                      <span className="font-mono text-xs text-un-soft/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  );
                })}
              </nav>
              <div
                className={`px-6 py-8 border-t rule-dark transition-all duration-500 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: visible ? "260ms" : "0ms" }}
              >
                <a href={`tel:${COMPANY.phoneHref}`} className="font-mono text-sm text-un-soft tracking-wide">
                  {COMPANY.phoneDisplay}
                </a>
                <Link
                  href="/iletisim"
                  onClick={closeMenu}
                  className="mt-4 block text-center bg-un text-koyu py-3.5 text-sm font-medium tracking-wide transition-colors hover:bg-un-soft"
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
