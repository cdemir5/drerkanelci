"use client";

import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/data/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
