import nextConfig from "./next.config";
// import path from "path";

export default function myImageLoader({ src }: { src: string }) {
    return `${nextConfig.basePath}${src}`;
}
