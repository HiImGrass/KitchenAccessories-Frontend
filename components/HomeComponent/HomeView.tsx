"use client";

import { Product } from "@/types/product";
import HeroSection from "./HeroSection";
import CollectionsSection from "./CollectionsSection";
import ProductListSection from "./ProductListSection";
import BrandEthosSection from "./BrandEthosSection";
import CommunitySection from "./CommunitySection";

interface HomeViewProps {
  featuredProducts: Product[];
}

export default function HomeView({ featuredProducts }: HomeViewProps) {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <HeroSection />
        <CollectionsSection />
        <ProductListSection products={featuredProducts} />
        <BrandEthosSection />
        <CommunitySection />
      </div>
    </>
  );
}
