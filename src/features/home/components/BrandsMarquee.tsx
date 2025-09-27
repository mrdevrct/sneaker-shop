"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

function BrandCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 bg-neutral-50">
      <Image
        src={src}
        alt={`${name} logo`}
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
}

const ROW = [
  { name: "NIKE", src: "/images/brands/nike.svg" },
  { name: "ADIDAS", src: "/images/brands/adidas.svg" },
  { name: "PUMA", src: "/images/brands/puma.svg" },
  { name: "REEBOK", src: "/images/brands/reebok.svg" },
  { name: "NEW BALANCE", src: "/images/brands/new-balance.svg" },
];

export default function BrandsMarquee() {
  return (
    <section className="mb-8 sm:mb-10">
      <h3 className="text-base font-semibold mb-3">برندها</h3>
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white px-4 py-3">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          loop
          slidesPerView="auto"
          spaceBetween={16}
          freeMode
          allowTouchMove={false}
          style={{ overflow: "visible" }}
        >
          {[...ROW, ...ROW].map((b, i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <BrandCard name={b.name} src={b.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
