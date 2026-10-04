import { type PipelineStep } from "@/lib/content/home";

// A product's core flow drawn as a CI-style pipeline: stages on a rail, with a
// signal pulse travelling along it (disabled under reduced motion).
export default function Pipeline({ title, steps }: { title: string; steps: PipelineStep[] }) {
  return (
    <figure className="bg-se-surface border-se-line border p-5 sm:p-6">
      <figcaption className="font-meta text-se-muted flex items-center justify-between gap-4 text-[11px] tracking-[0.14em] uppercase">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="bg-se-ok h-1.5 w-1.5 rounded-full" />
          {title}
        </span>
        <span aria-hidden="true" className="text-se-faint">
          {steps.length} stages
        </span>
      </figcaption>

      <div className="relative mt-6">
        {/* Rails + pulse (decorative) */}
        <div
          aria-hidden="true"
          className="bg-se-line-strong absolute top-0 right-0 left-0 hidden h-px overflow-hidden md:block"
        >
          <span className="se-pulse via-se-accent absolute inset-y-0 left-0 block w-1/5 bg-gradient-to-r from-transparent to-transparent" />
        </div>
        <div
          aria-hidden="true"
          className="bg-se-line-strong absolute top-0 bottom-0 left-0 w-px overflow-hidden md:hidden"
        >
          <span className="se-pulse-y via-se-accent absolute inset-x-0 top-0 block h-1/5 bg-gradient-to-b from-transparent to-transparent" />
        </div>

        <ol className="grid gap-6 md:grid-cols-5 md:gap-4">
          {steps.map((step, i) => (
            <li key={step.label} className="relative pl-6 md:pt-6 md:pl-0">
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[4px] h-[9px] w-[9px] border md:-top-[4px] md:left-0 ${
                  i === steps.length - 1
                    ? "bg-se-accent border-se-accent"
                    : "bg-se-surface border-se-line-strong"
                }`}
              />
              <span className="font-meta text-se-faint block text-[11px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-se-text mt-1 block text-base font-semibold">{step.label}</span>
              <span className="text-se-muted mt-1 block text-[13px] leading-snug">
                {step.detail}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
