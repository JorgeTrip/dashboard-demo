"use client";

import { useDashboard } from "@/contexts/DashboardContext";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KPIGrid() {
    const { filteredRecords } = useDashboard();
    const { t } = useLanguage();

    const totalRevenue = filteredRecords.reduce((acc, curr) => acc + curr.total_amount, 0);
    const totalOrders = filteredRecords.length;
    const totalUnits = filteredRecords.reduce((acc, curr) => acc + curr.quantity, 0);
    const avgTicket = totalOrders > 0 ? totalRevenue / totalOrders : 0;
    const avgItems = totalOrders > 0 ? totalUnits / totalOrders : 0;

    // Conteo de clientes únicos (Set elimina duplicados)
    const uniqueCustomers = new Set(filteredRecords.map(r => r.customer_name)).size;

    const metrics = [
        {
            label: t.kpi_revenue,
            value: new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(totalRevenue),
            icon: DollarSign,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            label: t.kpi_orders,
            value: totalOrders.toLocaleString('es-AR'),
            icon: ShoppingBag,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            label: t.kpi_avg_ticket,
            value: new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(avgTicket),
            icon: TrendingUp,
            color: "text-violet-500",
            bg: "bg-violet-500/10"
        },
        {
            label: t.kpi_items_per_ticket,
            value: avgItems.toFixed(0),
            icon: ShoppingBag, // Reuse icon or find another if available, CardStack/Layers? ShoppingBag is fine.
            color: "text-orange-500",
            bg: "bg-orange-500/10"
        },
        {
            label: t.kpi_active_customers,
            value: uniqueCustomers.toLocaleString('es-AR'),
            icon: Users,
            color: "text-amber-500",
            bg: "bg-amber-500/10"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {metrics.map((metric, idx) => (
                <Card key={idx} className="hover:scale-[1.02]">
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className={`p-4 rounded-xl ${metric.bg}`}>
                            <metric.icon className={`w-6 h-6 ${metric.color}`} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[var(--text-secondary)]">{metric.label}</p>
                            <h3 className="text-2xl font-bold text-[var(--text-primary)]">{metric.value}</h3>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
