import Image from "next/image";
import { site } from "@/config/site";

export function Brand() {
  return site.logo ? <Image src={site.logo} width={124} height={30} alt={site.name} className="brand-logo" />
    : <><span className="brand-mark" aria-hidden="true">D</span><span>Du<strong>Phones</strong></span></>;
}
