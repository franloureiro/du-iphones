"use client";

export function Ambient({ children }: { children: React.ReactNode }) {
  return <div className="ambient" onPointerMove={event => {
    if (event.pointerType !== "mouse" || !matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    const target = event.currentTarget;
    const bounds = target.getBoundingClientRect();
    target.style.setProperty("--light-x", `${event.clientX - bounds.left}px`);
    target.style.setProperty("--light-y", `${event.clientY - bounds.top}px`);
  }} onPointerLeave={event => {
    event.currentTarget.style.removeProperty("--light-x");
    event.currentTarget.style.removeProperty("--light-y");
  }}>{children}</div>;
}
