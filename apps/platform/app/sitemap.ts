import { MetadataRoute } from "next";

/**
 * Generate the sitemap for the application
 * This will be available at /sitemap.xml
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL for your application
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://stackforge.xyz";

  // Define your static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/checkout`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ] as MetadataRoute.Sitemap;

  return [...staticRoutes];
}
