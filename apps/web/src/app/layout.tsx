import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CRMHosp Autoatendimento",
  description: "Portal inicial de autoatendimento do paciente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

