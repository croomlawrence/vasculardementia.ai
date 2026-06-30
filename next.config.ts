import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/clinical-research",
        destination: "/research/vascular-dementia-clinical-trials",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
