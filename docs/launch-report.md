# Open Andes v2.0 'Popocatépetl' — Reporte de lanzamiento

**Fecha:** 13 de noviembre de 2026
**Versión:** v2.0.0
**Tag:** `v2.0.0-popocatepetl`
**Commit:** `61901ad`
**Predecesor:** v1.0.0 'Aconcagua'

---

## 1. Resumen ejecutivo

Open Andes v2.0 'Popocatépetl' marca el hito del **sitio trilingüe completo** (ES/EN/ZH). Sucesor de v1.0 'Aconcagua' (sitio ES funcional), esta versión traduce la totalidad del contenido editorial y las páginas estáticas, implementa un sistema de localización precompilada nativo de Astro, y establece un pipeline automatizado de traducción para futuros contenidos.

**Logros principales:**
- **100% del sitio traducido** a ES/EN/ZH (excepto contenido nuevo que se añada después del lanzamiento).
- **Tema automático** según el sistema operativo (sin toggle manual).
- **Fechas dinámicas** por locale (oct / Oct / 2026年10月13日).
- **`/estrategia` integrado en `/about`** (página unificada con misión, visión, pilares, ecosistema, servicios, briefing y CTA).
- **Pipeline de traducción** con DeepSeek API (~$0.30 total).
- **Selector de idioma funcional** en desktop y móvil.

---

## 2. Linaje de lanzamientos

| Versión | Nombre | Fecha | Hito |
|---|---|---|---|
| v1.0.0 | **Aconcagua** | (histórico) | Lanzamiento oficial (sitio ES funcional) |
| v2.0.0 | **Popocatépetl** | 13 nov 2026 | **Sitio trilingüe ES/EN/ZH** |

**Convención:** picos/volcanes de América. Aconcagua (6.893 m, Argentina) → Popocatépetl (5.426 m, México). El más alto de América → el volcán más icónico de Norteamérica.

---

## 3. Estado del sitio (100% trilingüe)

| Página | ES | EN | ZH | Notas |
|---|---|---|---|---|
| Home | ✅ | ✅ | ✅ | Título del reporte, fechas, "Comentarios & Briefs" traducidos |
| About (unificado) | ✅ | ✅ | ✅ | Misión, visión, pilares, ecosistema, servicios, briefing, CTA |
| ~~Estrategia~~ | → `/about` | → `/about` | → `/about` | Redirect 301 |
| Eventos | ✅ | ✅ | ✅ | |
| Monitor (listado) | ✅ | ✅ | ✅ | Filtro por `data.lang` |
| Análisis (listado) | ✅ | ✅ | ✅ | |
| Miradas (listado) | ✅ | ✅ | ✅ | "Plataformas asociadas" traducido |
| Expertos (listado) | ✅ | ✅ | ✅ | 18 perfiles × 3 idiomas (JSON) |
| Topics | ✅ | ✅ | ✅ | Filtro por locale |
| 404 | ✅ | ✅ | ✅ | |
| Reportes (2) | ✅ | ✅ | ✅ | `translationKey` + `lang` |
| Blog (9) | ✅ | ✅ | ✅ | |
| Miradas expertas (6) | ✅ | ✅ | ✅ | |
| Header/Footer/UI | ✅ | ✅ | ✅ | Selector de idioma, menú, logo |
| Tema automático | ✅ | ✅ | ✅ | Sigue al sistema operativo |
| Fechas | ✅ | ✅ | ✅ | oct / Oct / 2026年10月13日 |

**Total: ~60 páginas traducidas.**

---

## 4. Arquitectura técnica

### 4.1 Infraestructura i18n
- **Astro i18n nativo** (`astro.config.ts`):
  - `defaultLocale: 'es'`
  - `locales: ['es', 'en', 'zh']`
  - `prefixDefaultLocale: false` (ES sin prefijo, EN/ZH con `/en/` y `/zh/`)
  - `fallbackType: 'rewrite'` (fallback a ES sin redirect)
- **Diccionarios tipados** (`src/i18n/{ui,es,en,zh}.ts`):
  - `DeepWiden` para enforcar completitud (si falta una clave en EN/ZH, `astro check` falla)
  - `getLangFromUrl(Astro)` usa `Astro.currentLocale` (rewrite-safe)
  - `getLocalizedPath(path, lang)` para construir rutas con prefijo

### 4.2 Contenido editorial
- **Reportes:** `src/content/reports/{es,en,zh}/` con `translationKey` + `lang`
- **Blog:** `src/data/post/{es,en,zh}/`
- **Miradas:** `src/data/mirada-experta/{es,en,zh}/`
- **Páginas estáticas:** `src/data/{about,estrategia,experts}/{es,en,zh}.json`
- **Diccionarios UI:** `src/i18n/{es,en,zh}.ts`

