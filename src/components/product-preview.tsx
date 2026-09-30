import { AdminDashboardPreview } from "@/components/djondzo-previews";
import type { DjondzoPublicStats } from "@/lib/public-stats";

export function ProductPreview({ stats }: { stats?: DjondzoPublicStats }) {
  return (
    <AdminDashboardPreview
      stats={{
        students: stats?.students ?? null,
        teachers: stats?.teachers ?? null,
        classes: stats?.classes ?? null,
      }}
    />
  );
}
