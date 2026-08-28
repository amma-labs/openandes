import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      href: getPermalink('/enfoques'),
    },
    {
      text: 'Expertos',
      href: getPermalink('/expertos'),
    },
    {
      text: 'Advisory',
      links: [
        { text: 'Inteligencia', href: getPermalink('/inteligencia') },
        { text: 'Estrategia', href: getPermalink('/estrategia') },
        { text: 'Monitor Latam-Asia', href: getPermalink('/monitor') },
      ],
    },
    {
      text: 'Análisis',
      href: getPermalink('/analisis'),
    },
    {
      text: 'Blogs',
      href: getPermalink('/blogs'),
    },
    {
      text: 'Eventos',
      href: getPermalink('/eventos'),
    },
  ],
};

export const footerData = {};
