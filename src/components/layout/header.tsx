"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { watchNavigation } from "@/lib/navigation";
import { useEffect, useRef, useState } from "react";

export function Header({ brand, links, contact, instagram, whatsapp }: { brand: React.ReactNode; links: string[][]; contact: string; instagram: string; whatsapp?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");
  const toggle = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    const frame = window.requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    const desktop = window.matchMedia("(min-width: 950px)");
    const reset = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", reset);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      desktop.removeEventListener("change", reset);
    };
  }, []);

  useEffect(() => watchNavigation(links.map(([, href]) => href), setActive), [links]);

  return <header className={`floating-header ${scrolled ? "is-scrolled" : ""}`} onKeyDown={event => {
    if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <div className="nav-shell">
      <a className="brand" href="#inicio" onClick={() => setOpen(false)}>{brand}</a>
      <nav aria-label="Navegação principal" className="desktop-nav">{links.map(([label, href]) => <a key={href} href={href} aria-current={active === href ? "location" : undefined}>{label}</a>)}</nav>
      <div className="nav-actions">
        <a className="nav-social" href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da DuPhones"><Instagram size={18} aria-hidden="true" /></a>
        {whatsapp ? <a className="nav-contact" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp"><WhatsAppIcon /><span className="contact-label-desktop">WhatsApp</span></a>
          : <a className="nav-contact" href={contact} aria-label="Contato"><span>Contato</span><ArrowUpRight size={15} aria-hidden="true" /></a>}
      </div>
      <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <div id="mobile-nav">
      <AnimatePresence initial={false}>
        {open && <motion.nav className="mobile-nav" aria-label="Navegação móvel" initial={reduced ? false : { opacity: 0, y: -7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.18 }}>
          {links.map(([label, href]) => <a key={href} href={href} aria-current={active === href ? "location" : undefined} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
        </motion.nav>}
      </AnimatePresence>
    </div>
  </header>;
}
