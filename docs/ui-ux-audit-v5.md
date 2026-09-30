# Auditoria UI/UX — Website Djondzo v5

## Diagnóstico

1. A homepage anterior ainda dependia de padrões visuais genéricos: formas decorativas no hero, badges, muitos cards, cantos de 24–34px e sombras frequentes.
2. As funcionalidades eram apresentadas como uma grelha de cards, embora funcionassem melhor como um índice operacional de módulos.
3. A secção de perfis tinha cards dentro de um painel, criando mais camadas visuais do que informação.
4. CTA, FAQ, blog e páginas de solução repetiam o mesmo padrão de “card grande + ícone + título”.
5. A escala tipográfica estava mais consistente que versões anteriores, mas ainda havia excesso de bold e elementos auxiliares com demasiado destaque.
6. O website podia parecer um template SaaS genérico sem logótipo/cor, em vez de um produto claramente escolar.

## Decisões aplicadas

- Hero simplificado: sem blobs, grelha decorativa, glow ou badge em pill.
- Tipografia limitada a H1, H2, H3, corpo, secundário e legenda.
- Pesos limitados a 400, 500, 600/700.
- Radius reduzido para 8, 10, 12 e 16px.
- Cards substituídos por listas, divisores e colunas sempre que o conteúdo não representa uma entidade independente.
- Sombras mantidas apenas no preview do produto e no mockup do telefone, onde comunicam elevação física.
- Módulos apresentados como índice funcional, com descrição e navegação directa.
- Perfis apresentados em lista/definição, sem “cards dentro de cards”.
- Blog transformado em lista editorial em vez de grelha de cards.
- FAQ transformado em acordeão com divisores, sem container-card elevado.
- CTAs reduzidos a uma acção dominante por contexto.
- Conteúdo auxiliar usa cor neutra com contraste WCAG AA.
- Layout mobile reorganiza informação por prioridade.

## Checklist

- [x] Hierarquia perceptível no squint test
- [x] H1 28–40px com clamp
- [x] H2 20–28px com clamp
- [x] Corpo 16px
- [x] Texto secundário 14px
- [x] Máximo de 3 pesos principais
- [x] Sistema de espaçamento 4/8/12/16/24/32/48/64
- [x] Radius máximo padrão 16px
- [x] Sem gradientes decorativos
- [x] Sem blobs/glow/glassmorphism
- [x] Sem cards por defeito
- [x] Sombras apenas quando comunicam elevação
- [x] Cor primária reservada a navegação/ação/ênfase funcional
- [x] Verde/vermelho/âmbar usados apenas como estado
- [x] Área mínima de toque de 44px
- [x] Foco visível e navegação por teclado
- [x] aria-current na navegação
- [x] reduced-motion
- [x] Layout 4 colunas mobile / 12 desktop quando necessário
- [x] Conteúdo específico do domínio escolar

## Validação técnica

O ambiente desta sessão não contém as dependências npm instaladas, por isso o build completo do Next.js não pôde ser executado. Foi feita verificação sintática com o compilador TypeScript; não foram encontrados erros de parsing nos ficheiros alterados. Os erros restantes do `tsc` são de resolução de módulos/tipos ausentes (`next`, `react`, `lucide-react`, `@types/node`).
