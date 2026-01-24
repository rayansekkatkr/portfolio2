"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import BlogList from "./BlogList";
import BlogFilters from "./BlogFilters";

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

interface BlogPageClientProps {
  posts: BlogPost[];
  locale: string;
}

function BlogPageContent({ posts, locale }: BlogPageClientProps) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  // Memoize selectedTags to avoid re-creating array on every render
  const selectedTags = useMemo(
    () => searchParams.get("tags")?.split(",").filter(Boolean) || [],
    [searchParams]
  );

  // Extract all unique tags from all posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter posts based on search and tags
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by tags (OR logic)
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)));
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) => {
        const title = (post.title[locale] || post.title.en || "").toLowerCase();
        const excerpt = (post.excerpt[locale] || post.excerpt.en || "").toLowerCase();
        const tags = post.tags.join(" ").toLowerCase();

        return title.includes(query) || excerpt.includes(query) || tags.includes(query);
      });
    }

    return filtered;
  }, [posts, selectedTags, searchQuery, locale]);

  return (
    <>
      <BlogFilters allTags={allTags} />

      {filteredPosts.length > 0 ? (
        <BlogList posts={filteredPosts} locale={locale} />
      ) : (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Aucun article ne correspond à vos critères de recherche.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Essayez de modifier vos filtres ou votre recherche.
          </p>
        </div>
      )}

      {/* Results summary */}
      {(searchQuery || selectedTags.length > 0) && (
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} trouvé
          {filteredPosts.length !== 1 ? "s" : ""} sur {posts.length}
        </div>
      )}
    </>
  );
}

export default function BlogPageClient({ posts, locale }: BlogPageClientProps) {
  return (
    <Suspense
      fallback={
        <div className="py-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">Chargement...</p>
        </div>
      }
    >
      <BlogPageContent posts={posts} locale={locale} />
    </Suspense>
  );
}
