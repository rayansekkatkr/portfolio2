"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, Tag } from "lucide-react";

interface BlogFiltersProps {
  allTags: string[];
}

export default function BlogFilters({ allTags }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get("tags")?.split(",").filter(Boolean) || []
  );

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) {
      params.set("search", searchQuery);
    }

    if (selectedTags.length > 0) {
      params.set("tags", selectedTags.join(","));
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/blog?${queryString}` : "/blog";

    router.push(newUrl, { scroll: false });
  }, [searchQuery, selectedTags, router]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  const hasActiveFilters = searchQuery || selectedTags.length > 0;

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher des articles par titre, contenu ou tags..."
          className="focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-10 text-gray-900 placeholder-gray-500 transition-colors focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
          aria-label="Rechercher des articles"
        />
      </div>

      {/* Tag Filters */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Filtrer par tags
            </span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center gap-1 text-sm"
              aria-label="Effacer tous les filtres"
            >
              <X className="h-4 w-4" />
              Effacer les filtres
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                aria-pressed={isSelected}
                aria-label={`${isSelected ? "Désélectionner" : "Sélectionner"} le tag ${tag}`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-900 dark:bg-blue-900/20 dark:text-blue-200">
          {selectedTags.length > 0 && (
            <span>
              Filtré par {selectedTags.length} tag{selectedTags.length > 1 ? "s" : ""}
            </span>
          )}
          {searchQuery && selectedTags.length > 0 && " · "}
          {searchQuery && <span>Recherche : &quot;{searchQuery}&quot;</span>}
        </div>
      )}
    </div>
  );
}
