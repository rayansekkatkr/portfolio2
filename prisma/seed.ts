import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  await prisma.contactMessage.deleteMany();
  await prisma.blogPost.deleteMany();

  await prisma.blogPost.create({
    data: {
      title: {
        fr: "Portfolio avec Next.js",
        en: "Portfolio with Next.js",
        kr: "Next.js 포트폴리오",
      },
      slug: { fr: "portfolio-nextjs", en: "portfolio-nextjs", kr: "portfolio-nextjs" },
      excerpt: { fr: "Guide complet", en: "Complete guide", kr: "완전한 가이드" },
      content: {
        fr: "# Introduction\n\nArticle...",
        en: "# Introduction\n\nArticle...",
        kr: "# 소개\n\n기사...",
      },
      coverImage: "/images/blog/nextjs.jpg",
      category: "Web Dev",
      tags: ["Next.js", "TypeScript"],
      readingTimeMinutes: 8,
      isPublished: true,
      publishedAt: new Date("2026-01-20"),
      seoMetaDescription: {
        fr: "Guide pour construire un portfolio",
        en: "Guide to build a portfolio",
        kr: "포트폴리오 구축 가이드",
      },
    },
  });

  await prisma.contactMessage.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      message: "Interested in collaboration",
    },
  });

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
