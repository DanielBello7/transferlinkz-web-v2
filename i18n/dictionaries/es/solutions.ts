import type { Dictionary } from "../types";

export const solutions: Dictionary["solutions"] = {
  hero: {
    eyebrow: "Soluciones",
    titleLines: ["Una operación, las herramientas adecuadas", "para cada rol."],
    intro:
      "TransferLinkz ofrece a operadores turísticos, proveedores de traslados, conductores y viajeros justo lo que necesitan, todos trabajando sobre el mismo plan de traslados en tiempo real.",
    exploreByRole: "Explorar por rol",
  },
  navLabel: "Soluciones por rol",
  roles: {
    operators: {
      navLabel: "Operadores turísticos",
      eyebrow: "Para operadores turísticos y DMC",
      heading: "Planifica cada traslado desde un único manifiesto.",
      paragraph:
        "Sube la lista de traslados en Excel que ya usas. TransferLinkz la convierte en registros estructurados, enlaces para viajeros y asignaciones a proveedores, y mantiene conectado cada viaje desde la primera asignación hasta la llegada final.",
      cards: [
        {
          title: "Del manifiesto al plan",
          description:
            "Sube tu manifiesto actual en Excel y olvídate de reconstruirlo a mano. En épocas de mucho trabajo, el tiempo dedicado a los manifiestos puede pasar de horas a minutos.",
        },
        {
          title: "Solo lo que te necesita",
          description:
            "El panel separa los traslados en riesgo de los que requieren intervención, con una cronología clara de lo ocurrido.",
        },
        {
          title: "Todos los destinos, una sola vista",
          description:
            "Organiza traslados y manifiestos por destino sin perder una visión general de todos los aeropuertos y países.",
        },
      ],
      alt: "App para operadores turísticos con las llegadas de un destino y el registro de actividad",
    },
    suppliers: {
      navLabel: "Proveedores de traslados",
      eyebrow: "Para proveedores de traslados",
      heading: "Conserva tu despacho. Suma un traspaso más claro.",
      paragraph:
        "Consulta en un solo lugar todos los traslados que te asignan. Acepta trabajos, asigna vehículos y conductores y mantén informado al operador sin reemplazar el sistema de despacho que ya usas.",
      cards: [
        {
          title: "Asignaciones con todos los detalles",
          description:
            "Cada trabajo llega con lo que necesitas para realizarlo, en un solo lugar.",
        },
        {
          title: "Vehículos y conductores en pocos clics",
          description:
            "Asigna el vehículo y el conductor a cada trabajo para que el operador vea quién se encarga.",
        },
        {
          title: "El estado, al momento",
          description:
            "Actualiza el estado del trabajo a medida que avanza cada traslado, para que el operador siempre esté al tanto.",
        },
      ],
      alt: "Vista de proveedor de traslados con los trabajos activos de hoy y las asignaciones pendientes",
    },
    drivers: {
      navLabel: "Conductores",
      eyebrow: "Para conductores",
      heading: "Conoce el viaje antes de salir.",
      paragraph:
        "Los conductores ven el vehículo, los puntos de recogida y el horario de cada traslado, con un toque para abrir el viaje y mantener a todos informados a medida que avanza.",
      cards: [
        {
          title: "El día de hoy de un vistazo",
          description:
            "Consulta los viajes y puntos de recogida de hoy, con el número de viajeros y el vuelo antes de salir.",
        },
        {
          title: "Un toque para actualizar",
          description:
            "Actualiza el avance a medida que el viaje progresa. La plataforma te avisa cuando toca actualizar el estado.",
        },
        {
          title: "Un canal controlado",
          description:
            "Comunícate con el viajero por un canal controlado, para resolver las dudas sobre el punto de encuentro en la zona de llegadas.",
        },
      ],
      alt: "App de conductor con un vehículo asignado y el viaje por abrir",
    },
    guests: {
      navLabel: "Viajeros",
      eyebrow: "Para viajeros",
      heading: "Sabe quién va a recogerte.",
      paragraph:
        "Cada viajero recibe un enlace sencillo con los datos de su recogida y el estado del traslado en tiempo real, sin adivinar en las llegadas y sin descargar ninguna app.",
      cards: [
        {
          title: "Todo en un solo enlace",
          description:
            "El punto de encuentro, los datos del conductor y el estado en tiempo real, en un enlace móvil temporal.",
        },
        {
          title: "Caduca al terminar el traslado",
          description:
            "El enlace se cierra automáticamente cuando termina la ventana del traslado.",
        },
        {
          title: "En su idioma",
          description:
            "Instrucciones claras en un idioma que los viajeros entienden. Está previsto ofrecer varios idiomas, incluido el español, desde el acceso anticipado.",
        },
      ],
      alt: "",
    },
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    heading: "De la hoja de cálculo a la llegada en tres pasos.",
    steps: [
      {
        title: "Sube tu manifiesto",
        description:
          "Arrastra tu lista de traslados en Excel. TransferLinkz crea los registros de traslado, los enlaces para viajeros y las asignaciones a proveedores.",
      },
      {
        title: "Asigna y comparte",
        description:
          "Los proveedores confirman los trabajos y asignan vehículos y conductores. Los viajeros reciben su enlace de viaje temporal.",
      },
      {
        title: "Sigue el día en directo",
        description:
          "Los conductores actualizan el estado, los viajeros siguen el traslado y tu equipo ve solo los traslados que necesitan acción.",
      },
    ],
  },
  worksAlongside: {
    eyebrow: "Funciona junto a lo que ya usas",
    heading: "Empieza con lo que ya tienes.",
    items: [
      {
        title: "Tus proveedores",
        description:
          "Quédate con los socios de traslado en los que confías. TransferLinkz añade un traspaso más claro entre proveedores, conductores y viajeros.",
      },
      {
        title: "Tu sistema de despacho",
        description:
          "Los proveedores confirman asignaciones y actualizan el estado sin reemplazar su propio sistema de despacho.",
      },
      {
        title: "Tu manifiesto",
        description: "Parte de la lista de traslados en Excel que ya usas.",
      },
    ],
  },
};
