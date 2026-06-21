import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased">
        <GoogleTagManager gtmId="GTM-T3GXV6LJ" />
        {children}
      </body>
    </html>
  );
}
