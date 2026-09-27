import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Prod sunucusunda yüksek çekirdek sayısı (16), statik sayfa üretimini
    // çok paralel worker'la çalıştırıp "/_global-error" prerender'ında
    // Next.js'in workStore invariant hatasına (upstream bug) yol açıyordu.
    // Tek worker'la sıralı üretim bu race condition'ı ortadan kaldırıyor;
    // 14 sayfa için hız kaybı önemsiz.
    cpus: 1,
  },
};

export default nextConfig;
