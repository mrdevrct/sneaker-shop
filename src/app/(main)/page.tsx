import BannerGrid from "@/features/home/components/BannerGrid";
import BannerSlider from "@/features/home/components/BannerSlider";
import BrandsMarquee from "@/features/home/components/BrandsMarquee";
import ProductsSection from "@/features/home/components/ProductsSection";
import SearchBar from "@/features/home/components/SearchBar";

const BANNERS = [
  {
    id: "b1",
    src: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/261010169/original/ca3f2b9666d08640fbab8f0cd0ba1c8df654eeb2/black-and-green-nike-shoes-banner-for-you.jpg",
    link: "/promo/1",
  },
  {
    id: "b2",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/980dce223880087.6800c7c1b5aa2.jpg",
    link: "/promo/2",
  },
  {
    id: "b3",
    src: "https://cdn.dribbble.com/userupload/29872363/file/original-57ca0932ea2aefb714668fbc0c40ef6c.jpg?resize=752x&vertical=center",
    link: "/promo/3",
  },
  {
    id: "b4",
    src: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/261010169/original/ca3f2b9666d08640fbab8f0cd0ba1c8df654eeb2/black-and-green-nike-shoes-banner-for-you.jpg",
    link: "/promo/4",
  },
];

const PRODUCTS_DATA = {
  popular: [
    {
      id: "p1",
      name: "کتانی رانینگ AirZoom",
      brand: "NIKE",
      colors: ["#111827", "#ef4444", "#f59e0b"],
      price: 2890000,
    },
    {
      id: "p2",
      name: "Ultraboost 22",
      brand: "ADIDAS",
      colors: ["#1f2937", "#3b82f6"],
      price: 3590000,
    },
  ],
  newest: [
    {
      id: "p3",
      name: "Suede Classic",
      brand: "PUMA",
      colors: ["#111827", "#10b981", "#6b7280"],
      price: 2190000,
    },
    {
      id: "p4",
      name: "Club C 85",
      brand: "REEBOK",
      colors: ["#111827", "#f43f5e"],
      price: 1990000,
    },
  ],
  bestSelling: [
    {
      id: "p5",
      name: "574 Essentials",
      brand: "NEW BALANCE",
      colors: ["#111827", "#a78bfa", "#f97316"],
      price: 2490000,
    },
    {
      id: "p6",
      name: "Pegasus Trail",
      brand: "NIKE",
      colors: ["#111827", "#22c55e"],
      price: 2990000,
    },
  ],
};

export default function Page() {
  return (
    <>
      <SearchBar />
      <BannerSlider />
      <BrandsMarquee />

      <ProductsSection
        products={PRODUCTS_DATA.popular}
        title="محبوب‌ترین محصولات"
        linkMore="/products/popular"
      />

      <ProductsSection
        products={PRODUCTS_DATA.newest}
        title="جدیدترین محصولات"
        linkMore="/products/newest"
      />

      <BannerGrid banners={BANNERS} />

      <ProductsSection
        products={PRODUCTS_DATA.bestSelling}
        title="پرفروش‌ترین محصولات"
        linkMore="/products/best"
      />
    </>
  );
}
