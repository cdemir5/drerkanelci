import { Locale } from "./config";

// Sub-page slug mappings: internal key → per-locale slug
export const slugMap: Record<string, Record<Locale, string>> = {
  // ── Miyom sub-pages ──
  "miyom-nedir": {
    tr: "miyom-nedir",
    en: "what-is-fibroid",
    de: "was-ist-myom",
    ru: "chto-takoe-mioma",
  },
  "izsiz-miyom-ameliyati": {
    tr: "izsiz-miyom-ameliyati",
    en: "scarless-fibroid-surgery",
    de: "narbenfreie-myom-operation",
    ru: "operaciya-miomy-bez-shramov",
  },
  "vajinal-miyom-ameliyati": {
    tr: "vajinal-miyom-ameliyati",
    en: "vaginal-fibroid-surgery",
    de: "vaginale-myom-operation",
    ru: "vaginalnaya-operaciya-miomy",
  },
  "dikissiz-miyom-ameliyati": {
    tr: "dikissiz-miyom-ameliyati",
    en: "sutureless-fibroid-surgery",
    de: "nahtlose-myom-operation",
    ru: "besshovnaya-operaciya-miomy",
  },
  "vnotes-miyom-ameliyati": {
    tr: "vnotes-miyom-ameliyati",
    en: "vnotes-fibroid-surgery",
    de: "vnotes-myom-operation",
    ru: "vnotes-operaciya-miomy",
  },
  "rahim-koruyucu-miyom-ameliyati": {
    tr: "rahim-koruyucu-miyom-ameliyati",
    en: "uterus-preserving-fibroid-surgery",
    de: "gebaermuttererhaltende-myom-operation",
    ru: "matkosohranyayushchaya-operaciya-miomy",
  },
  "rahim-alinmadan-miyom-ameliyati": {
    tr: "rahim-alinmadan-miyom-ameliyati",
    en: "fibroid-surgery-without-hysterectomy",
    de: "myom-operation-ohne-gebaermutterentfernung",
    ru: "operaciya-miomy-bez-udaleniya-matki",
  },
  "kapali-miyom-ameliyati": {
    tr: "kapali-miyom-ameliyati",
    en: "minimally-invasive-fibroid-surgery",
    de: "minimal-invasive-myom-operation",
    ru: "maloinvazivnaya-operaciya-miomy",
  },
  "rahim-cikartmadan-miyom-ameliyati": {
    tr: "rahim-cikartmadan-miyom-ameliyati",
    en: "fibroid-removal-without-uterus-removal",
    de: "myomentfernung-ohne-gebaermutterentfernung",
    ru: "udalenie-miomy-bez-udaleniya-matki",
  },
  "sikca-sorulan-sorular": {
    tr: "sikca-sorulan-sorular",
    en: "frequently-asked-questions",
    de: "haeufig-gestellte-fragen",
    ru: "chasto-zadavaemye-voprosy",
  },

  // ── Endometriozis sub-pages ──
  "belirtileri-tedavi": {
    tr: "belirtileri-tedavi",
    en: "symptoms-treatment",
    de: "symptome-behandlung",
    ru: "simptomy-lechenie",
  },
  "bas-etme-yollari": {
    tr: "bas-etme-yollari",
    en: "coping-methods",
    de: "bewaeltigungsmethoden",
    ru: "metody-preodoleniya",
  },
  "cikolata-kisti": {
    tr: "cikolata-kisti",
    en: "chocolate-cyst",
    de: "schokoladenzyste",
    ru: "shokoladnaya-kista",
  },

  // ── Jinekolojik Onkoloji sub-pages ──
  "rahim-agzi-kanseri": {
    tr: "rahim-agzi-kanseri",
    en: "cervical-cancer",
    de: "gebaermutterhalskrebs",
    ru: "rak-sheiki-matki",
  },
  "rahim-kanseri": {
    tr: "rahim-kanseri",
    en: "uterine-cancer",
    de: "gebaermutterkrebs",
    ru: "rak-matki",
  },
  "yumurtalik-kanseri": {
    tr: "yumurtalik-kanseri",
    en: "ovarian-cancer",
    de: "eierstockkrebs",
    ru: "rak-yaichnikov",
  },
  "vulva-kanseri": {
    tr: "vulva-kanseri",
    en: "vulvar-cancer",
    de: "vulvakrebs",
    ru: "rak-vulvy",
  },
  "vajina-kanseri": {
    tr: "vajina-kanseri",
    en: "vaginal-cancer",
    de: "vaginalkrebs",
    ru: "rak-vlagalishcha",
  },
  "tup-kanseri": {
    tr: "tup-kanseri",
    en: "fallopian-tube-cancer",
    de: "eileiterkrebs",
    ru: "rak-maточных-trub",
  },
  "periton-kanseri": {
    tr: "periton-kanseri",
    en: "peritoneal-cancer",
    de: "bauchfellkrebs",
    ru: "rak-bryushiny",
  },
  "rahim-sarkomu": {
    tr: "rahim-sarkomu",
    en: "uterine-sarcoma",
    de: "uterussarkom",
    ru: "sarkoma-matki",
  },
  "hpv-asilamasi": {
    tr: "hpv-asilamasi",
    en: "hpv-vaccination",
    de: "hpv-impfung",
    ru: "vakcinaciya-vpch",
  },
  hipec: {
    tr: "hipec",
    en: "hipec",
    de: "hipec",
    ru: "hipec",
  },
  "metastatik-kanser": {
    tr: "metastatik-kanser",
    en: "metastatic-cancer",
    de: "metastasierter-krebs",
    ru: "metastaticheskiy-rak",
  },
  "trofoblastik-tumorler": {
    tr: "trofoblastik-tumorler",
    en: "trophoblastic-tumors",
    de: "trophoblastische-tumoren",
    ru: "trofoblasticheskie-opukholi",
  },
  "nuks-kanser": {
    tr: "nuks-kanser",
    en: "recurrent-cancer",
    de: "rezidivierender-krebs",
    ru: "recidivnyy-rak",
  },
  "meme-kanseri-taramasi": {
    tr: "meme-kanseri-taramasi",
    en: "breast-cancer-screening",
    de: "brustkrebsvorsorge",
    ru: "skrining-raka-molochnoy-zhelezy",
  },

  // ── Genital Estetik sub-pages ──
  labioplasti: {
    tr: "labioplasti",
    en: "labiaplasty",
    de: "labioplastik",
    ru: "labioplastika",
  },
  "vajinal-daraltma": {
    tr: "vajinal-daraltma",
    en: "vaginal-tightening",
    de: "vaginale-straffung",
    ru: "vaginalnoe-suzhenie",
  },
  "klitoris-estetigi": {
    tr: "klitoris-estetigi",
    en: "clitoral-aesthetics",
    de: "klitoris-aesthetik",
    ru: "estetika-klitora",
  },
  monsplasti: {
    tr: "monsplasti",
    en: "monsplasty",
    de: "monsplastik",
    ru: "monsplastika",
  },
  perinoplasti: {
    tr: "perinoplasti",
    en: "perineoplasty",
    de: "perineoplastik",
    ru: "perineoplastika",
  },
  barbieplasti: {
    tr: "barbieplasti",
    en: "barbieplasty",
    de: "barbieplastik",
    ru: "barbieplastika",
  },
  "kok-hucre-eksosom": {
    tr: "kok-hucre-eksosom",
    en: "stem-cell-exosome",
    de: "stammzellen-exosom",
    ru: "stvolovye-kletki-ekzosomy",
  },
  "prp-mezoterapi": {
    tr: "prp-mezoterapi",
    en: "prp-mesotherapy",
    de: "prp-mesotherapie",
    ru: "prp-mezoterapiya",
  },
  "yag-injeksiyonu": {
    tr: "yag-injeksiyonu",
    en: "fat-injection",
    de: "fettinjektion",
    ru: "zhirovaya-inekciya",
  },
  "orgazm-asisi": {
    tr: "orgazm-asisi",
    en: "orgasm-shot",
    de: "orgasmus-impfung",
    ru: "injekciya-orgazma",
  },
  "genital-estetik-labioplasti": {
    tr: "genital-estetik-labioplasti",
    en: "genital-aesthetic-labiaplasty",
    de: "genital-aesthetik-labioplastik",
    ru: "genitalnaya-estetika-labioplastika",
  },
  "dogal-genital-estetik": {
    tr: "dogal-genital-estetik",
    en: "natural-genital-aesthetics",
    de: "natuerliche-genital-aesthetik",
    ru: "naturalnaya-genitalnaya-estetika",
  },
  "revizyon-genital-estetik": {
    tr: "revizyon-genital-estetik",
    en: "revision-genital-aesthetics",
    de: "revisions-genital-aesthetik",
    ru: "revizionnaya-genitalnaya-estetika",
  },
  "barbie-genital-estetik": {
    tr: "barbie-genital-estetik",
    en: "barbie-genital-aesthetics",
    de: "barbie-genital-aesthetik",
    ru: "barbi-genitalnaya-estetika",
  },
  "barbie-vajina-estetigi": {
    tr: "barbie-vajina-estetigi",
    en: "barbie-vagina-aesthetics",
    de: "barbie-vagina-aesthetik",
    ru: "barbi-vaginalnaya-estetika",
  },

  // ── HPV Kolposkopi sub-pages ──
  "hpv-nedir": {
    tr: "hpv-nedir",
    en: "what-is-hpv",
    de: "was-ist-hpv",
    ru: "chto-takoe-vpch",
  },
  "hpv-iliskili-hastaliklar": {
    tr: "hpv-iliskili-hastaliklar",
    en: "hpv-related-diseases",
    de: "hpv-bedingte-erkrankungen",
    ru: "zabolevaniya-svyazannye-s-vpch",
  },
  "hpv-asilamasi-kolposkopi": {
    tr: "hpv-asilamasi",
    en: "hpv-vaccination",
    de: "hpv-impfung",
    ru: "vakcinaciya-vpch",
  },
  "kolposkopi-nedir": {
    tr: "kolposkopi-nedir",
    en: "what-is-colposcopy",
    de: "was-ist-kolposkopie",
    ru: "chto-takoe-kolposkopiya",
  },
  "pap-smear": {
    tr: "pap-smear",
    en: "pap-smear",
    de: "pap-abstrich",
    ru: "pap-mazok",
  },
  ascus: {
    tr: "ascus",
    en: "ascus",
    de: "ascus",
    ru: "ascus",
  },
  "asc-h": {
    tr: "asc-h",
    en: "asc-h",
    de: "asc-h",
    ru: "asc-h",
  },
  lsil: {
    tr: "lsil",
    en: "lsil",
    de: "lsil",
    ru: "lsil",
  },
  hsil: {
    tr: "hsil",
    en: "hsil",
    de: "hsil",
    ru: "hsil",
  },
  "cin-siniflandirmasi": {
    tr: "cin-siniflandirmasi",
    en: "cin-classification",
    de: "cin-klassifikation",
    ru: "klassifikaciya-cin",
  },
  "cin-lazer-tedavisi": {
    tr: "cin-lazer-tedavisi",
    en: "cin-laser-treatment",
    de: "cin-laserbehandlung",
    ru: "lazernoe-lechenie-cin",
  },
  "leep-ameliyati": {
    tr: "leep-ameliyati",
    en: "leep-procedure",
    de: "leep-verfahren",
    ru: "procedura-leep",
  },
  konizasyon: {
    tr: "konizasyon",
    en: "conization",
    de: "konisation",
    ru: "konizaciya",
  },
  "genital-sigil": {
    tr: "genital-sigil",
    en: "genital-warts",
    de: "genitalwarzen",
    ru: "genitalnye-borodavki",
  },
  "genital-sigil-tedavisi": {
    tr: "genital-sigil-tedavisi",
    en: "genital-warts-treatment",
    de: "genitalwarzen-behandlung",
    ru: "lechenie-genitalnyh-borodavok",
  },
  "gebelerde-genital-sigil": {
    tr: "gebelerde-genital-sigil",
    en: "genital-warts-in-pregnancy",
    de: "genitalwarzen-in-der-schwangerschaft",
    ru: "genitalnye-borodavki-pri-beremennosti",
  },
  "bitkisel-tedaviler": {
    tr: "bitkisel-tedaviler",
    en: "herbal-treatments",
    de: "pflanzliche-behandlungen",
    ru: "travyanoe-lechenie",
  },
};

