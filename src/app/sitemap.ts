import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "es"];
  const baseUrl = "https://www.kykeonanalytics.org";

  // Define your static page routes here (without locale)
  const staticRoutes = [""];

  const sitemapEntries = staticRoutes.flatMap((route) => {
    return locales.map((locale) => {
      const url = `${baseUrl}/${locale}${route}`;
      return {
        url: url,
        lastModified: new Date(),
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            es: `${baseUrl}/es${route}`,
            "x-default": `${baseUrl}/en${route}`,
          },
        },
      };
    });
  });

  // Note: For dynamic routes like '/blog/[slug]', you will need to fetch all slugs
  // and generate entries for them here in the future.

  return sitemapEntries;
}
