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
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      <Link href={`/blog/${slug}`} className="relative block aspect-video overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 rounded-full px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/blog/${slug}`}>
          <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-2 text-xl font-bold text-gray-900 transition-colors dark:text-white">
            {title}
          </h3>
        </Link>

        <p className="mb-4 line-clamp-3 flex-1 text-gray-600 dark:text-gray-400">{excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={publishedAt.toISOString()}>
              {new Date(publishedAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readingTime} min</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
