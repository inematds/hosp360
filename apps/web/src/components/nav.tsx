"use client";

import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/painel", label: "Meu Painel" },
  { href: "/agendamento", label: "Agendamento" },
  { href: "/consultas", label: "Consultas" },
  { href: "/atendimento", label: "Atendimento" },
  { href: "/notificacoes", label: "Notificacoes" },
  { href: "/admin", label: "Admin" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" className="site-logo">
          <span className="logo-mark">H</span>
          <span className="logo-text">Hosp360</span>
        </a>
        <nav className="site-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? " nav-active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-right">
          <span className="user-badge">Maria Silva</span>
          <a href="/login" className="nav-link login-link">Sair</a>
        </div>
      </div>
    </header>
  );
}
