import { MapPin } from "lucide-react";
import { Cta } from "@/components/ui/cta";
import { site } from "@/config/site";

export function Location() {
  if (!site.address) return null;

  const directions = new URL("https://www.google.com/maps/dir/");
  directions.search = new URLSearchParams({ api: "1", destination: site.address }).toString();

  const embed = new URL("https://www.google.com/maps/embed/v1/place");
  embed.search = new URLSearchParams({ key: site.mapsKey, q: site.address, language: "pt-BR", region: "BR" }).toString();

  return <section id="loja" className="wrap section store" aria-labelledby="store-title">
    <div className="store-info">
      <p className="eyebrow section-label"><MapPin size={18} aria-hidden="true" /> LOJA FÍSICA</p>
      <h2 id="store-title">Visite a DuPhones.</h2>
      <address>{site.address}</address>
      {site.hours && <p>{site.hours}</p>}
      <Cta href={directions.href} className="store-directions">Traçar rota</Cta>
    </div>
    {site.mapsKey && <iframe src={embed.href} title="Localização da loja DuPhones no Google Maps" width="640" height="340" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />}
  </section>;
}
