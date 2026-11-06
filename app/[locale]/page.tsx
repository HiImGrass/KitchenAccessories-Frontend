import HomeView from "@/components/HomeComponent/HomeView";
import { fetchCatalogProducts } from "@/lib/dummyjson";
import { PageIntlProvider } from "@/components/providers/PageIntlProvider";
import { getScopedMessages } from "@/lib/intlMessages";

export default async function Home() {
  const messages = await getScopedMessages(["home", "product"]);
  const { products } = await fetchCatalogProducts({
    limit: 4,
    sort: "rating_desc",
  });

  return (
    <PageIntlProvider messages={messages}>
      <div className="flex flex-col w-full bg-canvas-cream min-h-[calc(100vh-20rem)]">
        <HomeView featuredProducts={products} />
      </div>
    </PageIntlProvider>
  );
}
