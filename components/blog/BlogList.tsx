"use client";

import BlogCard from "./BlogCard";

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

interface BlogListProps {
  posts: BlogPost[];
  locale: string;
}

export default function BlogList({ posts, locale }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">Aucun article disponible pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <BlogCard
          key={post.id}
          slug={post.slug[locale] || post.slug.en || post.slug.fr || ""}
          title={post.title[locale] || post.title.en || post.title.fr || ""}
          excerpt={post.excerpt[locale] || post.excerpt.en || post.excerpt.fr || ""}
          coverImage={post.coverImage}
          publishedAt={post.publishedAt}
          readingTime={post.readingTimeMinutes}
          tags={post.tags}
          category={post.category}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
