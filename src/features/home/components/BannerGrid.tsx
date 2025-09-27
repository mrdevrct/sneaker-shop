"use client";

import Image from "next/image";

type BannerGridProps = {
  banners: { id: string; src: string; link?: string; alt?: string }[];
  layout?: "split" | "full-first" | "side-by-side";
};

export default function BannerGrid({
  banners,
  layout = "split",
}: BannerGridProps) {
  if (!banners || banners.length === 0) {
    return null;
  }

  const renderSplitLayout = () => {
    const isOdd = banners.length % 2 !== 0;
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-10">
        {banners.map((banner, index) => {
          // For odd number of banners, first one is full-width
          if (isOdd && index === 0) {
            return (
              <a
                key={banner.id}
                href={banner.link || "#"}
                className="md:col-span-10 block group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition"
                style={{ minHeight: "300px" }} // Ensure container has height
              >
                <Image
                  src={banner.src}
                  alt={banner.alt || `banner-${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg" // Optional: Add a placeholder image
                />
              </a>
            );
          }
          // For even number of banners or remaining banners in odd case
          const rowIndex = isOdd
            ? Math.floor((index - 1) / 2)
            : Math.floor(index / 2);
          const isSmallBanner =
            (isOdd && index % 2 === 0 && index !== 0) ||
            (!isOdd && index % 2 !== 0);
          const span = isSmallBanner ? "md:col-span-3" : "md:col-span-7";
          const order =
            rowIndex % 2 === 0
              ? isSmallBanner
                ? "md:order-2"
                : "md:order-1"
              : isSmallBanner
              ? "md:order-1"
              : "md:order-2";

          return (
            <a
              key={banner.id}
              href={banner.link || "#"}
              className={`${span} ${order} block group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition`}
              style={{ minHeight: "300px" }} // Ensure container has height
            >
              <Image
                src={banner.src}
                alt={banner.alt || `banner-${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                placeholder="blur"
                blurDataURL="/placeholder.jpg" // Optional: Add a placeholder image
              />
            </a>
          );
        })}
      </div>
    );
  };

  const renderFullFirstLayout = () => {
    return (
      <div className="grid grid-cols-1 gap-4">
        {banners.map((banner, index) => (
          <a
            key={banner.id}
            href={banner.link || "#"}
            className="block group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition"
            style={{ minHeight: "300px" }} // Ensure container has height
          >
            <Image
              src={banner.src}
              alt={banner.alt || `banner-${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              placeholder="blur"
              blurDataURL="/placeholder.jpg" // Optional: Add a placeholder image
            />
          </a>
        ))}
      </div>
    );
  };

  const renderSideBySideLayout = () => {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {banners.map((banner, index) => (
          <a
            key={banner.id}
            href={banner.link || "#"}
            className="block group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition"
            style={{ minHeight: "300px" }} // Ensure container has height
          >
            <Image
              src={banner.src}
              alt={banner.alt || `banner-${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              placeholder="blur"
              blurDataURL="/placeholder.jpg" // Optional: Add a placeholder image
            />
          </a>
        ))}
      </div>
    );
  };

  return (
    <section className="mb-8 sm:mb-10">
      {layout === "split" && renderSplitLayout()}
      {layout === "full-first" && renderFullFirstLayout()}
      {layout === "side-by-side" && renderSideBySideLayout()}
    </section>
  );
}
