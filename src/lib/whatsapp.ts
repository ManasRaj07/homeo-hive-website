export const WHATSAPP_PHONE = "917004483089";
export const DEFAULT_WHATSAPP_MESSAGE = "Hello Dr. Neha, I would like to book an appointment.";

export const createWhatsAppLink = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;