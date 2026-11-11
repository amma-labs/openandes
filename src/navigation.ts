// src/navigation.ts
// Navegación derivada del diccionario i18n (fuente única: src/i18n/es.ts).
// Los href se construyen con el prefijo de locale correcto.
import { useTranslations, type Lang } from './i18n/ui';

export interface MenuLink {
  text: string;
  href: string;
  links?: MenuLink[];
}

export interface HeaderData {
  links: MenuLink[];
}

export interface FooterData {
  // reservado para futuras columnas de footer; hoy el Footer lee i18n directo
}

/** Construye la ruta con el prefijo de locale (ES = sin prefijo). */
function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'es' ? clean : `/${lang}${clean}`;
}

/** Menú principal por idioma. */
export function headerData(lang: Lang = 'es'): HeaderData {
  const t = useTranslations(lang);
  return {
    links: [
      { text: t.nav.about, href: localizedPath('/about', lang) },
      { text: t.nav.experts, href: localizedPath('/expertos', lang) },
      { text: t.nav.advisory, href: localizedPath('/estrategia', lang) },
      { text: t.nav.research, href: localizedPath('/monitor', lang) },
      { text: t.nav.analysis, href: localizedPath('/analisis', lang) },
      { text: t.nav.commentary, href: localizedPath('/miradas', lang) },
      { text: t.nav.events, href: localizedPath('/eventos', lang) },
    ],
  };
}

/** Placeholder para futuras columnas de footer. */
export function footerData(_lang: Lang = 'es'): FooterData {
  return {};
}
