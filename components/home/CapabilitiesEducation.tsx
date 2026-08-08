import { type HomeContent } from "@/lib/content/home";

export function Capabilities({ content }: { content: HomeContent }) {
  const { capabilities } = content;

  return (
    <section id="capabilities" className="border-se-line scroll-mt-20 border-t">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <h2 className="font-meta text-se-accent text-xs tracking-[0.2em] uppercase">
          {capabilities.heading}
        </h2>
        <dl className="mt-8 space-y-6">
          {capabilities.groups.map((group) => (
            <div
              key={group.name}
              className="border-se-line grid gap-2 border-b pb-6 lg:grid-cols-[220px_1fr] lg:gap-8"
            >
              <dt className="text-se-text text-base font-bold">{group.name}</dt>
              <dd className="text-se-muted text-sm leading-relaxed">{group.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function EducationLanguages({ content }: { content: HomeContent }) {
  const { education } = content;

  return (
    <section aria-label={education.heading} className="border-se-line border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-meta text-se-accent text-xs tracking-[0.2em] uppercase">
            {education.heading}
          </h2>
          <ul className="mt-6 space-y-4">
            {education.schools.map((school) => (
              <li key={school.name}>
                <p className="text-se-text text-base font-bold">{school.name}</p>
                <p className="text-se-muted mt-0.5 text-sm">{school.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-meta text-se-accent text-xs tracking-[0.2em] uppercase">
            {education.languagesHeading}
          </h2>
          <ul className="mt-6 space-y-2">
            {education.languages.map((lang) => (
              <li key={lang} className="text-se-text text-sm">
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
