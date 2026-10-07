import { fetchCatalogProducts } from '@/lib/dummyjson';
import { ProductCatalog } from '@/components/CatalogComponent/ProductCatalog';

interface PageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    sort?: string;
    skip?: string;
    limit?: string;
  }>;
}

export default async function CatalogPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;

  const q = resolvedParams.q || '';
  const category = resolvedParams.category || '';
  const sort = resolvedParams.sort || '';
  const skip = Number(resolvedParams.skip) || 0;
  const limit = Number(resolvedParams.limit) || 12;

  const data = await fetchCatalogProducts({ q, category, sort, skip, limit });

  return (
    <main className="w-full pt-20 bg-canvas-cream min-h-[calc(100vh-20rem)]">
      <ProductCatalog
        products={data.products}
        total={data.total}
        skip={data.skip}
        limit={data.limit}
        currentQuery={q}
        currentCategory={category}
        currentSort={sort}
      />
    </main>
  );
}