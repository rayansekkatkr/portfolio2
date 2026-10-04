import { WRAP } from "@/components/home/Section";
import { type HomeContent } from "@/lib/content/home";

// Metrics render as plain server-rendered text: no counters, no zero-init.
export default function ProofStrip({ content }: { content: HomeContent }) {
  const { proof } = content;

  return (
    <section aria-label={proof.heading} className="bg-se-text text-se-bg">
      <div className={`${WRAP} py-12 lg:py-16`}>
        <p className="font-meta text-[11px] tracking-[0.14em] uppercase opacity-60">
          {proof.heading}
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-0">
          {proof.items.map((item, i) => (
            <div
              key={item.value}
              className={`flex flex-col ${i > 0 ? "lg:border-l lg:border-current/20 lg:pl-8" : ""}`}
            >
              <dd className="se-display order-1 text-[clamp(3.5rem,7vw,6.5rem)]">{item.value}</dd>
              <dt className="order-2 mt-3 max-w-[16rem] text-sm leading-snug opacity-85">
                {item.label}
                <span className="font-meta mt-2 block text-[11px] tracking-[0.06em] opacity-60">
                  {item.source}
                </span>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
