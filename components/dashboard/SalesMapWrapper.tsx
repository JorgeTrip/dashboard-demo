"use client";

import dynamic from 'next/dynamic';
import { Card } from "@/components/ui/card";
import { Loader2 } from 'lucide-react';

const SalesMap = dynamic(() => import('./SalesMap'), {
    loading: () => (
        <Card className="col-span-1 lg:col-span-2 h-[400px] flex items-center justify-center bg-white/5">
            <div className="flex flex-col items-center gap-2 text-slate-500">
                <Loader2 className="w-8 h-8 animate-spin" />
                <p>Cargando mapa...</p>
            </div>
        </Card>
    ),
    ssr: false
});

export default SalesMap;
