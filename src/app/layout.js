import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.martinmatias.com.ar"),
  title: "Desarrollo Web & Optimización SEO | Martín Matías",
  description:
    "Especialista en desarrollo web & optimización SEO. Creo sitios web modernos, ultrarrápidos y enfocados en posicionar en Google para potenciar tu negocio.",
  authors: [{ name: "Martín Matías", url: "https://www.martinmatias.com.ar" }],
  publisher: "Martín Matías",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "6ho0OeF8hKAkEARx9sy_sHjuwKCIDtcniNjfBZ1m8ko",
  },
  openGraph: {
    title: "Desarrollo Web & Optimización SEO | Martín Matías",
    description:
      "Especialista en desarrollo web & optimización SEO. Creo sitios web modernos, ultrarrápidos y enfocados en posicionar en Google para potenciar tu negocio.",
    url: "https://www.martinmatias.com.ar",
    siteName: "Martín Matías Portfolio",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web & Optimización SEO | Martín Matías",
    description:
      "Especialista en desarrollo web & optimización SEO. Creo sitios web modernos, ultrarrápidos y enfocados en posicionar en Google para potenciar tu negocio.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MRHQGZEZLK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MRHQGZEZLK');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

