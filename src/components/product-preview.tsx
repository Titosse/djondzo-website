import {
  Bell,
  BookOpen,
  CalendarCheck2,
  ChevronRight,
  CircleDollarSign,
  GraduationCap,
  LayoutDashboard,
  UsersRound,
} from "lucide-react";
import { DjondzoMark } from "@/components/brand";

const bars = [48, 72, 56, 86, 64, 92, 78];

export function ProductPreview() {
  return (
    <div className="relative">
      <div className="absolute -left-6 -top-6 hidden h-28 w-28 rounded-[32px] bg-[#EEF3FF] lg:block" />
      <div className="absolute -bottom-7 -right-7 hidden h-36 w-36 rounded-full border-[24px] border-[#C7D2FE]/50 lg:block" />

      <div className="card-shadow relative overflow-hidden rounded-[34px] border border-[#DCE3ED] bg-white p-2.5">
        <div className="overflow-hidden rounded-[26px] border border-[#E4E9F1] bg-[#F8FAFC]">
          <div className="flex h-14 items-center justify-between border-b border-[#E4E9F1] bg-white px-4 sm:px-5">
            <div className="flex items-center gap-2.5">
              <DjondzoMark size={31} />
              <div>
                <p className="text-[10px] font-bold text-[#0F172B]">Djondzo</p>
                <p className="text-[8px] text-[#8DA0BB]">Painel demonstrativo</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden rounded-xl bg-[#F4F7FB] px-3 py-2 text-[9px] font-bold text-[#64748B] sm:inline-flex">
                Ano lectivo 2026
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F4F7FB] text-[#64748B]">
                <Bell size={13} />
              </span>
            </div>
          </div>

          <div className="grid min-h-[500px] grid-cols-[58px_1fr] sm:grid-cols-[156px_1fr]">
            <aside className="border-r border-[#E4E9F1] bg-white p-2 sm:p-3">
              <div className="space-y-2">
                {[
                  [LayoutDashboard, "Visão geral"],
                  [UsersRound, "Alunos"],
                  [GraduationCap, "Académico"],
                  [CalendarCheck2, "Assiduidade"],
                  [CircleDollarSign, "Financeiro"],
                  [BookOpen, "Mediateca"],
                ].map(([Icon, label], index) => {
                  const I = Icon as typeof LayoutDashboard;
                  return (
                    <div
                      key={String(label)}
                      className={`flex min-h-10 items-center gap-2 rounded-xl px-2.5 text-[10px] font-bold ${
                        index === 0
                          ? "bg-[#EEF3FF] text-[#155DFC]"
                          : "text-[#7B879B]"
                      }`}
                    >
                      <I size={14} />
                      <span className="hidden sm:inline">{String(label)}</span>
                    </div>
                  );
                })}
              </div>
            </aside>

            <div className="p-3 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#8DA0BB]">
                    Administração
                  </p>
                  <p className="mt-1 text-sm font-extrabold tracking-[-0.025em] text-[#0F172B] sm:text-base">
                    Visão geral da escola
                  </p>
                </div>
                <div className="rounded-xl border border-[#DCE3ED] bg-white px-3 py-2 text-[9px] font-bold text-[#64748B]">
                  Setembro
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
                {[
                  ["Alunos", "1 064"],
                  ["Turmas", "32"],
                  ["Professores", "38"],
                  ["Presença", "94%"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className={`rounded-2xl border p-3 ${
                      index === 0
                        ? "border-[#C7D2FE] bg-[#EEF3FF]"
                        : "border-[#E4E9F1] bg-white"
                    }`}
                  >
                    <p className="text-[9px] font-semibold text-[#8DA0BB]">{label}</p>
                    <p className="mt-1.5 text-base font-extrabold tracking-[-0.04em] text-[#0F172B]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-3 xl:grid-cols-[1.4fr_0.9fr]">
                <div className="rounded-2xl border border-[#E4E9F1] bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold text-[#0F172B]">
                      Acompanhamento académico
                    </p>
                    <p className="text-[9px] font-semibold text-[#8DA0BB]">Semana</p>
                  </div>
                  <div className="mt-5 flex h-28 items-end gap-2">
                    {bars.map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-lg bg-[#155DFC]"
                        style={{ height: `${height}%`, opacity: 0.35 + index * 0.08 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-[#0F172B] p-4 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold">Hoje</p>
                    <span className="h-2 w-2 rounded-full bg-[#757DF5]" />
                  </div>
                  <div className="mt-3 space-y-2">
                    {[
                      ["Assiduidade", "12 turmas"],
                      ["Mensalidades", "Recebimentos"],
                      ["Tarefas", "8 activas"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5"
                      >
                        <div>
                          <p className="text-[9px] font-semibold">{label}</p>
                          <p className="mt-0.5 text-[8px] text-white/50">{value}</p>
                        </div>
                        <ChevronRight size={12} className="text-white/45" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-[#E4E9F1] bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold text-[#0F172B]">Actividade recente</p>
                  <span className="text-[9px] font-bold text-[#155DFC]">Ver tudo</span>
                </div>
                <div className="mt-3 space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] px-3 py-2"
                    >
                      <span className="h-7 w-7 rounded-xl bg-[#EEF3FF]" />
                      <div className="flex-1">
                        <div className="h-2 w-24 rounded-full bg-[#DCE3ED]" />
                        <div className="mt-1.5 h-1.5 w-16 rounded-full bg-[#EDF1F5]" />
                      </div>
                      <div className="h-1.5 w-9 rounded-full bg-[#E7ECF2]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 left-8 hidden items-center gap-3 rounded-2xl border border-[#DCE3ED] bg-white px-4 py-3 shadow-[0_14px_36px_rgba(15,23,43,0.12)] md:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#155DFC]">
          <CalendarCheck2 size={17} />
        </span>
        <div>
          <p className="text-[10px] font-bold text-[#0F172B]">Dados ligados</p>
          <p className="text-[9px] text-[#8DA0BB]">Académico + financeiro</p>
        </div>
      </div>
    </div>
  );
}
