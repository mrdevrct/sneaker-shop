"use client";

import { useRef } from "react";

export default function ContactForm({ onSubmit }: { onSubmit: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (formRef.current) {
      const data = {
        name:
          formRef.current
            .querySelector<HTMLInputElement>("#name")
            ?.value.trim() ?? "",
        email:
          formRef.current
            .querySelector<HTMLInputElement>("#email")
            ?.value.trim() ?? "",
        topic:
          formRef.current.querySelector<HTMLSelectElement>("#topic")?.value ??
          "",
        orderCode:
          formRef.current
            .querySelector<HTMLInputElement>("#orderCode")
            ?.value.trim() ?? "",
        message:
          formRef.current
            .querySelector<HTMLTextAreaElement>("#message")
            ?.value.trim() ?? "",
        copyMe:
          formRef.current.querySelector<HTMLInputElement>("#copyMe")?.checked ??
          false,
      };

      if (!data.name || !data.email || !data.message) return;

      formRef.current.reset();
      onSubmit();
    }
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5">
      <h2 className="text-base sm:text-lg font-extrabold mb-4">فرم تماس</h2>
      <form ref={formRef} className="space-y-4" id="contactForm">
        {/* name + email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-1.5">
              نام و نام خانوادگی
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-2.5 transition"
              placeholder="مثال: علی رضایی"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-1.5">
              ایمیل
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-2.5 transition"
              placeholder="example@mail.com"
            />
          </div>
        </div>

        {/* topic + orderCode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="topic" className="block text-sm font-bold mb-1.5">
              موضوع
            </label>
            <select
              id="topic"
              className="w-full rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-2.5 transition"
            >
              <option>سوال درباره محصول</option>
              <option>پیگیری سفارش</option>
              <option>گزارش مشکل</option>
              <option>سایر</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="orderCode"
              className="block text-sm font-bold mb-1.5"
            >
              کد سفارش (اختیاری)
            </label>
            <input
              id="orderCode"
              type="text"
              className="w-full rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-2.5 transition"
              placeholder="مثال: SH-12987"
            />
          </div>
        </div>

        {/* message */}
        <div>
          <label htmlFor="message" className="block text-sm font-bold mb-1.5">
            پیام
          </label>
          <textarea
            id="message"
            rows={5}
            required
            className="w-full rounded-xl bg-neutral-100 focus:bg-white border border-neutral-200 focus:ring-2 focus:ring-brand-600 outline-none px-3 py-3 transition"
            placeholder="لطفاً پیام خود را بنویسید..."
          ></textarea>
        </div>

        {/* actions */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <input
              id="copyMe"
              type="checkbox"
              className="w-4 h-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-600"
            />
            <label htmlFor="copyMe">یک نسخه برای من ارسال شود</label>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-5 py-2.5 rounded-xl transition active:scale-[0.98]"
          >
            ارسال پیام
          </button>
        </div>
      </form>
    </div>
  );
}
