"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { contactInfo } from "@/data/contact";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-center">
      <a
        href={contactInfo.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Instagram'da takip edin"
      >
        <FaInstagram className="w-7 h-7" />
      </a>
      <a
        href={contactInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
