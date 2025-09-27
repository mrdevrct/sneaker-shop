"use client";

export default function ShippingIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-5 h-5 text-orange-600"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m6-3.75h.375a1.125 1.125 0 011.125 1.125v4.125m-1.125 0a1.125 1.125 0 01-1.125-1.125V11.25A1.125 1.125 0 0110.125 10h4.25"
      />
    </svg>
  );
}