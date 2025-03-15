import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    basePath: "/tensyoku-web",
    assetPrefix: "/tensyoku-web",

    images: {
        unoptimized: true,
    },
};

export default nextConfig;