// Category to sub-page keys mapping
export const categorySubPages: Record<string, string[]> = {
  miyom: [
    "miyom-nedir",
    "izsiz-miyom-ameliyati",
    "vajinal-miyom-ameliyati",
    "dikissiz-miyom-ameliyati",
    "vnotes-miyom-ameliyati",
    "rahim-koruyucu-miyom-ameliyati",
    "rahim-alinmadan-miyom-ameliyati",
    "kapali-miyom-ameliyati",
    "rahim-cikartmadan-miyom-ameliyati",
    "sikca-sorulan-sorular",
  ],
  endometriozis: ["belirtileri-tedavi", "bas-etme-yollari", "cikolata-kisti"],
  "jinekolojik-onkoloji": [
    "rahim-agzi-kanseri",
    "rahim-kanseri",
    "yumurtalik-kanseri",
    "vulva-kanseri",
    "vajina-kanseri",
    "tup-kanseri",
    "periton-kanseri",
    "rahim-sarkomu",
    "hpv-asilamasi",
    "hipec",
    "metastatik-kanser",
    "trofoblastik-tumorler",
    "nuks-kanser",
    "meme-kanseri-taramasi",
  ],
  "genital-estetik": [
    "labioplasti",
    "vajinal-daraltma",
    "klitoris-estetigi",
    "monsplasti",
    "perinoplasti",
    "barbieplasti",
    "kok-hucre-eksosom",
    "prp-mezoterapi",
    "yag-injeksiyonu",
    "orgazm-asisi",
    "genital-estetik-labioplasti",
    "dogal-genital-estetik",
    "revizyon-genital-estetik",
    "barbie-genital-estetik",
    "barbie-vajina-estetigi",
  ],
  "hpv-kolposkopi": [
    "hpv-nedir",
    "hpv-iliskili-hastaliklar",
    "hpv-asilamasi-kolposkopi",
    "kolposkopi-nedir",
    "pap-smear",
    "ascus",
    "asc-h",
    "lsil",
    "hsil",
    "cin-siniflandirmasi",
    "cin-lazer-tedavisi",
    "leep-ameliyati",
    "konizasyon",
    "genital-sigil",
    "genital-sigil-tedavisi",
    "gebelerde-genital-sigil",
    "bitkisel-tedaviler",
  ],
};

// Reverse lookup: given a locale and a localized slug, find the internal key
export function getInternalSlug(
  locale: Locale,
  localizedSlug: string
): string | null {
  for (const [key, translations] of Object.entries(slugMap)) {
    if (translations[locale] === localizedSlug) {
      return key;
    }
  }
  return null;
}

// Forward lookup: given an internal key and target locale, get the localized slug
export function getLocalizedSlug(key: string, locale: Locale): string {
  return slugMap[key]?.[locale] ?? key;
}
