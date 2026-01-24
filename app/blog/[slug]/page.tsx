import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import BlogPost from "@/components/blog/BlogPost";
import ReadingProgress from "@/components/blog/ReadingProgress";
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

  // Truncate description to 160 characters for meta description
  const description = (article.seoMetaDescription || article.excerpt).slice(0, 160);
  const articleUrl = `https://rayansekkat.com/blog/${slug}`;
  const publishDate = article.publishedAt?.toISOString() || new Date().toISOString();

  return {
    title: `${article.title} | Rayan Sekkat`,
    description,
    keywords: article.seoKeywords,
    authors: [{ name: article.author }],
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description,
      type: "article",
      publishedTime: publishDate,
      authors: [article.author],
      url: articleUrl,
      siteName: "Rayan Sekkat Portfolio",
      locale: "fr_FR",
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
      description,
      images: [article.coverImage],
      creator: "@rayansekkat",
      site: "@rayansekkat",
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `https://rayansekkat.com/blog/${slug}`;
  const publishDate = article.publishedAt?.toISOString() || new Date().toISOString();

  // JSON-LD structured data for Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Person",
      name: article.author,
      url: "https://rayansekkat.com",
    },
    publisher: {
      "@type": "Person",
      name: "Rayan Sekkat",
      url: "https://rayansekkat.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    keywords: article.tags.join(", "),
    articleSection: article.category,
    inLanguage: "fr-FR",
    url: articleUrl,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950" lang="fr">
      {/* Skip to content link for keyboard navigation */}
      <a
        href="#main-content"
        className="focus:bg-primary-600 focus:ring-primary-500 sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:text-white focus:ring-2 focus:outline-none"
      >
        Aller au contenu principal
      </a>

      {/* Reading progress indicator */}
      <ReadingProgress />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
      <main id="main-content" className="mx-auto max-w-7xl px-6 py-12">
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
