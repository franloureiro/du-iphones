import { Plus } from "lucide-react";
import { Cta } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/motion";
import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/site";

export function Faq() {
  return <section id="duvidas" className="section wrap faq">
    <Reveal><p className="eyebrow section-label">05 / PERGUNTAS FREQUENTES</p><h2>Ficou com<br /><em>alguma dúvida?</em></h2></Reveal>
    <div className="questions">{site.faq.map(([question, answer]) => <details key={question} name="duphones-faq">
      <summary>{question}<Plus size={21} aria-hidden="true" /></summary>
      <p>{answer} <a href={whatsappUrl || "#contato"}>Fale com a DuPhones</a>.</p>
    </details>)}</div>
  </section>;
}

export function Contact() {
  const href = whatsappUrl || site.instagram.url;
  return <section id="contato" className="contact" aria-labelledby="contact-title">
    <div className="wrap">
      <Reveal><p className="eyebrow"><span className="signal" /> FALE COM A DUPHONES</p><h2 id="contact-title">Pronto para<br /><em>o próximo iPhone?</em></h2><p>Fale diretamente com o Du para escolher o aparelho que combina com você.</p>
      <Cta href={href} chat={Boolean(whatsappUrl)}>{whatsappUrl ? "Conversar pelo WhatsApp" : "Conversar pelo Instagram"}</Cta>
      {!whatsappUrl && process.env.NODE_ENV === "development" && <small className="dev-note">Configure WHATSAPP_NUMBER para ativar o WhatsApp.</small>}</Reveal>
    </div>
  </section>;
}
