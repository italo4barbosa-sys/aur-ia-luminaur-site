import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="font-display text-xl font-bold">Aur.IA</span>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
              «Inteligência que transforma o aprendizado.»
            </p>
            <p className="text-sm text-muted-foreground">
              A Aur.IA é uma startup de tecnologia educacional que utiliza Inteligência Artificial para tornar o aprendizado mais acessível.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-xs text-primary">Navegação</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Início</Link>
              <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre a Aur.IA</Link>
              <Link to="/luminaur" className="text-muted-foreground hover:text-primary transition-colors">LUMINAUR</Link>
              <Link to="/equipe" className="text-muted-foreground hover:text-primary transition-colors">Equipe</Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-xs text-primary">Legal</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link>
              <span className="text-muted-foreground cursor-default">Termos de Uso</span>
              <span className="text-muted-foreground cursor-default">Privacidade</span>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-xs text-primary">Redes Sociais</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="https://www.instagram.com/aur.iabr?igsh=MXFkcTEwNG51a3hyMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
            </nav>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Aur.IA. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/50 italic">
            Aur.IA — Site Institucional v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
