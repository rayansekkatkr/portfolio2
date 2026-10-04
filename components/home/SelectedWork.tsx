import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Pipeline from "@/components/home/Pipeline";
import { SectionHead, WRAP } from "@/components/home/Section";
import { type HomeContent, type Project } from "@/lib/content/home";

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-se-line grid grid-cols-[96px_1fr] gap-4 border-b py-3">
      <dt className="font-meta text-se-faint pt-0.5 text-[11px] tracking-[0.12em] uppercase">
        {label}
      </dt>
      <dd className="text-se-text text-sm">{children}</dd>
    </div>
  );
}

function ProjectEntry({
  project,
  n,
  work,
}: {
  project: Project;
  n: number;
  work: HomeContent["work"];
}) {
  const headingId = `project-${project.id}`;
  return (
    <article
      aria-labelledby={headingId}
      className="border-se-line-strong grid gap-10 border-t pt-8 lg:grid-cols-12 lg:gap-10 lg:pt-10"
    >
      {/* Title row */}
      <header className="lg:col-span-12">
        <div className="font-meta text-se-muted flex flex-wrap items-center justify-between gap-3 text-[11px] tracking-[0.14em] uppercase">
          <span>
            <span className="text-se-accent">
              {work.index}.{n}
            </span>
            <span aria-hidden="true" className="text-se-faint mx-2">
              /
            </span>
            {project.kind}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-se-text hover:text-se-accent focus-visible:outline-se-accent inline-flex items-center gap-1 normal-case transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {project.urlLabel}
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>
        <h3 id={headingId} className="se-display text-se-text mt-5 text-[clamp(3rem,8.5vw,7.5rem)]">
          {project.name}
        </h3>
      </header>

      {/* Meta column */}
      <dl className="border-se-line self-start border-t lg:col-span-4">
        <MetaRow label={work.roleLabel}>{project.role}</MetaRow>
        <MetaRow label={work.platformsLabel}>{project.platforms}</MetaRow>
        <MetaRow label={work.yearLabel}>{project.year}</MetaRow>
        <MetaRow label={work.stackLabel}>
          <ul className="font-meta text-se-muted flex flex-wrap gap-x-2 gap-y-1 text-xs">
            {project.stack.map((tech, i) => (
              <li key={tech}>
                {tech}
                {i < project.stack.length - 1 && (
                  <span aria-hidden="true" className="text-se-faint ml-2">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </MetaRow>
      </dl>

      {/* Story column */}
      <div className="lg:col-span-8">
        <p className="text-se-text max-w-2xl text-lg leading-relaxed sm:text-xl">
          {project.summary}
        </p>
        <ul className="mt-6 grid max-w-3xl gap-x-8 gap-y-3 sm:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="text-se-muted flex gap-3 text-sm leading-relaxed">
              <span aria-hidden="true" className="font-meta text-se-accent mt-px shrink-0">
                →
              </span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Pipeline title={project.pipelineTitle} steps={project.pipeline} />
        </div>

        {project.image && (
          <figure className="border-se-line-strong bg-se-surface mt-6 overflow-hidden border">
            <div
              aria-hidden="true"
              className="border-se-line font-meta text-se-faint flex items-center gap-1.5 border-b px-3 py-2 text-[10px]"
            >
              <span className="bg-se-line h-2 w-2 rounded-full" />
              <span className="bg-se-line h-2 w-2 rounded-full" />
              <span className="bg-se-line h-2 w-2 rounded-full" />
              <span className="ml-3">{project.urlLabel}</span>
            </div>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 1024px) 820px, 100vw"
              className="h-auto w-full"
            />
          </figure>
        )}
      </div>
    </article>
  );
}

export default function SelectedWork({ content }: { content: HomeContent }) {
  const { work } = content;
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-14">
      <div className={`${WRAP} pt-20 pb-4 lg:pt-28`}>
        <SectionHead
          id="work-heading"
          index={work.index}
          label={content.nav.work}
          heading={work.heading}
          intro={work.intro}
          aside={`${work.projects.length} × prod`}
        />
        <div className="mt-16 space-y-24 lg:mt-20 lg:space-y-32">
          {work.projects.map((project, i) => (
            <ProjectEntry key={project.id} project={project} n={i + 1} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
