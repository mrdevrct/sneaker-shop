"use client";

export default function LogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className ?? "w-9 h-9"}>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b7cff" />
          <stop offset="100%" stopColor="#3f56c7" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#g)" />
      <path
        d="M18 36c10-2 14-10 24-10l4 12c-10 0-16 8-26 8l-2-10z"
        fill="white"
        opacity=".9"
      />
    </svg>
  );
}
