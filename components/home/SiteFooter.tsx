import { LINKS } from "@/lib/site";
import { type HomeContent } from "@/lib/content/home";

export default function SiteFooter({ content }: { content: HomeContent }) {
  const { footer } = content;
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-se-line border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="font-meta text-se-muted text-xs">
          © {year} {footer.rights}
        </p>
        {/* Single discreet freelance mention — no pricing, no second sales CTA */}
        <p className="text-se-muted text-xs">
          {footer.studiosLine}{" "}
          <a
            href={LINKS.rayanStudios}
            target="_blank"
            rel="noopener noreferrer"
            className="text-se-text decoration-se-accent focus-visible:outline-se-accent font-bold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {footer.studiosLinkText}
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
