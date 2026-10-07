import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SnowEnduro",
    short_name: "SnowEnduro",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#06101B",
    theme_color: "#06101B",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
