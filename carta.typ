#set page(
  paper: "a4",
  margin: (top: 2.5cm, bottom: 2.5cm, left: 2.5cm, right: 2.5cm),
  header: align(right)[
    #text(size: 8pt, fill: rgb("#64748b"), font: "Montserrat")[
      OPEN ANDES --- Comunicación Institucional
    ]
  ],
  footer: [
    #line(length: 100%, stroke: 0.5pt + rgb("#e2e8f0"))
    #set text(size: 8pt, fill: rgb("#64748b"), font: "Montserrat")
    #grid(
      columns: (1fr, 1fr),
      align(left)[Open Andes --- Dirección Ejecutiva],
      align(right)[openandes.org]
    )
  ]
)

#set text(
  font: "Montserrat",
  size: 10.5pt,
  fill: rgb("#334155"),
  spacing: 120%,
  lang: "es"
)

#set par(justify: true, leading: 0.75em)

// Header / Branding
#grid(
  columns: (1fr, auto),
  align: (left + bottom, right + bottom),
  [
    #text(font: "Fraunces", size: 22pt, weight: "bold", fill: rgb("#0f172a"))[OPEN ]
    #text(font: "Fraunces", size: 22pt, weight: "bold", fill: rgb("#0284c7"))[ANDES]
  ],
  [
    #text(font: "Montserrat", size: 8pt, weight: "medium", fill: rgb("#64748b"))[
      ANÁLISIS ESTRATÉGICO LATAM -- ASIA-PACÍFICO
    ]
  ]
)
#v(-4pt)
#line(length: 100%, stroke: 1.5pt + rgb("#0f172a"))
#v(16pt)

// Metadata
#grid(
  columns: (1fr, 1fr),
  align(left)[
    #text(size: 9pt, fill: rgb("#475569"))[Santiago, Chile]
  ],
  align(right)[
    #text(size: 9pt, fill: rgb("#475569"))[Ref: Invitación Programa Investigador Visitante]
  ]
)

#v(18pt)

// Recipient
#block[
  #text(weight: "bold", fill: rgb("#0f172a"))[Estimado/a [Nombre del/de la Especialista]]

  #text(fill: rgb("#475569"))[[Institución o Filiación del Investigador]]

  #text(fill: rgb("#475569"))[[Correo Electrónico]]
]

#v(14pt)

// Subject Line
#rect(
  width: 100%,
  fill: rgb("#f1f5f9"),
  stroke: (left: 3pt + rgb("#0284c7")),
  inset: (x: 10pt, y: 8pt)
)[
  #text(font: "Montserrat", weight: "bold", size: 10pt, fill: rgb("#0f172a"))[
    ASUNTO: Invitación a incorporarse como Investigador/a Visitante en Open Andes
  ]
]

#v(12pt)

// Letter Body
A nombre de la Dirección Ejecutiva de Open Andes, tengo el agrado de extenderle una cordial invitación para sumarse a nuestro centro como Investigador/a Visitante.

Open Andes impulsa el análisis estratégico y la investigación empírica en torno a la reconfiguración de las relaciones geopolíticas, las cadenas críticas de suministro, la geofinanza y los corredores logísticos entre América Latina y la región Asia-Pacífico. Reconocemos su valorada trayectoria y especialización en [Área o Temática del Investigador], y estamos convencidos de que su vinculación aportará una valiosa densidad analítica y rigor a nuestros programas de investigación.

#v(6pt)

// Details Box
#rect(
  width: 100%,
  fill: rgb("#fafafa"),
  stroke: 0.5pt + rgb("#cbd5e1"),
  radius: 2pt,
  inset: 12pt
)[
  #text(font: "Fraunces", weight: "bold", size: 10pt, fill: rgb("#0f172a"))[
    TÉRMINOS DE LA COLABORACIÓN
  ]
  #v(4pt)

  Rol: Investigador/a Visitante (Visiting Fellow).

  Duración: [3 a 6 meses / Duración del informe o proyecto específico].

  Alcance: Elaboración de entregables analíticos específicos o participación focalizada en un informe de monitoreo estratégico.

  Modalidad: Trabajo remoto / híbrido acotado a la vigencia del proyecto.
]

#v(6pt)

Esta modalidad está concebida para integrar temporalmente a perfiles externos de alto nivel para iniciativas específicas, facilitando un trabajo ágil y colaborativo.

Quedo a su disposición para agendar una conversación y definir los alcances, el cronograma y los detalles de esta colaboración.

#v(24pt)

// Signature Block
#block(breakable: false)[
  Atentamente,

  #v(20pt)

  #text(font: "Fraunces", weight: "bold", size: 11pt, fill: rgb("#0f172a"))[Benyi Barros]

  #text(weight: "medium", size: 9.5pt, fill: rgb("#0284c7"))[Director Ejecutivo]

  #text(size: 9.5pt, fill: rgb("#64748b"))[Open Andes]

  #text(size: 8.5pt, fill: rgb("#64748b"))[benyi.barros@openandes.org · openandes.org]
]
