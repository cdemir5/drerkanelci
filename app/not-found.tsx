import Link from "next/link";

// Fallback for URLs that don't match any route (outside app/[locale]).
export default function GlobalNotFound() {
  return (
    <html lang="tr">
      <body className="antialiased">
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">
              Aradığınız sayfa bulunamadı
            </p>
            <Link href="/" className="btn-primary">
              Ana Sayfaya Dön
            </Link>
          </div>
        </section>
      </body>
    </html>
  );
}
