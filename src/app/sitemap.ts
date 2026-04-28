import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const baseUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/industries", "/faq", "/contact"];

  return locales.flatMap((lang) =>
    pages.map((page) => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: page === "" ? 1 : 0.8,
    })),
  );
}
