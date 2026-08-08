import { Linkedin, Mail } from "lucide-react";
import CopyEmailButton from "@/components/home/CopyEmailButton";
import { CV_PATH, LINKS } from "@/lib/site";
import { type HomeContent } from "@/lib/content/home";

export default function RecruiterCTA({ content }: { content: HomeContent }) {
  const { contact } = content;

  return (
    <section id="contact" className="border-se-line scroll-mt-20 border-t">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <h2 className="font-display text-se-text max-w-3xl text-4xl leading-tight sm:text-5xl">
          {contact.heading}
        </h2>
        <p className="text-se-muted mt-6 max-w-2xl text-base leading-relaxed">{contact.body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${LINKS.email}`}
            className="bg-se-accent text-se-on-accent focus-visible:outline-se-accent inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-bold transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            {LINKS.email}
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-se-line bg-se-surface text-se-text hover:border-se-accent focus-visible:outline-se-accent inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Linkedin aria-hidden="true" className="h-4 w-4" />
            {contact.linkedinLabel}
          </a>
          <a
            href={CV_PATH}
            download
            className="border-se-line bg-se-surface text-se-text hover:border-se-accent focus-visible:outline-se-accent inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {contact.cvLabel}
          </a>
          <CopyEmailButton
            email={LINKS.email}
            label={contact.copyEmail}
            copiedLabel={contact.copied}
          />
        </div>
      </div>
    </section>
  );
}
