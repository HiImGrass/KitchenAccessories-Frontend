import { Product } from "@/types/product";

interface DummyJSONResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface FetchCatalogParams {
  q?: string;
  category?: string;
  sort?: string;
  skip?: number;
  limit?: number;
}

export async function fetchCatalogProducts({
  q = "",
  category = "",
  sort = "",
  skip = 0,
  limit = 12,
}: FetchCatalogParams): Promise<DummyJSONResponse> {
  try {
    let baseUrl = "https://dummyjson.com/products";

    // 1. Phân luồng Endpoint theo Tìm kiếm hoặc Danh mục
    if (q) {
      baseUrl += `/search?q=${encodeURIComponent(q)}`;
    } else if (category) {
      baseUrl += `/category/${encodeURIComponent(category)}`;
    }

    const url = new URL(baseUrl);
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("skip", String(skip));

    // 2. Parse param sort (Ví dụ: "price_asc" -> sortBy=price & order=asc)
    if (sort) {
      const [sortByField, orderDirection] = sort.split("_");
      if (sortByField && orderDirection) {
        url.searchParams.set("sortBy", sortByField);
        url.searchParams.set("order", orderDirection);
      }
    }

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch catalog products");

    const data: DummyJSONResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Error in fetchCatalogProducts:", error);
    return { products: [], total: 0, skip: 0, limit: 12 };
  }
}