export function ProductPreview() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-black/10 bg-white p-3 shadow-[0_30px_80px_rgba(17,24,39,0.12)]">
      <div className="rounded-[22px] bg-[#171c2b] p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white/60">Djondzo Escolar</p>
            <p className="mt-1 font-semibold">Visão geral</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-white/10" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["Alunos", "1 064"],
            ["Turmas", "32"],
            ["Professores", "38"],
            ["Presença", "94%"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs text-white/60">{label}</p>
              <p className="mt-2 text-xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1.45fr_1fr]">
          <div className="rounded-2xl bg-white p-5 text-[#111827]">
            <p className="text-sm font-semibold">Resumo académico</p>
            <div className="mt-5 flex h-32 items-end gap-2">
              {[42, 65, 52, 78, 60, 88, 72, 91].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-lg bg-[#252c41]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#f1f3f6] p-5 text-[#111827]">
            <p className="text-sm font-semibold">Hoje</p>
            <div className="mt-4 space-y-3">
              {["Aulas e horários", "Mensalidades", "Tarefas pendentes"].map((item) => (
                <div key={item} className="rounded-xl bg-white px-3 py-3 text-xs font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
