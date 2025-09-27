"use client";

export default function ResponsibilitiesIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-5 h-5 text-teal-600"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.062 10.57a2.25 2.25 0 01-.659 1.933l-2.621 2.621a2.25 2.25 0 01-1.933.659H9.221a2.25 2.25 0 01-1.933-.659l-2.621-2.621a2.25 2.25 0 01-.659-1.933L6.07 5.49M5.25 4.97l2.062 10.57a2.25 2.25 0 001.933 1.933l2.621 2.621c.537.537 1.271.659 1.933.659h5.558c.662 0 1.396-.122 1.933-.659l2.621-2.621a2.25 2.25 0 001.933-1.933L18.93 5.49"
      />
    </svg>
  );
}