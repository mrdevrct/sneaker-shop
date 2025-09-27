"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  name: string;
  category: string;
  price: number;
  sizes: string[];
  colors: string[];
}

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const fmtPrice = (n: number) => n.toLocaleString("fa-IR") + " تومان";

  return (
    <div>
      <nav aria-label="breadcrumbs" className="mb-4">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li>
            <Link href="/" className="text-neutral-600 hover:text-neutral-900">
              خانه
            </Link>
          </li>
          <span className="text-neutral-400">›</span>
          <li>
            <Link
              href="/products"
              className="text-neutral-600 hover:text-neutral-900"
            >
              محصولات
            </Link>
          </li>
          <span className="text-neutral-400">›</span>
          <li>
            <span className="crumb-arrow inline-flex items-center h-9 px-3 text-xs sm:text-sm font-bold">
              {product.name}
            </span>
          </li>
        </ol>
      </nav>
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-extrabold">{product.name}</h2>
        <div className="text-sm text-neutral-500 mt-1">
          دسته‌بندی: {product.category}
        </div>
      </div>
      <div className="mb-5">
        <h3 className="text-sm font-bold mb-2">انتخاب سایز</h3>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              className={`px-3 py-2 rounded-xl bg-white border border-neutral-200 text-sm font-bold hover:border-neutral-300 active:scale-[0.98] transition ${
                selectedSize === size ? "is-active" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-bold mb-2">انتخاب رنگ</h3>
        <div className="flex items-center flex-wrap gap-2">
          {product.colors.map((color, i) => (
            <button
              key={color}
              type="button"
              title={`رنگ ${i + 1}`}
              className={`w-8 h-8 rounded-full ring-2 ring-white border border-neutral-300 shadow hover:scale-105 active:scale-95 transition ${
                selectedColor === color ? "is-active" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-left">
          <div className="text-xs text-neutral-500 mb-1">قیمت</div>
          <div className="text-2xl font-extrabold tabular-nums">
            {fmtPrice(product.price)}
          </div>
        </div>
      </div>
    </div>
  );
}