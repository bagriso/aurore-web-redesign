import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/careers",
        destination: "https://aurore-labs.notion.site/careers-latam",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
