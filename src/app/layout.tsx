import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hassaan Baig — Software Engineer · Full Stack & AI",
  description:
    "Portfolio of Hassaan Baig — Software Engineer building full-stack products and AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <a href="#featured" className="skip-link">
          Skip to work
        </a>
        {children}
      </body>
    </html>
  );
}
