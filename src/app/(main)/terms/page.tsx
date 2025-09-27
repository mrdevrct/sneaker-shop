"use client";
import { useState, useEffect, useRef } from "react";

export default function TermsPage() {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const tocNavRef = useRef<HTMLDivElement>(null);

  // Active section tracking
  const updateActiveTocLink = () => {
    const sections = document.querySelectorAll("section[id]");
    const tocLinks = document.querySelectorAll(".toc-link");

    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = section.id;
      }
    });

    tocLinks.forEach((link) => {
      const href = link.getAttribute("href")?.substring(1);
      if (href === currentSection) {
        link.classList.add("bg-brand-100", "text-brand-700", "font-bold");
      } else {
        link.classList.remove("bg-brand-100", "text-brand-700", "font-bold");
      }
    });
  };

  // Scroll to top button visibility
  const toggleScrollTopButton = () => {
    const scrollTopBtn = document.getElementById("scrollTop");
    if (scrollTopBtn) {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.remove("opacity-0", "invisible");
        scrollTopBtn.classList.add("opacity-100", "visible");
      } else {
        scrollTopBtn.classList.add("opacity-0", "invisible");
        scrollTopBtn.classList.remove("opacity-100", "visible");
      }
    }
  };

  // Copy TOC to mobile
  const copyTocToMobile = () => {
    const desktopToc = document.querySelector("#tocSidebar nav");
    const mobileToc = tocNavRef.current;
    if (desktopToc && mobileToc) {
      mobileToc.innerHTML = desktopToc.innerHTML;
    }
  };

  // Smooth scroll for TOC links
  const setupTocLinks = () => {
    document.querySelectorAll(".toc-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          setIsTocOpen(false); // Close mobile TOC
        }
      });
    });
  };

  useEffect(() => {
    copyTocToMobile();
    setupTocLinks();
    updateActiveTocLink();
    toggleScrollTopButton();

    window.addEventListener("scroll", () => {
      updateActiveTocLink();
      toggleScrollTopButton();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        updateActiveTocLink();
        toggleScrollTopButton();
      });
    };
  }, []);

  const handleBackClick = () => {
    if (history.length > 1) {
      history.back();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Sidebar: Table of Contents */}
        <aside id="tocSidebar" className="lg:block hidden">
          <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 sticky top-24">
            <h2 className="text-base font-extrabold mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-brand-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 17.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              فهرست مطالب
            </h2>
            <nav className="space-y-2">
              <a
                href="#introduction"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                مقدمه
              </a>
              <a
                href="#definitions"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                تعاریف
              </a>
              <a
                href="#registration"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                ثبت‌نام و حساب کاربری
              </a>
              <a
                href="#orders"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                سفارشات و خرید
              </a>
              <a
                href="#payment"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                پرداخت
              </a>
              <a
                href="#shipping"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                ارسال و تحویل
              </a>
              <a
                href="#returns"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                مرجوعی و تعویض
              </a>
              <a
                href="#warranty"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                گارانتی
              </a>
              <a
                href="#privacy"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                حریم خصوصی
              </a>
              <a
                href="#responsibilities"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                مسئولیت‌ها
              </a>
              <a
                href="#prohibited"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                موارد ممنوع
              </a>
              <a
                href="#changes"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                تغییرات قوانین
              </a>
              <a
                href="#contact"
                className="toc-link block text-sm py-2 px-3 rounded-lg hover:bg-neutral-100 transition"
              >
                تماس با ما
              </a>
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="lg:col-span-3">
          <article className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 prose prose-neutral max-w-none">
            {/* Introduction */}
            <section id="introduction" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-brand-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">مقدمه</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                به فروشگاه آنلاین کفش خوش آمدید. این قوانین و مقررات شرایط
                استفاده از خدمات ما را تعیین می‌کند. با ثبت‌نام و استفاده از
                سایت، شما موافقت خود را با این قوانین اعلام می‌کنید.
              </p>
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 mt-4">
                <p className="text-sm text-brand-800 m-0">
                  <strong>تاریخ آخرین بروزرسانی:</strong> ۱۵ آذر ۱۴۰۲
                </p>
              </div>
            </section>

            {/* Definitions */}
            <section id="definitions" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">تعاریف</h2>
              </div>
              <ul className="space-y-3">
                <li>
                  <strong>فروشگاه:</strong> فروشگاه آنلاین کفش که در این سایت
                  ارائه می‌شود
                </li>
                <li>
                  <strong>کاربر:</strong> هر شخص حقیقی یا حقوقی که از خدمات
                  فروشگاه استفاده می‌کند
                </li>
                <li>
                  <strong>محصول:</strong> کلیه کفش‌ها و لوازم جانبی موجود در
                  فروشگاه
                </li>
                <li>
                  <strong>سفارش:</strong> درخواست خرید محصول توسط کاربر
                </li>
                <li>
                  <strong>حساب کاربری:</strong> پروفایل شخصی کاربر در سایت
                </li>
              </ul>
            </section>

            {/* Registration */}
            <section id="registration" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">
                  ثبت‌نام و حساب کاربری
                </h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">شرایط ثبت‌نام</h3>
                <ul className="space-y-2">
                  <li>• حداقل سن ۱۸ سال یا داشتن اجازه والدین</li>
                  <li>• ارائه اطلاعات صحیح و کامل</li>
                  <li>• تأیید شماره موبایل</li>
                  <li>• پذیرش قوانین و مقررات</li>
                </ul>
                <h3 className="text-lg font-bold">مسئولیت‌های کاربر</h3>
                <ul className="space-y-2">
                  <li>• حفظ امنیت رمز عبور</li>
                  <li>• به‌روزرسانی اطلاعات شخصی</li>
                  <li>• عدم استفاده از حساب کاربری دیگران</li>
                  <li>• اطلاع‌رسانی فوری در صورت سوءاستفاده</li>
                </ul>
              </div>
            </section>

            {/* Orders */}
            <section id="orders" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">سفارشات و خرید</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">فرآیند سفارش</h3>
                <ol className="space-y-2">
                  <li>۱. انتخاب محصول و افزودن به سبد خرید</li>
                  <li>۲. تکمیل اطلاعات آدرس و تماس</li>
                  <li>۳. انتخاب روش ارسال و پرداخت</li>
                  <li>۴. تأیید نهایی سفارش</li>
                  <li>۵. پرداخت و دریافت کد پیگیری</li>
                </ol>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <h4 className="font-bold text-yellow-800 mb-2">نکات مهم:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• قیمت‌ها شامل مالیات بر ارزش افزوده است</li>
                    <li>• موجودی محصولات به‌صورت لحظه‌ای بروزرسانی می‌شود</li>
                    <li>• سفارش پس از پرداخت قطعی محسوب می‌شود</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section id="payment" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-emerald-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">پرداخت</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">روش‌های پرداخت</h3>
                <ul className="space-y-2">
                  <li>• پرداخت آنلاین (کارت بانکی، اینترنت بانک)</li>
                  <li>• کیف پول الکترونیکی</li>
                  <li>• پرداخت در محل (نقدی یا کارتخوان)</li>
                </ul>
                <h3 className="text-lg font-bold">شرایط پرداخت</h3>
                <ul className="space-y-2">
                  <li>
                    • تمام پرداخت‌ها از طریق درگاه‌های معتبر بانکی انجام می‌شود
                  </li>
                  <li>• اطلاعات مالی شما محفوظ و رمزگذاری شده است</li>
                  <li>
                    • در صورت عدم موفقیت پرداخت، مبلغ ظرف ۷۲ ساعت بازگردانده
                    می‌شود
                  </li>
                  <li>• فاکتور خرید به ایمیل شما ارسال خواهد شد</li>
                </ul>
              </div>
            </section>

            {/* Shipping */}
            <section id="shipping" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-orange-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m6-3.75h.375a1.125 1.125 0 011.125 1.125v4.125m-1.125 0a1.125 1.125 0 01-1.125-1.125V11.25A1.125 1.125 0 0110.125 10h4.25"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">ارسال و تحویل</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">روش‌های ارسال</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-neutral-200 rounded-xl p-4">
                    <h4 className="font-bold mb-2">تیپاکس (پس کرایه)</h4>
                    <p className="text-sm text-neutral-600">
                      تحویل در محل - ۱ تا ۲ روز کاری
                    </p>
                    <p className="text-sm font-bold text-green-600">رایگان</p>
                  </div>
                  <div className="border border-neutral-200 rounded-xl p-4">
                    <h4 className="font-bold mb-2">پست پیشتاز</h4>
                    <p className="text-sm text-neutral-600">
                      تحویل در محل - ۳ تا ۵ روز کاری
                    </p>
                    <p className="text-sm font-bold">۹۸,۰۰۰ تومان</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold">شرایط تحویل</h3>
                <ul className="space-y-2">
                  <li>• تحویل در ساعات اداری (۸ صبح تا ۶ عصر)</li>
                  <li>• ضروری بودن حضور گیرنده هنگام تحویل</li>
                  <li>• بررسی محصول قبل از تحویل نهایی</li>
                  <li>• امکان رد تحویل در صورت آسیب دیدگی</li>
                </ul>
              </div>
            </section>

            {/* Returns */}
            <section id="returns" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">مرجوعی و تعویض</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">شرایط مرجوعی</h3>
                <ul className="space-y-2">
                  <li>• حداکثر ۷ روز پس از تحویل</li>
                  <li>• سالم بودن محصول و بسته‌بندی</li>
                  <li>• همراه داشتن فاکتور خرید</li>
                  <li>• عدم استفاده از محصول</li>
                </ul>
                <h3 className="text-lg font-bold">موارد غیرقابل مرجوعی</h3>
                <ul className="space-y-2">
                  <li>• محصولات سفارشی و شخصی‌سازی شده</li>
                  <li>• کفش‌های استفاده شده</li>
                  <li>• محصولات تخفیف‌دار بالای ۵۰٪</li>
                  <li>• لوازم جانبی بهداشتی</li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-bold text-blue-800 mb-2">
                    فرآیند مرجوعی:
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>۱. تماس با پشتیبانی و دریافت کد مرجوعی</li>
                    <li>۲. ارسال محصول به آدرس مشخص شده</li>
                    <li>۳. بررسی محصول توسط کارشناسان</li>
                    <li>۴. بازگشت وجه ظرف ۵ روز کاری</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Warranty */}
            <section id="warranty" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">گارانتی</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">پوشش گارانتی</h3>
                <ul className="space-y-2">
                  <li>• نقص ساخت و مواد اولیه</li>
                  <li>• مشکلات چسب و دوخت</li>
                  <li>• عیوب کیفی قابل اثبات</li>
                </ul>
                <h3 className="text-lg font-bold">مدت گارانتی</h3>
                <ul className="space-y-2">
                  <li>• کفش‌های ورزشی: ۶ ماه</li>
                  <li>• کفش‌های رسمی: ۱ سال</li>
                  <li>• کفش‌های کودکان: ۳ ماه</li>
                  <li>• لوازم جانبی: ۳ ماه</li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h4 className="font-bold text-red-800 mb-2">
                    موارد خارج از گارانتی:
                  </h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• سایش طبیعی ناشی از استفاده</li>
                    <li>• آسیب‌های ناشی از سوءاستفاده</li>
                    <li>• تماس با مواد شیمیایی</li>
                    <li>• تعمیرات غیراصولی</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section id="privacy" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-pink-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">حریم خصوصی</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">جمع‌آوری اطلاعات</h3>
                <ul className="space-y-2">
                  <li>• اطلاعات شخصی (نام، شماره تماس، آدرس)</li>
                  <li>• اطلاعات پرداخت (رمزگذاری شده)</li>
                  <li>• تاریخچه خریدها و بازدیدها</li>
                  <li>• اطلاعات دستگاه و مرورگر</li>
                </ul>
                <h3 className="text-lg font-bold">استفاده از اطلاعات</h3>
                <ul className="space-y-2">
                  <li>• پردازش و ارسال سفارشات</li>
                  <li>• ارتباط با مشتریان</li>
                  <li>• بهبود خدمات و تجربه کاربری</li>
                  <li>• ارسال اطلاعیه‌های مهم</li>
                </ul>
                <h3 className="text-lg font-bold">حفاظت از اطلاعات</h3>
                <ul className="space-y-2">
                  <li>• رمزگذاری SSL برای انتقال داده</li>
                  <li>• ذخیره‌سازی امن در سرورهای محافظت شده</li>
                  <li>• دسترسی محدود کارکنان مجاز</li>
                  <li>• عدم فروش اطلاعات به اشخاص ثالث</li>
                </ul>
              </div>
            </section>

            {/* Responsibilities */}
            <section id="responsibilities" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-teal-600"
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
                </div>
                <h2 className="text-xl font-extrabold m-0">مسئولیت‌ها</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">مسئولیت‌های فروشگاه</h3>
                <ul className="space-y-2">
                  <li>• ارائه محصولات با کیفیت و اصل</li>
                  <li>• حفظ امنیت اطلاعات مشتریان</li>
                  <li>• ارسال به‌موقع سفارشات</li>
                  <li>• پشتیبانی مناسب پس از فروش</li>
                  <li>• رعایت قوانین تجارت الکترونیک</li>
                </ul>
                <h3 className="text-lg font-bold">مسئولیت‌های مشتری</h3>
                <ul className="space-y-2">
                  <li>• ارائه اطلاعات صحیح و کامل</li>
                  <li>• پرداخت به‌موقع مبلغ سفارش</li>
                  <li>• حضور هنگام تحویل محصول</li>
                  <li>• رعایت شرایط استفاده و نگهداری</li>
                  <li>• اطلاع‌رسانی مشکلات در اسرع وقت</li>
                </ul>
                <h3 className="text-lg font-bold">محدودیت مسئولیت</h3>
                <p className="text-neutral-700">
                  فروشگاه در قبال خسارات غیرمستقیم، از دست دادن سود، یا آسیب‌های
                  ناشی از سوءاستفاده مسئولیتی ندارد. حداکثر مسئولیت فروشگاه
                  معادل مبلغ پرداختی مشتری است.
                </p>
              </div>
            </section>

            {/* Prohibited */}
            <section id="prohibited" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">موارد ممنوع</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">اقدامات ممنوع</h3>
                <ul className="space-y-2">
                  <li>• استفاده از اطلاعات نادرست</li>
                  <li>• سوءاستفاده از سیستم تخفیف</li>
                  <li>• ایجاد چندین حساب کاربری</li>
                  <li>• تلاش برای نفوذ به سیستم</li>
                  <li>• انتشار محتوای نامناسب</li>
                  <li>• استفاده تجاری غیرمجاز</li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h4 className="font-bold text-red-800 mb-2">
                    پیامدهای نقض قوانین:
                  </h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• تعلیق موقت یا دائم حساب کاربری</li>
                    <li>• لغو سفارشات در حال پردازش</li>
                    <li>• عدم بازپرداخت وجوه</li>
                    <li>• پیگیری قانونی در موارد جدی</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Changes */}
            <section id="changes" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-amber-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">تغییرات قوانین</h2>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-700">
                  فروشگاه حق تغییر، اصلاح یا به‌روزرسانی این قوانین را در هر
                  زمان محفوظ می‌دارد. تغییرات از طریق سایت اطلاع‌رسانی شده و پس
                  از انتشار لازم‌الاجرا خواهد بود.
                </p>
                <h3 className="text-lg font-bold">نحوه اطلاع‌رسانی</h3>
                <ul className="space-y-2">
                  <li>• انتشار در صفحه قوانین و مقررات</li>
                  <li>• ارسال ایمیل به کاربران فعال</li>
                  <li>• اعلان در پنل کاربری</li>
                  <li>• پیام در صفحه اصلی سایت</li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm text-amber-800 m-0">
                    <strong>توجه:</strong> ادامه استفاده از خدمات پس از اعلام
                    تغییرات، به منزله پذیرش قوانین جدید محسوب می‌شود.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-cyan-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold m-0">تماس با ما</h2>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-700">
                  برای هرگونه سؤال، شکایت یا پیشنهاد در خصوص قوانین و مقررات،
                  می‌توانید از طریق راه‌های زیر با ما در تماس باشید:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-neutral-200 rounded-xl p-4">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-brand-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      تلفن پشتیبانی
                    </h4>
                    <p className="text-sm text-neutral-600">۰۲۱-۱۲۳۴۵۶۷۸</p>
                    <p className="text-xs text-neutral-500">
                      شنبه تا پنج‌شنبه، ۹ صبح تا ۶ عصر
                    </p>
                  </div>
                  <div className="border border-neutral-200 rounded-xl p-4">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-brand-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      ایمیل
                    </h4>
                    <p className="text-sm text-neutral-600">
                      support@shoeshop.ir
                    </p>
                    <p className="text-xs text-neutral-500">پاسخ ظرف ۲۴ ساعت</p>
                  </div>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                  <h4 className="font-bold mb-2">آدرس دفتر مرکزی</h4>
                  <p className="text-sm text-neutral-600">
                    تهران، خیابان ولیعصر، پلاک ۱۲۳۴، طبقه ۵، واحد ۱۰
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    کد پستی: ۱۲۳۴۵۶۷۸۹۰
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-neutral-200 pt-6 mt-8">
              <div className="text-center">
                <p className="text-sm text-neutral-600 mb-2">
                  این قوانین و مقررات آخرین بار در تاریخ{" "}
                  <strong>۱۵ آذر ۱۴۰۲</strong> به‌روزرسانی شده است.
                </p>
                <p className="text-xs text-neutral-500">
                  © ۱۴۰۲ فروشگاه کفش. تمامی حقوق محفوظ است.
                </p>
              </div>
            </footer>
          </article>
        </div>
      </div>

      {/* Mobile TOC Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${
          isTocOpen ? "block" : "hidden"
        }`}
      >
        <div className="fixed right-0 top-0 h-full w-80 bg-white p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-extrabold">فهرست مطالب</h2>
            <button
              onClick={() => setIsTocOpen(false)}
              className="p-2 rounded-lg hover:bg-neutral-100"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav ref={tocNavRef} className="space-y-2"></nav>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        id="scrollTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed left-4 bottom-20 w-12 h-12 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-lg opacity-0 invisible transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mx-auto"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
}
