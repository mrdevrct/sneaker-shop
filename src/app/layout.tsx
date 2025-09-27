import { vazirmatn } from "@/lib/fonts/fonts";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "SHOOZ Store",
  description: "فروشگاه کفش با Next.js و TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body className="min-h-screen bg-neutral-100 font-sans text-neutral-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
