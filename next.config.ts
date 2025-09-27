import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "fiverr-res.cloudinary.com",
      "mir-s3-cdn-cf.behance.net",
      "cdn.dribbble.com",
    ],
  },
};

export default nextConfig;
