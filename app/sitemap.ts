import type { MetadataRoute } from "next";
import { PUBLIC_ROUTES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PUBLIC_ROUTES.map(({ path, priority }) => ({
    url: path === "/" ? SITE.url : `${SITE.url}${path}`,
    lastModified,
    priority,
  }));
}
