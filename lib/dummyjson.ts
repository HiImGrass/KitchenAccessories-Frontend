import { Product } from "@/types/product";
import { DUMMY_JSON_BASE_URL } from "./checkEnvironment";

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
    let baseUrl = `${DUMMY_JSON_BASE_URL}/products`;

    // 1. Phân luồng Endpoint theo Tìm kiếm hoặc Danh mục
    if (q) {
      baseUrl += `/search?q=${encodeURIComponent(q)}`;
    } else if (category) {
      baseUrl += `/category/${encodeURIComponent(category)}`;
    }

    const url = new URL(baseUrl);
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("skip", String(skip));

    // 2. Parse param sort
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

export interface DummyJSONCartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface DummyJSONCartResponse {
  id: number;
  products: DummyJSONCartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface DummyJSONProductDetail {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand?: string;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  thumbnail: string;
  images: string[];
}

export type CartDataSource = "cart_api" | "kitchen_category";

/**
 * Fetch a cart directly from DummyJSON Carts endpoint: GET /carts/{id}
 */
export async function fetchDummyCart(
  cartId: number = 1
): Promise<DummyJSONCartResponse | null> {
  try {
    const res = await fetch(`${DUMMY_JSON_BASE_URL}/carts/${cartId}`, {
      cache: "no-store",
    });
    if (!res.ok)
      throw new Error(`Failed to fetch cart ${cartId}: ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching dummy cart:", err);
    return null;
  }
}

/**
 * Fetch single product detail from DummyJSON: GET /products/{id}
 */
export async function fetchProductDetail(
  id: number
): Promise<DummyJSONProductDetail | null> {
  try {
    const res = await fetch(`${DUMMY_JSON_BASE_URL}/products/${id}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

/**
 * Fetch cart items from DummyJSON API, converting raw responses into CartItem format.
 */
export async function fetchCartItemsFromDummyJSON(options?: {
  source?: CartDataSource;
  cartId?: number;
  limit?: number;
}) {
  const source = options?.source || "kitchen_category";
  const cartId = options?.cartId || 1;
  const limit = options?.limit || 3;

  if (source === "kitchen_category") {
    try {
      const res = await fetch(
        `${DUMMY_JSON_BASE_URL}/products/category/kitchen-accessories?limit=${limit}`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok)
        throw new Error("Failed to fetch kitchen products from DummyJSON");
      const data = await res.json();

      return data.products.map((p: DummyJSONProductDetail) => ({
        id: String(p.id),
        name: p.title,
        price: p.price,
        quantity: 1,
        image: p.thumbnail,
        details: `${p.brand || "Artisan Workshop"}\n${
          p.warrantyInformation || p.shippingInformation || "Handmade"
        }`,
        stockStatus:
          p.availabilityStatus === "Low Stock" || p.stock < 10
            ? "low_stock"
            : "in_stock",
        stockLabel: p.availabilityStatus || "In Stock",
        stockNote: p.shippingInformation || "Ready for dispatch",
        maxQuantity: p.stock || 20,
      }));
    } catch (err) {
      console.error("Error in fetchCartItemsFromDummyJSON (kitchen):", err);
      return [];
    }
  }

  // Default: Fetch from DummyJSON Cart API (/carts/{cartId})
  try {
    const cart = await fetchDummyCart(cartId);
    if (!cart || !cart.products) return [];

    const enriched = await Promise.all(
      cart.products.map(async (p) => {
        const detail = await fetchProductDetail(p.id);
        const isLow =
          detail?.availabilityStatus === "Low Stock" ||
          (detail?.stock !== undefined && detail.stock < 10);

        return {
          id: String(p.id),
          name: p.title,
          price: p.price,
          quantity: p.quantity,
          image: p.thumbnail,
          details: `${detail?.category || "Curated Item"}\n${
            detail?.shippingInformation || "Direct delivery"
          }`,
          stockStatus: isLow ? "low_stock" : "in_stock",
          stockLabel: detail?.availabilityStatus || "In Stock",
          stockNote: detail?.warrantyInformation || "Ready for dispatch",
          maxQuantity: detail?.stock || 50,
        };
      })
    );

    return enriched;
  } catch (err) {
    console.error("Error in fetchCartItemsFromDummyJSON (cart):", err);
    return [];
  }
}