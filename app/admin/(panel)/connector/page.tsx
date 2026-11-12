import { headers } from "next/headers";
import { requireAdmin } from "@/lib/admin/session";
import CopyButton from "./CopyButton";

/**
 * The origin this panel is actually served from (e.g. https://www.drerkanelci.com).
 * claude.ai does not follow redirects, so the connector URL must use the final
 * host, not a domain that redirects (drerkanelci.com → www).
 */
async function requestOrigin(): Promise<string> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "www.drerkanelci.com";
  const proto =
    h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export default async function ConnectorPage() {
  await requireAdmin();
  const secret = process.env.MCP_SECRET;
  const configured = Boolean(secret && secret.length >= 32);
  const url = configured ? `${await requestOrigin()}/api/mcp/${secret}` : "";

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Claude Bağlayıcısı</h1>
        <p className="text-sm text-gray-600 mt-1">
          Bu bağlayıcı sayesinde claude.ai&apos;deki sohbetinizden blog taslağı
          oluşturabilirsiniz. Mevcut Claude (Pro/Max) aboneliğinizle çalışır; ek
          ücret yoktur. Claude yalnızca <strong>taslak</strong> kaydedebilir;
          yayınlamak her zaman bu panelden sizin onayınızla yapılır.
        </p>
      </div>

      {!configured ? (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          Bağlayıcı kapalı: Vercel ortam değişkenlerine en az 32 karakterlik bir{" "}
          <code>MCP_SECRET</code> ekleyip siteyi yeniden yayınlayın.
        </p>
      ) : (
        <section className="rounded-2xl border bg-white p-6 space-y-3">
          <h2 className="font-semibold">Bağlayıcı adresi</h2>
          <div className="flex flex-col gap-2 sm:flex-row">
            <code className="flex-1 break-all rounded-lg bg-gray-100 px-3 py-2 text-xs">
              {url}
            </code>
            <CopyButton value={url} />
          </div>
          <p className="text-xs text-red-700">
            Bu adres bir şifre gibidir; kimseyle paylaşmayın. Sızdığını düşünürseniz
            Vercel&apos;de <code>MCP_SECRET</code> değerini değiştirip bağlayıcıyı yeni
            adresle yeniden ekleyin.
          </p>
        </section>
      )}

      <section className="rounded-2xl border bg-white p-6 space-y-3">
        <h2 className="font-semibold">Kurulum (bir kez)</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-gray-700">
          <li>
            Bilgisayardan <strong>claude.ai</strong>&apos;ye girin → sol alttaki adınıza
            tıklayın → <strong>Ayarlar</strong> → <strong>Bağlayıcılar</strong>{" "}
            (Connectors).
          </li>
          <li>
            <strong>Özel bağlayıcı ekle</strong> (Add custom connector) deyin.
          </li>
          <li>
            Ad: <code>drerkanelci Blog</code>, URL: yukarıdaki adres. Gelişmiş
            ayarlardaki OAuth alanlarını boş bırakıp <strong>Ekle</strong>&apos;ye basın.
          </li>
          <li>
            Bağlayıcı eklendikten sonra web, masaüstü ve mobil uygulamada
            kullanılabilir.
          </li>
        </ol>
      </section>

      <section className="rounded-2xl border bg-white p-6 space-y-3">
        <h2 className="font-semibold">Kullanım</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-gray-700">
          <li>
            Yeni bir sohbet açın; mesaj kutusundaki <strong>+</strong> / araçlar
            menüsünden <strong>drerkanelci Blog</strong>&apos;un açık olduğundan emin
            olun.
          </li>
          <li>
            Örnek: <em>&quot;Miyom ameliyatı sonrası iyileşme süreci hakkında bir blog
            yazısı yaz ve taslak olarak kaydet.&quot;</em>
          </li>
          <li>
            Claude sitenin yazım kurallarını (tanıtım yönetmeliği dahil) okuyup yazar,
            taslağı kaydeder ve size panel linkini verir.
          </li>
          <li>
            Bu panelde yazıyı okuyun, gerekirse düzeltin, kapak görseli ekleyin ve{" "}
            <strong>Yayınla</strong>&apos;ya basın.
          </li>
          <li>
            Çeviri için: <em>&quot;Son yazıyı İngilizce ve Almancaya çevir.&quot;</em> Her
            dil ayrıca onaylanıp yayınlanır.
          </li>
        </ol>
        <p className="text-xs text-gray-500">
          Kötüye kullanımı önlemek için bağlayıcı 24 saatte en fazla 10 yeni taslak
          oluşturabilir. Yayındaki yazıları değiştiremez veya silemez.
        </p>
      </section>
    </div>
  );
}
