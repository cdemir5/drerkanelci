import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Yönetimi · drerkanelci.com",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

// Admin pages have their own document: no analytics/ads tags, no next-intl.
export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="antialiased bg-gray-50 min-h-screen text-dark">
        {children}
      </body>
    </html>
  );
}
