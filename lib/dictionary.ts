export type Language = 'es' | 'en';

export const DICTIONARY = {
    es: {
        // Sección Hero
        hero_badge: "Caso de Estudio: Visualización de Datos",
        hero_title_prefix: "Transformando",
        hero_title_highlight: "Datos Crudos",
        hero_title_suffix: "en Decisiones Estratégicas",
        hero_desc: "Una solución integral de Business Intelligence para Zenith Naturals. Procesamiento de +36,000 registros de ventas para optimizar la performance comercial.",
        hero_cta: "Ver Dashboard Interactivo",

        // Sección de Contexto
        context_title: "El Contexto",
        challenge_title: "El Desafío:",
        challenge_desc: "Zenith Naturals enfrentaba dificultades para analizar su flujo de ventas trimestral. Con más de 36,000 registros en archivos estáticos, identificar tendencias de consumo y evaluar la performance de vendedores por zona era una tarea manual y propensa a errores.",
        solution_title: "La Solución:",
        solution_desc: "Diseñé e implementé un pipeline de datos automatizado y un dashboard interactivo. El objetivo no era solo mostrar números, sino permitir a la gerencia \"conversar\" con sus datos, filtrando por vendedor, zona y categoría en tiempo real.",
        volume_title: "Volumen de Datos",
        volume_desc: "Procesamiento eficiente de datasets masivos (Q1 2025).",
        analysis_title: "Análisis Granular",
        analysis_desc: "Drill-down por Vendedor, Zona y Categoría.",

        // Tecnologías utilizadas
        tech_title: "Stack Tecnológico",
        tech_etl: "ETL & Limpieza de Datos",
        tech_frontend: "Framework Frontend",
        tech_types: "Seguridad de Tipos",
        tech_viz: "Visualización de Datos",

        // Insights
        insights_title: "Insights y Resultados",
        insights_subtitle: "Tras la implementación de la herramienta, se pudieron extraer conclusiones clave para la estrategia del próximo trimestre.",
        insight_1_title: "Crecimiento Digital",
        insight_1_desc: "El análisis de productos revela que la 'Flor de Hibisco' y la 'Crema de Caléndula' dominan los ingresos, superando las expectativas iniciales para la categoría.",
        insight_2_title: "Optimización Regional",
        insight_2_desc: "El análisis permitió identificar las zonas del Interior (Córdoba/Santa Fe) como áreas de alta oportunidad, con ticket promedio superior al de CABA.",
        insight_3_title: "Performance de Ventas",
        insight_3_desc: "Al visualizar el ranking, se reasignaron incentivos a los vendedores 'Top Performers', aumentando la retención de talento clave.",
        insight_4_title: "Oportunidades de Stock",
        insight_4_desc: "La vista de 'Menos Vendidos' alerta sobre productos de baja rotación en Farmacia, sugiriendo promociones o liquidación de stock inmovilizado.",
        insight_5_title: "Motor de Rentabilidad",
        insight_5_desc: "El rubro 'Dietética' no solo lidera en volumen, sino que representa más del 60% de la facturación total, consolidándose como el eje central del negocio.",
        insight_6_title: "Potencial Mayorista",
        insight_6_desc: "A pesar de la alta rotación, el canal 'Distribuidor' presenta el ticket promedio más bajo ($4,500), señalando una oportunidad para introducir 'Packs Ahorro'.",

        // Footer
        footer: "© 2026 Jorge O. Tripodi | Caso de Estudio con Dashboard.",

        // Panel de Control (Dashboard)
        dash_title: "Dashboard Interactivo",
        dash_subtitle: "Prueba los filtros y explora los datos en tiempo real.",
        dash_header_title: "Dashboard de Ventas",
        dash_header_desc: "Resumen de actividad - Q1 2025",
        dash_live_data: "Datos en Vivo",
        dash_loading_map: "Cargando mapa...",
        dash_module_map: "Módulo de Mapa de Calor Regional",
        dash_coming_soon: "(Próximamente)",

        // Filters
        filter_label: "Filtrar por:",
        filter_all_salespeople: "Todos los Vendedores",
        filter_all_regions: "Todas las Zonas",
        filter_all_categories: "Todos los Rubros",
        filter_month: "Mes",
        filter_all_months: "Todos los Meses",
        month_jan: "Enero",
        month_feb: "Febrero",
        month_mar: "Marzo",

        // KPI
        kpi_revenue: "Ingresos Totales",
        kpi_orders: "Tickets Emitidos",
        kpi_avg_ticket: "Ticket Promedio",
        kpi_active_customers: "Clientes Activos",
        kpi_items_per_ticket: "Items Prom./Ticket",

        // Charts
        chart_trend_title: "Evolución de Ventas",
        chart_trend_subtitle_rev: "Tendencia diaria (Ingresos)",
        chart_trend_subtitle_vol: "Tendencia diaria (Volumen)",

        chart_category_title: "Ventas por Rubro",
        chart_category_subtitle_rev: "Distribución de ingresos",
        chart_category_subtitle_vol: "Unidades vendidas",

        chart_top_title: "Top Vendedores",
        chart_top_subtitle_rev: "Ranking por facturación",
        chart_top_subtitle_vol: "Ranking por volumen",

        chart_products_title: "Top 10 Productos",
        chart_bottom_products_title: "Menos Vendidos (Top 10)",
        chart_products_subtitle_rev: "Más vendidos por ingresos",
        chart_products_subtitle_vol: "Más vendidos por unidades",
        chart_bottom_subtitle_rev: "Menos vendidos por ingresos",
        chart_bottom_subtitle_vol: "Menos vendidos por unidades",

        chart_map_title: "Mapa de Cobertura",
        chart_map_subtitle_rev: "Concentración geográfica (Ingresos y Volumen)",
        chart_map_subtitle_vol: "Concentración geográfica (Ingresos y Volumen)",

        // Tooltips
        tooltip_revenue: "Venta Total",
        tooltip_units: "Unidades",
        tooltip_map_rev: "Ventas: ",
        tooltip_map_unit: "Unidades: ",
        tooltip_sort_top: "Ver Más Vendidos",
        tooltip_sort_bottom: "Ver Menos Vendidos",

        // Hints
        hint_interactive: "Interactivo",
        hint_hover_details: "Pasa el mouse para ver detalles",
        hint_zoom_pan: "Usa los botones (+/-) para zoom y arrastra para mover",
        hint_click_sort: "Click para alternar orden",

        // Mobile Alert
        mobile_rotate_title: "Gira tu dispositivo",
        mobile_rotate_desc: "Para una mejor experiencia con los gráficos, recomiendo usar el modo horizontal."
    },
    en: {
        // Sección Hero
        hero_badge: "Case Study: Data Visualization",
        hero_title_prefix: "Transforming",
        hero_title_highlight: "Raw Data",
        hero_title_suffix: "into Strategic Decisions",
        hero_desc: "A comprehensive Business Intelligence solution for Zenith Naturals. Processing +36,000 sales records to optimize commercial performance.",
        hero_cta: "View Interactive Dashboard",

        // Sección de Contexto
        context_title: "The Context",
        challenge_title: "The Challenge:",
        challenge_desc: "Zenith Naturals faced difficulties analyzing their quarterly sales flow. With over 36,000 records in static files, identifying consumption trends and evaluating salesperson performance by zone was a manual and error-prone task.",
        solution_title: "The Solution:",
        solution_desc: "I designed and implemented an automated data pipeline and an interactive dashboard. The goal was not just to show numbers, but to allow management to \"converse\" with their data, filtering by salesperson, zone, and category in real-time.",
        volume_title: "Data Volume",
        volume_desc: "Efficient processing of massive datasets (Q1 2025).",
        analysis_title: "Granular Analysis",
        analysis_desc: "Drill-down by Salesperson, Zone, and Category.",

        // Tecnologías utilizadas
        tech_title: "Tech Stack",
        tech_etl: "ETL & Data Cleaning",
        tech_frontend: "Frontend Framework",
        tech_types: "Type Safety",
        tech_viz: "Data Visualization",

        // Insights
        insights_title: "Insights & Results",
        insights_subtitle: "After implementing the tool, key conclusions were drawn for the next quarter's strategy.",
        insight_1_title: "Digital Growth",
        insight_1_desc: "Product analysis reveals that 'Hibiscus Flower' and 'Calendula Cream' dominate revenue, exceeding initial category expectations.",
        insight_2_title: "Regional Optimization",
        insight_2_desc: "The analysis identified the Interior zones (Córdoba/Santa Fe) as high-opportunity areas, with an average ticket higher than in CABA.",
        insight_3_title: "Sales Performance",
        insight_3_desc: "By visualizing the ranking, incentives were reassigned to 'Top Performers', increasing retention of key talent.",
        insight_4_title: "Stock Opportunities",
        insight_4_desc: "The 'Least Sold' view alerts on low-rotation Pharmacy products, suggesting promotions or liquidation of immobile stock.",
        insight_5_title: "Profitability Engine",
        insight_5_desc: "The 'Dietetics' category not only leads in volume but represents over 60% of total revenue, consolidating itself as the core business axis.",
        insight_6_title: "Wholesale Potential",
        insight_6_desc: "Despite high turnover, the 'Distributor' channel shows the lowest average ticket ($4,500), pointing to an opportunity to introduce 'Value Packs'.",

        // Footer
        footer: "© 2026 Dashboard Case Study. Developed with Next.js & Tailwind.",

        // Panel de Control (Dashboard)
        dash_title: "Interactive Dashboard",
        dash_subtitle: "Try the filters and explore data in real-time.",
        dash_header_title: "Sales Dashboard",
        dash_header_desc: "Activity Summary - Q1 2025",
        dash_live_data: "Live Data",
        dash_loading_map: "Loading map...",
        dash_module_map: "Regional Heatmap Module",
        dash_coming_soon: "(Coming Soon)",

        // Filters
        filter_label: "Filter by:",
        filter_all_salespeople: "All Salespeople",
        filter_all_regions: "All Zones",
        filter_all_categories: "All Categories",
        filter_month: "Month",
        filter_all_months: "All Months",
        month_jan: "January",
        month_feb: "February",
        month_mar: "March",

        // KPI
        kpi_revenue: "Total Revenue",
        kpi_orders: "Tickets Issued",
        kpi_avg_ticket: "Avg. Ticket",
        kpi_active_customers: "Active Customers",
        kpi_items_per_ticket: "Avg Items/Ticket",

        // Charts
        chart_trend_title: "Sales Evolution",
        chart_trend_subtitle_rev: "Daily Trend (Revenue)",
        chart_trend_subtitle_vol: "Daily Trend (Volume)",

        chart_category_title: "Sales by Category",
        chart_category_subtitle_rev: "Revenue Distribution",
        chart_category_subtitle_vol: "Units Sold",

        chart_top_title: "Top Salespeople",
        chart_top_subtitle_rev: "Revenue Ranking",
        chart_top_subtitle_vol: "Performance Ranking",

        chart_products_title: "Top 10 Products",
        chart_bottom_products_title: "Least Sold (Top 10)",
        chart_products_subtitle_rev: "Revenue Ranking",
        chart_products_subtitle_vol: "Units Ranking",
        chart_bottom_subtitle_rev: "Lowest Revenue Ranking",
        chart_bottom_subtitle_vol: "Lowest Volume Ranking",

        chart_map_title: "Heatmap",
        chart_map_subtitle_rev: "Geographic Concentration (Revenue)",
        chart_map_subtitle_vol: "Geographic Concentration (Volume)",

        // Tooltips
        tooltip_revenue: "Total Revenue",
        tooltip_units: "Units",
        tooltip_map_rev: "Sales: ",
        tooltip_map_unit: "Units: ",
        tooltip_sort_top: "Switch to Top 10",
        tooltip_sort_bottom: "Switch to Bottom 10",

        // Hints
        hint_interactive: "Interactive",
        hint_hover_details: "Hover for details",
        hint_zoom_pan: "Use (+/-) buttons to zoom, drag to pan",
        hint_click_sort: "Click to toggle sort",

        // Mobile Alert
        mobile_rotate_title: "Rotate your device",
        mobile_rotate_desc: "For the best chart experience, I recommend using landscape mode."
    }
};
