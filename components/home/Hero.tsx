import Image from "next/image";
import HeroTracks from "@/components/home/HeroTracks";
import { WRAP } from "@/components/home/Section";
import { type HomeContent } from "@/lib/content/home";

export default function Hero({ content }: { content: HomeContent }) {
  const { hero } = content;

  return (
    <section aria-labelledby="hero-name" className="relative">
      <div className={`${WRAP} pt-8 pb-16 lg:pt-12 lg:pb-24`}>
        {/* Status line */}
        <p className="font-meta text-se-text flex items-center gap-2.5 text-[11px] tracking-[0.14em] uppercase">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="bg-se-ok se-blink absolute inline-flex h-full w-full rounded-full" />
          </span>
          {hero.status}
        </p>

        {/* Name, set big and condensed */}
        <h1
          id="hero-name"
          className="se-display text-se-text mt-6 text-[clamp(3.5rem,19vw,17.5rem)] whitespace-nowrap lg:mt-8"
        >
          Rayan Sekkat
          <span className="text-se-accent">.</span>
        </h1>

        <div className="border-se-line-strong mt-10 grid gap-12 border-t pt-8 lg:mt-12 lg:grid-cols-12 lg:gap-10 lg:pt-10">
          <div className="lg:col-span-7">
            <HeroTracks
              tracks={hero.tracks}
              trackLabel={hero.trackLabel}
              focusLabel={hero.focusLabel}
              ctaWork={hero.ctaWork}
            />
          </div>

          {/* Spec sheet */}
          <aside aria-labelledby="hero-spec" className="lg:col-span-5 lg:pl-6">
            <div className="flex items-end gap-5">
              <figure className="border-se-line-strong bg-se-sunken relative w-24 shrink-0 overflow-hidden border sm:w-28">
                <Image
                  src="/images/profile.jpg"
                  alt={hero.photoAlt}
                  width={700}
                  height={900}
                  sizes="112px"
                  priority
                  className="aspect-[4/5] h-auto w-full object-cover contrast-[1.05] grayscale-[35%]"
                />
              </figure>
              <div className="pb-1">
                <h2
                  id="hero-spec"
                  className="font-meta text-se-faint text-[11px] tracking-[0.14em] uppercase"
                >
                  {hero.specHeading}
                </h2>
                <p className="font-meta text-se-muted mt-1 text-[11px]">{hero.photoCaption}</p>
              </div>
            </div>

            <dl className="border-se-line mt-6 border-t">
              {hero.spec.map((row) => (
                <div
                  key={row.label}
                  className="border-se-line grid grid-cols-[96px_1fr] gap-4 border-b py-3.5 sm:grid-cols-[120px_1fr]"
                >
                  <dt className="font-meta text-se-faint pt-0.5 text-[11px] tracking-[0.12em] uppercase">
                    {row.label}
                  </dt>
                  <dd>
                    <span className="text-se-text block text-[15px] font-semibold">
                      {row.value}
                    </span>
                    {row.note && (
                      <span className="text-se-muted mt-0.5 block text-sm">{row.note}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
