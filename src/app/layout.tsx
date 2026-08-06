import type { Metadata } from "next";
import { Caveat, Montserrat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ui",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Unique Catering & Bakery",
  description: "Transforming special events and moments into memorable culinary experiences in Austin, TX.",
  icons: {
    icon: "/icono-unique.png",
    shortcut: "/icono-unique.png",
    apple: "/icono-unique.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icono-unique.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/icono-unique.png" />
      </head>
      <body
        className={`${caveat.variable} ${playfair.variable} ${montserrat.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
