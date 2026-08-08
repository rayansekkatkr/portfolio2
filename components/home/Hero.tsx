import { CV_PATH, LINKS } from "@/lib/site";
import { type HomeContent } from "@/lib/content/home";

export default function Hero({ content }: { content: HomeContent }) {
  const { hero, profileCard } = content;

  return (
    <section className="relative">
      <div aria-hidden="true" className="se-grid-texture pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:px-8 lg:py-24">
        {/* Editorial intro */}
        <div>
          <p className="font-meta text-se-accent text-xs tracking-[0.2em] uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-se-text mt-6 text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
            Rayan
            <br />
            Sekkat.
          </h1>
          <div className="bg-se-accent mt-6 h-1 w-16" aria-hidden="true" />
          <p className="text-se-text mt-6 text-2xl font-bold">{hero.title}</p>
          <p className="text-se-muted mt-1 text-lg">{hero.subtitle}</p>
          <p className="text-se-muted mt-6 max-w-md text-base leading-relaxed">{hero.value}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="bg-se-accent text-se-on-accent focus-visible:outline-se-accent inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-bold transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {hero.ctaPrimary} →
            </a>
            <a
              href={CV_PATH}
              download
              className="border-se-line bg-se-surface text-se-text hover:border-se-accent focus-visible:outline-se-accent inline-flex items-center justify-center rounded-sm border px-6 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Seoul profile card */}
        <aside
          aria-label={profileCard.heading}
          className="border-se-line bg-se-surface rounded-md border p-6 shadow-sm sm:p-8"
        >
          <p className="font-meta text-se-accent flex items-center gap-2 text-xs tracking-[0.2em] uppercase">
            <span aria-hidden="true" className="bg-se-accent inline-block h-2 w-2 rounded-full" />
            {profileCard.heading}
          </p>
          <div className="mt-4 flex items-baseline justify-between gap-4">
            <p className="font-display text-se-text text-5xl sm:text-6xl">{profileCard.city}</p>
            <p className="font-meta text-se-muted text-right text-[11px] leading-relaxed">
              {profileCard.coordinates}
            </p>
          </div>

          <dl className="border-se-line mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-6 sm:grid-cols-3">
            <div>
              <dt className="font-meta text-se-muted text-[10px] tracking-[0.16em] uppercase">
                {profileCard.locationLabel}
              </dt>
              <dd className="text-se-text mt-1 text-sm font-bold">{profileCard.locationValue}</dd>
            </div>
            <div>
              <dt className="font-meta text-se-muted text-[10px] tracking-[0.16em] uppercase">
                {profileCard.availabilityLabel}
              </dt>
              <dd className="text-se-text mt-1 text-sm font-bold">
                {profileCard.availabilityValue}
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="font-meta text-se-muted text-[10px] tracking-[0.16em] uppercase">
                {profileCard.visaLabel}
              </dt>
              <dd className="text-se-text mt-1 text-sm font-bold">{profileCard.visaCompact}</dd>
            </div>
          </dl>
          {/* Full visa explanation, always visible — the compact form alone is not enough */}
          <p className="text-se-muted mt-2 text-sm leading-relaxed">{profileCard.visaFull}</p>

          <div className="border-se-line mt-5 border-t pt-5">
            <p className="font-meta text-se-muted text-[10px] tracking-[0.16em] uppercase">
              {profileCard.languagesLabel}
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {profileCard.languages.map((lang) => (
                <li key={lang} className="text-se-text text-sm">
                  {lang}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-se-line mt-5 border-t pt-5">
            <p className="font-meta text-se-muted text-[10px] tracking-[0.16em] uppercase">
              {profileCard.targetRolesLabel}
            </p>
            <p className="text-se-text mt-2 text-sm font-bold">{profileCard.targetRolesValue}</p>
          </div>

          <a
            href={`mailto:${LINKS.email}`}
            className="bg-se-accent focus-visible:outline-se-accent mt-6 block rounded-sm px-5 py-4 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span className="font-meta text-se-on-accent/70 block text-[10px] tracking-[0.16em] uppercase">
              {profileCard.ctaEyebrow}
            </span>
            <span className="text-se-on-accent mt-1 block text-base font-bold">
              {profileCard.cta} →
            </span>
          </a>
        </aside>
      </div>
    </section>
  );
}
