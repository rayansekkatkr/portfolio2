"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function BlogSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  const posts = [
    {
      title: "Getting Started with Next.js 14",
      excerpt: "Learn the fundamentals of Next.js App Router and server components.",
      date: "2026-01-20",
      readTime: "5 min read",
    },
    {
      title: "TypeScript Best Practices",
      excerpt: "Essential tips for writing better TypeScript code in modern applications.",
      date: "2026-01-15",
      readTime: "8 min read",
    },
    {
      title: "Building with Tailwind CSS",
      excerpt: "A comprehensive guide to creating beautiful UIs with Tailwind CSS.",
      date: "2026-01-10",
      readTime: "6 min read",
    },
  ];

  return (
    <section ref={ref} id="blog" className="bg-gray-50 px-6 py-24 sm:py-32 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          Latest Blog Posts
        </motion.h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
            >
              <div className="p-6">
                <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-500 dark:text-primary-400 text-sm font-semibold"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
