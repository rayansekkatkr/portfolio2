import { type HomeContent } from "@/lib/content/home";

// Metrics render as plain server-rendered text — no counters, no zero-init.
export default function ProofStrip({ content }: { content: HomeContent }) {
  const { proof } = content;

  return (
    <section aria-label={proof.heading} className="border-se-line border-y">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <p className="font-meta text-se-accent text-xs tracking-[0.2em] uppercase">
          {proof.heading}
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {proof.items.map((item, i) => (
            <div key={item.value} className={i > 0 ? "lg:border-se-line lg:border-l lg:pl-6" : ""}>
              <dd className="font-display text-se-text text-4xl sm:text-5xl">{item.value}</dd>
              <dt className="text-se-muted mt-2 text-sm leading-snug">{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
