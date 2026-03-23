"use client";

import { Suspense, useMemo } from "react";
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
  searchQuery: string;
  selectedTags: string[];
}

export default function BlogPageClient({
  posts,
  locale,
  searchQuery,
  selectedTags,
}: BlogPageClientProps) {
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) => {
        const title = (post.title[locale] || post.title["en"] || "").toLowerCase();
        const excerpt = (post.excerpt[locale] || post.excerpt["en"] || "").toLowerCase();
        const tags = post.tags.join(" ").toLowerCase();
        return title.includes(query) || excerpt.includes(query) || tags.includes(query);
      });
    }

    return filtered;
  }, [posts, selectedTags, searchQuery, locale]);

  return (
    <>
      <Suspense
        fallback={
          <div className="mb-8 h-24 animate-pulse rounded-lg bg-gray-100 dark:bg-gray-800" />
        }
      >
        <BlogFilters allTags={allTags} />
      </Suspense>

      {filteredPosts.length > 0 ? (
        <BlogList posts={filteredPosts} locale={locale} />
      ) : (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {searchQuery || selectedTags.length > 0
              ? "Aucun article ne correspond à vos critères de recherche."
              : "Aucun article publié pour le moment. Revenez bientôt !"}
          </p>
          {(searchQuery || selectedTags.length > 0) && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
              Essayez de modifier vos filtres ou votre recherche.
            </p>
          )}
        </div>
      )}

      {(searchQuery || selectedTags.length > 0) && (
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} trouvé
          {filteredPosts.length !== 1 ? "s" : ""} sur {posts.length}
        </div>
      )}
    </>
  );
}
