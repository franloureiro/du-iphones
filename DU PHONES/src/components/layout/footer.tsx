import { ArrowUp, MessageCircle } from "lucide-react";
import { Brand } from "./brand";
import { navigation, site } from "@/config/site";
import { whatsappUrl } from "@/lib/site";

export function Footer() {
  return <footer className="footer">
    <div className="wrap">
      <div className="footer-main">
        <a className="brand" href="#inicio"><Brand /></a>
        <nav aria-label="Links do rodapé">{navigation.slice(1).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <nav aria-label="Canais externos">
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a>
          {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
          {site.externalLinks.map(({ label, url }) => <a href={url} key={url} target="_blank" rel="noopener noreferrer">{label}</a>)}
          {site.privacyUrl && <a href={site.privacyUrl}>Privacidade</a>}
        </nav>
        <a className="back-top" href="#inicio" aria-label="Voltar ao início"><ArrowUp size={18} aria-hidden="true" /></a>
      </div>
      {(site.address || site.hours) && <p className="business-info">{[site.address, site.hours].filter(Boolean).join(" · ")}</p>}
      <div className="footer-legal"><p>© {new Date().getFullYear()} DuPhones. Todos os direitos reservados.</p><p>A DuPhones é uma empresa independente e não representa oficialmente a Apple.</p></div>
    </div>
    {whatsappUrl && <a className="floating-chat" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp"><MessageCircle size={22} aria-hidden="true" /></a>}
  </footer>;
}
