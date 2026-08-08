import { type HomeContent } from "@/lib/content/home";

export default function ExperienceTimeline({ content }: { content: HomeContent }) {
  const { experience } = content;

  return (
    <section id="experience" className="border-se-line scroll-mt-20 border-t">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <h2 className="font-meta text-se-accent text-xs tracking-[0.2em] uppercase">
          {experience.heading}
        </h2>
        <ol className="mt-8 space-y-10">
          {experience.jobs.map((job) => (
            <li
              key={`${job.role}-${job.period}`}
              className="border-se-line grid gap-3 border-l-2 pl-6 lg:grid-cols-[220px_1fr] lg:gap-8"
            >
              <p className="font-meta text-se-muted text-xs tracking-wide">{job.period}</p>
              <div>
                <h3 className="text-se-text text-lg font-bold">{job.role}</h3>
                <p className="text-se-muted mt-0.5 text-sm">{job.company}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="text-se-text text-sm leading-relaxed">
                      {bullet}
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
