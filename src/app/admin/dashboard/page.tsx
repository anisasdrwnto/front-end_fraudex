"use client";

import { useSMSStatsStore } from "@/store/queries/useSMSStatsStore";
import { StatsCards } from "@/components/features/admin/StatsCards";
import { AnalyticsChart } from "@/components/features/admin/AnalyticsChart";

export default function AdminDashboardPage() {
  const { normalCount, suspiciousCount, fraudCount } = useSMSStatsStore();

  const totalAll = normalCount + suspiciousCount + fraudCount;

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>

      {/* Komponen Kartu Statistik */}
      <StatsCards 
        normalCount={normalCount} 
        suspiciousCount={suspiciousCount} 
        fraudCount={fraudCount} 
      />

      {/* Komponen Grafik Analitik */}
      <AnalyticsChart 
        normalCount={normalCount} 
        suspiciousCount={suspiciousCount} 
        fraudCount={fraudCount} 
        totalAll={totalAll} 
      />
    </div>
  );
}