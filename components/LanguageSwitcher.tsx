"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { localeNames, type Locale } from "@/i18n/config";
import { FiGlobe, FiChevronDown } from "react-icons/fi";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: Locale) {
    setIsOpen(false);
    router.replace(pathname as any, { locale: newLocale });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-lg border text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
      >
        <FiGlobe className="w-4 h-4" />
        <span className="uppercase">{locale}</span>
        <FiChevronDown
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-white rounded-xl shadow-xl border py-1 min-w-[140px] z-50 animate-fade-in-up">
          {(Object.entries(localeNames) as [Locale, string][]).map(
            ([key, name]) => (
              <button
                key={key}
                onClick={() => switchLocale(key)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  key === locale
                    ? "text-primary bg-primary-50 font-medium"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {name}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
