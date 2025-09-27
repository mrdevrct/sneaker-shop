"use client";

export default function ShoeSVG() {
  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>
      <path
        d="M14 62c26-3 40-22 72-22l10 24c-24 2-38 16-68 16L14 62z"
        fill="url(#sg)"
      />
      <rect x="25" y="56" width="22" height="6" rx="3" fill="#9ca3af" />
      <circle cx="110" cy="76" r="5" fill="#111" />
      <circle cx="68" cy="78" r="5" fill="#111" />
    </svg>
  );
}
