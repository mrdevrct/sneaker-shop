"use client";
import {
  ClockIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";
import ContactLocation from "./ContactLocation";

export default function ContactInfo() {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5">
      <h2 className="text-base sm:text-lg font-extrabold mb-4">
        راه‌های ارتباطی
      </h2>
      <div className="space-y-3">
        <a
          href="tel:+982100000000"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-100 transition"
        >
          <span className="p-2 rounded-lg bg-brand-50 text-brand-700">
            <PhoneIcon className="w-5 h-5" />
          </span>
          <div>
            <div className="text-sm font-bold">تلفن</div>
            <div className="text-xs text-neutral-600">+98 21 0000 0000</div>
          </div>
        </a>

        <a
          href="mailto:support@shooz.com"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-100 transition"
        >
          <span className="p-2 rounded-lg bg-brand-50 text-brand-700">
            <MailIcon className="w-5 h-5" />
          </span>
          <div>
            <div className="text-sm font-bold">ایمیل پشتیبانی</div>
            <div className="text-xs text-neutral-600">support@shooz.com</div>
          </div>
        </a>

        <div className="flex items-center gap-3 p-3 rounded-xl">
          <span className="p-2 rounded-lg bg-brand-50 text-brand-700">
            <LocationIcon className="w-5 h-5" />
          </span>
          <div>
            <div className="text-sm font-bold">آدرس</div>
            <div className="text-xs text-neutral-600">
              تهران، خیابان نمونه، پلاک ۱۲
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl">
          <span className="p-2 rounded-lg bg-brand-50 text-brand-700">
            <ClockIcon className="w-5 h-5" />
          </span>
          <div>
            <div className="text-sm font-bold">ساعات پاسخ‌گویی</div>
            <div className="text-xs text-neutral-600">
              هر روز ۹ تا ۱۸ (به‌جز تعطیلات)
            </div>
          </div>
        </div>
      </div>

      <ContactLocation />
    </div>
  );
}
