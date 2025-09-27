"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const BANNERS = [
  "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/261010169/original/ca3f2b9666d08640fbab8f0cd0ba1c8df654eeb2/black-and-green-nike-shoes-banner-for-you.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/980dce223880087.6800c7c1b5aa2.jpg",
  "https://cdn.dribbble.com/userupload/29872363/file/original-57ca0932ea2aefb714668fbc0c40ef6c.jpg?resize=752x&vertical=center",
];

export default function BannerSlider() {
  return (
    <section className="mb-8 sm:mb-10">
      <div className="relative overflow-hidden rounded-2xl">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
        >
          {BANNERS.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
                <Image
                  src={src}
                  alt={`banner-${i}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                  priority={i === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}