// src/i18n/ui.ts
import { es, type UIStrings } from './es';
import { en } from './en';
import { zh } from './zh';

export const languages = {
  es: 'Español',
  en: 'English',
  zh: '简体中文',
} as const;

export const defaultLang = 'es' as const;
export type Lang = keyof typeof languages;

export const ui: Record<Lang, UIStrings> = { es, en, zh };

/** Devuelve el diccionario del idioma indicado (fallback a `es`). */
export function useTranslations(lang: Lang | undefined): UIStrings {
  return ui[lang ?? defaultLang] ?? ui[defaultLang];
}

/**
 * Extrae el idioma desde una URL.
 * Respeta `prefixDefaultLocale: false` (raíz = es; /en = en; /zh = zh).
 */
export function getLangFromUrl(url: URL | { currentLocale?: string; url?: URL }): Lang {
  // 1) Astro.currentLocale (lo más fiable en output static + fallbackType rewrite)
  if (typeof url === 'object' && url !== null && 'currentLocale' in url && url.currentLocale) {
    if (url.currentLocale === 'en' || url.currentLocale === 'zh') return url.currentLocale;
    if (url.currentLocale === 'es') return 'es';
  }
  // 2) Fallback: parsear la URL
  const u = url instanceof URL ? url : url.url;
  if (u) {
    const [, first] = u.pathname.split('/');
    if (first === 'en' || first === 'zh') return first;
  }
  return defaultLang;
}

/**
 * Convierte una ruta al idioma destino preservando el path.
 *   /analisis/x       + 'en' → /en/analisis/x
 *   /en/analisis/x    + 'es' → /analisis/x
 *   /zh/analisis/x    + 'en' → /en/analisis/x
 */
export function getLocalizedPath(pathname: string, target: Lang): string {
  const stripped = pathname.replace(/^\/(en|zh)(?=\/|$)/, '') || '/';
  if (target === defaultLang) return stripped;
  return `/${target}${stripped === '/' ? '/' : stripped}`;
}

/** Ruta absoluta al home del idioma dado. */
export function getLocalizedHome(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
