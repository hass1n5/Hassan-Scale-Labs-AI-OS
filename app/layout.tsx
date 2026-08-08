import type { Metadata } from "next";
import {
  Montserrat,
  Barlow_Semi_Condensed,
  Inter,
} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-nav",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Hassan Scale Labs",
  description: "AI Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${barlow.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
