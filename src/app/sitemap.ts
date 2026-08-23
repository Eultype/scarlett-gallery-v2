import { MetadataRoute } from "next";
import { galleryPageItems } from "@/data/gallery";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.scarlettgallery.com";

  // Pages statiques
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exposition`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  // Pages dynamiques des œuvres
  const artworkRoutes: MetadataRoute.Sitemap = galleryPageItems.map((artwork) => ({
    url: `${baseUrl}/gallery/${artwork.id}`,
    lastModified: new Date(), // Idéalement, si tu as une date de création dans tes datas, utilise-la ici
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...artworkRoutes];
}
