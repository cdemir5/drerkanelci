import { redirect } from "next/navigation";
import { isAdmin, isAdminConfigured } from "@/lib/admin/session";
import { loginAction } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAdmin()) redirect("/admin");
  const { error } = await searchParams;
  const configured = isAdminConfigured();

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form
        action={loginAction}
        className="w-full max-w-sm bg-white rounded-2xl shadow-lg border p-8 space-y-5"
      >
        <div>
          <h1 className="text-xl font-bold">Blog Yönetimi</h1>
          <p className="text-sm text-gray-500 mt-1">drerkanelci.com</p>
        </div>

        {!configured && (
          <p className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm text-amber-900">
            Panel henüz yapılandırılmadı: Vercel ortam değişkenlerine{" "}
            <code>ADMIN_PASSWORD</code> ve <code>ADMIN_SESSION_SECRET</code>{" "}
            (en az 32 karakter) eklenmeli.
          </p>
        )}

        {error && (
          <p className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
            Şifre hatalı.
          </p>
        )}

        <label className="block">
          <span className="text-sm font-medium">Şifre</span>
          <input
            type="password"
            name="password"
            required
            autoFocus
            autoComplete="current-password"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </label>

        <button type="submit" className="btn-primary w-full">
          Giriş yap
        </button>
      </form>
    </main>
  );
}
