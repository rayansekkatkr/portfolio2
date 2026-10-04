import { SectionHead, WRAP } from "@/components/home/Section";
import { type HomeContent } from "@/lib/content/home";

// Reads like a release log: newest first, a node per role on a single rail.
export default function ExperienceTimeline({ content }: { content: HomeContent }) {
  const { experience, nav } = content;

  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-14">
      <div className={`${WRAP} pt-20 pb-4 lg:pt-28`}>
        <SectionHead
          id="experience-heading"
          index={experience.index}
          label={nav.experience}
          heading={experience.heading}
          intro={experience.intro}
          aside="2020 → 2026"
        />

        <ol className="mt-16 lg:mt-20">
          {experience.jobs.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="border-se-line grid gap-6 border-t py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
            >
              <div className="lg:col-span-3">
                <p className="font-meta text-se-text flex items-center gap-3 text-xs tracking-[0.06em]">
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 ${
                      job.current ? "bg-se-accent border-se-accent" : "border-se-line-strong"
                    }`}
                  />
                  {job.period}
                </p>
                <p className="se-title text-se-text mt-5 text-3xl lg:text-[2.1rem]">
                  {job.company}
                </p>
                <p className="text-se-muted mt-1 text-sm">{job.place}</p>
              </div>

              <div className="lg:col-span-9">
                <h3 className="text-se-text text-xl font-semibold sm:text-2xl">{job.role}</h3>
                {job.context && (
                  <p className="text-se-muted mt-2 max-w-2xl text-base">{job.context}</p>
                )}
                <ul className="mt-6 max-w-3xl space-y-3">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-se-text grid grid-cols-[20px_1fr] text-[15px] leading-relaxed"
                    >
                      <span aria-hidden="true" className="font-meta text-se-faint">
                        —
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <ul className="font-meta mt-6 flex flex-wrap gap-2 text-[11px]" aria-label="Stack">
                  {job.tags.map((tag) => (
                    <li key={tag} className="border-se-line text-se-muted border px-2 py-1">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
