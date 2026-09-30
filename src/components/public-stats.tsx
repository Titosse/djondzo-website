import {
  BookOpen,
  GraduationCap,
  School,
  UsersRound,
  Layers3,
} from "lucide-react";
import type { DjondzoPublicStats } from "@/lib/public-stats";
import { hasPublicStats } from "@/lib/public-stats";

function formatNumber(value: number | null) {
  if (value == null) return "—";
  return new Intl.NumberFormat("pt-MZ").format(value);
}

export function PublicStats({ stats }: { stats: DjondzoPublicStats }) {
  if (!hasPublicStats(stats)) return null;

  const items = [
    { label: "Escolas", value: stats.schools, icon: School },
    { label: "Alunos cadastrados", value: stats.students, icon: UsersRound },
    { label: "Professores", value: stats.teachers, icon: GraduationCap },
    { label: "Turmas", value: stats.classes, icon: Layers3 },
    { label: "Títulos na Mediateca", value: stats.mediatecaTitles, icon: BookOpen },
  ].filter((item) => item.value != null);

  return (
    <section
      className="public-stats"
      aria-label="Dados reais agregados do Djondzo"
    >
      <div className="public-stats-head">
        <p className="context-label">Dados do Djondzo</p>
        <h2 className="ui-h2 mt-2">Números reais, actualizados pelo sistema.</h2>
        <p className="ui-body mt-3">
          Apenas dados agregados e apropriados para publicação são apresentados aqui.
        </p>
      </div>

      <dl className="public-stats-grid">
        {items.map(({ label, value, icon: Icon }) => (
          <div key={label} className="public-stat">
            <dt>
              <Icon size={18} aria-hidden="true" />
              {label}
            </dt>
            <dd>{formatNumber(value)}</dd>
          </div>
        ))}
      </dl>

      {stats.updatedAt && (
        <p className="public-stats-updated">
          Actualizado em{" "}
          {new Intl.DateTimeFormat("pt-MZ", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }).format(new Date(stats.updatedAt))}
        </p>
      )}
    </section>
  );
}
