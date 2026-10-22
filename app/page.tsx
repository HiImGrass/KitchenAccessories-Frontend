import HomeView from "@/components/HomeComponent/HomeView";
import { fetchCatalogProducts } from "@/lib/dummyjson";

export default async function Home() {
  const { products } = await fetchCatalogProducts({
    limit: 4,
    sort: "rating_desc",
  });

  return (
    <div className="flex flex-col w-full bg-canvas-cream min-h-[calc(100vh-20rem)]">
      <HomeView featuredProducts={products} />
    </div>
  );
}
