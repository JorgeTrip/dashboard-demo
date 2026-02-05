"use client";

import { useDashboard } from "@/contexts/DashboardContext";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useMemo, useState } from "react";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { Metric, MetricToggle } from "./MetricToggle";
import { useTheme } from "@/contexts/ThemeContext";

const getTooltipStyle = (theme: string) => ({
    backgroundColor: 'var(--bg-card)',
    borderColor: 'var(--border-main)',
    color: 'var(--text-primary)',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
});

import { useLanguage } from "@/contexts/LanguageContext";

export function SalesTrendChart() {
    const { filteredRecords } = useDashboard();
    const [metric, setMetric] = useState<Metric>('revenue');
    const { t, language } = useLanguage();
    const { theme } = useTheme();
    const { es, enUS } = require("date-fns/locale");
    const currentLocale = language === 'es' ? es : enUS;

    const data = useMemo(() => {
        // Agrupar por fecha para la serie temporal de ventas
        const grouped = filteredRecords.reduce((acc, curr) => {
            const date = curr.date; // El formato ya viene como YYYY-MM-DD del mock-data
            const val = metric === 'revenue' ? curr.total_amount : curr.quantity;
            acc[date] = (acc[date] || 0) + val;
            return acc;
        }, {} as Record<string, number>);

        return Object.entries(grouped)
            .map(([date, total]) => ({ date, total }))
            .sort((a, b) => a.date.localeCompare(b.date));
    }, [filteredRecords, metric]);

    const color = metric === 'revenue' ? "#10b981" : "#3b82f6";
    const label = metric === 'revenue' ? t.tooltip_revenue : t.tooltip_units;

    return (
        <Card>
            <CardHeader
                title={t.chart_trend_title}
                subtitle={metric === 'revenue' ? t.chart_trend_subtitle_rev : t.chart_trend_subtitle_vol}
                action={<MetricToggle value={metric} onChange={setMetric} />}
            />
            <CardContent className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id={`colorTotal-${metric}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-main)" opacity={0.5} />
                        <XAxis
                            dataKey="date"
                            tickFormatter={(str) => format(parseISO(str), 'd MMM', { locale: currentLocale })}
                            stroke={theme === 'dark' ? '#9ca3af' : '#44403c'}
                            tick={{ fontSize: 12 }}
                            minTickGap={30}
                        />
                        <YAxis
                            stroke="var(--text-secondary)"
                            tickFormatter={(val) => metric === 'revenue' ? `$${(val / 1000).toFixed(0)}k` : val.toString()}
                            tick={{ fontSize: 12 }}
                        />
                        <Tooltip
                            contentStyle={getTooltipStyle(theme)}
                            formatter={(val: any) => [metric === 'revenue' ? `$${Number(val).toLocaleString(language === 'es' ? 'es-AR' : 'en-US')}` : val, label]}
                            labelFormatter={(label) => format(parseISO(label), 'EEEE d MMMM, yyyy', { locale: currentLocale })}
                        />
                        <Area
                            type="monotone"
                            dataKey="total"
                            stroke={color}
                            fillOpacity={1}
                            fill={`url(#colorTotal-${metric})`}
                            activeDot={{ r: 6 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

export function CategoryDistributionChart() {
    const { filteredRecords } = useDashboard();
    const [metric, setMetric] = useState<Metric>('revenue');
    const { t, language } = useLanguage();
    const { theme } = useTheme();

    const data = useMemo(() => {
        const grouped = filteredRecords.reduce((acc, curr) => {
            const val = metric === 'revenue' ? curr.total_amount : curr.quantity;
            acc[curr.category] = (acc[curr.category] || 0) + val;
            return acc;
        }, {} as Record<string, number>);

        return Object.entries(grouped)
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => b.value - a.value);
    }, [filteredRecords, metric]);

    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#3b82f6'];

    return (
        <Card className="h-full">
            <CardHeader
                title={t.chart_category_title}
                subtitle={metric === 'revenue' ? t.chart_category_subtitle_rev : t.chart_category_subtitle_vol}
                action={<MetricToggle value={metric} onChange={setMetric} />}
            />
            <CardContent className="h-[390px] w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                            labelLine={true}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={getTooltipStyle(theme)}
                            formatter={(val: any) => [
                                metric === 'revenue' ? `$${Number(val).toLocaleString(language === 'es' ? 'es-AR' : 'en-US')}` : val,
                                `${((val / total) * 100).toFixed(1)}%`
                            ]}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
