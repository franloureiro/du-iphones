import { existsSync } from "node:fs";
import { join } from "node:path";
import { photos } from "@/config/images";
import { site } from "@/config/site";

export function photoPath(name: keyof typeof photos) {
  const { file } = photos[name];
  return existsSync(join(process.cwd(), "public", "images", file)) ? `/images/${file}` : undefined;
}

export const whatsappUrl = /^[1-9]\d{7,14}$/.test(site.whatsapp)
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.message)}`
  : undefined;

function publicOrigin(value: string) {
  try {
    const url = new URL(value);
    if (url.protocol === "https:" || url.protocol === "http:") return url.origin;
  } catch {}
}

export const origin = publicOrigin(site.url);
