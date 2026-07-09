export const WHATSAPP_NUMBER = "573053007872";

/** Construye un enlace wa.me con mensaje precargado. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  agendarValoracion:
    "Hola Elvis Rodríguez, quiero agendar una valoración capilar",
  colorimetria:
    "Hola Elvis Rodríguez, quiero una valoración de colorimetría. Te envío foto actual de mi cabello y referencia del resultado que quiero lograr.",
  rutinaCasa:
    "Hola Elvis Rodríguez, quiero una recomendación de productos para cuidar mi cabello en casa.",
  recomendacionTienda:
    "Hola Elvis Rodríguez, quiero ayuda para elegir una rutina de cuidado personalizada. Te envío una foto de mi cabello.",
  agendarCita:
    "Hola Elvis Rodríguez, quiero agendar una cita. Te cuento qué servicio busco:",
} as const;

/** Mensaje para consultar disponibilidad de un servicio puntual. */
export function waServiceMessage(serviceName: string): string {
  return `Hola Elvis Rodríguez, quiero consultar disponibilidad para: ${serviceName}.`;
}

/** Mensaje de cotización con la lista de productos seleccionados. */
export function waQuoteMessage(productNames: string[]): string {
  return `Hola Elvis Rodríguez, quiero consultar estos productos: ${productNames.join(", ")}.`;
}

/** Mensaje para consultar un producto individual. */
export function waProductMessage(productName: string): string {
  return `Hola Elvis Rodríguez, quiero consultar el producto: ${productName}.`;
}
