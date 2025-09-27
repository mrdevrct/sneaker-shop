"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // اینجا می‌تونی auth API خودت رو صدا بزنی
  };

  return (
    <div className="container mx-auto max-w-[968px] px-4 sm:px-6">
      <main className="min-h-[80vh] flex items-center justify-center py-10">
        <div className="w-full max-w-md">
          {/* Logo + Title */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 shadow-md flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-10 h-10">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#5b7cff" />
                    <stop offset="100%" stopColor="#3f56c7" />
                  </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="30" fill="url(#g)" />
                <path
                  d="M18 36c10-2 14-10 24-10l4 12c-10 0-16 8-26 8l-2-10z"
                  fill="white"
                  opacity=".9"
                />
              </svg>
            </div>
            <h1 className="mt-3 text-xl sm:text-2xl font-extrabold">
              ورود به حساب کاربری
            </h1>
            <p className="text-sm text-neutral-600 mt-1">
              لطفاً ایمیل و رمز عبور خود را وارد کنید
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-float">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  ایمیل
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                  placeholder="example@email.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  رمز عبور
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                  placeholder="••••••••"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold px-4 py-2.5 rounded-xl transition active:scale-[0.98]"
              >
                ورود
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <span className="h-px flex-1 bg-neutral-200" />
              <span className="text-xs text-neutral-500">یا</span>
              <span className="h-px flex-1 bg-neutral-200" />
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 font-bold px-3 py-2.5 rounded-xl transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303..."
                  />
                </svg>
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 font-bold px-3 py-2.5 rounded-xl transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.365 1.43a5.23..." />
                </svg>
                Apple
              </button>
            </div>

            {/* Footer */}
            <p className="mt-5 text-xs text-neutral-600 text-center">
              حساب کاربری ندارید؟{" "}
              <a
                href="/auth/register"
                className="font-bold text-brand-700 hover:text-brand-600"
              >
                همین حالا ثبت‌نام کنید
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
