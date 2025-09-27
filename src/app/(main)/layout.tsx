"use client";

import { usePathname } from "next/navigation";
import BottomNav from "../../components/layout/bottom-nav/BottomNav";
import Header from "../../components/layout/header/Header";
import { getRouteConfigByPath } from "@/utils/route-helpers";
import BottomActionBar from "@/components/layout/bottom-action/BottomActionBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const routeConfig = getRouteConfigByPath(pathname);

  const showHeader = routeConfig?.isShowHeader ?? true;
  const showBottomNav = routeConfig?.isShowBottomNav ?? true;
  const showBottomAction = routeConfig?.isShowBottomAction ?? false;

  return (
    <div className="container mx-auto max-w-[968px] px-4 sm:px-6">
      {/* Header */}
      {showHeader && <Header />}

      {/* Main content */}
      <main className="py-6 sm:py-8 pb-24 sm:pb-28">{children}</main>

      {/* Bottom Navigation */}
      {showBottomNav && <BottomNav />}

      {/* Bottom Action */}
      {showBottomAction && <BottomActionBar />}
    </div>
  );
}
