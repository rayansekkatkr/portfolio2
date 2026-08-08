import { notFound } from "next/navigation";
import SiteHeader from "@/components/home/SiteHeader";
import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import SelectedWork from "@/components/home/SelectedWork";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import { Capabilities, EducationLanguages } from "@/components/home/CapabilitiesEducation";
import RecruiterCTA from "@/components/home/RecruiterCTA";
import SiteFooter from "@/components/home/SiteFooter";
import { home } from "@/lib/content/home";
import { isLocale } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = home[locale];

  return (
    <>
      <a
        href="#main"
        className="focus:bg-se-accent focus:text-se-on-accent sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:px-4 focus:py-2 focus:font-bold"
      >
        {content.nav.skipToContent}
      </a>
      <SiteHeader locale={locale} nav={content.nav} />
      <main id="main">
        <Hero content={content} />
        <ProofStrip content={content} />
        <SelectedWork content={content} />
        <ExperienceTimeline content={content} />
        <Capabilities content={content} />
        <EducationLanguages content={content} />
        <RecruiterCTA content={content} />
      </main>
      <SiteFooter content={content} />
    </>
  );
}
