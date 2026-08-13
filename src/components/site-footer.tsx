import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <Logo className="h-7 w-7" />
            <span className="font-display text-base font-semibold">Aur.IA</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Startup de tecnologia educacional criando ferramentas de aprendizagem com inteligência
            artificial. Criadora do LUMINAUR.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <Link to="/luminaur" className="text-muted-foreground hover:text-foreground">
            LUMINAUR
          </Link>
          <Link to="/sobre" className="text-muted-foreground hover:text-foreground">
            Sobre a Aur.IA
          </Link>
          <Link to="/equipe" className="text-muted-foreground hover:text-foreground">
            Equipe
          </Link>
          <Link to="/contato" className="text-muted-foreground hover:text-foreground">
            Contato
          </Link>
        </nav>
        <div className="text-sm text-muted-foreground">
          <p>contato@auria.tech</p>
          <p className="mt-1">Brasil · remoto</p>
          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} Aur.IA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}