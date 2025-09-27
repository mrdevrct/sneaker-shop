"use client";
import { CheckCircleIcon } from "@/components/icons";
import ContactFAQ from "@/features/contact/components/ContactFAQ";
import ContactForm from "@/features/contact/components/ContactForm";
import ContactInfo from "@/features/contact/components/ContactInfo";
import { useState } from "react";

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <>
      {/* Title */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-extrabold">ارتباط با ما</h1>
        <p className="text-neutral-600 text-sm mt-1">
          سوال، پیشنهاد یا مشکلی داری؟ با اشتیاق کمکت می‌کنیم.
        </p>
      </div>

      {/* Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm onSubmit={handleSubmit} />
        </div>

        {/* Info + FAQ */}
        <aside className="space-y-6">
          <ContactInfo />
          <ContactFAQ />
        </aside>
      </section>

      {/* Toast */}
      {showToast && (
        <div className="fixed right-4 top-4 sm:right-6 sm:top-6 z-50">
          <div className="bg-white border border-green-200 text-green-700 rounded-xl shadow-xl px-4 py-3 flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5" />
            پیام شما با موفقیت ارسال شد!
          </div>
        </div>
      )}
    </>
  );
}
