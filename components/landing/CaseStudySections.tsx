import { Terminal, Database, LayoutTemplate, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContextSection() {
    const { t } = useLanguage();

    return (
        <section className="py-20 border-t border-[var(--border-main)] bg-[var(--bg-section)] dark:bg-[var(--bg-section)]">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">{t.context_title}</h2>
                    <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
                        <p>
                            <strong className="text-emerald-700 dark:text-emerald-400">{t.challenge_title}</strong> {t.challenge_desc}
                        </p>
                        <p>
                            <strong className="text-emerald-700 dark:text-emerald-400">{t.solution_title}</strong> {t.solution_desc}
                        </p>
                    </div>
                </div>
                <div className="bg-[var(--bg-card)] dark:bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-main)] shadow-xl dark:shadow-none">
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-highlight)' }}>
                            <Database className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mt-1" />
                            <div>
                                <h3 className="text-[var(--text-primary)] font-semibold">{t.volume_title}</h3>
                                <p className="text-sm text-[var(--text-muted)]">{t.volume_desc}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-highlight)' }}>
                            <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                            <div>
                                <h3 className="text-[var(--text-primary)] font-semibold">{t.analysis_title}</h3>
                                <p className="text-sm text-[var(--text-muted)]">{t.analysis_desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function TechStack() {
    const { t } = useLanguage();

    const stack = [
        { icon: Terminal, name: "Python", role: t.tech_etl, color: "text-amber-600 dark:text-yellow-400" },
        { icon: LayoutTemplate, name: "Next.js", role: t.tech_frontend, color: "text-[var(--text-primary)]" },
        { icon: Database, name: "TypeScript", role: t.tech_types, color: "text-blue-600 dark:text-blue-500" },
        { icon: TrendingUp, name: "Recharts", role: t.tech_viz, color: "text-rose-600 dark:text-red-400" },
    ];

    return (
        <section className="py-20 border-t border-[var(--border-main)] bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">{t.tech_title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stack.map((tech, idx) => (
                        <div key={idx} className="p-6 rounded-xl bg-[var(--bg-card)] dark:bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-emerald-500/50 transition-colors group shadow-sm dark:shadow-none hover:shadow-md">
                            <tech.icon className={`w-10 h-10 ${tech.color} mb-4 group-hover:scale-110 transition-transform`} />
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{tech.name}</h3>
                            <p className="text-[var(--text-secondary)] text-sm">{tech.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Insights() {
    const { t } = useLanguage();

    return (
        <section className="py-20 border-t border-[var(--border-main)] bg-[var(--bg-section)] dark:bg-[var(--bg-section)]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4 text-center">{t.insights_title}</h2>
                <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
                    {t.insights_subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: t.insight_1_title,
                            desc: t.insight_1_desc
                        },
                        {
                            title: t.insight_2_title,
                            desc: t.insight_2_desc
                        },
                        {
                            title: t.insight_3_title,
                            desc: t.insight_3_desc
                        },
                        {
                            title: t.insight_4_title,
                            desc: t.insight_4_desc
                        },
                        {
                            title: t.insight_5_title,
                            desc: t.insight_5_desc
                        },
                        {
                            title: t.insight_6_title,
                            desc: t.insight_6_desc
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="relative p-8 rounded-2xl bg-[var(--bg-card)] dark:bg-[var(--bg-card)] border border-[var(--border-main)] overflow-hidden shadow-sm dark:shadow-none">
                            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600 dark:bg-emerald-500" />
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                "{item.desc}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
