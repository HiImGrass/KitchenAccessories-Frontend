import {
  HeroSection,
  CollectionsSection,
  BrandEthosSection,
  CommunitySection,
} from "@/components/home/";
import ProductList from "@/components/products/ProductList";
export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-canvas-cream min-h-[calc(100vh-20rem)]">
      <HeroSection />
      <CollectionsSection />
      <ProductList />
      <BrandEthosSection />
      <CommunitySection />
    </div>
  );
}
