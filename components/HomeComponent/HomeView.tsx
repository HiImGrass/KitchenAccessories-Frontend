"use client";

import HeroSection from "./HeroSection";
import CollectionsSection from "./CollectionsSection";
import ProductListSection from "./ProductListSection";
import BrandEthosSection from "./BrandEthosSection";
import CommunitySection from "./CommunitySection";

export default function HomeView() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <HeroSection />
        <CollectionsSection />
        <ProductListSection />
        <BrandEthosSection />
        <CommunitySection />
      </div>
    </>
  );
}
