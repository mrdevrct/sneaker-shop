"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function BottomActionBar() {
  const productName = useSelector((state: RootState) => state.product.name);

  return (
    <div className="fixed z-40 left-1/2 -translate-x-1/2 bottom-3 sm:bottom-5 w-full px-4">
      <div className="mx-auto sm:w-max w-full">
        <div className="bg-white border border-neutral-200 shadow-float rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-4 sm:gap-8 max-w-[968px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="hidden sm:block p-2 rounded-xl bg-neutral-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 160 90"
                className="w-8 h-8"
              >
                <path
                  d="M14 62c26-3 40-22 72-22l10 24c-24 2-38 16-68 16L14 62z"
                  fill="#cbd5e1"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold">
                {productName || "کفش جردن 2020"}
              </div>
              <div className="text-xs text-neutral-500">برند: NIKE</div>
            </div>
          </div>
          <button
            id="addToCartBtn"
            className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-4 py-2.5 rounded-xl transition active:scale-[0.98]"
          >
            {/* <ShoppingCartIcon /> */}
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
}