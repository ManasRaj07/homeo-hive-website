import { MessageCircle } from "lucide-react";
import { createWhatsAppLink, openWhatsAppLink } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  const url = createWhatsAppLink();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        openWhatsAppLink(url);
      }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
    </a>
  );
};

export default WhatsAppButton;
