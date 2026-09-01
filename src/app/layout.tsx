import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COMPANY } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zambakyemek.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.name} | Endüstriyel Toplu Yemek Üretimi`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Zambak Yemek Catering; eğitim, kamu ve sanayi kuruluşlarına günlük binlerce öğün kapasiteyle güvenilir, hijyenik ve zamanında toplu yemek üretimi ve taşıma yemek servisi sunar.",
  keywords: [
    "toplu yemek üretimi",
    "taşıma yemek servisi",
    "kurumsal catering",
    "Zambak Yemek",
    "fabrika yemekhane hizmeti",
  ],
  openGraph: {
    title: `${COMPANY.name} | Endüstriyel Toplu Yemek Üretimi`,
    description:
      "Günlük binlerce öğün üretim kapasitesiyle, eğitim, kamu ve sanayi kuruluşlarına hijyenik ve zamanında yemek hizmeti.",
    url: siteUrl,
    siteName: COMPANY.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Endüstriyel Toplu Yemek Üretimi`,
    description:
      "Günlük binlerce öğün üretim kapasitesiyle hijyenik ve zamanında toplu yemek hizmeti.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e2a20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="antialiased">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-koyu focus:text-un-soft focus:px-4 focus:py-2 focus:text-sm"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
