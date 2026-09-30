"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { siteConfig } from "@/config/site";

export function PriceCalculator() {
  const [students, setStudents] = useState(300);
  const total = useMemo(
    () => Math.max(0, students) * siteConfig.pricePerStudent,
    [students],
  );

  return (
    <div className="rounded-[30px] border border-[#DCE3ED] bg-white p-6 shadow-[0_16px_44px_rgba(15,23,43,0.07)] sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#155DFC]">
          <Calculator size={21} />
        </span>
        <div>
          <p className="text-sm font-extrabold text-[#0F172B]">Calcule o valor mensal</p>
          <p className="mt-1 text-sm leading-6 text-[#64748B]">
            Use o número de alunos cadastrados para obter uma estimativa simples.
          </p>
        </div>
      </div>

      <label
        className="mt-7 block text-xs font-bold text-[#475569]"
        htmlFor="students"
      >
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
        className="mt-2 h-13 w-full rounded-2xl border border-[#DCE3ED] bg-[#F8FAFC] px-4 text-base font-bold text-[#0F172B] outline-none transition placeholder:text-[#94A3B8] focus:border-[#155DFC] focus:bg-white"
      />

      <div className="mt-6 rounded-[22px] border border-[#C7D2FE] bg-[#EEF3FF] p-5">
        <p className="text-xs font-bold text-[#64748B]">Estimativa mensal</p>
        <p className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-[#0F172B] sm:text-4xl">
          {new Intl.NumberFormat("pt-MZ").format(total)} MT
        </p>
        <p className="mt-2 text-xs font-semibold text-[#64748B]">
          {students} alunos × {siteConfig.pricePerStudent} MT
        </p>
      </div>

      <p className="mt-4 text-xs leading-5 text-[#8DA0BB]">
        Estimativa com base no modelo actual. As condições finais são confirmadas pela equipa Djondzo.
      </p>
    </div>
  );
}
