"use client";

export default function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-5 h-5"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.064a1.125 1.125 0 00-.852-1.09l-3.612-.903a1.125 1.125 0 00-1.173.417l-.97 1.293a11.25 11.25 0 01-6.516-6.516l1.293-.97a1.125 1.125 0 00.417-1.173L6.654 3.102A1.125 1.125 0 005.564 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}
