// src/i18n/en.ts
import type { UIStrings } from './es';

export const en = {
  meta: {
    siteName: 'Open Andes',
    siteTagline: 'The first decentralized, 100% digital think tank.',
    siteDescription:
      'Independent research dedicated to geopolitical intelligence and geoeconomic foresight across the Latin America–Asia axis.',
    ogLocale: 'en_US',
  },
  nav: {
    about: 'About',
    experts: 'Experts',
    advisory: 'Advisory',
    research: 'Research',
    analysis: 'Analysis',
    commentary: 'Commentary',
    events: 'Events',
    ariaLabel: 'Main navigation',
  },
  langSwitcher: {
    label: 'Language',
    ariaLabel: 'Change language',
    es: 'Español',
    en: 'English',
    zh: '简体中文',
  },
  common: {
    readMore: 'Read more',
    readReport: 'Read report',
    downloadPdf: 'Download PDF',
    share: 'Share',
    relatedPosts: 'Related content',
    minRead: 'min read',
    publishedOn: 'Published on',
    updatedOn: 'Updated on',
    backTo: 'Back to',
    loading: 'Loading…',
    skipToContent: 'Skip to content',
    translationPending: 'Translation coming soon',
    availableIn: 'Available in',
  },
  footer: {
    newsletterCta: 'Subscribe to our newsletter',
    newsletterPlaceholder: 'you@email.com',
    newsletterButton: 'Send',
    newsletterSending: 'Sending…',
    newsletterNoSpam: 'No spam. Unsubscribe anytime.',
    newsletterSuccess: 'Subscription successful!',
    newsletterAlreadySubscribed: 'This email is already subscribed.',
    newsletterInvalid: 'Please enter a valid email.',
    newsletterError: 'Subscription failed.',
    newsletterConnectionError: 'Connection error. Please try again.',
    coordinationLabel: 'Regional Coordination:',
    coordinationCities: 'Santiago, Chile · Lima, Peru',
    missionStatement:
      'By looking at the past and the future, we walk with confidence in the present. We are a modular node for risk analysis, geoeconomic trends, and foresight scenarios across the Americas. We articulate critical knowledge to anticipate change and enable confident decisions.',
    copyright: '© 2026 OPEN ANDES. All rights reserved.',
    labCredit: '2050 LAB · FunPolitik',
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
    rss: 'RSS',
    contactEmail: 'contact@openandes.org',
    ariaLinkedIn: 'Open Andes on LinkedIn',
    ariaInstagram: 'Open Andes on Instagram',
  },
  report: {
    typeInforme: 'REPORT',
    typeAnalisis: 'ANALYSIS',
    typeMirada: 'EXPERT VIEW',
    researchLeaders: 'Research leads',
    associateResearchers: 'Associate researchers',
    program: 'Program',
    author: 'Author',
    tableOfContents: 'Contents',
    citeThis: 'How to cite this document',
  },
  about: {
    title: 'About',
    description: 'Who we are and how we work.',
  },
  team: {
    title: 'Team',
    description: 'Researchers and collaborators at Open Andes.',
  },
  experts: {
    title: 'Experts',
    description: 'Network of specialists in geopolitics, geofinance, and logistics.',
  },

  pages: {
    monitor: {
      metaTitle: 'LatAm-Asia Research — OpenAndes',
      tagline: 'Research',
      heroTitle: 'LatAm-Asia',
      heroDesc:
        'is an applied research initiative by Open Andes dedicated to the geoeconomic, logistical, and financial analysis of relations between Latin America and the Indo-Pacific Basin.',
      previousReports: 'Previous reports',
      emptyState: 'No publications yet.',
    },
    notFound: {
      metaTitle: 'Error 404',
      sorry: "Sorry, we couldn't find this page.",
      butDontWorry: "But don't worry, you can find plenty of other things on our homepage.",
      backToHome: 'Back to homepage',
    },
    eventos: {
      metaTitle: 'Events — OpenAndes',
      tagline: 'Events & Encounters',
      heroTitle: 'Dialogues, Foresight and Geopolitics in Action',
      heroSubtitle:
        'A consolidated record of sessions, working tables and seminars organized by FunPolitik and 2050 Futures Lab through Luma.',
      ctaAgendaFunPolitik: 'FunPolitik Agenda',
      ctaAgenda2050Lab: '2050 Lab Agenda',
      statsTitle: 'Historic Figures of Encounters',
      statsSubtitle:
        'Cumulative results of the 2025-2026 event cycle. The session history is articulated across two major analytical branches to understand the present and anticipate the future.',
      statEvents: 'Events Held',
      statLabs: 'Laboratories (FunPolitik + 2050 Lab)',
      statManagement: 'Luma Management',
      contentGeopoliticsTitle: 'Geopolitics and the International System',
      contentGeopoliticsDesc:
        'Critical analysis of US-China competition, the tech war, dynamics in Southeast Asia, the Middle East, and foreign policy in Latin America.',
      contentTrainingTitle: 'Culture, Training and Capabilities',
      contentTrainingDesc:
        'Continuous training sessions, Mandarin Chinese learning, preparation for the diplomatic career (MFA), and capacity transfer.',
      funPolitikTitle: 'FunPolitik',
      funPolitikDesc:
        'Focus on international relations, applied geopolitics, and strategic analysis of the international system.',
      lab2050Title: '2050 Futures Lab',
      lab2050Desc:
        'Spaces for foresight thinking, scenario design, and exploration of technological frontiers.',
      contentForesightTitle: 'Foresight and Future Design',
      contentForesightDesc:
        'Exploration of emerging technologies, the impact of the State versus AI, the end of work, future cities, and visual narratives of power.',
      contentInnovationTitle: 'Peripheral Innovation and Autonomy',
      contentInnovationDesc:
        'Protopian routes, regional talent analysis, and conceptual frameworks to strengthen the collective presence of the Global South.',
      faqsTitle: 'Frequently Asked Questions about the Sessions',
      faq1Title: 'Where are registrations managed?',
      faq1Desc:
        'All events are registered and managed centrally through the Luma platform.',
      faq2Title: 'Are sessions recorded or public?',
      faq2Desc:
        'Most open webinars include executive summaries and inputs that feed the research articles.',
      faq3Title: 'How can I propose a session or co-organize an event?',
      faq3Desc:
        'Through our contact form or by participating directly in the dynamics of the Fellows & Strategists network.',
      ctaTitle: 'Join the Upcoming Encounters',
      ctaSubtitle:
        'Subscribe to our Luma communities to receive invitations to upcoming workshops, talks, and webinars.',
    },
  },
} satisfies UIStrings;
