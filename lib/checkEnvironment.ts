/**
 * Lấy Base URL cho các API nội bộ (Internal Next.js API Routes)
 * Dùng khi gọi fetch() ở Server Side (SSR / Server Components)
 */
export const getInternalBaseUrl = (): string => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return (
    process.env.INTERNAL_API_URL ||
    process.env.NEXT_PUBLIC_PRODUCTION_URL ||
    (process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_DEV_URL || "http://localhost:3000"
      : "http://localhost:3000")
  );
};

/**
 * Base URL cho External API (DummyJSON)
 */
export const DUMMY_JSON_BASE_URL =
  process.env.NEXT_PUBLIC_DUMMY_JSON_URL || "https://dummyjson.com";