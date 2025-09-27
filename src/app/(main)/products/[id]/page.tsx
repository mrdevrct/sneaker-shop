"use client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProductName } from "@/store/product/productSlice";
import ProductGallery from "@/features/products/components/ProductGallery";
import ProductDetails from "@/features/products/components/ProductDetails";
import ProductDescription from "@/features/products/components/ProductDescription";

// Demo product data
const product = {
  id: "pd-jordan-2020",
  name: "کفش جردن 2020",
  category: "کتانی ورزشی",
  brand: "NIKE",
  price: 3290000,
  images: [
    { id: "img1", from: "#f3f4f6", to: "#d1d5db" },
    { id: "img2", from: "#e0e7ff", to: "#a5b4fc" },
    { id: "img3", from: "#fee2e2", to: "#fca5a5" },
    { id: "img4", from: "#dcfce7", to: "#86efac" },
  ],
  sizes: ["40", "41", "42", "43", "44", "45"],
  colors: ["#111827", "#ef4444", "#3b82f6", "#10b981"],
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductName(product.name));
  }, [dispatch]);

  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <ProductGallery images={product.images} />
        <ProductDetails product={product} />
      </section>
      <ProductDescription />
    </div>
  );
}