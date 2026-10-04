import { WRAP } from "@/components/home/Section";
import { LINKS } from "@/lib/site";
import { type HomeContent } from "@/lib/content/home";

export default function SiteFooter({ content }: { content: HomeContent }) {
  const { footer } = content;
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-se-line border-t">
      <div
        className={`${WRAP} font-meta text-se-muted flex flex-col gap-3 py-8 text-[11px] tracking-[0.06em] lg:flex-row lg:items-center lg:justify-between`}
      >
        <p>
          © {year} {footer.rights}
          <span aria-hidden="true" className="text-se-faint mx-2">
            /
          </span>
          {footer.built}
        </p>
        <p>
          {footer.studiosLine}{" "}
          <a
            href={LINKS.rayanStudios}
            target="_blank"
            rel="noopener noreferrer"
            className="text-se-text decoration-se-accent focus-visible:outline-se-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {footer.studiosLinkText}
          </a>
          <span aria-hidden="true" className="text-se-faint mx-2">
            /
          </span>
          <a
            href="#main"
            className="text-se-text hover:text-se-accent focus-visible:outline-se-accent focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {footer.backToTop} ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
