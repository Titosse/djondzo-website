"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";

const presets = [100, 300, 500, 1000];

export function PriceCalculator() {
  const [students, setStudents] = useState(300);
  const total = useMemo(
    () => Math.max(0, students) * siteConfig.pricePerStudent,
    [students],
  );

  return (
    <section className="surface p-0" aria-labelledby="price-calculator-title">
      <div className="price-test-heading">
        <p className="context-label">Teste rápido</p>
        <h3 id="price-calculator-title" className="ui-h2 mt-2">
          Quantos alunos tem a sua escola?
        </h3>
        <p className="ui-body mt-3">
          Escolha um exemplo ou introduza o número de alunos para ver a estimativa mensal.
        </p>
      </div>

      <div className="price-preset-grid" aria-label="Exemplos de número de alunos">
        {presets.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => setStudents(preset)}
            aria-pressed={students === preset}
            className="price-preset"
          >
            {preset.toLocaleString("pt-MZ")} alunos
          </button>
        ))}
      </div>

      <div className="price-calculator-grid">
        <div>
          <label className="form-label" htmlFor="students">
            Número de alunos
          </label>
          <input
            id="students"
            type="number"
            min="0"
            step="1"
            inputMode="numeric"
            value={students}
            onChange={(event) => setStudents(Number(event.target.value) || 0)}
            className="form-control mt-2"
          />
        </div>

        <dl className="price-total-panel">
          <dt className="text-base font-medium text-[var(--color-text-secondary)]">
            Estimativa mensal
          </dt>
          <dd className="price-total-value">
            {new Intl.NumberFormat("pt-MZ").format(total)} MT
          </dd>
          <dd className="mt-2 text-base leading-6 text-[var(--color-text-muted)]">
            {students.toLocaleString("pt-MZ")} alunos × {siteConfig.pricePerStudent} MT
          </dd>
        </dl>
      </div>

      <p className="mt-5 text-center text-[0.9375rem] leading-6 text-[var(--color-text-muted)]">
        Estimativa com base no modelo actual. As condições finais são confirmadas pela equipa Djondzo.
      </p>
    </section>
  );
}
