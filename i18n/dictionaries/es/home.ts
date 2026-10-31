import type { Dictionary } from "../types";

export const home: Dictionary["home"] = {
  hero: {
    eyebrow: "Una operación de traslados conectada",
    titleLines: [
      "Una operación conectada",
      "detrás de cada recorrido de tus viajeros",
    ],
    intro:
      "TransferLinkz reúne a operadores turísticos, proveedores de traslados, vehículos, conductores y viajeros en un único flujo de trabajo en tiempo real, del manifiesto a la llegada final.",
    dashboardAlt:
      "Panel de operador de TransferLinkz con asignaciones pendientes, trabajos activos y un mapa en tiempo real",
  },
  ticker: {
    heading: "Despídete de",
    words: [
      "Manifiestos en Excel",
      "Correos perdidos",
      "Horas perdidas ordenando",
      "Traslados perdidos",
      "Cero visibilidad",
    ],
  },
  features: {
    heading: "Flexible para las muchas formas en que empiezan los viajes",
    intro:
      "Usa el mismo flujo de trabajo conectado en distintos puntos de transporte, sentidos de traslado y tipos de servicio.",
    cards: [
      {
        title: "Hecho para estar organizado",
        description:
          "Reúne manifiestos, grupos de viajeros y puntos de operación en una vista clara.",
      },
      {
        title: "Hecho para estar conectado",
        description:
          "Reúne manifiestos, grupos de viajeros y puntos de operación en una vista clara.",
      },
      {
        title: "Hecho para todo el viaje",
        description:
          "Reúne manifiestos, grupos de viajeros y puntos de operación en una vista clara.",
      },
    ],
  },
  roles: {
    eyebrow: "Experiencias hechas a medida",
    headingLines: ["Una operación.", "La vista adecuada para cada rol."],
    tabsLabel: "Elige un rol",
    items: {
      operators: {
        label: "App para operadores",
        eyebrow: "Para operadores turísticos",
        headingLines: [
          "Más recorridos fluidos con",
          "menos trabajo administrativo.",
        ],
        paragraph:
          "Convierte tu manifiesto en un plan de traslados organizado. Mantén conectados cada ubicación, proveedor y viajero, desde la primera asignación hasta la llegada final.",
        bullets: [
          "Agrupa a los viajeros por fecha, vuelo y destino",
          "Asigna traslados a tu red de proveedores de confianza",
          "Mantén los cambios y las incidencias ligados al viaje correcto",
        ],
        alt: "App para operadores turísticos con las llegadas de un destino y el registro de actividad",
      },
      suppliers: {
        label: "Proveedores",
        eyebrow: "Para proveedores de traslados",
        headingLines: ["Cada asignación clara,", "cada traslado bajo control."],
        paragraph:
          "Consulta en un solo lugar todos los traslados que te asignan. Acepta trabajos, asigna vehículos y conductores y mantén informado al operador sin salir de la pantalla.",
        bullets: [
          "Recibe las asignaciones con todos los detalles",
          "Asigna vehículos y conductores en unos pocos clics",
          "Actualiza el estado del trabajo a medida que avanza cada traslado",
        ],
        alt: "Vista de proveedor de traslados con los trabajos activos de hoy y las asignaciones pendientes",
      },
      drivers: {
        label: "Conductores",
        eyebrow: "Para conductores",
        headingLines: ["Cada viaje, claro y", "listo en el móvil."],
        paragraph:
          "Los conductores ven el vehículo, los puntos de recogida y el horario de cada traslado, con un toque para abrir el viaje y mantener a todos informados a medida que avanza.",
        bullets: [
          "Consulta de un vistazo los viajes y puntos de recogida de hoy",
          "Conoce el número de viajeros y el vuelo antes de salir",
          "Actualiza el avance con un toque mientras el viaje progresa",
        ],
        alt: "App de conductor con un vehículo asignado y el viaje por abrir",
      },
      guests: {
        label: "Viajeros",
        eyebrow: "Para viajeros",
        headingLines: ["Los viajeros siempre saben", "quién va a recogerlos."],
        paragraph:
          "Cada viajero recibe un enlace sencillo con los datos de su recogida y el estado del traslado en tiempo real, sin adivinar en las llegadas y sin descargar ninguna app.",
        bullets: [
          "Punto de recogida, hora y conductor en un solo enlace",
          "Estado en tiempo real mientras el conductor se dirige a llegadas",
          "Contacto rápido si cambian los planes",
        ],
        alt: "",
      },
    },
    destinations: {
      eyebrow: "Donde sea que empiece el viaje",
      headingLines: [
        "Distintos destinos.",
        "Un solo flujo de trabajo conectado.",
      ],
      rows: [
        [
          "Llegadas y salidas de aeropuerto",
          "Traslados desde estaciones de tren",
          "Traslados a hoteles y recintos",
        ],
        [
          "Traslados a puertos deportivos y cruceros",
          "Recogida de autocares y autobuses",
          "Recorridos con varias paradas",
        ],
      ],
    },
  },
  pricing: {
    eyebrow: "Precios",
    heading: "Precios sencillos, sin sorpresas",
    intro:
      "Todos los planes incluyen usuarios ilimitados, acceso completo a la API y soporte dedicado de incorporación.",
    includedEachMonth: "Incluidos cada mes",
    plans: [
      {
        name: "Core",
        price: "$199",
        unit: "/mes",
        transfers: "150 traslados",
        description:
          "Para operadores que empiezan con traslados estructurados.",
        cta: "Solicitar acceso anticipado",
      },
      {
        name: "Growth",
        price: "$499",
        unit: "/mes",
        transfers: "500 traslados",
        description: "Para equipos que gestionan traslados en varios destinos.",
        cta: "Solicitar acceso anticipado",
      },
      {
        name: "Scale",
        price: "$999",
        unit: "/mes",
        transfers: "1.500 traslados",
        description: "Para operadores y DMC de gran volumen.",
        cta: "Solicitar acceso anticipado",
      },
      {
        name: "Enterprise",
        price: "A medida",
        unit: "",
        transfers: "Traslados ilimitados",
        description: "Para grandes operaciones con necesidades específicas.",
        cta: "Hablemos",
      },
    ],
    enterpriseEmail: {
      subject: "Consulta sobre el plan Enterprise de TransferLinkz",
      greeting: "Hola, equipo de TransferLinkz:",
      intro: "Me gustaría hablar sobre un plan Enterprise.",
      businessName: "Nombre de la empresa:",
      volumes: "Volumen de traslados (al mes):",
      destinations: "Destinos:",
      thanks: "¡Gracias!",
    },
    includedHeading: "Todos los planes incluyen",
    included: [
      "Carga de manifiestos y ordenación automática",
      "Flujo de asignación a proveedores",
      "Enlaces de viaje para viajeros",
      "Estado de los traslados en tiempo real",
      "Seguimiento de incidencias",
      "Soporte de incorporación",
      "Acceso completo a la API",
    ],
  },
};
