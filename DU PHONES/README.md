# DuPhones · Dark Tech Studio

Landing page comercial em português com Next.js App Router, TypeScript, Tailwind CSS, Framer Motion e Lucide. A composição combina navegação flutuante, layout editorial preto e verde, fotografia de produto, jornada de compra e FAQ.

## Executar localmente

Use Node.js 22 ou 24 e pnpm 10. Execute estes comandos na raiz do projeto.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra http://localhost:3000. Os comandos abaixo validam o código e executam o build de produção.

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Configuração comercial

Copie `.env.example` para `.env.local`. Defina `WHATSAPP_NUMBER` com código do país, DDD e número em dígitos. O link usa a mensagem predefinida de `src/config/site.ts`. Sem o número, o contato final abre o Instagram oficial e os CTAs da página levam à seção de contato. O botão flutuante aparece quando o número é válido.

Defina `SITE_URL` com a origem pública HTTPS. Essa origem alimenta o canonical, o sitemap, o Open Graph e a URL da organização. Reinicie o servidor de desenvolvimento após mudar as variáveis.

Edite `src/config/site.ts` para atualizar marca, FAQ, endereço, horários, privacidade e links externos. Ative as flags de diferenciais, avaliações ou publicações depois de adicionar o conteúdo confirmado e autorizado. O rodapé inclui apenas dados preenchidos.

Preencha `STORE_ADDRESS` com rua, número, cidade, estado e CEP para exibir a seção Loja física e o botão de rota. Para mostrar também o mapa incorporado, habilite a Maps Embed API no Google Cloud e configure `GOOGLE_MAPS_EMBED_KEY`. A chave do mapa pode ser lida no navegador. Restrinja-a à Maps Embed API e aos domínios da loja. [Documentação da Maps Embed API](https://developers.google.com/maps/documentation/embed/embedding-map)

## Identidade e fotografias

A paleta fica nas variáveis de `src/app/globals.css`. A família Inter Variable é hospedada localmente. Substitua a assinatura provisória configurando `logo` com um arquivo local em `public/icons`, e altere `favicon` se necessário.

As fotografias editoriais são ilustrativas. Consulte a [licença Pexels](https://www.pexels.com/license/) e os créditos abaixo. Para substituir uma foto, mantenha o nome do arquivo ou atualize `src/config/images.ts` junto com o texto alternativo. Exporte em WebP de boa qualidade e revise o enquadramento em telas estreitas.

| Arquivo | Uso e dimensão recomendada | Crédito |
| --- | --- | --- |
| `public/images/hero.webp` | iPhone em perspectiva sobre fundo preto, horizontal, 1800 × 1200 px ou maior | [Akaaljotsingh Anandpuria](https://www.pexels.com/photo/silver-iphone-on-black-surface-10885666/) |
| `public/images/detail.webp` | Detalhe de câmeras e acabamento, horizontal, 1800 × 1200 px ou maior | [Nacevski Nikola](https://www.pexels.com/photo/back-of-a-apple-iphone-pro-13939986/) |
| `public/images/experience.webp` | Tela real de iPhone sobre fundo escuro, vertical, 1000 × 1500 px ou maior | [Kafeel Ahmed](https://www.pexels.com/photo/close-up-of-an-iphone-14979024/) |
| `public/images/about.webp` | Retrato do Du ou da operação comercial, horizontal 4:3, 1200 × 900 px ou maior | Opcional, a fornecer pela DuPhones |

## Publicação na Vercel

Envie o projeto a um repositório GitHub e importe-o na Vercel com o preset Next.js. Selecione Node.js 22 ou 24 e adicione `WHATSAPP_NUMBER` e `SITE_URL` ao ambiente Production. Faça o deploy e confirme os links de atendimento, compartilhamento e sitemap no domínio final.

## Prévias

As capturas em `previews/` mostram a composição desktop de 1440 px e mobile de 390 px, incluindo a primeira dobra e a página inteira. Foram geradas no Chrome a partir de uma renderização estática do JSX e CSS, com movimento reduzido, enquanto a instalação do Next.js estava bloqueada por falta de espaço em disco.

A prévia foi verificada nas oito larguras entre 320 e 1920 px. O código passou pelo compilador TypeScript usando as declarações das dependências do lockfile. Lint, geração de tipos do Next.js, build de produção e verificação do aplicativo completo no navegador dependem da instalação das dependências.

## Pendências do proprietário

- Número oficial de WhatsApp, domínio e arquivos da marca.
- Fotos próprias opcionais de produtos, do Du e da operação.
- Políticas de compra, diferenciais, endereço e horário que a loja queira divulgar.
- Avaliações reais, publicações autorizadas e links comerciais adicionais, se disponíveis.

