import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    basePath: "/tensyoku-web",
    images: {
        loader: "custom",
        loaderFile: "./custom-image-loader.ts",
    },
};

export default nextConfig;
