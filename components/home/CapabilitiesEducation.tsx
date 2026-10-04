import { SectionHead, WRAP } from "@/components/home/Section";
import { type HomeContent } from "@/lib/content/home";

export function Capabilities({ content }: { content: HomeContent }) {
  const { capabilities, nav } = content;

  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="scroll-mt-14">
      <div className={`${WRAP} pt-20 pb-20 lg:pt-28 lg:pb-24`}>
        <SectionHead
          id="capabilities-heading"
          index={capabilities.index}
          label={nav.capabilities}
          heading={capabilities.heading}
          intro={capabilities.intro}
        />

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          {/* Engineering, ranked */}
          <div className="lg:col-span-8">
            <h3 className="font-meta text-se-faint border-se-line-strong border-t pt-3 text-[11px] tracking-[0.14em] uppercase">
              {capabilities.engineeringHeading}
            </h3>
            <dl>
              {capabilities.tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className="border-se-line grid gap-3 border-b py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
                >
                  <dt>
                    <span className="font-meta text-se-accent block text-[11px] tracking-[0.14em] uppercase">
                      {tier.name}
                    </span>
                    <span className="text-se-muted mt-1 block text-sm">{tier.note}</span>
                  </dt>
                  <dd>
                    <ul
                      className={`flex flex-wrap gap-x-2 gap-y-1 ${
                        i === 0
                          ? "se-title text-se-text text-[clamp(1.6rem,3vw,2.4rem)] leading-tight"
                          : i === 1
                            ? "text-se-text text-xl font-semibold"
                            : "text-se-muted text-base"
                      }`}
                    >
                      {tier.items.map((item, j) => (
                        <li key={item}>
                          {item}
                          {j < tier.items.length - 1 && (
                            <span aria-hidden="true" className="text-se-faint ml-2 font-normal">
                              /
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Product & delivery */}
          <div className="lg:col-span-4">
            <div className="bg-se-text text-se-bg p-6 sm:p-8">
              <h3 className="font-meta text-[11px] tracking-[0.14em] uppercase opacity-70">
                {capabilities.productHeading}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {capabilities.product.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-snug">
                    <span aria-hidden="true" className="text-se-accent font-meta">
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
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
