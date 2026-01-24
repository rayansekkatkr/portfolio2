import { prisma } from "@/lib/prisma";
import BlogList from "@/components/blog/BlogList";
import Link from "next/link";

export interface BlogPost {
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

async function getLatestPosts(): Promise<BlogPost[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        publishedAt: "desc",
      },
      take: 3,
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

export default async function BlogSection() {
  const posts = await getLatestPosts();

  // TODO: Add multi-language support via reading translation JSON files or context
  const locale = "fr"; // Default to French for now

  return (
    <section id="blog" className="bg-gray-50 px-6 py-24 sm:py-32 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Derniers Articles
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Expertise technique et partage de connaissances
          </p>
        </div>

        {posts.length > 0 ? (
          <>
            <BlogList posts={posts} locale={locale} />

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="bg-primary-600 hover:bg-primary-700 focus-visible:outline-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Voir tous les articles
              </Link>
            </div>
          </>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Aucun article publié pour le moment. Revenez bientôt !
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
