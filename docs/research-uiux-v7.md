# UI/UX research applied in v7

## Impeccable

The public homepage is treated as a **Persuade** surface: the visitor needs to understand fit, inspect the product, understand the commercial model and take action.

Applied principles:
- polish spacing, typography, interactions and responsive behavior without losing product identity;
- use motion for feedback, continuity, state indication and explanation;
- do not animate every section simply to make the page feel modern;
- preserve reduced-motion alternatives;
- keep the website specific to the product and its task.

References reviewed:
- https://impeccable.style/docs/polish/
- https://impeccable.style/docs/animate/
- https://impeccable.style/docs/context/
- https://impeccable.style/docs/improve-design/

## ui-ux-pro-max skill

The local design-system search was run for a professional B2B school-management marketing website. The recommendations reinforced:
- trust and authority over playful education visuals;
- accessible typography and contrast;
- one clear CTA path;
- visible focus;
- 44px touch targets;
- reduced motion;
- responsive checks at mobile, tablet and desktop widths.

The generic Claymorphism suggestion for broad education queries was rejected because it conflicts with the Djondzo product context and B2B audience.

## Animation skills

The local animation skills were used as implementation constraints:
- button press: 100–160ms;
- routine UI motion: under 300ms;
- entrance/exit: strong ease-out;
- moving/morphing on-screen: ease-in-out;
- transform and opacity for motion;
- no `transition: all`;
- no `scale(0)` entrances;
- hover motion gated to fine pointers when relevant;
- reduced-motion support ships with the implementation.

## Djondzo-specific design decision

The new homepage does not use another school product as its structural reference. Its distinctive visual story is the actual school workflow:

Matrícula → Turma → Académico → Financeiro → Aluno

The product tour then demonstrates how responsibilities differ between Administração, Secretaria, Professor and Mediateca while the underlying school data remains connected.
