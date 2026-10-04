import { ArrowDown, ArrowUpRight } from "lucide-react";
import CopyEmailButton from "@/components/home/CopyEmailButton";
import { WRAP } from "@/components/home/Section";
import { CV, LINKS } from "@/lib/site";
import { type HomeContent } from "@/lib/content/home";

const CELL =
  "group border-se-line-strong text-se-text hover:bg-se-text hover:text-se-bg focus-visible:outline-se-accent flex items-center justify-between gap-4 border-b px-1 py-5 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 sm:px-4 lg:border-r lg:border-b-0 lg:last:border-r-0";

export default function RecruiterCTA({ content }: { content: HomeContent }) {
  const { contact, nav } = content;

  const links = [
    { href: LINKS.linkedin, label: contact.linkedinLabel, external: true },
    { href: LINKS.github, label: contact.githubLabel, external: true },
    { href: CV.backend, label: contact.cvBackend, external: false },
    { href: CV.devops, label: contact.cvDevops, external: false },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-14">
      <div className={`${WRAP} pb-16 lg:pb-24`}>
        <div className="bg-se-surface border-se-line-strong border">
          <div className="p-6 sm:p-10 lg:p-14">
            <div className="font-meta text-se-muted flex items-center justify-between text-[11px] tracking-[0.14em] uppercase">
              <span>
                <span className="text-se-accent">{contact.index}</span>
                <span aria-hidden="true" className="text-se-faint mx-2">
                  /
                </span>
                {nav.contact}
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="bg-se-ok se-blink h-1.5 w-1.5 rounded-full" />
                <span className="hidden sm:inline">{contact.reply}</span>
              </span>
            </div>

            <h2
              id="contact-heading"
              className="se-display text-se-text mt-10 max-w-5xl text-[clamp(3rem,8vw,7.5rem)]"
            >
              {contact.heading}
            </h2>
            <p className="text-se-muted mt-8 max-w-2xl text-base leading-relaxed sm:text-lg">
              {contact.body}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={`mailto:${LINKS.email}`}
                className="se-title text-se-text decoration-se-accent hover:text-se-accent focus-visible:outline-se-accent text-[clamp(1.5rem,4.2vw,3.25rem)] break-all underline decoration-2 underline-offset-[0.18em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {LINKS.email}
              </a>
              <CopyEmailButton
                email={LINKS.email}
                label={contact.copyEmail}
                copiedLabel={contact.copied}
              />
            </div>
            <p className="text-se-muted mt-4 text-sm sm:hidden">{contact.reply}</p>
          </div>

          <ul className="border-se-line-strong grid border-t lg:grid-cols-4">
            {links.map((link) => (
              <li key={link.href} className="contents">
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { download: true })}
                  className={CELL}
                >
                  <span className="pl-5 text-sm font-semibold sm:pl-2">{link.label}</span>
                  <span className="pr-5 sm:pr-2">
                    {link.external ? (
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <ArrowDown aria-hidden="true" className="h-4 w-4" />
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
