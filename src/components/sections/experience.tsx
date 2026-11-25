import { ArrowUpRight, MessageSquare, Smartphone } from "lucide-react";
import { Depth, Reveal } from "@/components/ui/motion";
import { Visual } from "@/components/ui/visual";
import { site } from "@/config/site";

export function Experience() {
  const differences = site.features.differentiators ? site.differentiators.filter(item => item.text) : [];
  return <>
    <section id="experiencia" className="section wrap experience">
      <Reveal>
        <p className="eyebrow section-label">01 / A EXPERIÊNCIA</p>
        <div className="section-intro"><h2>A tecnologia evolui.<br /><em>Você também.</em></h2><p>Conte à DuPhones como você usa o celular no dia a dia e descubra quais opções fazem sentido para você.</p></div>
      </Reveal>
      <div className="bento">
        <article className="bento-photo">
          <Visual name="experience" sizes="(max-width: 750px) 92vw, 56vw" />
          <div className="bento-caption"><span>Universo iPhone</span><Smartphone size={19} aria-hidden="true" /></div>
        </article>
        <article className="bento-talk">
          <MessageSquare size={24} aria-hidden="true" />
          <div><h3>Conversa direta.</h3><p>Conte o que você procura e tire suas dúvidas antes de escolher.</p></div>
        </article>
        <a className="bento-link" href="#comprar"><span>Como comprar</span><ArrowUpRight aria-hidden="true" /></a>
        {differences.map(item => <article className="extra-bento" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </div>
    </section>
    <section className="macro" aria-labelledby="detail-title">
      <Depth className="macro-art"><Visual name="detail" sizes="100vw" /></Depth>
      <div className="macro-overlay" aria-hidden="true" />
      <Reveal className="wrap macro-content"><p className="eyebrow section-label">02 / EM FOCO</p><h2 id="detail-title">Cada detalhe.<br /><em>Um novo nível.</em></h2></Reveal>
    </section>
  </>;
}
