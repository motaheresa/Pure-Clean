import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/home/Footer";
import Contact from "@/components/layout/Contact";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata:Metadata = {
  title: 'PureClean - Reinigungsdienst Schweiz',
  description: 'PureClean – Professionelle Reinigungsdienste für Zuhause und Büro in der Schweiz. Schnell, effizient und zuverlässig.',
   icons: {
    icon: "/favicon.avif",
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Header />
        <main>
          {children}
        </main>
        <footer>
          <Contact />
          <Footer />
        </footer>
      </body>
    </html>
  );
}
