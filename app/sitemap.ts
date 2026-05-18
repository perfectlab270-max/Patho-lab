import { MetadataRoute } from "next";
import { siteData } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://perfectlab270.in";

  // Static routes of the Pathology Lab website
  const staticRoutes = [
    "",
    "/tests",
    "/book",
    "/quality",
    "/reports",
    "/faq",
    "/gallery"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic SEO Landing page routes
  const seoLandingRoutes = siteData.seoLandings.map((landing) => ({
    url: `${baseUrl}/${landing.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...seoLandingRoutes];
}
