import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      href: getPermalink('/about'),
    },
    {
      text: 'Expertos',
      href: getPermalink('/expertos'),
    },
    {
      text: 'Asesoría',
      href: getPermalink('/estrategia'),
    },
    {
      text: 'Investigación',
      href: getPermalink('/monitor'),
    },
    {
      text: 'Análisis',
      href: getPermalink('/analisis'),
    },
    {
      text: 'Comentarios',
      href: getPermalink('/miradas'),
    },
    {
      text: 'Eventos',
      href: getPermalink('/eventos'),
    },
  ],
};

export const footerData = {};
