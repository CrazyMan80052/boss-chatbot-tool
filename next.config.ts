import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatar.vercel.sh",
      },
      {
        hostname: "www.finelinewow.com",
      },
      {
        hostname: "finelinewow.com",
      },
      {
        hostname: "alternativeautocare.com",
      },
      {
        hostname: "www.alternativeautocare.com",
      },
      {
        hostname: "www.keensbodyshop.com",
      },
      {
        hostname: "keensbodyshop.com",
      },
      {
        hostname: "www.google.com",
      },
    ],
  },
};

export default nextConfig;
