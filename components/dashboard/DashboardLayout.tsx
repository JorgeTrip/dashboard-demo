"use client";

import { DashboardProvider } from "@/contexts/DashboardContext";
import KPIGrid from "./KPIGrid";
import { Filters } from "./Filters";
import { SalesTrendChart, CategoryDistributionChart } from "./Charts";
import { TopPerformersChart, TopProductsChart } from "./TopPerformers";
import SalesMapWrapper from "./SalesMapWrapper";
import { Monitor } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

function DashboardContent() {
    const { t } = useLanguage();

    return (
        <div className="w-full bg-[var(--bg-card)] dark:bg-[var(--bg-card)] border border-[var(--border-main)] rounded-xl overflow-hidden shadow-2xl">
            {/* Encabezado estilo navegador (decorativo) */}
            <div className="bg-[var(--bg-header)] dark:bg-[var(--bg-header)] px-4 py-3 flex items-center gap-4 border-b border-[var(--border-main)]">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-500/50" />
                </div>
                <div className="flex-1 text-center">
                    <span className="text-xs text-stone-500 dark:text-slate-500 font-mono">dashboard.zenithnaturals.com/analytics</span>
                </div>
            </div>

            {/* Contenido principal del dashboard */}
            <div className="p-4 md:p-6 lg:p-8 bg-[var(--bg-card)] dark:bg-[var(--bg-card)] min-h-[800px]">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{t.dash_header_title}</h1>
                        <p className="text-[var(--text-secondary)] text-sm">{t.dash_header_desc}</p>
                    </div>
                    <div className="px-3 py-1 bg-[var(--accent-emerald)]/10 border border-[var(--accent-emerald)]/20 rounded-full text-[var(--accent-emerald)] text-xs font-medium flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-emerald)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-emerald)]"></span>
                        </span>
                        {t.dash_live_data}
                    </div>
                </div>

                <Filters />

                <KPIGrid />

                <div className="mb-6">
                    <SalesTrendChart />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <TopProductsChart />
                    <TopPerformersChart />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-5">
                        <CategoryDistributionChart />
                    </div>
                    <div className="lg:col-span-7">
                        <SalesMapWrapper />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DashboardWrapper() {
    return (
        <DashboardProvider>
            <DashboardContent />
        </DashboardProvider>
    );
}
