"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1">
            <div className="flex items-center gap-1 px-2 text-slate-400">
                <Globe className="w-3 h-3" />
            </div>
            <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${language === 'es'
                        ? 'bg-slate-700 text-white shadow-sm'
                        : 'text-slate-500 hover:text-white'
                    }`}
            >
                ES
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${language === 'en'
                        ? 'bg-slate-700 text-white shadow-sm'
                        : 'text-slate-500 hover:text-white'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
