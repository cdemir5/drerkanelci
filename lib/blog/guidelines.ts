import { getCategoryByLocale } from "@/data/categories";
import { navigation, additionalPages, type NavItem } from "@/data/navigation";
import trNavigation from "@/messages/tr/navigation.json";
import { BLOG_CATEGORY_KEYS } from "./categories";

const CATEGORY_PAGES = [
  "miyom",
  "endometriozis",
  "jinekolojik-onkoloji",
  "genital-estetik",
  "hpv-kolposkopi",
] as const;

/** Existing Turkish pages Claude can link to from a post (internal links). */
export function getInternalLinks(): { title: string; href: string }[] {
  const labels = trNavigation.navigation as Record<string, string>;
  const links = new Map<string, string>();

  const items: NavItem[] = [...navigation, ...additionalPages];
  for (const item of items) {
    const children = item.children ?? [];
    if (item.href !== "#" && item.href !== "/" && item.href !== "/blog") {
      links.set(item.href, labels[item.labelKey] ?? item.href);
    }
    for (const child of children) {
      if (child.href === "/blog") continue;
      links.set(child.href, labels[child.labelKey] ?? child.href);
    }
  }

  for (const key of CATEGORY_PAGES) {
    const category = getCategoryByLocale("tr", key);
    for (const page of category?.subPages ?? []) {
      links.set(page.href, page.title);
    }
  }

  return Array.from(links, ([href, title]) => ({ title, href }));
}

export const MCP_SERVER_INSTRUCTIONS = `Bu bağlayıcı, Doç. Dr. Erkan Elçi'nin (Kadın Hastalıkları ve Doğum Uzmanı, İstanbul) web sitesi drerkanelci.com için blog TASLAKLARI kaydeder.
- Bir yazı yazmadan veya çevirmeden önce MUTLAKA get_writing_guidelines aracını çağır ve kurallara uy.
- Konu tekrarını önlemek için list_posts ile mevcut yazılara bak.
- Sen yalnızca taslak kaydedebilirsin; yayınlama yetkin yok. Doktor taslağı yönetim panelinde inceleyip yayınlar. Kullanıcıya bunu söyle ve dönen panel linkini paylaş.
- Yayında olan bir dil sürümünü değiştiremezsin.`;

