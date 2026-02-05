"use client";

import { useDashboard } from "@/contexts/DashboardContext";
import { Filter, Users, MapPin, Tag, Calendar } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

export function Filters() {
    const {
        salesperson, setSalesperson, salespeople,
        region, setRegion, regions,
        category, setCategory, categories,
        month, setMonth, months
    } = useDashboard();
    const { t } = useLanguage();

    return (
        <div className="flex flex-wrap gap-4 items-center bg-[var(--bg-card)] dark:bg-[var(--bg-card)] backdrop-blur-sm p-4 rounded-xl border border-[var(--border-main)] mb-6 shadow-sm">
            <div className="flex items-center gap-2 text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mr-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-bold">{t.filter_label}</span>
            </div>

            {/* Filtro por Mes */}
            <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                </div>
                <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="pl-9 pr-4 py-2 bg-[var(--bg-input)] dark:bg-[var(--bg-input)] border border-[var(--border-main)] rounded-lg text-sm text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer flex-1 min-w-[140px] md:min-w-[160px]"
                >
                    <option value="all">{t.filter_all_months}</option>
                    {months.map(m => {
                        const monthNum = m.split('-')[1];
                        const map: Record<string, string> = { '01': 'jan', '02': 'feb', '03': 'mar' };
                        const key = `month_${map[monthNum]}` as keyof typeof t;
                        return <option key={m} value={m}>{t[key] || m}</option>
                    })}
                </select>
            </div>

            {/* Filtro por Vendedor */}
            <div className="relative">
                <Users className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" />
                <select
                    value={salesperson}
                    onChange={(e) => setSalesperson(e.target.value)}
                    className="pl-9 pr-4 py-2 bg-[var(--bg-input)] dark:bg-[var(--bg-input)] border border-[var(--border-main)] rounded-lg text-sm text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer flex-1 min-w-[140px] md:min-w-[160px]"
                >
                    <option value="all">{t.filter_all_salespeople}</option>
                    {salespeople.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>

            {/* Filtro por Región */}
            <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" />
                <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="pl-9 pr-4 py-2 bg-[var(--bg-input)] dark:bg-[var(--bg-input)] border border-[var(--border-main)] rounded-lg text-sm text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer flex-1 min-w-[140px] md:min-w-[160px]"
                >
                    <option value="all">{t.filter_all_regions}</option>
                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
            </div>

            {/* Filtro por Categoría */}
            <div className="relative">
                <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="pl-9 pr-4 py-2 bg-[var(--bg-input)] dark:bg-[var(--bg-input)] border border-[var(--border-main)] rounded-lg text-sm text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer flex-1 min-w-[140px] md:min-w-[160px]"
                >
                    <option value="all">{t.filter_all_categories}</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>
        </div>
    );
}
