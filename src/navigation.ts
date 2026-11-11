// src/navigation.ts
// Navegación derivada del diccionario i18n (fuente única: src/i18n/es.ts).
// Se exporta como funciones para que el layout pase el `lang` actual.
import { getPermalink } from './utils/permalinks';
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

/** Menú principal por idioma. Orden y href idénticos en los 3. */
export function headerData(lang: Lang = 'es'): HeaderData {
  const t = useTranslations(lang);
  return {
    links: [
      { text: t.nav.about, href: getPermalink('/about') },
      { text: t.nav.experts, href: getPermalink('/expertos') },
      { text: t.nav.advisory, href: getPermalink('/estrategia') },
      { text: t.nav.research, href: getPermalink('/monitor') },
      { text: t.nav.analysis, href: getPermalink('/analisis') },
      { text: t.nav.commentary, href: getPermalink('/miradas') },
      { text: t.nav.events, href: getPermalink('/eventos') },
    ],
  };
}

/** Placeholder para futuras columnas de footer. */
export function footerData(_lang: Lang = 'es'): FooterData {
  return {};
}
