// src/app/sitemap.ts
import type { MetadataRoute } from "next";

function getSiteUrl() {
  const url = process.env.SITE_URL?.replace(/\/+$/, "");
  return url || "http://localhost:3000";
}

function getLocales(): string[] {
  const raw = process.env.LOCALES;
  if (!raw) return ["en", "es"];
  return raw.split(",").map((s) => s.trim()).filter(Boolean);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const locales = getLocales();

  // Ide veheted fel a statikus útvonalakat route-okként (locale nélkül)
  const staticRoutes = [""]; // "" => a /<locale> gyökér

  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${route}`;
      const alternates: Record<string, string> = {};
      for (const l of locales) {
        alternates[l] = `${baseUrl}/${l}${route}`;
      }
      // x-default az első locale-ra mutasson
      alternates["x-default"] = `${baseUrl}/${locales[0]}${route}`;

      entries.push({
        url,
        lastModified: new Date(),
        alternates: { languages: alternates },
      });
    }
  }

  // Ha később lesznek dinamikus oldalak (pl. /blog/[slug]),
  // itt gyűjtsd be a slugeket és push-olj új entries-t.

  return entries;
}
