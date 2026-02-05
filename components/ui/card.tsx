import { cn } from "@/lib/utils";
import React from "react";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("bg-[var(--bg-card)] dark:bg-[var(--bg-card)] backdrop-blur-sm rounded-xl border border-[var(--border-main)] shadow-sm transition-all duration-200 hover:border-emerald-500/30 dark:hover:border-white/20", className)}>
            {children}
        </div>
    );
}

export function CardHeader({ title, subtitle, className, action }: { title: string; subtitle?: string; className?: string; action?: React.ReactNode }) {
    return (
        <div className={cn("p-6 pb-2 flex justify-between items-start", className)}>
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
            </div>
            {action && <div>{action}</div>}
        </div>
    );
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("p-6 pt-2", className)}>
            {children}
        </div>
    );
}
