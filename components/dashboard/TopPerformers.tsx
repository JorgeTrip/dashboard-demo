"use client";

import { useDashboard } from "@/contexts/DashboardContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Metric, MetricToggle } from "./MetricToggle";
import { useTheme } from "@/contexts/ThemeContext";

import { useLanguage } from "@/contexts/LanguageContext";

export function TopPerformersChart() {
    const { filteredRecords } = useDashboard();
    const [metric, setMetric] = useState<Metric>('revenue');
    const { t } = useLanguage();
    const { theme } = useTheme();

    const data = useMemo(() => {
        const grouped = filteredRecords.reduce((acc, curr) => {
            const val = metric === 'revenue' ? curr.total_amount : curr.quantity;
            acc[curr.salesperson] = (acc[curr.salesperson] || 0) + val;
            return acc;
        }, {} as Record<string, number>);

        return Object.entries(grouped)
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => b.value - a.value)
            .slice(0, 5); // Tomamos el Top 5 de vendedores
    }, [filteredRecords, metric]);

    const color = metric === 'revenue' ? "#3b82f6" : "#f59e0b";

    return (
        <Card className="col-span-1 lg:col-span-1">
            <CardHeader
                title={t.chart_top_title}
                subtitle={metric === 'revenue' ? t.chart_top_subtitle_rev : t.chart_top_subtitle_vol}
                action={<MetricToggle value={metric} onChange={setMetric} />}
            />
            <CardContent className="h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={data} margin={{ left: 40 }}>
                        <XAxis type="number" hide />
                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={{ fontSize: 11, fill: 'var(--text-secondary)' }}
                            width={100}
                        />
                        <Tooltip
                            cursor={{ fill: 'var(--bg-card)', fillOpacity: 0.1 }}
                            contentStyle={{
                                backgroundColor: 'var(--bg-card)',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border-main)',
                                borderRadius: '8px'
                            }}
                            formatter={(val: any) => metric === 'revenue' ? `$${Number(val).toLocaleString()}` : val}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={color} fillOpacity={0.8 - (index * 0.05)} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

export function TopProductsChart() {
    const { filteredRecords } = useDashboard();
    const [metric, setMetric] = useState<Metric>('revenue');
    const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
    const { t } = useLanguage();
    const { theme } = useTheme();

    const data = useMemo(() => {
        const grouped = filteredRecords.reduce((acc, curr) => {
            const val = metric === 'revenue' ? curr.total_amount : curr.quantity;
            acc[curr.product_name] = (acc[curr.product_name] || 0) + val;
            return acc;
        }, {} as Record<string, number>);

        return Object.entries(grouped)
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => sortOrder === 'desc' ? b.value - a.value : a.value - b.value)
            .slice(0, 10); // Tomamos el Top 10 de productos
    }, [filteredRecords, metric, sortOrder]);

    const color = metric === 'revenue'
        ? (sortOrder === 'desc' ? "#10b981" : "#ef4444")
        : (sortOrder === 'desc' ? "#8b5cf6" : "#f59e0b");

    const titleKey = sortOrder === 'desc' ? 'chart_products_title' : 'chart_bottom_products_title';
    const subKey = metric === 'revenue'
        ? (sortOrder === 'desc' ? 'chart_products_subtitle_rev' : 'chart_bottom_subtitle_rev')
        : (sortOrder === 'desc' ? 'chart_products_subtitle_vol' : 'chart_bottom_subtitle_vol');

    return (
        <Card>
            <CardHeader
                title={t[titleKey as keyof typeof t]}
                subtitle={t[subKey as keyof typeof t]}
                action={
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
                            className="p-1.5 rounded-lg bg-[var(--bg-input)] dark:bg-[var(--bg-input)] border border-[var(--border-main)] hover:bg-[var(--border-main)] transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                            title={sortOrder === 'desc' ? t.tooltip_sort_bottom : t.tooltip_sort_top}
                        >
                            <ArrowUpDown className="w-4 h-4" />
                        </button>
                        <MetricToggle value={metric} onChange={setMetric} />
                    </div>
                }
            />
            <CardContent className="h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={data} margin={{ left: 10 }}>
                        <XAxis type="number" hide />
                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={{ fontSize: 11, fill: 'var(--text-muted)' }}
                            width={120}
                        />
                        <Tooltip
                            cursor={{ fill: 'var(--bg-card)', fillOpacity: 0.1 }}
                            contentStyle={{
                                backgroundColor: 'var(--bg-card)',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border-main)',
                                borderRadius: '8px'
                            }}
                            formatter={(val: any) => metric === 'revenue' ? `$${Number(val).toLocaleString()}` : val}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={color} fillOpacity={0.8 - (index * 0.05)} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
