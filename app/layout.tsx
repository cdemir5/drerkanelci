import "./globals.css";

// <html>/<body> are rendered by app/[locale]/layout.tsx (with the correct
// `lang`), app/admin/layout.tsx and app/not-found.tsx.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
