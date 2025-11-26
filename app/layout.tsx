import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Record Entertainment | Professional DJ Services",
  description: "Decades of experience providing unparalleled DJ services for weddings and events in Wisconsin. All The Music, All The Fun!",
  icons: {
    icon: [
      { url: '/assets/images/favicon-60.png', sizes: '60x60', type: 'image/png' },
      { url: '/assets/images/favicon-310.png', sizes: '310x310', type: 'image/png' },
      { url: '/assets/images/favicon.PNG', sizes: 'any' },
    ],
    apple: [
      { url: '/assets/images/favicon-310.png', sizes: '310x310', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-dark-200">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" sizes="60x60" href="/assets/images/favicon-60.png" />
        <link rel="icon" type="image/png" sizes="310x310" href="/assets/images/favicon-310.png" />
        <link rel="apple-touch-icon" sizes="310x310" href="/assets/images/favicon-310.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-dark-200 text-white font-sans">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

