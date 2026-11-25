"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";

export function Cta({ href, children, className = "", chat = false }: { href: string; children: React.ReactNode; className?: string; chat?: boolean }) {
  const external = href.startsWith("https://");
  return <a className={`cta ${className}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} onPointerMove={event => {
    if (event.pointerType !== "mouse" || !matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pull", `${(event.clientX - bounds.left - bounds.width / 2) * 0.1}px`);
  }} onPointerLeave={event => event.currentTarget.style.removeProperty("--pull")}>
    {chat && <MessageCircle size={17} aria-hidden="true" />}
    <span>{children}</span><ArrowUpRight size={17} aria-hidden="true" className="cta-arrow" />
  </a>;
}
