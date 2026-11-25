import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "@/config/site";
import { origin, photoPath } from "@/lib/site";

const hero = photoPath("hero");
const socialImage = origin && hero ? new URL(hero, origin).href : undefined;

export const metadata: Metadata = {
  metadataBase: origin ? new URL(origin) : undefined,
  title: site.title,
  description: site.description,
  alternates: origin ? { canonical: "/" } : undefined,
  icons: { icon: site.favicon },
  openGraph: { type: "website", locale: "pt_BR", title: site.title, description: site.description, siteName: site.name, url: origin, images: socialImage ? [{ url: socialImage, alt: "Fotografia de iPhone" }] : undefined },
  twitter: { card: socialImage ? "summary_large_image" : "summary", title: site.title, description: site.description, images: socialImage ? [socialImage] : undefined },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
