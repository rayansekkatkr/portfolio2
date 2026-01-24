"use client";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Clock, Calendar, User } from "lucide-react";
import CodeBlock from "./CodeBlock";
import "highlight.js/styles/github-dark.css";

interface BlogPostProps {
  title: string;
  content: string;
  publishedAt: Date;
  author: string;
  readingTime: number;
  tags: string[];
}

export default function BlogPost({
  title,
  content,
  publishedAt,
  author,
  readingTime,
  tags,
}: BlogPostProps) {
  return (
    <article className="mx-auto max-w-4xl">
      {/* Header */}
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={publishedAt.toISOString()}>
              {new Date(publishedAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readingTime} min de lecture</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          components={{
            code({
              inline,
              className,
              children,
              ...props
            }: {
              inline?: boolean;
              className?: string;
              children?: React.ReactNode;
              [key: string]: unknown;
            }) {
              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
              return (
                <CodeBlock className={className}>{String(children).replace(/\n$/, "")}</CodeBlock>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* Tags */}
      <footer className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
}
