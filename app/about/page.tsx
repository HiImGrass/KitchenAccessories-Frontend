import type { Metadata } from "next";
import {
  AboutCtaSection,
  AboutHeroGallery,
  AboutIntroSection,
  CareSection,
  FounderGuildSection,
  ManifestoSection,
  MetricsSection,
  SourcingTimelineSection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | Ladle & Co.",
  description:
    "Discover the story, materials, artisan guilds, and mindful sourcing philosophy behind Ladle & Co.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-canvas-cream">
      <AboutIntroSection />
      <AboutHeroGallery />
      <ManifestoSection />
      <FounderGuildSection />
      <SourcingTimelineSection />
      <MetricsSection />
      <CareSection />
      <AboutCtaSection />
    </div>
  );
}
