import { Header } from "@/components/layout/header";
import { Brand } from "@/components/layout/brand";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { About, Journey, Social } from "@/components/sections/about";
import { Contact, Faq } from "@/components/sections/contact";
import { Location } from "@/components/sections/location";
import { Progress } from "@/components/ui/motion";
import { navigation, site } from "@/config/site";
import { origin, whatsappUrl } from "@/lib/site";

export default function Home() {
  const links = site.address ? [...navigation.slice(0, -1), ["Loja física", "#loja"], navigation[navigation.length - 1]] : navigation;
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: origin, sameAs: [site.instagram.url], logo: origin && site.logo ? new URL(site.logo, origin).href : undefined, telephone: whatsappUrl ? `+${site.whatsapp}` : undefined };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <Progress />
    <Header brand={<Brand />} links={links} contact="#contato" instagram={site.instagram.url} whatsapp={whatsappUrl} />
    <main id="conteudo" tabIndex={-1}><Hero /><Experience /><About /><Journey /><Social /><Faq /><Location /><Contact /></main>
    <Footer />
  </>;
}
