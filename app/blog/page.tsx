import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import BlogPageClient from "@/components/blog/BlogPageClient";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Rayan Sekkat",
  description:
    "Articles techniques et partage de connaissances sur le développement web moderne, Next.js, TypeScript et l'intelligence artificielle.",
  alternates: {
    canonical: "https://rayansekkat.com/blog",
  },
  openGraph: {
    title: "Blog | Rayan Sekkat",
    description:
      "Articles techniques et partage de connaissances sur le développement web moderne, Next.js, TypeScript et l'intelligence artificielle.",
    type: "website",
    url: "https://rayansekkat.com/blog",
    siteName: "Rayan Sekkat Portfolio",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Rayan Sekkat",
    description: "Articles techniques et partage de connaissances sur le développement web moderne",
    creator: "@rayansekkat",
    site: "@rayansekkat",
  },
};

interface BlogPost {
  id: string;
  title: Record<string, string>;
  slug: Record<string, string>;
  excerpt: Record<string, string>;
  coverImage: string;
  publishedAt: Date;
  readingTimeMinutes: number;
  tags: string[];
  category: string;
}

async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        publishedAt: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        publishedAt: true,
        readingTimeMinutes: true,
        tags: true,
        category: true,
      },
    });

    return posts as BlogPost[];
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  const locale = "fr"; // TODO: Get from context or headers

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950" lang="fr">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="focus:bg-primary-600 focus:ring-primary-500 sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:text-white focus:ring-2 focus:outline-none"
      >
        Aller au contenu principal
      </a>

      {/* Header with back button */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      {/* Blog content */}
      <main id="main-content" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Articles techniques et partage de connaissances
          </p>
        </div>

        {posts.length > 0 ? (
          <BlogPageClient posts={posts} locale={locale} />
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Aucun article publié pour le moment. Revenez bientôt !
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
