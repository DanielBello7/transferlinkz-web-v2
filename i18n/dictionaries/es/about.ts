import type { Dictionary } from "../types";

export const about: Dictionary["about"] = {
	hero: {
		eyebrow: "Nosotros",
		titleLines: [
			"Los traslados de viajeros merecen",
			"algo mejor que las hojas de cálculo.",
		],
		intro:
			"TransferLinkz es la capa operativa conectada para los traslados de viajeros. Reunimos a operadores turísticos, proveedores de traslados, conductores y viajeros en un único flujo de trabajo en tiempo real, desde el primer manifiesto hasta la llegada final.",
	},
	story: {
		eyebrow: "Nuestra historia",
		heading: "Por qué existe TransferLinkz",
		paragraphs: [
			"Cada día, miles de viajeros aterrizan en un aeropuerto desconocido esperando que alguien los reciba. Detrás de esa promesa tan sencilla hay una cadena sorprendentemente frágil: un manifiesto en Excel, una cadena de correos a los proveedores, un conductor con un cartel con el nombre y un equipo de operaciones en alerta por si algo falla.",
			"Cuando se rompe un eslabón, porque un vuelo aterriza antes, un conductor espera en la salida equivocada o un proveedor nunca confirmó, el viajero llama al operador, el operador llama al proveedor y un problema de cinco minutos se convierte en una escalada. La mayoría de estos momentos se pueden evitar. Simplemente, la información está repartida en demasiados sitios.",
			"TransferLinkz reúne esa información en un solo lugar. Los operadores suben el manifiesto que ya usan, los proveedores confirman y asignan conductores, los viajeros reciben un enlace temporal con el punto de encuentro y el estado en tiempo real, y los equipos de operaciones ven únicamente los traslados que de verdad necesitan a una persona.",
		],
	},
	audiences: {
		eyebrow: "Para quién es",
		heading: "Hecho para todos los que forman parte del viaje",
		items: [
			{
				title: "Operadores turísticos y DMC",
				description:
					"Los equipos de operaciones deberían dedicar su tiempo a los traslados que requieren una decisión, no a revisar los que van bien.",
			},
			{
				title: "Proveedores de traslados",
				description:
					"Confirma asignaciones, asigna conductores y actualiza el estado sin reemplazar tu propio sistema de despacho.",
			},
			{
				title: "Conductores",
				description:
					"Recibe cada recogida con su punto de encuentro, actualiza el estado durante el día y comunícate con los viajeros a través de un canal controlado.",
			},
			{
				title: "Viajeros",
				description:
					"Consulta el punto de encuentro, los datos del conductor y el estado en tiempo real en un enlace temporal que caduca al terminar el traslado.",
			},
		],
	},
};
