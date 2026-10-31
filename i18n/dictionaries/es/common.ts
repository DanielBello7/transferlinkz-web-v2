import type { Dictionary } from "../types";

export const common: Dictionary["common"] = {
  announcement:
    "Estamos incorporando a un grupo reducido de socios piloto para 2026",
  nav: {
    label: "Principal",
    contact: "Contacto",
    about: "Nosotros",
  },
  joinWaitlist: "Lista de espera",
  seeFeatures: "Ver funciones",
  backToHome: "Volver al inicio",
  logoLabel: "Inicio de TransferLinkz",
  language: {
    en: "English",
    es: "Español",
    sv: "Svenska",
    label: "Idioma",
  },
  footer: {
    label: "Pie de página",
    tagline:
      "Coordinación de traslados aeroportuarios para operadores turísticos y agencias de viajes.",
    about: "Nosotros",
    solutions: "Soluciones",
    legal: "Legal",
    twitter: "Twitter (X)",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    opensInNewTab: "(se abre en una pestaña nueva)",
  },
  cta: {
    heading: "¿Quieres llevar tus operaciones al siguiente nivel?",
    body: "Reúne reservas, proveedores, conductores, manifiestos y recorridos de los viajeros en una sola plataforma conectada.",
  },
  faq: {
    eyebrow: "Algunas cosas que quizá te estés preguntando",
    headingLines: ["Buenas preguntas.", "Respuestas claras."],
    items: [
      {
        question: "¿Qué problema resuelve TransferLinkz?",
        answer:
          "TransferLinkz reduce las incidencias evitables en las llegadas y agiliza la preparación de manifiestos. Puedes subir tu lista de traslados actual en Excel y generar automáticamente registros estructurados, enlaces para viajeros y asignaciones a proveedores. Después, viajeros y conductores usan un canal de comunicación temporal con instrucciones claras del punto de encuentro y estado en tiempo real, mientras tu equipo de operaciones solo ve los traslados que realmente necesitan intervención.",
      },
      {
        question: "¿Para quién es TransferLinkz?",
        answer:
          "TransferLinkz está pensado para operadores turísticos, DMC y agencias receptoras que coordinan los traslados de sus viajeros con varios proveedores o en varios destinos. Los proveedores de traslados y los conductores usan la plataforma para confirmar asignaciones, actualizar el estado y comunicarse con los viajeros a través de un canal controlado.",
      },
      {
        question: "¿Tengo que cambiar a mis proveedores de traslados actuales?",
        answer:
          "No. TransferLinkz funciona junto con tu red de proveedores actual. Sigues trabajando con los socios de traslado en los que confías; la plataforma simplemente añade un traspaso más claro entre tus proveedores, conductores y viajeros.",
      },
      {
        question: "¿Puedo usar TransferLinkz en varios destinos?",
        answer:
          "Sí. Puedes organizar traslados y manifiestos por destino y mantener una única visión general de tu operación. Es especialmente útil para operadores que gestionan llegadas en varios aeropuertos o países.",
      },
      {
        question:
          "¿Cuánto tiempo ahorra TransferLinkz en los manifiestos de traslados?",
        answer:
          "TransferLinkz te permite subir tu manifiesto actual en Excel y generar automáticamente registros de traslado estructurados, enlaces para viajeros y asignaciones a proveedores. En destinos muy activos y en temporada alta, esto puede reducir el trabajo manual con los manifiestos de horas a minutos, y mantiene tu operación coherente y auditable.",
      },
      {
        question: "¿Los viajeros tienen que descargar una app?",
        answer:
          "No. Los viajeros acceden a los detalles de su traslado mediante un enlace móvil temporal. El enlace muestra el punto de encuentro, los datos del conductor, el estado en tiempo real y un canal de comunicación controlado. El enlace caduca automáticamente al terminar la ventana del traslado.",
      },
      {
        question: "¿Cómo reduce TransferLinkz las incidencias operativas?",
        answer:
          "La plataforma da a los viajeros instrucciones claras del punto de encuentro y el estado del conductor en tiempo real, lo que evita muchos incidentes del tipo «no encuentro a mi conductor». Cuando surge un problema, el viajero y el conductor pueden comunicarse por un canal controlado, y tu equipo solo recibe un aviso cuando realmente hace falta intervención humana.",
      },
      {
        question: "¿Qué pasa si algo sale mal en un traslado?",
        answer:
          "TransferLinkz distingue entre «en riesgo» y «requiere intervención». El sistema pide al conductor que actualice el estado, guía al viajero hasta el punto de encuentro y permite una comunicación controlada. Tu panel de operaciones muestra solo las excepciones que requieren acción, con una cronología clara de lo ocurrido.",
      },
      {
        question:
          "¿Pueden los proveedores de traslados usar TransferLinkz con sus flujos de trabajo actuales?",
        answer:
          "Sí. Los proveedores pueden confirmar asignaciones, asignar conductores y actualizar el estado sin sustituir su sistema de despacho. La plataforma está diseñada para complementar las herramientas operativas existentes, no para reemplazarlas.",
      },
      {
        question: "¿Cómo empiezo?",
        answer:
          "Puedes solicitar acceso anticipado uniéndote a la lista de espera en nuestro sitio web. Después nos pondremos en contacto contigo para ver si TransferLinkz encaja en tu operación y, si es así, cómo plantear un piloto.",
      },
      {
        question: "¿TransferLinkz está disponible en varios idiomas?",
        answer:
          "Sí. La plataforma se está construyendo para admitir varios idiomas, incluido el español, desde la fase de acceso anticipado. Así, operadores y proveedores pueden trabajar en su idioma preferido y los viajeros reciben instrucciones claras en un idioma que entienden.",
      },
    ],
  },
  guestMockup: {
    label:
      "Enlace de viaje del viajero con el conductor, la hora de recogida y el estado en tiempo real",
    status: "Conductor en camino",
    reference: "TRF-1001",
    title: "Recogida en el aeropuerto de Dubái",
    pickup: "Recogida",
    pickupValue: "17:20",
    driver: "Conductor",
    driverValue: "Omar H.",
    vehicle: "Vehículo",
    vehicleValue: "Furgoneta Toyota",
    arrives: "Llega en 12 min",
    flight: "Vuelo EK204",
    landed: "aterrizó a las 14:05",
    meet: "Punto de encuentro: Llegadas, puerta 4",
    place: "Hotel Marina Gulf",
    contactDriver: "Contactar al conductor",
  },
};
