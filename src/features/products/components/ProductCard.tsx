"use client";

import { ChevronDownIcon } from "@/components/icons";
import ShoeSVG from "@/components/ui/show-svg/ShoeSVG";
import { formatPrice } from "@/utils/formatPrice";

export type Product = {
  id: string;
  name: string;
  brand: string;
  colors: string[];
  price: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className="group rounded-2xl p-2 sm:p-3 hover:bg-white/60 transition"
      data-id={product.id}
    >
      {/* Image */}
      <div className="aspect-square rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 p-3 flex items-center justify-center overflow-hidden">
        <ShoeSVG />
      </div>

      {/* Title */}
      <h4 className="mt-2 text-sm sm:text-base font-bold line-clamp-2">
        {product.name}
      </h4>

      {/* Brand */}
      <div className="text-xs text-neutral-500 mt-0.5">{product.brand}</div>

      {/* Colors */}
      <div className="flex items-center gap-1.5 mt-2">
        {product.colors.map((c, i) => (
          <span
            key={i}
            className="inline-block w-4 h-4 rounded-full ring-2 ring-white shadow"
            style={{ backgroundColor: c }}
            title={`رنگ ${i + 1}`}
          />
        ))}
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between mt-2">
        <button
          className="flex items-center gap-1.5 text-brand-700 hover:text-brand-600 bg-brand-50 hover:bg-brand-50/70 px-2.5 py-1.5 rounded-lg transition"
          onClick={() => alert("مشاهده جزئیات: " + product.name)}
        >
          <span className="text-xs font-bold">جزئیات</span>
          <ChevronDownIcon />
        </button>

        <div className="text-left text-sm sm:text-base font-extrabold tabular-nums">
          {formatPrice(product.price)}
        </div>
      </div>
    </article>
  );
}
