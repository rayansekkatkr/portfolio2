import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rayansekkat.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        isPublished: true,
      },
      select: {
        slug: true,
        publishedAt: true,
        updatedAt: true,
      },
    });

    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => {
      const slugObj = post.slug as Record<string, string>;
      const slug = slugObj.en || slugObj.fr || slugObj.ko || "";

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: post.updatedAt || post.publishedAt || new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    });

    return [...staticRoutes, ...blogRoutes];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return staticRoutes;
  }
}
