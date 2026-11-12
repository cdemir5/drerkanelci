import Link from "next/link";
import { requireAdmin } from "@/lib/admin/session";
import { logoutAction } from "./actions";

export default async function PanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await requireAdmin();

  return (
    <>
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 min-h-16 py-3 flex flex-wrap items-center justify-between gap-3">
          <Link href="/admin" className="font-bold text-dark">
            drerkanelci · <span className="text-primary">Blog Yönetimi</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/admin" className="hover:text-primary">
              Yazılar
            </Link>
            <Link href="/admin/connector" className="hover:text-primary">
              Claude Bağlayıcısı
            </Link>
            <a href="/blog" target="_blank" rel="noreferrer" className="hover:text-primary">
              Blogu Gör ↗
            </a>
            <form action={logoutAction}>
              <button type="submit" className="text-gray-500 hover:text-red-600">
                Çıkış
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </>
  );
}
