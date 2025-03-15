import { MetadataRoute } from "next";

const url = "https://[会社名].com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `https:/${url}/sitemap.xml`,
    };
}
