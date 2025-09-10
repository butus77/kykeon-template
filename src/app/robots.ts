import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: '/private/', // Example: Add any private paths here
    },
    sitemap: "https://www.kykeonanalytics.org/sitemap.xml",
  };
}