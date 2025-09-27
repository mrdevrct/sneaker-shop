"use client";

import { useState } from "react";

export default function ProductDescription() {
  const [activeTab, setActiveTab] = useState<"desc" | "media">("desc");

  return (
    <section className="mt-8">
      <div className="w-full bg-white rounded-2xl border border-neutral-200 p-4 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-extrabold">
            توضیحات محصول و تصاویر
          </h3>
          <div className="flex items-center gap-1 bg-neutral-100 rounded-xl p-1">
            <button
              className={`px-3 py-1.5 text-sm rounded-lg ${
                activeTab === "desc" ? "bg-white font-bold" : "text-neutral-600"
              }`}
              onClick={() => setActiveTab("desc")}
            >
              توضیحات
            </button>
            <button
              className={`px-3 py-1.5 text-sm rounded-lg ${
                activeTab === "media"
                  ? "bg-white font-bold"
                  : "text-neutral-600"
              }`}
              onClick={() => setActiveTab("media")}
            >
              تصاویر
            </button>
          </div>
        </div>
        <div className={`${activeTab === "desc" ? "" : "hidden"}`}>
          <div className="text-sm leading-7 text-neutral-700">
            این کفش مناسب استفاده روزمره و ورزش‌های هوازی است. رویه تنفس‌پذیر،
            کفی راحت و طراحی سبک باعث می‌شود ساعت‌ها بدون خستگی از آن استفاده
            کنید. تکنولوژی جذب ضربه در پاشنه، ثبات و راحتی بسیار خوبی ارائه
            می‌دهد.
          </div>
        </div>
        <div className={`${activeTab === "media" ? "" : "hidden"}`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["#e5e7eb", "#d1d5db", "#cbd5e1"].map((color, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-neutral-200/70 flex items-center justify-center"
              >
                <svg viewBox="0 0 160 90" className="w-[80%]">
                  <path
                    d="M14 62c26-3 40-22 72-22l10 24c-24 2-38 16-68 16L14 62z"
                    fill={color}
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}