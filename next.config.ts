import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The inquiry list was replaced by the two request forms reached from /contact.
    return [
      { source: "/inquiry", destination: "/contact", permanent: true },
      { source: "/vi/inquiry", destination: "/vi/contact", permanent: true },
    ];
  },
};

export default nextConfig;
