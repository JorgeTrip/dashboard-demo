"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DICTIONARY, Language } from '@/lib/dictionary';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof DICTIONARY['es']; // Inferencia de tipo basada en el diccionario de español
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');

    const t = DICTIONARY[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
