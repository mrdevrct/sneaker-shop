"use client";

const brands = [
  { name: "NIKE", icon: () => (
    <>
      <circle cx="24" cy="24" r="22" fill="#111" />
      <path d="M14 26c8-1 11-7 20-7l3 8c-8 0-12 6-21 6l-2-7z" fill="white" />
    </>
  )},
  { name: "ADIDAS", icon: () => (
    <>
      <rect x="4" y="6" width="40" height="36" rx="10" fill="#111" />
      <rect x="11" y="14" width="26" height="4" rx="2" fill="white" />
      <rect x="11" y="22" width="26" height="4" rx="2" fill="white" />
    </>
  )},
  { name: "PUMA", icon: () => (
    <>
      <polygon points="24,6 42,42 6,42" fill="#111" />
      <rect x="17" y="28" width="14" height="4" fill="white" />
    </>
  )},
  { name: "REEBOK", icon: () => (
    <>
      <circle cx="24" cy="24" r="22" fill="#111" />
      <rect x="14" y="15" width="20" height="18" rx="4" fill="white" />
    </>
  )},
  { name: "NEW BALANCE", icon: () => (
    <>
      <rect x="6" y="8" width="36" height="32" rx="8" fill="#111" />
      <circle cx="24" cy="24" r="8" fill="white" />
    </>
  )},
  { name: "CONVERSE", icon: () => (
    <>
      <circle cx="24" cy="24" r="22" fill="#111" />
      <path d="M18 30 L30 18 M30 30 L18 18" stroke="white" strokeWidth="3" />
    </>
  )},
  { name: "ASICS", icon: () => (
    <>
      <ellipse cx="24" cy="24" rx="20" ry="12" fill="#111" />
      <circle cx="24" cy="24" r="5" fill="white" />
    </>
  )},
  { name: "VANS", icon: () => (
    <>
      <rect x="8" y="12" width="32" height="20" rx="4" fill="#111" />
      <rect x="12" y="20" width="24" height="4" fill="white" />
    </>
  )},
];

export default function BrandsSlider() {
  return (
    <section className="mb-8 sm:mb-10">
      <h3 className="text-base font-semibold mb-3">دسته‌بندی‌ها / برندها</h3>
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <div className="flex whitespace-nowrap">
          {/* دو بار تکرار برای افکت بی‌نهایت */}
          <div className="marquee flex min-w-[200%]">
            {brands.concat(brands).map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2 mx-2 rounded-xl border border-neutral-200 bg-neutral-50"
              >
                <svg viewBox="0 0 48 48" className="w-6 h-6">
                  {brand.icon()}
                </svg>
                <span className="text-sm font-semibold">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* استایل انیمیشن */}
      <style jsx>{`
        @keyframes marquee-rtl {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee {
          animation: marquee-rtl 18s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
