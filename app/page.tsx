"use client";

import { Hero } from "@/components/landing/Hero";
import { ContextSection, TechStack, Insights } from "@/components/landing/CaseStudySections";
import DashboardWrapper from "@/components/dashboard/DashboardLayout";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/landing/Navbar";
import { OrientationAlert } from "@/components/dashboard/OrientationAlert";

function PageContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen selection:bg-emerald-500/30">
      <OrientationAlert />
      <Navbar />
      <Hero />
      <ContextSection />

      <section id="demo" className="py-20 px-4 md:px-8 bg-[var(--bg-section)] dark:bg-[var(--bg-section)]">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">{t.dash_title}</h2>
            <p className="text-[var(--text-secondary)]">{t.dash_subtitle}</p>
          </div>
          <DashboardWrapper />
        </div>
      </section>

      <TechStack />
      <Insights />

      <footer className="py-12 border-t border-[var(--border-main)] text-center text-[var(--text-muted)] text-sm">
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}

import { ThemeProvider } from "@/contexts/ThemeContext";

// ...

export default function Home() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}
