"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-lg bg-[var(--bg-input)] dark:bg-[var(--bg-input)] border border-[var(--border-main)] hover:bg-[var(--border-main)] transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
                <Moon className="w-5 h-5 text-[var(--text-secondary)]" />
            )}
        </button>
    );
}
