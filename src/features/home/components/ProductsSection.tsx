"use client";
import ProductCard, { Product } from "@/features/products/components/ProductCard";

export default function ProductsSection({
  products,
  title,
  linkMore,
}: {
  products: Product[];
  title: string;
  linkMore: string;
}) {
  return (
    <section className="mb-8 sm:mb-10">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <a
          href={linkMore}
          className="text-brand-600 hover:text-brand-700 text-sm font-semibold"
        >
          مشاهده همه
        </a>
      </div>

      <div id="productGrid" className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
