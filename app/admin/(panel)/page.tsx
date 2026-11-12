import Link from "next/link";
import { locales } from "@/i18n/config";
import { requireAdmin } from "@/lib/admin/session";
import { isDbConfigured } from "@/lib/db";
import { listPostsAdmin } from "@/lib/blog/queries";
import { formatDate } from "@/lib/blog/format";
import { createEmptyPostAction } from "./actions";
import StatusBadge from "./StatusBadge";

const FILTERS = [
  { key: "", label: "Tümü" },
  { key: "taslak", label: "Taslak" },
  { key: "yayinda", label: "Yayında" },
] as const;

export default async function AdminHome({
  searchParams,
}: {
  searchParams: Promise<{ durum?: string; msg?: string }>;
}) {
  await requireAdmin();
  const { durum = "", msg } = await searchParams;

  if (!isDbConfigured()) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
        <h1 className="text-lg font-bold mb-2">Veritabanı bağlı değil</h1>
        <p className="text-sm">
          Vercel → Storage bölümünden bir Neon Postgres veritabanı oluşturup bu
          projeye bağlayın (<code>DATABASE_URL</code> otomatik eklenir), ardından{" "}
          <code>db/schema.sql</code> dosyasını Neon SQL Editor&apos;de çalıştırın.
        </p>
      </div>
    );
  }

  const status = durum === "taslak" ? "draft" : durum === "yayinda" ? "published" : undefined;
  const posts = await listPostsAdmin(status);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Blog Yazıları</h1>
          <p className="text-sm text-gray-500">
            Claude&apos;un kaydettiği taslaklar burada görünür. İnceleyip yayınlayın.
          </p>
        </div>
        <form action={createEmptyPostAction}>
          <button type="submit" className="btn-outline py-2">
            + Elle yeni yazı
          </button>
        </form>
      </div>

      {msg && (
        <p className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">
          {msg}
        </p>
      )}

      <nav className="flex gap-2 text-sm">
        {FILTERS.map((f) => (
          <Link
            key={f.key}
            href={f.key ? `/admin?durum=${f.key}` : "/admin"}
            className={`rounded-full px-3 py-1 border ${
              durum === f.key
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-600 hover:border-primary"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </nav>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed bg-white p-10 text-center text-gray-500">
          <p>Henüz yazı yok.</p>
          <p className="text-sm mt-2">
            claude.ai&apos;de bağlayıcıyı açıp &quot;… konusunda bir blog yazısı yaz ve
            taslak olarak kaydet&quot; deyin.{" "}
            <Link href="/admin/connector" className="text-primary underline">
              Kurulum
            </Link>
          </p>
        </div>
      ) : (
        <ul className="divide-y rounded-2xl border bg-white">
          {posts.map((post) => {
            const tr = post.translations.find((t) => t.locale === "tr");
            return (
              <li key={post.id}>
                <Link
                  href={`/admin/posts/${post.id}`}
                  className="flex flex-col gap-3 p-4 hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{tr?.title ?? "(Başlıksız)"}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {post.source === "mcp" ? "Claude ile oluşturuldu" : "Panelden oluşturuldu"}{" "}
                      · Güncellendi: {formatDate(post.updatedAt, "tr")}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {locales.map((l) => (
                      <StatusBadge
                        key={l}
                        label={l}
                        status={post.translations.find((t) => t.locale === l)?.status ?? null}
                      />
                    ))}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
