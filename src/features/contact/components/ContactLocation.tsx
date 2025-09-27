"use client";

import { LocationIcon } from "@/components/icons";

export default function ContactLocation() {
  return (
    <div className="mt-4">
      <div className="rounded-xl overflow-hidden border border-neutral-200">
        <div className="bg-neutral-100 p-3 flex items-center justify-between">
          <span className="text-xs font-bold text-neutral-600">
            نقشه موقعیت
          </span>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-600 hover:text-brand-700 font-bold"
          >
            مشاهده در نقشه
          </a>
        </div>
        <div className="bg-white h-40 flex items-center justify-center">
          <LocationIcon />
        </div>
      </div>
    </div>
  );
}
