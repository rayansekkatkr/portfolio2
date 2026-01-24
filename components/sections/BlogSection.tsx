export default function BlogSection() {
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
    <section id="blog" className="bg-gray-50 px-6 py-24 sm:py-32 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Latest Blog Posts
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-900"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
