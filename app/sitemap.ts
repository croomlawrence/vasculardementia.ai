import type { MetadataRoute } from "next";

const routes = [
  "",
  "/what-we-offer",
  "/hachinski",
  "/memory-screen",
  "/memory-screen/thank-you",
  "/protocol",
  "/science",
  "/memory-after-stroke",
  "/vascular-dementia-symptoms",
  "/post-stroke-cognitive-impairment",
  "/hachinski-ischemic-score",
  "/vascular-cognitive-impairment",
  "/high-blood-pressure-and-memory",
  "/small-vessel-disease-memory",
  "/caregiver-guide-memory-after-stroke",
  "/cognitive-screening-for-clinical-trials",
  "/clinical-trial-matching",
  "/cro-licensing",
  "/cro-licensing/packet",
  "/marketplace",
  "/research/clinical-evidence",
  "/research/vascular-dementia-clinical-trials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `https://www.vascumind.com${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("memory") || route.includes("hachinski") ? 0.9 : 0.7,
  }));
}
