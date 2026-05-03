import type { MetadataRoute } from "next";

import { profile } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${profile.domain}`,
      lastModified: new Date()
    },
    {
      url: `https://${profile.domain}/experiences`,
      lastModified: new Date()
    },
    {
      url: `https://${profile.domain}/projects`,
      lastModified: new Date()
    },
    {
      url: `https://${profile.domain}/blogs`,
      lastModified: new Date()
    }
  ];
}
