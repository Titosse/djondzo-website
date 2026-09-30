export type DjondzoPublicStats = {
  updatedAt: string | null;
  schools: number | null;
  students: number | null;
  teachers: number | null;
  classes: number | null;
  enrollments: number | null;
  mediatecaTitles: number | null;
};

const EMPTY_STATS: DjondzoPublicStats = {
  updatedAt: null,
  schools: null,
  students: null,
  teachers: null,
  classes: null,
  enrollments: null,
  mediatecaTitles: null,
};

function numberOrNull(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function normalizeStats(raw: unknown): DjondzoPublicStats {
  if (!raw || typeof raw !== "object") return EMPTY_STATS;

  const source = raw as Record<string, unknown>;
  const data =
    source.data && typeof source.data === "object"
      ? (source.data as Record<string, unknown>)
      : source;

  return {
    updatedAt:
      typeof data.updatedAt === "string"
        ? data.updatedAt
        : typeof data.updated_at === "string"
          ? data.updated_at
          : null,
    schools: numberOrNull(data.schools ?? data.escolas ?? data.activeSchools),
    students: numberOrNull(data.students ?? data.alunos ?? data.studentCount),
    teachers: numberOrNull(
      data.teachers ?? data.professores ?? data.teacherCount,
    ),
    classes: numberOrNull(data.classes ?? data.turmas ?? data.classCount),
    enrollments: numberOrNull(
      data.enrollments ?? data.matriculas ?? data.activeEnrollments,
    ),
    mediatecaTitles: numberOrNull(
      data.mediatecaTitles ?? data.mediateca_titles ?? data.titulos_mediateca,
    ),
  };
}

export async function getDjondzoPublicStats(): Promise<DjondzoPublicStats> {
  const url = process.env.DJONDZO_PUBLIC_STATS_URL;

  if (!url) {
    return EMPTY_STATS;
  }

  try {
    const headers: HeadersInit = {
      Accept: "application/json",
    };

    const token = process.env.DJONDZO_PUBLIC_STATS_TOKEN;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      headers,
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return EMPTY_STATS;
    }

    return normalizeStats(await response.json());
  } catch {
    return EMPTY_STATS;
  }
}

export function hasPublicStats(stats: DjondzoPublicStats): boolean {
  return [
    stats.schools,
    stats.students,
    stats.teachers,
    stats.classes,
    stats.enrollments,
    stats.mediatecaTitles,
  ].some((value) => typeof value === "number");
}
