import React from "react";

export type Metric = 'revenue' | 'units';

export function MetricToggle({ value, onChange }: { value: Metric; onChange: (m: Metric) => void }) {
    return (
        <div className="flex bg-[var(--bg-input)] dark:bg-[var(--bg-input)] rounded-lg p-1 border border-[var(--border-main)]">
            <button
                onClick={() => onChange('revenue')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${value === 'revenue'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-[var(--text-secondary)] dark:text-slate-400 hover:text-[var(--text-primary)] dark:hover:text-white'
                    }`}
            >
                $
            </button>
            <button
                onClick={() => onChange('units')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${value === 'units'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-[var(--text-secondary)] dark:text-slate-400 hover:text-[var(--text-primary)] dark:hover:text-white'
                    }`}
            >
                Unid.
            </button>
        </div>
    );
}
