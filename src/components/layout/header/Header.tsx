"use client";

import {
  BackIcon,
  BellIcon,
  HamburgerIcon,
  LogoIcon,
} from "@/components/icons";
import { getRouteLabel } from "@/utils/route-helpers";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const productName = useSelector((state: RootState) => state.product.name);
  const pageLabel = productName || getRouteLabel(pathname);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border border-neutral-200 rounded-xl mt-3 shadow-header">
      <div className="flex items-center justify-between px-4 py-3">
        {isHome ? (
          <>
            <button
              aria-label="منو"
              className="p-2 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition"
            >
              <HamburgerIcon />
            </button>
            <Link href="/" className="flex items-center gap-2 select-none">
              <LogoIcon />
              <span className="text-lg font-extrabold tracking-wide">
                SHOOZ
              </span>
            </Link>
            <button
              aria-label="اعلان‌ها"
              className="relative p-2 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition"
            >
              <BellIcon />
              <span className="absolute -top-0.5 -left-0.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => router.back()}
              aria-label="بازگشت"
              className="p-2 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition"
            >
              <BackIcon />
            </button>
            <h1 className="text-lg font-extrabold">{pageLabel}</h1>
            <button
              aria-label="فهرست مطالب"
              className="p-2 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition"
            >
              <HamburgerIcon />
            </button>
          </>
        )}
      </div>
    </header>
  );
}
