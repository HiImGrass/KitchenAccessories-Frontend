"use client";

import AboutCtaSection from "./AboutCtaSection";
import AboutHeroGallery from "./AboutHeroGallery";
import AboutIntroSection from "./AboutIntroSection";
import CareSection from "./CareSection";
import FounderGuildSection from "./FounderGuildSection";
import ManifestoSection from "./ManifestoSection";
import MetricsSection from "./MetricsSection";
import SourcingTimelineSection from "./SourcingTimelineSection";

export default function AboutView() {
  return (
    <>
      <div className="flex flex-col w-full bg-canvas-cream">
        <AboutIntroSection />
        <AboutHeroGallery />
        <ManifestoSection />
        <FounderGuildSection />
        <SourcingTimelineSection />
        <MetricsSection />
        <CareSection />
      </div>
    </>
  );
}
