# Djondzo Website — Sistema de UI/UX

Este documento define as regras visuais do website público do Djondzo. O objectivo é tornar a hierarquia mais óbvia, reduzir decoração gratuita e manter a interface específica para gestão escolar.

## 1. Ordem de decisão

1. tarefa do utilizador;
2. conteúdo;
3. prioridade;
4. agrupamento;
5. layout;
6. hierarquia;
7. tipografia;
8. espaçamento;
9. componentes;
10. cor;
11. detalhes visuais.

A decoração nunca substitui a hierarquia.

## 2. Tipografia

- H1: `clamp(1.75rem, 1.48rem + 1.15vw, 2.5rem)`
- H2: `clamp(1.25rem, 1.08rem + 0.75vw, 1.75rem)`
- H3: `1.125rem–1.25rem`
- Corpo: `1rem`
- Secundário: `0.875rem`
- Legenda: `0.8125rem`

Pesos usados: `400`, `500`, `600/700`.

## 3. Cores

- Marca: `#155DFC`
- Hover: `#0F52E8`
- Azul claro: `#EEF3FF`
- Texto principal: `#0F172B`
- Texto secundário: `#52617A`
- Texto auxiliar: `#64748B`
- Fundo: `#F8FAFC`
- Superfície: `#FFFFFF`
- Borda: `#DCE3ED`
- Sucesso: `#087A55`
- Erro: `#C81E1E`
- Aviso: `#A95900`

Cores de estado só são usadas quando existe significado funcional.

## 4. Espaçamento

Escala: `4, 8, 12, 16, 24, 32, 48, 64px`.

Elementos relacionados ficam mais próximos; grupos diferentes recebem mais espaço.

## 5. Radius

- pequeno: `8px`
- controlo: `10px`
- normal: `12px`
- grande: `16px`

Valores maiores não são usados por padrão.

## 6. Cards e superfícies

Cards só representam unidades independentes. Para conteúdo sequencial, preferir listas, divisores, colunas e agrupamento por proximidade.

O website evita cards dentro de cards e remove sombras sempre que borda, contraste ou espaço forem suficientes.

## 7. Botões

- primário: uma acção dominante por contexto;
- secundário: alternativa;
- terciário: link/acção discreta;
- área mínima: `44px`.

## 8. Responsividade

A grelha usa 4 colunas no mobile e 12 no desktop quando a composição exige colunas. No mobile, conteúdo é reorganizado por prioridade e não apenas comprimido.

## 9. Acessibilidade

- foco visível;
- `aria-current` na navegação activa;
- skip link;
- contraste WCAG AA;
- `prefers-reduced-motion`;
- labels persistentes;
- cor nunca é o único indicador de informação importante.

## 10. Testes

### Squint test

Mesmo desfocada, a página deve mostrar a ordem: título → informação-chave → acção principal → conteúdo secundário.

### Teste de identidade

Sem logótipo, nome ou cor, a página deve continuar a parecer um website de gestão escolar através de alunos, matrículas, assiduidade, notas, mensalidades, professores, Mediateca e calendário.

### Teste de necessidade

Se remover um elemento não prejudica compreensão nem tarefa, ele deve ser removido ou simplificado.
