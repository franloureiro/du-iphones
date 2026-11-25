type Link = { label: string; url: string };
type Review = { name: string; text: string; rating: 1 | 2 | 3 | 4 | 5; photo?: string };
type Post = Link & { photo: string; alt: string };

export const site = {
  name: "DuPhones",
  title: "DuPhones | O próximo nível é seu",
  description: "Seu próximo iPhone está mais perto do que você imagina. Conheça a DuPhones e receba orientação para escolher seu próximo aparelho.",
  url: process.env.SITE_URL?.trim() || "",
  whatsapp: process.env.WHATSAPP_NUMBER?.trim() || "",
  message: "Olá! Conheci a DuPhones pelo site e gostaria de saber mais sobre os iPhones disponíveis.",
  instagram: { label: "@duphones_", url: "https://www.instagram.com/duphones_/" },
  logo: "",
  favicon: "/icons/duphones.svg",
  address: process.env.STORE_ADDRESS?.trim() || "",
  mapsKey: process.env.GOOGLE_MAPS_EMBED_KEY?.trim() || "",
  hours: "",
  privacyUrl: "",
  externalLinks: [] as Link[],
  features: { differentiators: false, reviews: false, posts: false },
  differentiators: ["Atendimento personalizado", "Procedência", "Garantia", "Pagamento", "Entrega ou retirada", "Suporte"].map(title => ({ title, text: "" })),
  reviews: [] as Review[],
  posts: [] as Post[],
  about: "A DuPhones conecta você ao universo Apple com uma experiência de atendimento próxima, moderna e personalizada. Encontre o aparelho que combina com seu momento e conte com orientação durante a sua escolha.",
  faq: [
    ["Como faço para comprar?", "Fale com a DuPhones para receber orientação e combinar os próximos passos da compra."],
    ["Como consulto os modelos disponíveis?", "Pergunte à DuPhones quais aparelhos e configurações estão disponíveis no momento."],
    ["Quais são as formas de pagamento?", "Consulte as condições e formas de pagamento diretamente no atendimento."],
    ["Os aparelhos possuem garantia?", "Peça as informações de garantia para o aparelho que você está considerando."],
    ["Como funciona a entrega?", "Informe sua região para consultar as opções de entrega ou retirada."],
    ["Vocês aceitam aparelhos na troca?", "Informe o modelo e o estado do seu aparelho para consultar as opções."],
  ],
};

export const navigation = [
  ["Início", "#inicio"], ["Experiência", "#experiencia"], ["Sobre", "#sobre"], ["Dúvidas", "#duvidas"], ["Contato", "#contato"],
];
