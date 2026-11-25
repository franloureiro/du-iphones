import { ArrowDown } from "lucide-react";
import { Cta } from "@/components/ui/cta";
import { Depth } from "@/components/ui/motion";
import { Visual } from "@/components/ui/visual";
import { whatsappUrl } from "@/lib/site";
import { Ambient } from "@/components/ui/effects";

export function Hero() {
  return <Ambient><section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-frame" aria-hidden="true"><i /><i /><i /><i /></div>
      <Depth className="hero-art"><Visual name="hero" priority sizes="(max-width: 700px) 100vw, 73vw" /></Depth>
      <div className="hero-light" aria-hidden="true" />
      <div className="wrap hero-content">
        <h1 id="hero-title"><span><b>O próximo nível</b></span><span><b><em>é seu.</em></b></span></h1>
        <p className="hero-copy">Seu próximo iPhone está mais perto do que você imagina.</p>
        <Cta href={whatsappUrl || "#contato"} className="hero-cta">Encontre seu iPhone</Cta>
      </div>
      <div className="wrap hero-bottom"><a href="#experiencia"><ArrowDown size={16} aria-hidden="true" /> Explore a experiência</a></div>
    </section></Ambient>;
}
