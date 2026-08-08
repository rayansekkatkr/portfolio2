import { ArrowUpRight } from "lucide-react";
import { type CaseStudyContent, type HomeContent } from "@/lib/content/home";

function StackList({ label, stack }: { label: string; stack: string[] }) {
  return (
    <div>
      <p className="font-meta text-se-muted text-[10px] tracking-[0.16em] uppercase">{label}</p>
      <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
        {stack.map((tech) => (
          <li key={tech} className="font-meta text-se-text text-xs">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExternalCta({ study }: { study: CaseStudyContent }) {
  if (!study.url || !study.ctaLabel) return null;
  return (
    <a
      href={study.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-se-accent focus-visible:outline-se-accent inline-flex items-center gap-1 text-sm font-bold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {study.ctaLabel}
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}

// GoodCall: full-width featured case study with real engineering substance.
function FeaturedCaseStudy({ work }: { work: HomeContent["work"] }) {
  const study = work.goodcall;
  return (
    <article className="border-se-line bg-se-surface rounded-md border p-6 sm:p-10">
      <p className="font-meta text-se-accent text-[10px] tracking-[0.2em] uppercase">
        {work.featuredTag}
      </p>
      <h3 className="font-display text-se-text mt-3 text-4xl sm:text-5xl">{study.name}</h3>
      <p className="text-se-muted mt-3 max-w-2xl text-base leading-relaxed">{study.positioning}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <p className="font-meta text-se-muted text-[10px] tracking-[0.16em] uppercase">
              {work.roleLabel}
            </p>
            <p className="text-se-text mt-2 text-sm leading-relaxed">{study.role}</p>
          </div>
          {study.challenge && (
            <div>
              <p className="font-meta text-se-muted text-[10px] tracking-[0.16em] uppercase">
                {work.challengeLabel}
              </p>
              <p className="text-se-text mt-2 text-sm leading-relaxed">{study.challenge}</p>
            </div>
          )}
          <StackList label={work.stackLabel} stack={study.stack} />
        </div>
        {study.decisions && (
          <div>
            <p className="font-meta text-se-muted text-[10px] tracking-[0.16em] uppercase">
              {work.decisionsLabel}
            </p>
            <ul className="border-se-accent mt-2 space-y-2 border-l-2 pl-4">
              {study.decisions.map((decision) => (
                <li key={decision} className="text-se-text text-sm leading-relaxed">
                  {decision}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-se-line mt-8 border-t pt-6">
        <ExternalCta study={study} />
      </div>
    </article>
  );
}

function SecondaryCaseStudy({
  study,
  work,
}: {
  study: CaseStudyContent;
  work: HomeContent["work"];
}) {
  return (
    <article className="border-se-line bg-se-surface flex flex-col rounded-md border p-6 sm:p-8">
      <h3 className="font-display text-se-text text-3xl">{study.name}</h3>
      <p className="text-se-muted mt-2 text-sm">{study.positioning}</p>
      <p className="text-se-text mt-4 text-sm leading-relaxed">{study.role}</p>
      <div className="mt-5">
        <StackList label={work.stackLabel} stack={study.stack} />
      </div>
      <div className="border-se-line mt-auto border-t pt-5">
        <ExternalCta study={study} />
      </div>
    </article>
  );
}

export default function SelectedWork({ content }: { content: HomeContent }) {
  const { work } = content;
  return (
    <section id="work" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <h2 className="font-meta text-se-accent text-xs tracking-[0.2em] uppercase">
          {work.heading}
        </h2>
        <div className="mt-8 space-y-8">
          <FeaturedCaseStudy work={work} />
          <div className="grid gap-8 md:grid-cols-2">
            {work.secondary.map((study) => (
              <SecondaryCaseStudy key={study.name} study={study} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
