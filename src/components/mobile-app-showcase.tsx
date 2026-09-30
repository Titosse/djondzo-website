"use client";

import Image from "next/image";
import { useState } from "react";

const screens = [
  {
    id: "inicio",
    label: "Início",
    image: "/product/mobile/inicio.webp",
    title: "O dia escolar começa com uma visão clara.",
    text: "O aluno vê média, presença, disciplinas, tarefas pendentes e o horário de hoje logo ao entrar.",
  },
  {
    id: "calendario",
    label: "Calendário",
    image: "/product/mobile/calendario.webp",
    title: "Horário e aulas organizados por dia.",
    text: "A semana mostra as aulas programadas, horários, professores e sala, com acesso rápido às presenças.",
  },
  {
    id: "tarefas",
    label: "Tarefas",
    image: "/product/mobile/tarefas.webp",
    title: "Tarefas, conteúdos e biblioteca no mesmo espaço de aprendizagem.",
    text: "O aluno acompanha actividades atribuídas, conteúdos da turma e materiais sem sair da aplicação.",
  },
  {
    id: "notas",
    label: "Notas",
    image: "/product/mobile/notas.webp",
    title: "Desempenho académico explicado, não apenas listado.",
    text: "Média geral, disciplinas aprovadas, em risco e resultados por período ficam disponíveis num espaço próprio.",
  },
  {
    id: "financeiro",
    label: "Financeiro",
    image: "/product/mobile/financeiro.webp",
    title: "A situação financeira também fica transparente para o aluno.",
    text: "Mensalidades, valores pendentes, pagamentos realizados e próximos vencimentos podem ser consultados no telemóvel.",
  },
  {
    id: "mediateca",
    label: "Mediateca",
    image: "/product/mobile/mediateca.webp",
    title: "O catálogo da escola acompanha o aluno.",
    text: "Pesquisa, reservas e empréstimos da Mediateca ficam disponíveis no mesmo aplicativo usado para a rotina escolar.",
  },
];

export function MobileAppShowcase() {
  const [activeId, setActiveId] = useState("inicio");
  const active = screens.find((item) => item.id === activeId) ?? screens[0];

  return (
    <div className="mobile-app-showcase">
      <div className="mobile-app-tabs" aria-label="Ecrãs da aplicação móvel">
        {screens.map((screen) => (
          <button
            key={screen.id}
            type="button"
            className="mobile-app-tab"
            aria-pressed={active.id === screen.id}
            onClick={() => setActiveId(screen.id)}
          >
            {screen.label}
          </button>
        ))}
      </div>

      <div className="mobile-app-stage">
        <div className="mobile-app-device-wrap">
          <div className="mobile-app-device">
            <Image
              key={active.id}
              src={active.image}
              alt={`Aplicação Djondzo para aluno — ${active.label}`}
              width={560}
              height={1276}
              sizes="(max-width: 720px) 86vw, 355px"
              priority={active.id === "inicio"}
            />
          </div>
        </div>

        <div className="mobile-app-copy">
          <p className="context-label">Djondzo Mobile · {active.label}</p>
          <h3 className="mt-3">{active.title}</h3>
          <p>{active.text}</p>
          <div className="mt-6 border-t border-[var(--color-border)] pt-5">
            <p className="text-base font-medium text-[var(--color-text)]">
              Um único acesso para acompanhar a rotina escolar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
