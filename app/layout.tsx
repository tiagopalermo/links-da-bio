import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tiago Palermo | Links",
  description: "Especialista Shopee — Imersão, Diagnóstico, Calculadora e Gerenciamento de Conta.",
  openGraph: {
    title: "Tiago Palermo | Links",
    description: "Especialista Shopee — Imersão, Diagnóstico, Calculadora e Gerenciamento de Conta.",
    images: ["/images/tiago-portrait.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-[#090909] antialiased">{children}</body>
    </html>
  );
}
