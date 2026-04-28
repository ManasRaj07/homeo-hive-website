export const WHATSAPP_PHONE = "917004483089";
export const DEFAULT_WHATSAPP_MESSAGE = "Hello Dr. Neha, I would like to book an appointment.";

// Official WhatsApp basic click-to-chat link.
// WhatsApp will route to the mobile app, WhatsApp Web, or the api.whatsapp.com
// fallback page automatically depending on the device.
export const createWhatsAppLink = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