### 4.3 Pipeline de traducción
- **Script:** `scripts/translate-content.mjs` (en `.gitignore`, no versionado)
- **API:** DeepSeek (`deepseek-chat`)
- **Costo total:** ~$0.30 USD (51 traducciones: 2 reportes + 9 blog + 6 miradas + 6 JSON)
- **Glosario editorial:** `docs/translation-prompt.md`
- **Checklist QA:** `docs/translation-qa-checklist.md`

### 4.4 Tema automático
- **`ApplyColorMode.astro`** reescrito:
  - Ignora `localStorage.theme` (elección vieja del toggle eliminado)
  - Sigue siempre a `prefers-color-scheme`
  - Escucha cambios en tiempo real (cuando el iPhone cambia de claro a oscuro)
  - Limpia `localStorage.theme` al cargar

### 4.5 Selector de idioma
- **Desktop:** dropdown con `<a href>` + `data-astro-reload` (visible en `xl:`)
- **Móvil:** dropdown junto a la hamburguesa (visible siempre)
- **Sin duplicados:** el bloque de desktop se oculta en móvil con JS
- **Menú y logo:** mantienen el locale al navegar

---

## 5. Fixes aplicados durante el lanzamiento

| Fix | Descripción |
|---|---|
| **Selector de idioma móvil** | Eliminado del menú hamburguesa, movido junto a la hamburguesa |
| **Tema automático** | `ApplyColorMode.astro` reescrito (sigue al sistema, escucha cambios) |
| **Fechas dinámicas** | Reemplazado `'es-ES'` hardcodeado por locale dinámico en 14 sitios |
| **Título del reporte en home** | `mainReport.data.title` (traducido en `.mdx`) en lugar de hardcodeado |
| **Home 100% traducida** | `t.home.*` (15 claves) para "Comentarios & Briefs", "Miradas 2050", etc. |
| **`/miradas` 100% traducida** | `t.pages.miradas.*` (11 claves) |
| **`/analisis`, `/monitor`, `/topics`** | `t.pages.{analisis,monitor,topics}.*` |
| **`/estrategia` → `/about`** | Redirect 301 + `about.astro` unificado |
| **`astro.config.ts`** | Restaurado `compress({...})` + instalado `astro-compress` |
| **`LastPosts`, `RadarWidget`, `topics`** | Añadido `const locale` (error `locale is not defined`) |

---

## 6. Backlog post-v2.0 (half-cycle / 6 meses)

### Alta prioridad
1. **`src/utils/blog.ts`** — 86 errores preexistentes (`getCollection('post')` → `'blog'`).
2. **`astro-compress` SyntaxError** con bundle ESM de Vercel (`SyntaxError: Unexpected token '<'`).
3. **Warnings `z deprecated`** en `content.config.ts` (importar `z` desde `astro/zod`).
4. **GitHub Action** de traducción automática para `.mdx` nuevos (cero intervención manual).

### Media prioridad
5. **Limpieza de boilerplate Astrowind** (`homes/`, `landing/`, `pricing.astro`, `services.astro`, widgets sin usar).
6. **`config.yaml` `i18n.language`** — sigue hardcodeado a `es` (aunque ya no lo usa `Layout.astro`).
7. **Slugs semánticos por idioma** (hoy son iguales en los 3).
8. **Revisión editorial spot-check** de las 51 traducciones.

### Baja prioridad
9. **Instagram token + feed de Substack** (warnings en cada build).
10. **`/expertos`** — revisar si el listado tiene textos hardcodeados residuales.
11. **`/eventos`** — revisar si el listado tiene textos hardcodeados residuales.

---

## 7. Seguridad

- **API key de DeepSeek:** revocada el 13 nov 2026 (después de completar las traducciones).
- **`.env.local`:** en `.gitignore`, no versionado.
- **`scripts/`:** en `.gitignore` (one-shot scripts, no versionados).

---

## 8. Notas para el próximo ciclo

- **Contenido nuevo:** cada vez que se publique un `.mdx` nuevo en `es/`, hay que traducirlo manualmente (o con el script `translate-content.mjs`) a `en/` y `zh/`.
- **GitHub Action:** la prioridad #4 (automatizar la traducción) eliminaría este trabajo manual.
- **`about.astro`:** ya está unificado y traducido. Si se añade contenido nuevo, actualizar los 3 JSON.
- **Tema automático:** si en el futuro se quiere un toggle manual, hay que revertir `ApplyColorMode.astro` y añadir el `ToggleTheme` de vuelta.

---

**Open Andes v2.0 'Popocatépetl' — Think tank trilingüe en producción.** 🌋🚀
