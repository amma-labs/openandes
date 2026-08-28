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
      links: [
        { text: 'Perspectivas', href: getBlogPermalink() },
        { text: 'FunPolitik', href: 'https://funpolitik.substack.com', target: '_blank' },
        { text: 'Futures Lab', href: 'https://2050lab.org', target: '_blank' },
      ],
    },
    {
      text: 'Eventos',
      href: getPermalink('/eventos'),
    },
  ],
};

export const footerData = {};
