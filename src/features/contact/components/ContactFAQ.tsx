"use client";

import { ChevronDownIcon } from "@/components/icons";

export default function ContactFAQ() {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5">
      <h2 className="text-base sm:text-lg font-extrabold mb-3">سوالات متداول</h2>
      <div className="space-y-2" id="faq">
        <details className="group rounded-xl border border-neutral-200 p-3">
          <summary className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-bold">زمان ارسال سفارش چقدر است؟</span>
            <ChevronDownIcon className="w-5 h-5 transition group-open:rotate-180" />
          </summary>
          <p className="text-xs text-neutral-700 mt-2 leading-6">
            عموماً ۲ تا ۴ روز کاری. هنگام ثبت سفارش زمان تقریبی نمایش داده می‌شود.
          </p>
        </details>

        <details className="group rounded-xl border border-neutral-200 p-3">
          <summary className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-bold">چطور سایز مناسبم را پیدا کنم؟</span>
            <ChevronDownIcon className="w-5 h-5 transition group-open:rotate-180" />
          </summary>
          <p className="text-xs text-neutral-700 mt-2 leading-6">
            در صفحه محصول راهنمای سایزبندی قرار داده‌ایم؛ همچنین می‌توانید از پشتیبانی بپرسید.
          </p>
        </details>
      </div>
    </div>
  );
}
