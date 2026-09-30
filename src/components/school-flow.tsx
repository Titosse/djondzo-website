import type { CSSProperties } from "react";
import {
  BadgeDollarSign,
  CalendarCheck2,
  GraduationCap,
  Smartphone,
  UserRoundCheck,
} from "lucide-react";

const steps = [
  {
    icon: UserRoundCheck,
    label: "Matrícula",
    text: "O aluno entra uma vez na base da escola.",
  },
  {
    icon: GraduationCap,
    label: "Turma",
    text: "A matrícula liga o aluno à turma e ao ano lectivo.",
  },
  {
    icon: CalendarCheck2,
    label: "Académico",
    text: "Notas, pautas e assiduidade usam o mesmo vínculo.",
  },
  {
    icon: BadgeDollarSign,
    label: "Financeiro",
    text: "Cobranças e pagamentos continuam ligados ao aluno.",
  },
  {
    icon: Smartphone,
    label: "Aluno",
    text: "A informação relevante chega ao portal e ao aplicativo.",
  },
];

export function SchoolFlow() {
  return (
    <div className="school-flow" aria-label="Fluxo integrado do Djondzo">
      <div className="school-flow-line" aria-hidden="true" />
      <ol className="school-flow-grid">
        {steps.map(({ icon: Icon, label, text }, index) => (
          <li
            key={label}
            className="school-flow-step"
            style={{ "--flow-delay": `${index * 70}ms` } as CSSProperties}
          >
            <div className="school-flow-node" aria-hidden="true">
              <Icon size={18} />
            </div>
            <h3 className="ui-h3 mt-4">{label}</h3>
            <p className="mt-2 max-w-[32ch] text-base leading-7 text-[var(--color-text-secondary)]">
              {text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
