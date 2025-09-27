"use client";

import { JSX, useState } from "react";
import Link from "next/link";

const navItems = [
  { key: "account", label: "حساب کاربری", href: "/account", icon: "user" },
  { key: "home", label: "هوم", href: "/", icon: "home" },
  { key: "favorites", label: "علاقه‌مندی", href: "/favorites", icon: "heart" },
  { key: "products", label: "محصولات", href: "/products", icon: "box" },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");

  const icons: Record<string, JSX.Element> = {
    user: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M4.5 19.5a8.25 8.25 0 0115 0"
        />
      </>
    ),
    home: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M2.25 12l9.5-9.5a1.125 1.125 0 011.5 0L22.75 12M4.5 9.75V21h5.25v-6.75h4.5V21H19.5V9.75"
      />
    ),
    heart: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.93 0-3.597 1.142-4.312 2.773-.715-1.631-2.383-2.773-4.313-2.773C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    ),
    box: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M2.25 3h19.5M3.75 7.5h16.5M6 21h12a1.5 1.5 0 001.5-1.5V7.5H4.5V19.5A1.5 1.5 0 006 21z"
      />
    ),
  };

  return (
    <nav className="fixed z-40 left-1/2 -translate-x-1/2 bottom-3 sm:bottom-5 w-full px-4">
      <div className="mx-auto sm:w-max w-full">
        <div className="mx-auto sm:mx-0 w-full sm:w-auto">
          <div className="bg-white border border-neutral-200 shadow-xl rounded-2xl px-3 py-1 sm:px-2 sm:py-2 flex items-center justify-between sm:justify-center gap-1 sm:gap-4 sm:w-max">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setActive(item.key)}
                className={`group flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition active:scale-[0.98] hover:bg-neutral-100 ${
                  active === item.key ? "active" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${
                    active === item.key ? "text-brand-600" : "text-neutral-700"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  {icons[item.icon]}
                </svg>
                <span
                  className={`text-xs font-semibold ${
                    active === item.key ? "text-brand-700" : "text-neutral-700"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`h-0.5 w-0 bg-brand-600 rounded-full transition-all ${
                    active === item.key ? "w-6" : ""
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
