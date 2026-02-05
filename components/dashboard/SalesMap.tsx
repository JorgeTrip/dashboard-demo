"use client";

import { useDashboard } from "@/contexts/DashboardContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { REGIONS_DATA } from "@/lib/mock-data";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo, useEffect, useState } from "react";
import { Metric, MetricToggle } from "./MetricToggle";
import { useTheme } from "@/contexts/ThemeContext";

// El uso de CircleMarker evita problemas de iconos por defecto de Leaflet en Next.js.

function MapUpdater({ center }: { center: [number, number] }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
}

import { useLanguage } from "@/contexts/LanguageContext";

export default function SalesMap() {
    const { filteredRecords } = useDashboard();
    const { t } = useLanguage();
    const { theme } = useTheme();

    const regionMetrics = useMemo(() => {
        // Agrupar ventas por región (Revenue y Units) para el mapa
        const aggregated: Record<string, { revenue: number; units: number }> = {};

        filteredRecords.forEach(r => {
            if (!aggregated[r.region]) {
                aggregated[r.region] = { revenue: 0, units: 0 };
            }
            aggregated[r.region].revenue += r.total_amount;
            aggregated[r.region].units += r.quantity;
        });

        // Mapear a un array con coordenadas para renderizar los marcadores
        return Object.entries(aggregated).map(([name, values]) => {
            const coords = REGIONS_DATA[name as keyof typeof REGIONS_DATA];
            return {
                name,
                revenue: values.revenue,
                units: values.units,
                lat: coords?.lat || -34.6,
                lng: coords?.lng || -58.4
            };
        }).sort((a, b) => b.revenue - a.revenue);
    }, [filteredRecords]);

    // Centrar el mapa en el nodo más grande o por defecto en Buenos Aires
    const center: [number, number] = regionMetrics.length > 0
        ? [regionMetrics[0].lat, regionMetrics[0].lng]
        : [-34.6037, -58.3816];

    return (
        <Card className="h-[500px] flex flex-col overflow-hidden">
            <CardHeader
                title={t.chart_map_title}
                subtitle={t.chart_map_subtitle_rev} // Defaulting to Revenue subtitle as it drives visualization
                className="z-10 bg-inherit"
            />
            <div className="flex-1 w-full relative z-0">
                <MapContainer
                    center={center}
                    zoom={5}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%", background: 'var(--bg-section)' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url={theme === 'dark'
                            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        }
                    />
                    {regionMetrics.map((region) => (
                        <CircleMarker
                            key={region.name}
                            center={[region.lat, region.lng]}
                            pathOptions={{ color: 'var(--accent-emerald)', fillColor: 'var(--accent-emerald)', fillOpacity: 0.5 }}
                            radius={Math.log(region.revenue) * 1.5} // Escalamos el radio según la facturación
                        >
                            <Popup className={theme === 'dark' ? 'dark-popup' : ''}>
                                <div className="p-2 space-y-1 text-[var(--text-primary)]">
                                    <h4 className="font-bold text-sm border-b border-[var(--border-main)] pb-1 mb-1">{region.name}</h4>
                                    <p className="text-xs flex justify-between gap-4">
                                        <span className="text-[var(--text-muted)]">{t.tooltip_revenue}:</span>
                                        <span className="font-mono font-semibold">${region.revenue.toLocaleString()}</span>
                                    </p>
                                    <p className="text-xs flex justify-between gap-4">
                                        <span className="text-[var(--text-muted)]">{t.tooltip_units}:</span>
                                        <span className="font-mono font-semibold">{region.units}</span>
                                    </p>
                                </div>
                            </Popup>
                        </CircleMarker>
                    ))}
                    <MapUpdater center={center} />
                </MapContainer>
            </div>
        </Card>
    );
}
