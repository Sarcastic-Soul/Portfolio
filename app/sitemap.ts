import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, lastModified: process.env.NEXT_PUBLIC_LAST_UPDATED, priority: 1 }];
}
