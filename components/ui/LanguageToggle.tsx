"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-[var(--bg-section)] border border-[var(--border-main)] rounded-full p-1">
            <div className="flex items-center gap-1 px-2 text-[var(--text-muted)]">
                <Globe className="w-3 h-3" />
            </div>
            <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${language === 'es'
                    ? 'bg-[var(--accent-emerald)] text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
            >
                ES
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${language === 'en'
                    ? 'bg-[var(--accent-emerald)] text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
