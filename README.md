# Djondzo Website

Website público e institucional do Djondzo Escolar, separado do painel React/Vite.

## Objectivos

- Apresentar o Djondzo a escolas e instituições de ensino.
- Captar pedidos de demonstração.
- Construir presença orgânica no Google e em mecanismos de pesquisa baseados em IA.
- Manter o website público separado dos dados autenticados do sistema.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Lucide React

## UI/UX

A identidade visual foi alinhada com a UI fornecida do Djondzo:

- azul principal `#155DFC`;
- índigo secundário `#757DF5`;
- lavanda `#C7D2FE`;
- texto principal `#0F172B`;
- fundo `#F8FAFC`.

As regras completas estão em `docs/ui-ux-system.md`.

Foram aplicados princípios de mobile-first, hierarquia visual, design tokens, foco visível por teclado, `prefers-reduced-motion`, labels de formulário e alvos de toque adequados.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Configuração

Copie `.env.example` para `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://djondzo.co.mz
NEXT_PUBLIC_APP_URL=https://app.djondzo.co.mz
NEXT_PUBLIC_CONTACT_EMAIL=comercial@djondzo.co.mz
NEXT_PUBLIC_WHATSAPP=258840000000
```

## SEO e descoberta

O projecto inclui metadata, canonical URLs, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml`, `manifest.webmanifest` e `public/llms.txt`.

## Antes do deploy

- Confirmar domínio final.
- Definir e-mail comercial real.
- Adicionar número de WhatsApp.
- Substituir mockups por screenshots reais seleccionados do produto quando desejado.
- Confirmar as condições comerciais do preço.
- Ligar Google Search Console e Bing Webmaster Tools.
