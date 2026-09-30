# Djondzo Website — Design System v7

## Direction
Professional, domain-specific school-management website. The public site should feel trustworthy, deliberate and operational — not like a generic SaaS template and not like a children's education app.

The visual direction combines restrained Swiss/minimal structure with Djondzo's existing blue identity and real school terminology.

## Page mode
The marketing homepage is a **Persuade** surface: help a school understand fit, inspect real workflows, understand the pricing model and request a demonstration.

Content pages such as the blog are **Read** surfaces and therefore use narrower measures and less interface chrome.

## Typography
- Heading: Manrope
- Body/UI: Source Sans 3
- Weights: 400 / 500 / 600 / 700 only
- H1: ~33–52px responsive on the marketing homepage
- H2: 24–32px responsive
- H3: 17–20px responsive
- Body: 16px minimum
- Supporting text: 14px
- Caption: 13px
- Reading measure: 64–72ch

## Color roles
- Brand/action: #155DFC
- Brand hover: #0F52E8
- Brand support: #757DF5
- Brand pale: #C7D2FE
- Main text: #0F172B
- Secondary text: #52617A
- Canvas: #F7F9FC
- Surface: #FFFFFF
- Border: #DCE3ED
- Success: #087A55
- Warning: #A95900
- Danger: #C81E1E

Blue is used for brand, selection, focus and primary action. State colors are not decorative.

## Shape
- Small: 8px
- Controls: 10px
- Surfaces: 12px
- Product previews: 16px maximum
- Pills only for true status/context semantics

## Elevation
Use spacing, borders and surface contrast first. Shadow is reserved for product/device previews where depth explains that the viewer is looking at a framed interface.

## Layout
- Mobile-first
- 4-column mobile logic
- 12-column desktop grid
- Max content width: 1220px
- 8px-derived spacing
- Related items stay close; section changes receive larger vertical gaps

## Buttons
- One dominant action per context
- Primary = solid Djondzo blue
- Secondary = neutral border
- Tertiary = text action
- Minimum target = 44px
- Press feedback = scale(0.98), 140ms ease-out

## Motion
Motion has a job: feedback, explanation, continuity or preventing a jarring change.

- Hero first-load entrance: 520–620ms ease-out, small translate only
- Routine UI feedback: 140–220ms
- Scroll reveal: only selected explanatory sections, 480ms ease-out
- Product-tour state change: 240ms ease-out
- School data-flow line: explanatory reveal, 900ms transform-only
- Animate only transform and opacity for movement
- Never use `transition: all`
- No bounce in routine marketing interactions
- `prefers-reduced-motion` removes travel while preserving useful state feedback

## Domain identity
The site should remain recognisably about school operations even if the Djondzo logo and brand color are removed. Use concrete concepts: matrícula, turma, notas, pautas, assiduidade, mensalidades, professores, Mediateca, ano lectivo and aluno.

## Anti-patterns
Avoid:
- Decorative gradients and glowing blobs
- Glassmorphism
- Invented metrics or testimonials
- Repeated icon-card grids
- Badge above every heading
- Oversized hero typography without purpose
- Excessively rounded surfaces
- Shadow on every card
- Scroll-reveal choreography on every section
- Motion that delays content or interactions

## Apresentação do produto no website (v8)

As demonstrações visuais do website devem partir do frontend real do Djondzo, e não de dashboards SaaS genéricos.

Regras:

- preservar nomes e relações reais dos módulos;
- simplificar a interface apenas para caber no contexto comercial;
- nunca publicar dados reais de escolas nos previews;
- usar `—` ou conteúdo explicitamente demonstrativo para valores;
- manter a hierarquia visual do website, mesmo quando o preview representa uma área mais densa do sistema;
- animações servem para transição entre áreas e compreensão, não para decoração;
- screenshots reais só devem ser usados quando estiverem preparados para publicação e sem dados sensíveis.

Áreas actualmente representadas:

- Administração / Dashboard;
- Gestão Financeira / Tesouraria;
- Pautas académicas;
- Assiduidade;
- Mediateca;
- Comunicação;
- Aluno.

## Layout v10 — eixo central e margens

O website não deve ocupar visualmente toda a largura do monitor.

- Conteúdo principal: máximo de **1120 px**.
- Hero: máximo de **1160 px**.
- Blocos editoriais/contextuais: até **900 px** quando não precisam de preview lateral.
- Desktop largo: pelo menos **48 px de gutter total por lado**, crescendo naturalmente quando a viewport ultrapassa a largura máxima.
- Tablet: cerca de **24 px por lado**.
- Mobile: cerca de **12 px por lado**.
- Fundos de secção podem continuar full-width quando comunicam uma mudança de contexto, mas o conteúdo interno continua preso ao eixo central.
- Previews de produto não devem crescer indefinidamente; normalmente ficam entre **700 e 920 px** conforme o contexto.

A intenção é obter a sensação das referências editoriais estudadas: página ampla, mas conteúdo controlado, com ar nas laterais e foco no produto.

## v11 — Cadence reference, Djondzo execution

A referência Cadence foi usada apenas para composição e ritmo:

- hero mais centrado;
- interface do produto grande imediatamente após a proposta;
- workflow com navegação lateral e preview funcional;
- secções com uma única ideia dominante;
- bastante espaço nas laterais;
- produto como principal evidência visual.

Não copiar:
- gradientes multicoloridos;
- métricas ou testemunhos não confirmados;
- estilo visual da marca Cadence;
- layouts que não correspondam aos fluxos escolares.

O Djondzo continua a usar a própria identidade azul/índigo, interfaces baseadas no frontend real e conteúdo orientado à gestão escolar.

## v12 — Hierarquia tipográfica e centralização

A apresentação comercial usa no máximo quatro níveis:

- H1: 32–48 px, peso 700.
- H2: 24–28 px, peso 700.
- Corpo: 16 px, peso 400, line-height 1.6.
- Auxiliar: 13–14 px, peso 500/600.

Regra de alinhamento:
- mensagens de marketing, introduções e chamadas principais: centradas;
- previews, tabelas, listas operacionais, FAQ e formulários: alinhados à esquerda para leitura;
- largura de texto: aproximadamente 60–68 caracteres.

O Hero usa o símbolo real do Djondzo como marca-d'água desfocada em baixa opacidade sobre fundo branco. Não é usado gradiente, glow ou fundo colorido para produzir o efeito.

## v13 — legibilidade, glass header e preço

### Tipografia

A escala foi aumentada sem criar novos níveis:

- H1: 36–48 px
- H2: 26–28 px
- H3: 18–20 px
- Corpo principal: 17 px
- Texto funcional/secundário: 15 px
- Legenda: 14 px

O objectivo é melhorar leitura em desktop e mobile sem transformar tudo em headline.

### Header

O cabeçalho passa a usar vidro gaussiano:

- fundo branco translúcido;
- `backdrop-filter: blur(18px) saturate(155%)`;
- borda inferior muito discreta;
- fallback branco quase opaco para browsers sem suporte;
- menu mobile usa o mesmo princípio.

### Preço

O preço de `15 MT / aluno / mês` torna-se um momento visual de nível 1.

A calculadora passa a ser uma ferramenta de teste:
- exemplos rápidos: 100, 300, 500 e 1000 alunos;
- entrada manual;
- estimativa mensal em destaque.

O fundo geral continua branco.
