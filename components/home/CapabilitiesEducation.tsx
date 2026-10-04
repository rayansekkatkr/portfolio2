import { SectionHead, WRAP } from "@/components/home/Section";
import { type HomeContent } from "@/lib/content/home";

export function Capabilities({ content }: { content: HomeContent }) {
  const { capabilities, nav } = content;
  const total = capabilities.groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="scroll-mt-14">
      <div className={`${WRAP} pt-20 pb-20 lg:pt-28 lg:pb-24`}>
        <SectionHead
          id="capabilities-heading"
          index={capabilities.index}
          label={nav.capabilities}
          heading={capabilities.heading}
          aside={`${total} tools`}
        />
        <dl className="border-se-line mt-14 grid border-t border-l sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {capabilities.groups.map((group) => (
            <div key={group.name} className="border-se-line border-r border-b p-5 sm:p-6">
              <dt className="font-meta text-se-faint flex items-baseline justify-between text-[11px] tracking-[0.12em] uppercase">
                <span className="text-se-accent">{group.name}</span>
                <span aria-hidden="true">{String(group.items.length).padStart(2, "0")}</span>
              </dt>
              <dd className="mt-4">
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-se-text text-[15px] leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
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
    <section aria-labelledby="education-heading">
      <div className={`${WRAP} grid gap-14 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28`}>
        <div className="lg:col-span-7">
          <h2
            id="education-heading"
            className="font-meta text-se-faint border-se-line-strong border-t pt-3 text-[11px] tracking-[0.14em] uppercase"
          >
            {education.heading}
          </h2>
          <ul className="mt-6">
            {education.schools.map((school) => (
              <li
                key={school.name}
                className="border-se-line grid gap-1 border-b py-5 sm:grid-cols-[1fr_auto] sm:gap-6"
              >
                <div>
                  <p className="text-se-text text-lg font-semibold">{school.name}</p>
                  <p className="text-se-muted mt-1 text-sm">{school.detail}</p>
                </div>
                <p className="font-meta text-se-muted text-xs sm:pt-1.5">{school.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <h2 className="font-meta text-se-faint border-se-line-strong border-t pt-3 text-[11px] tracking-[0.14em] uppercase">
            {education.languagesHeading}
          </h2>
          <ul className="mt-6">
            {education.languages.map((lang) => (
              <li key={lang.name} className="border-se-line border-b py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-se-text text-lg font-semibold">{lang.name}</p>
                  <p className="text-se-muted text-right text-sm">{lang.level}</p>
                </div>
                <div aria-hidden="true" className="bg-se-line mt-3 h-[3px] w-full">
                  <div className="bg-se-text h-full" style={{ width: `${lang.bar}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
