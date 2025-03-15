import nextConfig from "./next.config";
import path from "path";

export default function myImageLoader({ src }: { src: string }) {
    if (nextConfig.basePath && path.isAbsolute(src)) {
        return `${nextConfig.basePath}${src}`;
    }
    return src;
}
