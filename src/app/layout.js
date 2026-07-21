import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Desarrollo Web & Optimización SEO | Martín Matías",
  description:
    "Especialista en desarrollo web & optimización SEO. Creo sitios web modernos, ultrarrápidos y enfocados en posicionar en Google para potenciar tu negocio.",
  verification: {
    google: "6ho0OeF8hKAkEARx9sy_sHjuwKCIDtcniNjfBZ1m8ko",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
