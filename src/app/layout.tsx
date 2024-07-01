import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fast PWA",
  description: "Progressive Web App built with fast-PWA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
