"use client";

import "./globals.css";
import { COMPANY } from "@/lib/data";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <div className="min-h-screen flex items-center justify-center bg-koyu text-un-soft px-6">
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-[0.24em] uppercase text-un-soft/60 mb-4">
              {COMPANY.shortName}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Bir şeyler ters gitti.</h1>
            <p className="text-un-soft/70 mb-8 leading-relaxed">
              Sayfa yüklenirken beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
            </p>
            <button
              onClick={() => reset()}
              className="bg-un text-koyu px-6 py-3 text-sm font-medium tracking-[0.08em] uppercase hover:bg-un-soft transition-colors"
            >
              Tekrar Dene
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
