# Changelog — Open Andes

Todas las versiones notables del proyecto. Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).

## [v2.1-popocateptl] — 2026-11-18

### 🌋 Nombre clave: Popocatépetl 2.1

Segunda iteración del volcán. Enfoque en internacionalización completa, optimización de rendimiento, limpieza técnica y nuevas funcionalidades editoriales.

### ✨ Añadido

- **`/topics`** — Página índice de ejes temáticos (ES/EN/ZH) con:
  - Top 16 tags más usados, ordenados alfabéticamente, con gradiente de color (índigo → ámbar).
  - Resto de tags en orden alfabético, sin contador.
  - Filtrado por locale (los tags de cada idioma son independientes).
- **Ensayo "La otra cara de la transición energética"** (Lautaro E. Pittier & Nahuel A. Bento) en ES/EN/ZH:
  - Minerales críticos, poder transnacional y derechos humanos en América Latina.
  - Imagen de portada `solar_panels.webp` + 2 imágenes internas.
  - Bibliografía de 7 referencias (IEA, OECD, Corte IDH).
  - Categoría: Minerales Estratégicos.
- **Soporte multi-autor** en `analisis/[...slug].astro`, `comentarios/[...slug].astro`:
  - Campo `authorSlugs: string[]` en el frontmatter.
  - Renderiza múltiples minibios al final del artículo.
  - Backward-compatible con `authorSlug` (string).
- **Slugs ZH en pinyin ASCII**:
  - `src/utils/slugify.ts` convierte tags chinos a slugs ASCII (`阿根廷` → `a-gen-ting`).
  - URLs más limpias y compatibles con SEO internacional.
- **Redirecciones ES → EN/ZH**:
  - Slugs traducidos redirigen 301 (`/en/analisis/<slug-es>` → `/en/analisis/<slug-en>`).
- **Tag `Argentina`** en "El Estrecho de Malaca se resuelve en Salta" (ES/EN/ZH).
- **Nuevo rol de Benyi Barros Rojas**: Director Ejecutivo → Coordinador de Asuntos Externos (ES/EN/ZH).
- **Soporte multi-autor** en `analisis/[...slug].astro`, `comentarios/[...slug].astro`.

### 🔧 Cambiado

- **`/topics`** rediseñado: top 16 con gradiente, resto alfabético sin count.
- **Home** (`index.astro`): filtra posts por locale (no mezcla idiomas).
- **`/analisis`** y **`/comentarios`**: listados filtrados por locale (sin duplicados ES/EN/ZH).
- **`/expertos`**: Bernardo Muñoz Aguilar removido del equipo (sigue como autor de artículos).
- **`/topics`**: labels en MAYÚSCULAS (uppercase CSS).
- **`/topics`**: descripción unificada en los 3 idiomas.
- **`/topics`**: label del menú "Temas" → "Topics" en ES.

### 🐛 Corregido

- **i18n de `analisis` y `comentarios`**: 3 copias de `[...slug].astro` por locale (ES/EN/ZH), evitando colisiones de rutas.
- **Fallback ES en `loader`** de EN/ZH: ahora el glob incluye `es/` para fallback correcto.
- **Home ZH** mostraba artículos ES: filtrado por locale.
- **Listados EN/ZH** mostraban duplicados ES: filtrado por locale.
- **89 errores de `astro check`** → **0 errores** (implícitos `any`, spreads, `Date` vs `number`, claves i18n faltantes).
- **`ia` → `IA`** en tags (respeto de mayúsculas).
- **Bernardo Muñoz Aguilar** ya no aparece en `/expertos` (pero sí en sus artículos).
- **`astro-compress` `SyntaxError`** en build: integración eliminada (Vercel comprime en el edge).

### 🗑️ Eliminado

- **Blog muerto del template AstroWind** (-1.657 líneas):
  - `src/utils/blog.ts`, `src/components/blog/*`, `src/components/widgets/BlogLatestPosts.astro`, `BlogHighlightedPosts.astro`, `src/pages/homes/*.astro`.
  - Colección `blog` renombrada a `post` en `content.config.ts`.
- **`astro-compress`** (integración + dependencia): bug de `SyntaxError` en build.
- **`astro.config.ts.bak`**.
- **Imágenes obsoletas**: `e492e6248931655.69fc73ca28733.webp`.

### ⚡ Rendimiento

- **3 imágenes a WebP** (-11.3 MB):
  - `Sarayaku-scaled.webp` (576 KB → 339 KB)
  - `adobestock-100814404-1280x800.webp` (297 KB → 239 KB)
  - `e492e6248931655.69fc73ca28733.webp` (11.6 MB → 591 KB, redimensionada a 2000px)
- **`solar_panels.webp`**: imagen de portada del ensayo de transición energética.
- **Node 24** (`.nvmrc` + `engines.node` en `package.json`): compatible con Vercel Serverless Functions.

### 🔒 SEO

- **`hreflang`** en `<head>` de todas las páginas: `es`, `en`, `zh-Hans`, `x-default`.
- **Redirecciones 301** de slugs ES a slugs traducidos (EN/ZH).
- **Sitemap** actualizado con las nuevas rutas.

### 📊 Estado técnico

- **`astro check`**: 0 errors, 0 warnings.
- **Build**: `Complete!` sin `SyntaxError`.
- **Commits**: 33 en esta versión.
- **Tests manuales**: i18n verificado en producción, hreflang verificado, redirecciones verificadas.

### 🙏 Créditos

- **Autores del ensayo**: Lautaro E. Pittier & Nahuel A. Bento.
- **Equipo**: Benyi Barros Rojas (Coordinador de Asuntos Externos), Joaquín Vigueras, Valentina Cid A., Danna Mena N., y el resto del equipo.
- **Colaboradores**: Nicolás H. Pinzón, Bernardo Muñoz Aguilar (autores), y todos los que aportaron en esta versión.

---

## [v2.0.0-popocatepetl] — 2026-10-XX

Primera iteración del volcán. Versión inicial del rediseño y la arquitectura trilingüe.

- Rediseño completo del sitio.
- Arquitectura i18n ES/EN/ZH.
- Secciones: Análisis, Comentarios, Monitor, Expertos, Topics.
- Integración con Vercel.
- Migración a Astro 7.

---

## [v1.0.0] — 2026-08-XX

Versión inicial del sitio.

- Estructura base.
- Contenido inicial.
- Primeros artículos y comentarios.

---

**Formato**: [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).
**Versionado**: [SemVer](https://semver.org/lang/es/).
