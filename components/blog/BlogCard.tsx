"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: Date;
  readingTime: number;
  tags: string[];
  category: string;
  priority?: boolean;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  coverImage,
  publishedAt,
  readingTime,
  tags,
  category,
  priority = false,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <Link href={`/blog/${slug}`} className="relative block aspect-video overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlNWU3ZWIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmOWZhZmIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIGZpbGw9InVybCgjZykiLz48L3N2Zz4="
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-lg">
            {category}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/blog/${slug}`}>
          <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
        </Link>

        <p className="mb-4 line-clamp-3 flex-1 text-muted-foreground">{excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <time dateTime={publishedAt.toISOString()}>
              {new Date(publishedAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{readingTime} min</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-muted/50 px-3 py-1 text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
