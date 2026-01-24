import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import BlogPost from "@/components/blog/BlogPost";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getArticle(slug: string, locale: string = "fr") {
  try {
    const post = await prisma.blogPost.findFirst({
      where: {
        slug: {
          path: [locale],
          equals: slug,
        },
        isPublished: true,
      },
    });

    if (!post) return null;

    const titleObj = post.title as Record<string, string>;
    const contentObj = post.content as Record<string, string>;
    const excerptObj = post.excerpt as Record<string, string>;
    const seoMetaObj = post.seoMetaDescription as Record<string, string> | null;

    return {
      id: post.id,
      title: titleObj[locale] || titleObj.en || titleObj.fr || "",
      content: contentObj[locale] || contentObj.en || contentObj.fr || "",
      excerpt: excerptObj[locale] || excerptObj.en || excerptObj.fr || "",
      coverImage: post.coverImage,
      publishedAt: post.publishedAt,
      author: post.author,
      readingTimeMinutes: post.readingTimeMinutes,
      tags: post.tags,
      category: post.category,
      seoMetaDescription: seoMetaObj?.[locale] || seoMetaObj?.en || seoMetaObj?.fr || "",
      seoKeywords: post.seoKeywords || [],
    };
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Rayan Sekkat`,
    description: article.seoMetaDescription || article.excerpt,
    keywords: article.seoKeywords,
    openGraph: {
      title: article.title,
      description: article.seoMetaDescription || article.excerpt,
      type: "article",
      publishedTime: article.publishedAt?.toISOString() || new Date().toISOString(),
      authors: [article.author],
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.seoMetaDescription || article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header with back button */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>
        </div>
      </header>

      {/* Article content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <BlogPost
          title={article.title}
          content={article.content}
          publishedAt={article.publishedAt || new Date()}
          author={article.author}
          readingTime={article.readingTimeMinutes}
          tags={article.tags}
        />
      </main>
    </div>
  );
}
