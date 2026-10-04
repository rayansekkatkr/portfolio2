// Shared layout primitives for the homepage "spec sheet" system.
export const WRAP = "mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12";

interface SectionHeadProps {
  index: string;
  label: string;
  heading: string;
  intro?: string;
  aside?: string;
  id: string;
}

// Index rule + oversized condensed heading. The h2 carries the section name.
export function SectionHead({ index, label, heading, intro, aside, id }: SectionHeadProps) {
  return (
    <header>
      <div className="border-se-line-strong font-meta text-se-muted flex items-center justify-between gap-4 border-t pt-3 text-[11px] tracking-[0.14em] uppercase">
        <span>
          <span className="text-se-accent">{index}</span>
          <span aria-hidden="true" className="text-se-faint mx-2">
            /
          </span>
          {label}
        </span>
        {aside && <span className="text-se-faint hidden sm:inline">{aside}</span>}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-end">
        <h2
          id={id}
          className="se-display text-se-text text-[clamp(3.25rem,9vw,8.5rem)] lg:col-span-7"
        >
          {heading}
        </h2>
        {intro && (
          <p className="text-se-muted max-w-md text-base leading-relaxed lg:col-span-5 lg:justify-self-end lg:pb-3">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
