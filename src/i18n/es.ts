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

  // ─── Páginas estáticas ───
  home: {
    metaTitle: 'OPEN ANDES — El primer think tank descentralizado y 100% digital.',
    metaDesc: 'Investigación independiente dedicada a la inteligencia geopolítica y la prospectiva geoeconómica en el eje América Latina-Asia.',
    commentsBriefsTitle: 'Comentarios & Briefs',
    miradas2050: 'Miradas 2050',
    reportBadge: 'INFORME #2',
    researchBadge: 'Investigación',
    analysisBadge: 'Análisis',
    miradasBadge: 'Miradas',
    noTitle: 'Sin título',
    articleFallback: 'Artículo',
    titleFallback: 'Título',
    radarTitle: 'Pulso',
    categoryFallback: 'Análisis',
    readMore: 'Leer más',
    mainAnalysisAlt: 'Análisis Principal',
  },

  pages: {
    monitor: {
      metaTitle: 'Investigación LatAm-Asia — OpenAndes',
      tagline: 'Investigación',
      heroTitle: 'LatAm-Asia',
      heroDesc:
        'es una iniciativa de investigación aplicada de Open Andes dedicada al análisis geoeconómico, logístico y financiero de las relaciones entre América Latina y la Cuenca del Indo-Pacífico.',
      previousReports: 'Informes anteriores',
      emptyState: 'No hay publicaciones aún.',
    },
    notFound: {
      metaTitle: 'Error 404',
      sorry: 'Lo sentimos, no encontramos esta página.',
      butDontWorry:
        'Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.',
      backToHome: 'Volver al inicio',
    },
    analisis: {
      metaTitle: 'Análisis — OpenAndes',
      metaDesc: 'Análisis estratégico y geopolítica aplicada bajo la metodología Narrative-Driven Analysis (NDA).',
      heroBadge: 'Open Andes',
      heroTitle: 'Análisis',
      heroDesc: 'Lecturas para la toma de decisiones. Investigaciones y ensayos orientados para exponer las inercias de poder que condicionan el desarrollo regional.',
      emptyState: 'No hay publicaciones aún.',
      categoryFallback: 'Análisis',
      noTitle: 'Sin título',
      articleFallback: 'Artículo',
    },
    topics: {
      metaTitle: 'Tema — Open Andes',
      metaDesc: 'Análisis y miradas expertas etiquetados con este tema en Open Andes.',
      backToHome: 'Volver al inicio',
      resultsSingular: 'resultado',
      resultsPlural: 'resultados',
      emptyState: 'No hay contenido con este tag.',
      typeAnalisis: 'Análisis',
      typeMiradas: 'Miradas 2050',
    },
    miradas: {
      metaTitle: 'Comentarios — Open Andes',
      metaDesc: 'Perspectivas de coyuntura y columnas sobre los cambios en el poder, el capital y la geopolítica en toda América.',
      heroBadge: 'Open Andes',
      heroTitle: 'Comentarios',
      heroDesc: 'Perspectivas de coyuntura y columnas sobre los cambios en el poder, el capital y la geopolítica en toda América.',
      emptyState: 'No hay publicaciones aún.',
      articleFallback: 'Artículo',
      noTitle: 'Sin título',
      miradasBadge: 'Miradas 2050',
      platformsTitle: 'Plataformas asociadas',
      platformsDesc: 'Espacios editoriales donde Open Andes publica análisis coyuntural y prospectiva de largo plazo.',
    },
    eventos: {
      metaTitle: 'Eventos — OpenAndes',
      tagline: 'Eventos & Encuentros',
      heroTitle: 'Diálogos, Prospectiva y Geopolítica en Acción',
      heroSubtitle:
        'Consolidado de sesiones, mesas de trabajo y seminarios organizados por FunPolitik y 2050 Futures Lab a través de Luma.',
      ctaAgendaFunPolitik: 'Agenda FunPolitik',
      ctaAgenda2050Lab: 'Agenda 2050 Lab',
      statsTitle: 'Cifras del Histórico de Encuentros',
      statsSubtitle:
        'Resultados acumulados del ciclo de eventos 2025-2026. El historial de sesiones se articula en dos grandes vertientes analíticas para comprender el presente y anticipar el futuro.',
      statEvents: 'Eventos Realizados',
      statLabs: 'Laboratorios (FunPolitik + 2050 Lab)',
      statManagement: 'Gestión en Luma',
      contentGeopoliticsTitle: 'Geopolítica y Sistema Internacional',
      contentGeopoliticsDesc:
        'Análisis crítico de la competencia China-EE.UU., guerra tecnológica, dinámicas en el Sudeste Asiático, Oriente Medio y la política exterior en América Latina.',
      contentTrainingTitle: 'Cultura, Formación y Capacidades',
      contentTrainingDesc:
        'Sesiones de formación continua, aprendizaje de Chino Mandarín, preparación para la carrera diplomática (MRE) y transferencia de capacidades.',
      funPolitikTitle: 'FunPolitik',
      funPolitikDesc:
        'Enfoque en relaciones internacionales, geopolítica aplicada y análisis estratégico del sistema internacional.',
      lab2050Title: '2050 Futures Lab',
      lab2050Desc:
        'Espacios de pensamiento prospectivo, diseño de escenarios y exploración de fronteras tecnológicas.',
      contentForesightTitle: 'Prospectiva y Diseños de Futuro',
      contentForesightDesc:
        'Exploración de tecnologías emergentes, el impacto del Estado frente a la IA, el fin del trabajo, ciudades del futuro y narrativas visuales de poder.',
      contentInnovationTitle: 'Innovación Periférica y Autonomía',
      contentInnovationDesc:
        'Rutas protopianas, análisis de talento regional y marcos conceptuales para fortalecer la presencia colectiva del Sur Global.',
      faqsTitle: 'Preguntas Frecuentes sobre las Sesiones',
      faq1Title: '¿Dónde se gestionan las inscripciones?',
      faq1Desc:
        'Todos los eventos se registran y gestionan de forma centralizada a través de la plataforma Luma.',
      faq2Title: '¿Las sesiones son grabadas o públicas?',
      faq2Desc:
        'La mayoría de webinars abiertos cuentan con resúmenes ejecutivos e insumos que alimentan los artículos de investigación.',
      faq3Title: '¿Cómo puedo proponer una sesión o co-organizar un evento?',
      faq3Desc:
        'A través de nuestro formulario de contacto o participando directamente en las dinámicas de la red de Fellows & Strategists.',
      ctaTitle: 'Participa en los Próximos Encuentros',
      ctaSubtitle:
        'Suscríbete a nuestras comunidades en Luma para recibir invitaciones a los siguientes talleres, charlas y webinars.',
    },
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
