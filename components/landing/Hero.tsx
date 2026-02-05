"use client";

import { ArrowRight, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <BarChart3 className="w-4 h-4" />
                        <span>{t.hero_badge}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] dark:text-white tracking-tight mb-8">
                        {t.hero_title_prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t.hero_title_highlight}</span> {t.hero_title_suffix}
                    </h1>

                    <p className="text-xl text-[var(--text-secondary)] dark:text-slate-400 mb-10 leading-relaxed">
                        {t.hero_desc}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button key="scroll-btn" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-stone-900 dark:bg-white text-stone-50 dark:text-slate-900 rounded-full font-semibold hover:bg-stone-800 dark:hover:bg-slate-200 shadow-xl transition-all hover:scale-105 flex items-center gap-2">
                            {t.hero_cta}
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Gradientes decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>
        </section>
    );
}
