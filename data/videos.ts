export interface Video {
  id: string;
  title: string;
  category: string;
}

export const videos: Video[] = [
  // HPV & Kolposkopi
  { id: "66ZwtAWU5jw", title: "LEEP ve Konizasyon Nedir? Neden Yapılır?", category: "HPV / Kolposkopi" },
  { id: "Mm3I_qHI-tQ", title: "CIN 1 Nedir? Nasıl Tedavi Edilir?", category: "HPV / Kolposkopi" },
  { id: "H37Rjg8JgOY", title: "CIN 2 ve CIN 3 Nedir? Nasıl Tedavi Edilir?", category: "HPV / Kolposkopi" },
  { id: "PY1SdgLkdQY", title: "Kolposkobi Nedir?", category: "HPV / Kolposkopi" },
  { id: "2NFPlsafu4o", title: "HPV Aşısı Nedir? Ne Zaman, Kime Yapılır?", category: "HPV / Kolposkopi" },
  { id: "LIDjOwJuVD8", title: "HPV Nedir? Nasıl Bulaşır? Nasıl Korunulur?", category: "HPV / Kolposkopi" },

  // Gebelik
  { id: "s8Le-AU9FqU", title: "Gebelik Testi, B-HCG Nedir, Ne Zaman Bakılır?", category: "Gebelik" },
  { id: "f0CGf-i3rOw", title: "Gebelikte Kilom Ne Olmalı?", category: "Gebelik" },
  { id: "4L_LY07sspU", title: "Gebelikte Kaçınılması Gereken Yiyecek ve İçecekler", category: "Gebelik" },
  { id: "mhtwScRyHR0", title: "9. Gebelik Haftası", category: "Gebelik" },
  { id: "Ie1-_hVEqK0", title: "8. Gebelik Haftası", category: "Gebelik" },
  { id: "mkibaapu4nI", title: "Gebelikte Sabah Bulantısı (2/2)", category: "Gebelik" },
  { id: "IOxz4sXvcy4", title: "Gebelikte Sabah Bulantısı (1/2)", category: "Gebelik" },
  { id: "Aun8Q8XBYL4", title: "6. Gebelik Haftası", category: "Gebelik" },
  { id: "a4akrTTkfDM", title: "5. Gebelik Haftası", category: "Gebelik" },
  { id: "w28Pqtto2uE", title: "4. Gebelik Haftası", category: "Gebelik" },
  { id: "dP36Ceuc4hQ", title: "3. Gebelik Haftası", category: "Gebelik" },
  { id: "2KNKoJVH04s", title: "1. ve 2. Gebelik Haftası", category: "Gebelik" },
  { id: "-WXqeMVFDVM", title: "Gebelik Şekeri, Gestasyonel Diyabet", category: "Gebelik" },
  { id: "o_jlkK8VwFw", title: "Bebeğimin Cinsiyetini Seçebilir Miyim?", category: "Gebelik" },
  { id: "1eYEWYchQBk", title: "Acil Gebelikten Korunma Yöntemleri", category: "Gebelik" },
  { id: "KQ7qoSg1tx4", title: "Hamile Kalmaya Uygun Günler Ne Zaman?", category: "Gebelik" },

  // Jinekoloji
  { id: "yLuHP4JxOXM", title: "İstmosel Nedir? Sezaryen Skar Yeri Defekti", category: "Jinekoloji" },
  { id: "bgrwdN4mEbE", title: "Bartholin Kisti Nedir? Tedavisi Var Mı?", category: "Jinekoloji" },
  { id: "0ZxBFn1j7aM", title: "Miyom Nedir? Nasıl Oluşur? Tedavisi Var Mıdır?", category: "Miyom" },

  // Cerrahi
  { id: "zFtddzBqZEQ", title: "Kadın Doğumda Kapalı Ameliyatlar", category: "Cerrahi" },
  { id: "MespB16ta9w", title: "İzsiz Cerrahi - vNOTES Histerektomi", category: "Cerrahi" },
  { id: "YjLzfhcGZqU", title: "Laparoskopik Lateral Süspansiyon", category: "Cerrahi" },
  { id: "PxJJkn1u_3g", title: "Burch Ameliyatı - İdrar Kaçırma Ameliyatı", category: "Cerrahi" },
  { id: "r-0CLv7UOX4", title: "Laparoskopik Histerektomi", category: "Cerrahi" },
];

export const videoCategories = ["Tümü", "HPV / Kolposkopi", "Gebelik", "Jinekoloji", "Miyom", "Cerrahi"];
