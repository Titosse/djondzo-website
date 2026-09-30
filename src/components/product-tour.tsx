"use client";

import { useState } from "react";
import {
  AdminDashboardPreview,
  FinancePreview,
  MediatecaPreview,
  PautasPreview,
  StudentPreview,
} from "@/components/djondzo-previews";

const views = [
  {
    id: "administracao",
    index: "01",
    label: "Administração",
    title: "Comece pelo que exige atenção.",
    text: "O Dashboard apresenta o contexto da escola e destaca o estado financeiro quando o perfil tem acesso ao módulo.",
    Preview: AdminDashboardPreview,
  },
  {
    id: "pautas",
    index: "02",
    label: "Pautas",
    title: "Transforme lançamentos em documentos académicos.",
    text: "Cadernetas, pautas trimestrais, pauta de frequência e boletins usam ano, turma, disciplina e período.",
    Preview: PautasPreview,
  },
  {
    id: "financeiro",
    index: "03",
    label: "Tesouraria",
    title: "Acompanhe entradas, saídas e cobranças.",
    text: "Saldo, dívidas, recebimentos e importação dos dados anteriores da escola permanecem no mesmo fluxo.",
    Preview: FinancePreview,
  },
  {
    id: "mediateca",
    index: "04",
    label: "Mediateca",
    title: "Ligue o acervo aos leitores da escola.",
    text: "Catálogo, exemplares, empréstimos, reservas e localizações usam os perfis já existentes no Djondzo.",
    Preview: MediatecaPreview,
  },
  {
    id: "aluno",
    index: "05",
    label: "Aluno",
    title: "Entregue ao aluno apenas o que lhe diz respeito.",
    text: "Disciplinas, tarefas, presença, notas, horário e financeiro aparecem no seu próprio espaço.",
    Preview: StudentPreview,
  },
];

export function ProductTour() {
  const [activeId, setActiveId] = useState(views[0].id);
  const active = views.find((view) => view.id === activeId) ?? views[0];
  const Preview = active.Preview;

  return (
    <div className="product-workflow">
      <div className="product-workflow-nav" aria-label="Áreas demonstrativas do Djondzo">
        {views.map((view) => {
          const activeView = view.id === activeId;

          return (
            <button
              key={view.id}
              type="button"
              aria-pressed={activeView}
              onClick={() => setActiveId(view.id)}
              className={`product-workflow-step ${activeView ? "is-active" : ""}`}
            >
              <span className="product-workflow-index" aria-hidden="true">
                {view.index}
              </span>
              <span className="product-workflow-step-copy">
                <strong>{view.label}</strong>
                <small>{view.title}</small>
              </span>
            </button>
          );
        })}
      </div>

      <div key={active.id} className="product-workflow-content">
        <div className="product-workflow-intro">
          <p className="context-label">{active.label}</p>
          <h3 className="ui-h2 mt-3">{active.title}</h3>
          <p className="ui-body mt-4 max-w-[54ch]">{active.text}</p>
        </div>

        <div className="product-workflow-preview">
          <Preview />
        </div>
      </div>
    </div>
  );
}
