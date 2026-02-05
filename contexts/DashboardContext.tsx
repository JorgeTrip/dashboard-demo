"use client";

import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { SaleRecord, Period } from '@/lib/types';
import { MOCK_DATA } from '@/lib/mock-data';
import { differenceInDays, isAfter, subDays, parseISO } from 'date-fns';

interface DashboardContextType {
    records: SaleRecord[];
    filteredRecords: SaleRecord[];

    // Estados para los filtros aplicados en el dashboard
    salesperson: string | 'all';
    setSalesperson: (s: string | 'all') => void;
    region: string | 'all';
    setRegion: (r: string | 'all') => void;
    category: string | 'all';
    setCategory: (c: string | 'all') => void;
    month: string | 'all';
    setMonth: (m: string | 'all') => void;

    // Listados de valores únicos para poblar los desplegables de filtros (dropdowns)
    salespeople: string[];
    regions: string[];
    categories: string[];
    months: string[];
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
    const [salesperson, setSalesperson] = useState<string | 'all'>('all');
    const [region, setRegion] = useState<string | 'all'>('all');
    const [category, setCategory] = useState<string | 'all'>('all');
    const [month, setMonth] = useState<string | 'all'>('all');

    // Memorizar los valores únicos (Sets) para evitar recálculos innecesarios en cada render
    const { salespeople, regions, categories, months } = useMemo(() => {
        const sp = new Set<string>();
        const reg = new Set<string>();
        const cat = new Set<string>();
        const mon = new Set<string>();

        MOCK_DATA.forEach(r => {
            sp.add(r.salesperson);
            reg.add(r.region);
            cat.add(r.category);
            mon.add(r.date.substring(0, 7)); // Extraer formato YYYY-MM para el filtro mensual
        });

        return {
            salespeople: Array.from(sp).sort(),
            regions: Array.from(reg).sort(),
            categories: Array.from(cat).sort(),
            months: Array.from(mon).sort()
        };
    }, []);

    // Lógica principal de filtrado de datos basada en los estados de selección
    const filteredRecords = useMemo(() => {
        return MOCK_DATA.filter(record => {
            if (salesperson !== 'all' && record.salesperson !== salesperson) return false;
            if (region !== 'all' && record.region !== region) return false;
            if (category !== 'all' && record.category !== category) return false;
            if (month !== 'all' && !record.date.startsWith(month)) return false;
            return true;
        });
    }, [salesperson, region, category, month]);

    return (
        <DashboardContext.Provider value={{
            records: MOCK_DATA,
            filteredRecords,
            salesperson, setSalesperson,
            region, setRegion,
            category, setCategory,
            month, setMonth,
            salespeople, regions, categories, months
        }}>
            {children}
        </DashboardContext.Provider>
    );
}

export function useDashboard() {
    const context = useContext(DashboardContext);
    if (context === undefined) {
        throw new Error('useDashboard must be used within a DashboardProvider');
    }
    return context;
}
