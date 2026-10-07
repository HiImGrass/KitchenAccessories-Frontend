// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGallery from "@/components/details/ProductGallery";
import ProductActions from "@/components/details/ProductActions";
import ProductCard from "@/components/products/ProductCard";
import { getProductById, getRelatedProducts } from "@/lib/dummyjson";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductInfoPage({ params }: ProductPageProps) {
  // Giải mã async params theo chuẩn Next.js 15/16
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.category);
  const discount = product.discountPercentage || 0;
  const originalPrice = discount > 0 
    ? (product.price / (1 - discount / 100)).toFixed(2) 
    : product.price.toFixed(2);

  return (
    <main className="w-full pt-20 bg-canvas-cream min-h-[calc(100vh-20rem)] pb-20">
      {/* Breadcrumb Navigation */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:underline">Home</Link>
          <span>&gt;</span>
          <Link href={`/category/${product.category}`} className="capitalize hover:underline">
            {product.category}
          </Link>
          <span>&gt;</span>
          <span className="text-gray-800 font-medium truncate max-w-[200px]">
            {product.title}
          </span>
        </nav>
      </div>

      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cột trái: Gallery Ảnh */}
          <div className="lg:col-span-7">
            <ProductGallery thumbnail={product.thumbnail} images={product.images || []} />
          </div>

          {/* Cột phải: Thông tin & Nút mua hàng */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-sm text-orange-600 tracking-wider uppercase font-semibold">
                {product.brand || "Artisan Tools"}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                {product.title}
              </h1>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-orange-600 font-medium">
                  ★ {(product.rating || 0).toFixed(1)}
                </span>
                <span className="text-sm text-gray-600 underline">
                  ({product.stock || 0} in stock)
                </span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl space-y-2 shadow-sm">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl text-orange-600 font-bold">${product.price}</span>
                {discount > 0 && (
                  <>
                    <span className="text-lg text-gray-400 line-through">${originalPrice}</span>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                      -{Math.round(discount)}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Component tương tác thêm giỏ hàng */}
            <ProductActions product={product} />

            <div className="grid grid-cols-2 gap-2 pt-4">
              <div className="bg-white p-3 rounded-lg flex items-center gap-2 shadow-sm text-sm text-gray-800">
                🛡️ {product.warrantyInformation || "1 Year Warranty"}
              </div>
              <div className="bg-white p-3 rounded-lg flex items-center gap-2 shadow-sm text-sm text-gray-800">
                📦 {product.shippingInformation || "Free Shipping"}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Danh sách sản phẩm liên quan */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedProducts.map((item: any) => (
            item.id !== product.id && (
              <ProductCard key={item.id} product={item} />
            )
          ))}
        </div>
      </section>
    </main>
  );
}