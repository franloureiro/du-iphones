import { ArrowUpRight, Instagram } from "lucide-react";
import Image from "next/image";
import { Cta } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/motion";
import { Visual } from "@/components/ui/visual";
import { site } from "@/config/site";
import { photoPath, whatsappUrl } from "@/lib/site";

const steps = [
  ["Chame o Du.", "Conte o que você procura e tire suas primeiras dúvidas."],
  ["Escolha seu iPhone.", "Converse sobre as opções que combinam com seu dia a dia."],
  ["Combine a compra.", "Alinhe as condições e os próximos passos pelo atendimento."],
];

export function About() {
  return <section id="sobre" className="section wrap about">
    <Reveal className="about-grid">
      <div><p className="eyebrow section-label">03 / SOBRE A DUPHONES</p><h2>Mais que tecnologia.<br /><em>Conexões reais.</em></h2></div>
      <div className="about-copy">{photoPath("about") && <div className="about-photo"><Visual name="about" sizes="(max-width: 750px) 92vw, 36vw" /></div>}<p>{site.about}</p><a className="text-link" href={whatsappUrl || "#contato"}>Fale com a DuPhones <ArrowUpRight size={17} aria-hidden="true" /></a></div>
    </Reveal>
  </section>;
}

export function Journey() {
  return <section id="comprar" className="section wrap journey">
    <Reveal><p className="eyebrow section-label">04 / COMO COMPRAR</p><h2>Seu próximo iPhone<br /><em>em três passos.</em></h2></Reveal>
    <ol>{steps.map(([title, text], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
    <Cta href={whatsappUrl || "#contato"}>Fale com a DuPhones</Cta>
  </section>;
}

export function Social() {
  const reviews = site.features.reviews ? site.reviews : [];
  const posts = site.features.posts ? site.posts : [];
  return <section className="wrap social" aria-labelledby="social-title">
    {reviews.length > 0 && <div className="social-content"><h2>Quem já comprou</h2><div className="social-scroll" tabIndex={0} aria-label="Avaliações de clientes">{reviews.map(({ name, text, rating, photo }, index) => <figure key={index}>
      {photo && <Image src={photo} width={48} height={48} alt="" />}
      <span aria-label={`${rating} de 5 estrelas`}>{rating}/5</span><blockquote>{text}</blockquote><figcaption>{name}</figcaption>
    </figure>)}</div></div>}
    <div className="social-line"><Instagram size={28} aria-hidden="true" /><h2 id="social-title">Conecte-se com a DuPhones.</h2><a className="text-link" href={site.instagram.url} target="_blank" rel="noopener noreferrer">Seguir {site.instagram.label} <ArrowUpRight size={17} aria-hidden="true" /></a></div>
    {posts.length > 0 && <div className="social-scroll" tabIndex={0} aria-label="Publicações no Instagram">{posts.map(post => <a key={post.url} href={post.url} target="_blank" rel="noopener noreferrer"><Image src={post.photo} width={300} height={300} alt={post.alt} />{post.label}</a>)}</div>}
  </section>;
}
