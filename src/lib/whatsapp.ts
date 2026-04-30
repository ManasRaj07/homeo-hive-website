export const WHATSAPP_PHONE = "+917004483089";
export const DEFAULT_WHATSAPP_MESSAGE = "Hello Dr. Neha, I would like to book an appointment.";

// Official WhatsApp basic click-to-chat link.
export const createWhatsAppLink = () => "https://api.whatsapp.com/send/?phone=%2B917004483089&text&type=phone_number&app_absent=0";

/**
 * Open a WhatsApp link in a way that escapes embedded preview iframes.
 * WhatsApp blocks being framed (X-Frame-Options), so we must navigate
 * the top-level browser context or open a true new tab.
 */
export const openWhatsAppLink = (url: string = createWhatsAppLink()) => {
  // 1. Try a real new tab first — works on the published site & most browsers.
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) return true;
  } catch {
    // ignore, try next strategy
  }

  // 2. Try to break out of the embedded iframe (Lovable preview, etc.).
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = url;
      return true;
    }
  } catch {
    // cross-origin top — can't access, fall through
  }

  // 3. Last resort: navigate the current window.
  window.location.href = url;
  return true;
};
