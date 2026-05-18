import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://perfectlab270.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/", // Next.js internal build files
        "/static/", // Next.js static asset bundles
        "/api/", // Potential API routes
        "/*.json$", // Block JSON query requests from search indexes
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
