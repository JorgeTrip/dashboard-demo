"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Smartphone, X } from "lucide-react";

export function OrientationAlert() {
    const [isVisible, setIsVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const checkOrientation = () => {
            // Detectar si es móvil (ancho < 768px) y si está en portrait
            const isMobile = window.innerWidth < 768;
            const isPortrait = window.innerHeight > window.innerWidth;

            if (isMobile && isPortrait && !dismissed) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Chequear al montar
        checkOrientation();

        // Chequear al redimensionar (rotar)
        window.addEventListener('resize', checkOrientation);

        return () => window.removeEventListener('resize', checkOrientation);
    }, [dismissed]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-5 duration-500">
            <div
                className="border border-[var(--accent-blue)] shadow-lg rounded-xl p-4 flex items-start gap-4"
                style={{ backgroundColor: 'var(--bg-alert)', boxShadow: 'var(--shadow-alert)' }}
            >
                <div
                    className="p-2 rounded-lg text-[var(--accent-blue)]"
                    style={{ backgroundColor: 'var(--bg-icon-box)' }}
                >
                    <Smartphone className="w-6 h-6 animate-[spin_3s_ease-in-out_infinite]" />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">
                        {t.mobile_rotate_title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {t.mobile_rotate_desc}
                    </p>
                </div>
                <button
                    onClick={() => {
                        setIsVisible(false);
                        setDismissed(true);
                    }}
                    className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
