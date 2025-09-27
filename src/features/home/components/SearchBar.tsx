"use client";

import { FormEvent, useRef } from "react";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const q = inputRef.current?.value?.trim();
    if (q) alert("جستجو: " + q);
  }

  return (
    <section className="mb-5 sm:mb-7">
      <form onSubmit={onSubmit} className="w-full">
        <div className="relative">
          <input
            ref={inputRef}
            id="searchInput"
            type="text"
            placeholder="جستجوی کفش، برند، رنگ..."
            className="w-full pr-11 pl-4 py-3 rounded-2xl bg-neutral-200/80 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition"
          />
          <button
            type="submit"
            aria-label="جستجو"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl text-neutral-700 hover:bg-neutral-300/70 active:bg-neutral-400/50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
}
