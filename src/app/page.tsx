import { ExperienceSkills } from "@/components/ExperienceSkills";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { PersonalProjects } from "@/components/PersonalProjects";
import { SectionBand } from "@/components/SectionBand";
import { SiteFooter } from "@/components/SiteFooter";
import { WorkIndex } from "@/components/WorkIndex";

/**
 * Phase 7 — Craft pass: texture, layout variation, side index, micro-interactions.
 */
export default function Home() {
  return (
    <>
      <WorkIndex />
      <main className="w-full overflow-x-hidden">
        <SectionBand id="hero" tone="paper">
          <Hero />
        </SectionBand>

        <SectionBand id="featured" tone="ink" tornTop tearVariant={0}>
          <FeaturedWork />
        </SectionBand>

        <SectionBand id="personal" tone="paper" tornTop tearVariant={1}>
          <PersonalProjects />
        </SectionBand>

        <SectionBand id="experience" tone="ink" tornTop tearVariant={2}>
          <ExperienceSkills />
        </SectionBand>

        <SectionBand id="connect" tone="paper" tornTop tearVariant={0} as="footer">
          <SiteFooter />
        </SectionBand>
      </main>
    </>
  );
}
