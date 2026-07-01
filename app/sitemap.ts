import type { MetadataRoute } from "next";

const routes = [
  "",
  "/what-we-offer",
  "/protocol",
  "/hachinski",
  "/memory-screen",
  "/clinical-trial-matching",
  "/research/clinical-evidence",
  "/research/vascular-dementia-clinical-trials",
  "/caregiver-triage",
  "/marketplace",
  "/marketplace/citicoline",
  "/marketplace/omega-3",
  "/marketplace/mct-oil",
  "/marketplace/beetroot",
  "/marketplace/b-complex",
  "/marketplace/vitamin-d3-k2",
  "/marketplace/percepta",
  "/transparency",
  "/privacy",
  "/terms",
  "/affiliate-disclosure",
  "/compliance",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vascumind.com";
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
