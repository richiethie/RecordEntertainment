import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Record Entertainment",
  description: "Record Entertainment Application",
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

