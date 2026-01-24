import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import BlogPageClient from "@/components/blog/BlogPageClient";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Rayan Sekkat",
  description:
    "Articles techniques et partage de connaissances sur le développement web moderne, Next.js, TypeScript et l'intelligence artificielle.",
  openGraph: {
    title: "Blog | Rayan Sekkat",
    description: "Articles techniques et partage de connaissances sur le développement web moderne",
    type: "website",
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
    <div className="min-h-screen bg-white dark:bg-gray-950">
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
      <main className="mx-auto max-w-7xl px-6 py-12">
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
