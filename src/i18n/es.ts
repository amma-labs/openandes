// src/i18n/es.ts
// Fuente de verdad de todas las cadenas de UI en español.
// EN y ZH se tipan contra este archivo: si falta una clave, `astro check` falla.

export const es = {
  meta: {
    siteName: 'Open Andes',
    siteTagline: 'El primer think tank descentralizado y 100% digital.',
    siteDescription:
      'Investigación independiente dedicada a la inteligencia geopolítica y la prospectiva geoeconómica en el eje América Latina-Asia.',
    ogLocale: 'es_CL',
  },
  nav: {
    about: 'Nosotros',
    experts: 'Expertos',
    advisory: 'Asesoría',
    research: 'Investigación',
    analysis: 'Análisis',
    commentary: 'Comentarios',
    events: 'Eventos',
    ariaLabel: 'Navegación principal',
  },
  langSwitcher: {
    label: 'Idioma',
    ariaLabel: 'Cambiar idioma',
    es: 'Español',
    en: 'English',
    zh: '简体中文',
  },
  common: {
    readMore: 'Leer más',
    readReport: 'Leer informe',
    downloadPdf: 'Descargar PDF',
    share: 'Compartir',
    relatedPosts: 'Contenido relacionado',
    minRead: 'min de lectura',
    publishedOn: 'Publicado el',
    updatedOn: 'Actualizado el',
    backTo: 'Volver a',
    loading: 'Cargando…',
    skipToContent: 'Saltar al contenido',
    translationPending: 'Traducción próximamente',
    availableIn: 'Disponible en',
  },
  footer: {
    newsletterCta: 'Suscríbete a nuestro newsletter',
    newsletterPlaceholder: 'tu@email.com',
    newsletterButton: 'Enviar',
    newsletterSending: 'Enviando…',
    newsletterNoSpam: 'Sin spam. Puedes darte de baja cuando quieras.',
    newsletterSuccess: '¡Suscripción exitosa!',
    newsletterAlreadySubscribed: 'Este email ya está suscrito.',
    newsletterInvalid: 'Por favor, ingresa un email válido.',
    newsletterError: 'Error al suscribir.',
    newsletterConnectionError: 'Error de conexión. Intenta de nuevo.',
    coordinationLabel: 'Coordinación Regional:',
    coordinationCities: 'Santiago, Chile · Lima, Perú',
    missionStatement:
      'Si miramos el pasado y el futuro, caminaremos con confianza en el presente. Somos un nodo modular de análisis de riesgos, tendencias geoeconómicas, y escenarios prospectivos de toda América. Articulamos conocimiento crítico para anticipar el cambio y tomar decisiones con certidumbre.',
    copyright: '© 2026 OPEN ANDES. Todos los derechos reservados.',
    labCredit: '2050 LAB · FunPolitik',
    privacy: 'Privacidad',
    terms: 'Términos',
    cookies: 'Cookies',
    rss: 'RSS',
    contactEmail: 'contacto@openandes.org',
    ariaLinkedIn: 'Open Andes en LinkedIn',
    ariaInstagram: 'Open Andes en Instagram',
  },
  report: {
    typeInforme: 'INFORME',
    typeAnalisis: 'ANÁLISIS',
    typeMirada: 'MIRADA EXPERTA',
    researchLeaders: 'Líderes de investigación',
    associateResearchers: 'Investigadores asociados',
    program: 'Programa',
    author: 'Autor',
    tableOfContents: 'Contenido',
    citeThis: 'Cómo citar este documento',
  },
  about: {
    title: 'Nosotros',
    description: 'Quiénes somos y cómo trabajamos.',
  },
  team: {
    title: 'Equipo',
    description: 'Investigadores y colaboradores de Open Andes.',
  },
  experts: {
    title: 'Expertos',
    description: 'Red de especialistas en geopolítica, geofinanza y logística.',
  },
};


// Convierte recursivamente todos los tipos literales en sus tipos amplios
// (`'Nosotros'` → `string`). Así EN y ZH pueden tener cualquier traducción
// sin que TS exija el mismo literal que en ES.
type DeepWiden<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? DeepWiden<U>[]
        : { [K in keyof T]: DeepWiden<T[K]> };

export type UIStrings = DeepWiden<typeof es>;
