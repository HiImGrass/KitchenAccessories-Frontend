// Hands-on Lab Next.js: ProductSearch.tsx

export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
};

const SAMPLE: Product[] = [
  { id: 1, title: "Essence Mascara Lash Princess", price: 9.99, thumbnail: "t1.png" },
  { id: 2, title: "Eyeshadow Palette with Mirror", price: 19.99, thumbnail: "t2.png" },
  { id: 3, title: "Powder Canister", price: 14.99, thumbnail: "t3.png" },
  { id: 4, title: "Red Lipstick", price: 12.99, thumbnail: "t4.png" },
  { id: 5, title: "Red Nail Polish", price: 8.99, thumbnail: "t5.png" },
  { id: 6, title: "Calvin Klein CK One", price: 49.99, thumbnail: "t6.png" },
  { id: 7, title: "Chanel Coco Noir Eau De", price: 129.99, thumbnail: "t7.png" },
  { id: 8, title: "Dior J'adore", price: 89.99, thumbnail: "t8.png" },
];

/**
 * Giữ sản phẩm có title chứa query (không phân biệt hoa/thường). Khi maxPrice
 * không rỗng, chỉ giữ sản phẩm có giá nhỏ hơn hoặc bằng giá đó.
 */
export function filterProducts(
  products: Product[],
  query: string,
  maxPrice: string,
): Product[] {
  const normalizedQuery = query.toLowerCase();
  const titleMatches = products.filter((product) =>
    product.title.toLowerCase().includes(normalizedQuery),
  );

  if (maxPrice === "") {
    return titleMatches;
  }

  const maximumPrice = Number(maxPrice);
  return titleMatches.filter((product) => product.price <= maximumPrice);
}

/**
 * Tạo các dòng hiển thị kết quả tìm kiếm: dòng đầu là số lượng, các dòng sau
 * là tên và giá của từng sản phẩm.
 */
export function renderSearch(
  products: Product[],
  query: string,
  maxPrice: string,
): string[] {
  const found = filterProducts(products, query, maxPrice);

  return [
    `${found.length} product(s) found`,
    ...found.map((product) => `- ${product.title}: $${product.price}`),
  ];
}

export const API_URL = "https://dummyjson.com/products?limit=8";

/**
 * Lấy dữ liệu từ API. fetcher được truyền vào để có thể kiểm thử mà không phụ
 * thuộc vào fetch toàn cục.
 */
export async function getProducts(fetcher: typeof fetch): Promise<Product[]> {
  const response = await fetcher(API_URL, { next: { revalidate: 120 } });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = (await response.json()) as ProductsResponse;
  return data.products;
}

// Harness (không sửa): chạy phần A mặc định, thêm đối số B để chạy phần B.
const SEARCHES: [string, string][] = [
  ["", ""],
  ["red", ""],
  ["RED", "10"],
  ["", "15"],
  ["e", "3"],
  ["dior", "50"],
  ["xyz", ""],
];

async function runHarness() {
  if (process.argv[2] === "B") {
    const fakeFetch =
      (ok: boolean) =>
      (async (url: string, init?: RequestInit) => {
        console.log(`fetch ${url} ${JSON.stringify(init)}`);
        return new Response(
          JSON.stringify({ products: SAMPLE.slice(0, 3) }),
          { status: ok ? 200 : 503 },
        );
      }) as typeof fetch;

    for (const ok of [true, false]) {
      console.log(`API ${ok ? "200" : "503"}:`);
      try {
        const products = await getProducts(fakeFetch(ok));
        console.log(
          ` -> ${products.length} sản phẩm: ${products.map((product) => product.id).join(",")}`,
        );
      } catch (error) {
        console.log(` -> Error: ${(error as Error).message}`);
      }
    }
    return;
  }

  for (const [query, maxPrice] of SEARCHES) {
    console.log(`query="${query}" maxPrice="${maxPrice}"`);
    console.log(renderSearch(SAMPLE, query, maxPrice).join("\n"));
  }
}

void runHarness();
