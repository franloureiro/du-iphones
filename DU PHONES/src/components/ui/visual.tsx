import Image from "next/image";
import { photos } from "@/config/images";
import { photoPath } from "@/lib/site";

export function Visual({ name, priority = false, sizes }: { name: keyof typeof photos; priority?: boolean; sizes: string }) {
  const src = photoPath(name);
  const photo = photos[name];
  return src ? <Image src={src} alt={photo.alt} fill preload={priority} sizes={sizes} style={{ objectPosition: photo.position }} /> : null;
}
