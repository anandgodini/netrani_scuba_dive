import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/scuba-diving",
        destination: "/",
        permanent: true,
      },
      {
        source: "/netrani-island-scuba-diving",
        destination: "/netrani-scuba-diving",
        permanent: true,
      },
      {
        source: "/beginner-scuba-diving",
        destination: "/intro-scuba-diving",
        permanent: true,
      },
      {
        source: "/scuba-diving-packages",
        destination: "/netrani-scuba-diving",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/blog/murudeshwar-trip-from-bangalore",
        destination: "/blog/bangalore-to-murudeshwar-travel-guide",
        permanent: true,
      },
      {
        source: "/blog/bangalore-to-murudeshwar-by-cab",
        destination: "/blog/bangalore-to-murudeshwar-travel-guide",
        permanent: true,
      },
      {
        source: "/murudeshwar-railway-station-to-temple-taxi",
        destination: "/blog/murudeshwar-railway-station-to-temple-transit-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
