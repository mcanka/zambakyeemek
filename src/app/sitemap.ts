import type { MetadataRoute } from "next";
import { NAV_LINKS } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zambakyemek.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...NAV_LINKS.map((l) => l.href), "/kariyer"];

  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
