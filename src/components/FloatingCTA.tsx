import { MessageCircle, Phone } from "lucide-react";

const FloatingCTA = () => {
  const phoneNumber = "9841871508";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi, I'm interested in your laundry services`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <a
        href={`tel:+91${phoneNumber}`}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-large flex items-center justify-center hover:scale-110 transition-transform duration-200"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-whatsapp text-white shadow-large flex items-center justify-center hover:scale-110 transition-transform duration-200 animate-pulse-soft"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingCTA;
