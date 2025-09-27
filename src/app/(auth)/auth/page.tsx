export default function AuthPage() {
  return (
    <div className="container mx-auto max-w-[968px] px-4 sm:px-6">
      {/* Centered Auth Launcher */}
      <main className="min-h-[80vh] flex items-center justify-center py-10">
        <div className="w-full max-w-md">
          {/* Logo */}
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
              ورود به SHOOZ
            </h1>
            <p className="text-sm text-neutral-600 mt-1">
              برای ادامه، یکی از روش‌های زیر را انتخاب کن
            </p>
          </div>

          {/* Auth Card */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 shadow-float">
            <div className="mb-4 rounded-xl bg-brand-50 text-neutral-700 px-3 py-2 text-xs leading-6">
              برای امنیت شما، ورود مستقیم در این صفحه انجام نمی‌شود. با کلیک روی
              دکمه‌ها، صفحه ورود یا ثبت‌نام در تب جدید باز می‌شود.
            </div>

            {/* Auth buttons */}
            <div className="space-y-3">
              <a
                href="/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-4 py-2.5 rounded-xl transition active:scale-[0.98]"
              >
                {/* Login Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15M12 8.25L21.75 12 12 15.75V12z"
                  />
                </svg>
                ورود
              </a>

              <a
                href="https://example.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 font-bold px-4 py-2.5 rounded-xl transition active:scale-[0.98]"
              >
                {/* Signup Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
                ساخت حساب جدید
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <span className="h-px flex-1 bg-neutral-200" />
              <span className="text-xs text-neutral-500">یا</span>
              <span className="h-px flex-1 bg-neutral-200" />
            </div>

            {/* Social/SSO */}
            <div className="grid grid-cols-2 gap-2">
              {/* Google */}
              <a
                href="https://example.com/login/google"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 font-bold px-3 py-2.5 rounded-xl transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8..."
                  />
                </svg>
                Google
              </a>

              {/* Apple */}
              <a
                href="https://example.com/login/apple"
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </div>

            {/* Help text */}
            <p className="mt-5 text-xs text-neutral-600">
              حساب ندارید؟
              <a
                href="/auth/register"
                target="_blank"
                rel="noopener noreferrer"
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