export function getWritingGuidelines(): string {
  const links = getInternalLinks()
    .map((l) => `- ${l.title}: ${l.href}`)
    .join("\n");

  return `# drerkanelci.com blog yazım kuralları

## Kimin adına, kime yazıyorsun
- Site sahibi: Doç. Dr. Erkan Elçi, Kadın Hastalıkları ve Doğum Uzmanı (İstanbul). Uzmanlıkları: robotik ve ileri laparoskopik cerrahi, miyom, endometriozis, jinekolojik onkoloji, HPV/kolposkopi, genital estetik, yüksek riskli gebelikler, vNOTES.
- Okuyucu: Sağlık sorununu araştıran kadın hastalar ve yakınları. Tıp eğitimi yok; kaygılı olabilir.
- Ton: Sakin, güven veren, net, saygılı. Birinci tekil şahıs kullanma ("ben ameliyat ederim" yok); "bu yöntemde…", "hekiminiz…" gibi nesnel anlatım kullan. Tıbbi terimleri ilk geçtiği yerde parantez içinde sade dille açıkla.

## Yasal çerçeve (Türkiye) — kesin kurallar
Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Yönetmeliği'ne uy. Yazı REKLAM DEĞİL, BİLGİLENDİRME olmalı:
- "En iyi", "en başarılı", "1 numara", "tek", "garanti", "kesin sonuç", "%100", "ağrısız/risksiz" gibi üstünlük veya sonuç vaadi YOK.
- Fiyat, indirim, kampanya, taksit, "ücretsiz muayene" YOK.
- Hasta hikâyesi, hasta yorumu, teşekkür, öncesi/sonrası anlatımı YOK.
- Başka hekim veya kurumları kötüleme, karşılaştırma YOK.
- Tedavinin riskleri ve alternatifleri dürüstçe belirtilmeli. Her tedavi kişiye göre değişir; karar muayene sonrası verilir.

## Tıbbi doğruluk
- Güncel, kanıta dayalı bilgi ver (ACOG, ESHRE, FIGO, WHO, NICE, TJOD gibi kılavuzlar). Emin olmadığın sayı veya istatistiği yazma; yazacaksan "yaklaşık", "çalışmalarda" gibi ihtiyatlı ifade kullan.
- Kaynak UYDURMA. Kaynak verirsen yalnızca gerçekten var olan kılavuz/kurum adını yaz; makale başlığı, DOI veya link uydurma.
- Acil durum belirtilerini (ani şiddetli ağrı, yoğun kanama, bayılma, gebelikte kanama vb.) varsa açıkça belirt ve acil başvuruyu öner.
- İlaç dozu, reçete önerisi YAZMA.

## Yapı (content_md, Markdown)
1. Giriş: 2–3 kısa paragraf; okuyucunun sorusunu ve yazının neyi kapsadığını anlat. Başlık (#) KULLANMA; sayfa başlığı ayrıca gösterilir.
2. "## " ile 4–7 ana bölüm, gerekirse "### " alt başlıklar. Tipik akış: Nedir? → Nedenleri/risk faktörleri → Belirtiler → Tanı → Tedavi seçenekleri → Ameliyat/iyileşme süreci (varsa) → Ne zaman doktora başvurmalı?
3. Kısa bir sonuç paragrafı. Sonuçta muayenenin önemini nazikçe vurgula; satış dili kullanma.
- Uzunluk: 900–1800 kelime. Paragraflar kısa (2–4 cümle). Uygun yerlerde madde listesi ve tablo kullanılabilir.
- Görsel, HTML etiketi, emoji, iframe EKLEME (desteklenmez).
- "Tıbbi uyarı" / "Bu yazı bilgilendirme amaçlıdır" metnini EKLEME; sayfa şablonu otomatik ekler.
- Sıkça sorulan sorular content_md içinde DEĞİL, ayrı "faqs" alanında olmalı.

## İç linkler
Uygun yerlerde 2–4 iç link ver (Markdown: [metin](/yol)). Yalnızca aşağıdaki mevcut sayfaları kullan, yol uydurma:
${links}
- Randevu / iletişim için: /iletisim

## Alanlar
- title: 40–70 karakter, doğal ve açıklayıcı; anahtar kelime başa yakın. Tıklama tuzağı yok.
- excerpt: 1–2 cümle (en fazla ~200 karakter) özet; liste sayfasında görünür.
- meta_title: En fazla 60 karakter. Site/doktor adını EKLEME (otomatik eklenir).
- meta_description: 120–155 karakter; konuyu ve okuyucuya faydayı anlatsın.
- faqs: 3–6 soru-cevap. Sorular hastaların gerçekten sorduğu biçimde; cevaplar 2–4 cümle.
- category (isteğe bağlı): ${BLOG_CATEGORY_KEYS.join(", ")}

## Çeviri (upsert_translation)
- Kelime kelime değil, hedef dilde doğal ve hasta diline uygun çevir. Tıbbi terimleri o ülkede hastaların kullandığı karşılıklarla yaz.
- İç linkleri Türkçe yolları DEĞİŞTİRMEDEN bırak (site yönlendirmeyi kendisi yapar).
- Türkiye'ye özgü ifadeleri (ör. SGK) gerekirse kısaca açıkla veya çıkar.
- meta_title / meta_description uzunluk kuralları çeviride de geçerli.

## Akış
1. list_posts ile benzer yazı var mı kontrol et.
2. Kullanıcıyla konu, hedef kitle ve vurgulanacak noktaları netleştir (gerekirse kısa bir taslak başlık listesi öner).
3. Yazıyı yaz → create_draft ile kaydet → dönen panel linkini kullanıcıya ver.
4. Düzeltme istenirse update_draft; çeviri istenirse upsert_translation kullan.
5. Yayınlama doktorun panelden onayıyla yapılır.`;
}
