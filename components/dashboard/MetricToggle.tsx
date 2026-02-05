import React from "react";

export type Metric = 'revenue' | 'units';

export function MetricToggle({ value, onChange }: { value: Metric; onChange: (m: Metric) => void }) {
    return (
        <div className="flex bg-[var(--bg-input)] dark:bg-[var(--bg-input)] rounded-lg p-1 border border-[var(--border-main)]">
            <button
                onClick={() => onChange('revenue')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${value === 'revenue'
                    ? 'bg-[var(--accent-emerald)] text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
            >
                $
            </button>
            <button
                onClick={() => onChange('units')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${value === 'units'
                    ? 'bg-[var(--accent-blue)] text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
            >
                Unid.
            </button>
        </div>
    );
}
