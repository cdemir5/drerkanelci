import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { locales, defaultLocale } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/hakkimda": {
      tr: "/hakkimda",
      en: "/about",
      de: "/ueber-mich",
      ru: "/o-nas",
    },
    "/iletisim": {
      tr: "/iletisim",
      en: "/contact",
      de: "/kontakt",
      ru: "/kontakty",
    },
    "/videolar": {
      tr: "/videolar",
      en: "/videos",
      de: "/videos",
      ru: "/video",
    },
    // Miyom
    "/miyom": {
      tr: "/miyom",
      en: "/fibroid",
      de: "/myom",
      ru: "/mioma",
    },
    "/miyom/[subSlug]": {
      tr: "/miyom/[subSlug]",
      en: "/fibroid/[subSlug]",
      de: "/myom/[subSlug]",
      ru: "/mioma/[subSlug]",
    },
    // Endometriozis
    "/endometriozis": {
      tr: "/endometriozis",
      en: "/endometriosis",
      de: "/endometriose",
      ru: "/endometrioz",
    },
    "/endometriozis/[subSlug]": {
      tr: "/endometriozis/[subSlug]",
      en: "/endometriosis/[subSlug]",
      de: "/endometriose/[subSlug]",
      ru: "/endometrioz/[subSlug]",
    },
    // Jinekolojik Onkoloji
    "/jinekolojik-onkoloji": {
      tr: "/jinekolojik-onkoloji",
      en: "/gynecologic-oncology",
      de: "/gynaekologische-onkologie",
      ru: "/ginekologicheskaya-onkologiya",
    },
    "/jinekolojik-onkoloji/[subSlug]": {
      tr: "/jinekolojik-onkoloji/[subSlug]",
      en: "/gynecologic-oncology/[subSlug]",
      de: "/gynaekologische-onkologie/[subSlug]",
      ru: "/ginekologicheskaya-onkologiya/[subSlug]",
    },
    // Genital Estetik
    "/genital-estetik": {
      tr: "/genital-estetik",
      en: "/genital-aesthetics",
      de: "/genital-aesthetik",
      ru: "/genitalnaya-estetika",
    },
    "/genital-estetik/[subSlug]": {
      tr: "/genital-estetik/[subSlug]",
      en: "/genital-aesthetics/[subSlug]",
      de: "/genital-aesthetik/[subSlug]",
      ru: "/genitalnaya-estetika/[subSlug]",
    },
    // HPV Kolposkopi
    "/hpv-kolposkopi": {
      tr: "/hpv-kolposkopi",
      en: "/hpv-colposcopy",
      de: "/hpv-kolposkopie",
      ru: "/vpch-kolposkopiya",
    },
    "/hpv-kolposkopi/[subSlug]": {
      tr: "/hpv-kolposkopi/[subSlug]",
      en: "/hpv-colposcopy/[subSlug]",
      de: "/hpv-kolposkopie/[subSlug]",
      ru: "/vpch-kolposkopiya/[subSlug]",
    },
    // Standalone pages
    "/robotik-cerrahi": {
      tr: "/robotik-cerrahi",
      en: "/robotic-surgery",
      de: "/roboterchirurgie",
      ru: "/roboticheskaya-hirurgiya",
    },
    "/kisirlik-tedavisi": {
      tr: "/kisirlik-tedavisi",
      en: "/infertility-treatment",
      de: "/unfruchtbarkeitsbehandlung",
      ru: "/lechenie-besplodiya",
    },
    "/yuksek-riskli-gebelikler": {
      tr: "/yuksek-riskli-gebelikler",
      en: "/high-risk-pregnancies",
      de: "/hochrisiko-schwangerschaften",
      ru: "/beremennost-vysokogo-riska",
    },
    "/ileri-laparoskopik-cerrahi": {
      tr: "/ileri-laparoskopik-cerrahi",
      en: "/advanced-laparoscopic-surgery",
      de: "/fortgeschrittene-laparoskopische-chirurgie",
      ru: "/prodvinutaya-laparoskopicheskaya-hirurgiya",
    },
    "/histeroskopik-cerrahi": {
      tr: "/histeroskopik-cerrahi",
      en: "/hysteroscopic-surgery",
      de: "/hysteroskopische-chirurgie",
      ru: "/gisteroskopicheskaya-hirurgiya",
    },
    "/gebelik-dogum": {
      tr: "/gebelik-dogum",
      en: "/pregnancy-birth",
      de: "/schwangerschaft-geburt",
      ru: "/beremennost-rody",
    },
    "/jinekoloji": {
      tr: "/jinekoloji",
      en: "/gynecology",
      de: "/gynaekologie",
      ru: "/ginekologiya",
    },
    "/urojinekoloji": {
      tr: "/urojinekoloji",
      en: "/urogynecology",
      de: "/urogynaekologie",
      ru: "/uroginekologiya",
    },
    "/vnotes": {
      tr: "/vnotes",
      en: "/vnotes",
      de: "/vnotes",
      ru: "/vnotes",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
