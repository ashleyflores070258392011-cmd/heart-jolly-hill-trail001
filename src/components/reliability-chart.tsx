import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { Locale } from "@/lib/locale";

const values = [97.8, 98.1, 97.4, 98.6, 98.9, 99.2];

function Tip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value?: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl bg-ink px-3 py-2 text-sm text-paper">
      <div className="font-medium">{label}</div>
      <div className="tabular-nums text-accent">{payload[0].value}%</div>
    </div>
  );
}

export function ReliabilityChart({ locale }: { locale: Locale }) {
  const labels = locale === "sl" ? ["Maj", "Jun", "Jul", "Avg", "Sep", "Okt"] : ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  const data = labels.map((month, index) => ({ month, onTime: values[index] }));
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={28}>
          <XAxis dataKey="month" tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis domain={[96, 100]} hide />
          <Tooltip content={<Tip />} cursor={{ fill: "var(--color-primary)", fillOpacity: 0.08 }} />
          <Bar dataKey="onTime" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
