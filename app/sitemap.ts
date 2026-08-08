import { MetadataRoute } from "next";
import { LOCALES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const localeAlternates = {
    languages: Object.fromEntries([
      ...LOCALES.map((locale) => [locale, `${SITE_URL}/${locale}`]),
      ["x-default", `${SITE_URL}/en`],
    ]),
  };

  return [
    ...LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: localeAlternates,
    })),
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
