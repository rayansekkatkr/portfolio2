"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowDown, Download } from "lucide-react";
import { CV, type Track } from "@/lib/site";
import { type TrackContent } from "@/lib/content/home";

interface HeroTracksProps {
  tracks: [TrackContent, ...TrackContent[]];
  trackLabel: string;
  focusLabel: string;
  ctaWork: string;
}

// Two hiring tracks (Backend / DevOps): swaps the pitch and the matching CV.
export default function HeroTracks({ tracks, trackLabel, focusLabel, ctaWork }: HeroTracksProps) {
  const [active, setActive] = useState<Track>(tracks[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const current = tracks.find((t) => t.id === active) ?? tracks[0];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + tracks.length) % tracks.length;
    const target = tracks[next];
    if (!target) return;
    setActive(target.id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span
          id={`${baseId}-label`}
          className="font-meta text-se-faint text-[11px] tracking-[0.14em] uppercase"
        >
          {trackLabel}
        </span>
        <div
          role="tablist"
          aria-labelledby={`${baseId}-label`}
          className="border-se-line-strong inline-flex border"
        >
          {tracks.map((track, i) => {
            const selected = track.id === active;
            return (
              <button
                key={track.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${track.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(track.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`font-meta focus-visible:outline-se-accent px-3 py-2 text-[11px] tracking-[0.1em] uppercase transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 sm:px-4 ${
                  selected ? "bg-se-text text-se-bg" : "text-se-muted hover:text-se-text"
                }`}
              >
                {track.tab}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${current.id}`}
        aria-live="polite"
        className="mt-8"
      >
        <p className="se-title text-se-text max-w-2xl text-[clamp(1.75rem,3.4vw,2.9rem)] leading-[1.02]">
          {current.title}
        </p>
        <p className="text-se-muted mt-6 max-w-xl text-base leading-relaxed sm:text-[17px]">
          {current.summary}
        </p>
        <p className="font-meta text-se-text mt-6 text-xs leading-relaxed">
          <span className="text-se-faint mr-2 tracking-[0.14em] uppercase">{focusLabel}</span>
          {current.focus}
        </p>
      </div>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a
          href={CV[current.id]}
          download
          className="bg-se-accent text-se-on-accent focus-visible:outline-se-accent group inline-flex items-center justify-between gap-6 px-5 py-3.5 text-sm font-semibold transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {current.cvLabel}
          <Download
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
          />
        </a>
        <a
          href="#work"
          className="border-se-line-strong text-se-text hover:bg-se-text hover:text-se-bg focus-visible:outline-se-accent group inline-flex items-center justify-between gap-6 border px-5 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {ctaWork}
          <ArrowDown
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
}
