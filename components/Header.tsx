"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { navigation, NavItem } from "@/data/navigation";
import Logo from "@/components/Logo";


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useTranslations("common");
  const tNav = useTranslations("navigation");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-0"
          : "bg-white/80 backdrop-blur-sm py-1"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Logo size="small" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <NavItemComponent key={item.href} item={item} pathname={pathname} t={tNav} />
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-dark"
          aria-label={t("menu")}
        >
          {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <nav className="container-custom py-4 space-y-1">
            {navigation.map((item) => (
              <MobileNavItem
                key={item.href}
                item={item}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                t={tNav}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItemComponent({
  item,
  pathname,
  t,
}: {
  item: NavItem;
  pathname: string;
  t: (key: string) => string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const label = t(item.labelKey);
  const isActive =
    pathname === item.href ||
    item.children?.some((c) => pathname === c.href);

  if (!item.children) {
    return (
      <Link
        href={item.href as any}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? "text-primary bg-primary-50"
            : "text-gray-700 hover:text-primary hover:bg-gray-50"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? "text-primary bg-primary-50"
            : "text-gray-700 hover:text-primary hover:bg-gray-50"
        }`}
      >
        {label}
        <FiChevronDown
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white rounded-xl shadow-xl border py-2 min-w-[220px] max-h-[70vh] overflow-y-auto animate-fade-in-up">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href as any}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  pathname === child.href
                    ? "text-primary bg-primary-50"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {t(child.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({
  item,
  openDropdown,
  setOpenDropdown,
  t,
}: {
  item: NavItem;
  openDropdown: string | null;
  setOpenDropdown: (v: string | null) => void;
  t: (key: string) => string;
}) {
  const label = t(item.labelKey);
  const isOpen = openDropdown === item.labelKey;

  if (!item.children) {
    return (
      <Link
        href={item.href as any}
        className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-medium"
      >
        {label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpenDropdown(isOpen ? null : item.labelKey)}
        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-medium"
      >
        {label}
        <FiChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="ml-4 space-y-1 mt-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href as any}
              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg"
            >
              {t(child.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
