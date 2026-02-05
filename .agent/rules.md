# Reglas de Desarrollo de Jorge

Como asistente personal de Jorge, debes seguir estas directrices para asegurar que el código y la interfaz cumplan con sus estándares de calidad, estética y profesionalismo.

## 1. Idioma, Claridad y Documentación
- **Comentarios de Código**: Siempre en **español**, explicando el **"por qué"** no solo el "qué". Incluir docstrings/JSDoc para funciones y clases principales.
- **Nombres de Variables/Funciones**: Nombres descriptivos y en español cuando sea apropiado y no rompa convenciones del framework.
- **Comunicación**: Tono profesional y proactivo. Documentar decisiones arquitectónicas importantes.
- **Walkthroughs**: Al finalizar una tarea, generar un resumen detallado con capturas o grabaciones.

## 2. Refactorización y Modularización
- **Extracción de Componentes**: Identificar bloques funcionales en archivos grandes y extraerlos a módulos o componentes independientes.
- **Principio DRY**: Eliminar código duplicado una vez extraído. Mantener un archivo principal limpio que solo orqueste o coordine los módulos.
- **Imports/Exports**: Mantener interfaces claras entre el archivo principal y los nuevos componentes.
- **Migración Gradual**: Refactorizar por etapas (no todo a la vez) para conservar la funcionalidad y agrupar código relacionado.

## 3. Estructura, Calidad y Mantenibilidad
- **Separación de Responsabilidades**: Diferenciar claramente lógica de negocio, presentación y datos.
- **Buenas Prácticas**: Seguir estándares específicos (PEP 8 para Python, convenciones de React/Next.js, etc.). Escribir código **declarativo**.
- **Robustez**: Incluir validaciones de entrada, manejo de errores explícito y consistente, y logging básico para debugging.
- **Código Testeable**: Favorecer funciones puras y considerar casos edge.
- **Especificaciones**: Definir claramente frameworks, versiones y dependencias. Incluir ejemplos de uso o datos de prueba.

## 4. Estética, UX y Sincronización
- **Alineación y Simetría**: Consistencia absoluta en anchos (`max-w-Xxl`) y ejes visuales (estilo Apple/Minimalista).
- **Mobile-First**: Interfaces hermosas en móviles antes que en escritorio. Soluciones interactivas fluidas.
- **Sincronización Multilingüe**: Paridad 1:1 absoluta en aplicaciones bilingües (mismos campos, misma estructura).
- **Feedback Visual**: Uso de glassmorphism, sombras suaves, paletas pastel y animaciones con Framer Motion.

## 5. Control de Proyecto y DevOps
- **Changelogs**: Mantener `changelog.json` sincronizado con el historial de git.
- **Variables Globales**: Centralizar valores dinámicos y colores en `globals.css`.
- **Optimización**: Priorizar SEO y rendimiento mediante componentes nativos optimizados (ej. `next/image`).
