import type { MetadataRoute } from "next";
import { en } from "@/i18n/dictionaries/en";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: en.meta.site.description,
    start_url: "/",
    display: "browser",
    background_color: site.themeColor,
    theme_color: site.themeColor,
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
