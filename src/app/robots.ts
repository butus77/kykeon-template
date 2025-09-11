// src/app/robots.ts
import type { MetadataRoute } from "next";

function getSiteUrl() {
  const url = process.env.SITE_URL?.replace(/\/+$/, "");
  return url || "http://localhost:3000";
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/private", // ha kell később
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
