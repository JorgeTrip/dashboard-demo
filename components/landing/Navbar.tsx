"use client";

import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Monitor } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--background)]/80 dark:bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-main)]">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-[var(--accent-emerald)]/10 p-2 rounded-lg border border-[var(--accent-emerald)]/20">
                        <Monitor className="w-5 h-5 text-[var(--accent-emerald)]" />
                    </div>
                    <span className="font-bold text-[var(--text-primary)] tracking-tight">Zenith Analytica</span>
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <LanguageToggle />
                </div>
            </div>
        </nav>
    );
}
