import type { MetadataRoute } from "next";
import { origin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return origin ? [{ url: `${origin}/` }] : [];
}
