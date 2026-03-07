import type { Metadata } from "next";
import { Nav } from "../components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hosp360 - Autoatendimento Hospitalar",
  description: "Portal de autoatendimento do paciente - Agendamento, consultas, atendimento e comunicacao hospitalar integrada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
