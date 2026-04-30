export const WHATSAPP_PHONE = "+917004483089";
export const DEFAULT_WHATSAPP_MESSAGE = "Hello Dr. Neha, I would like to book an appointment.";

// Official WhatsApp basic click-to-chat link.
export const createWhatsAppLink = () => "https://wa.me/+917004483089";

/**
 * Open WhatsApp in a way that escapes the Lovable preview iframe.
 * wa.me redirects to api.whatsapp.com which refuses to load inside iframes
 * (ERR_BLOCKED_BY_RESPONSE), so we must navigate the top-level browser.
 */
export const openWhatsAppLink = (url: string = createWhatsAppLink()) => {
  // 1. Try to break out of the embedded iframe (preview) — most reliable fix.
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = url;
      return true;
    }
  } catch {
    // cross-origin top — fall through to new tab
  }

  // 2. Open a real new tab (works on the published site).
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) return true;
  } catch {
    // ignore
  }

  // 3. Last resort.
  window.location.href = url;
  return true;
};
