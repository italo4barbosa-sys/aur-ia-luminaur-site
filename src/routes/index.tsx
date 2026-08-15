import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Lightbulb, Sparkles, GraduationCap, Instagram as InstagramIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aur.IA | Inteligência que transforma o aprendizado" },
      {
        name: "description",
        content:
          "A Aur.IA une educação, tecnologia e Inteligência Artificial para criar experiências de aprendizagem mais inteligentes, acessíveis e personalizadas.",
      },
      { property: "og:title", content: "Aur.IA | Inteligência que transforma o aprendizado" },
      {
        property: "og:description",
        content:
          "A Aur.IA une educação, tecnologia e Inteligência Artificial para criar experiências de aprendizagem mais inteligentes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border aurora-bg min-h-[70vh] flex items-center">
        <div className="mx-auto max-w-4xl px-5 py-12 lg:py-24 text-center">
          <div className="z-10 relative">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
              Startup EdTech
            </span>
            <h1 className="mt-6 text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-7xl">
              Inteligência que <span className="text-gradient">transforma</span> o aprendizado.
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Na Aur.IA, unimos educação, tecnologia e Inteligência Artificial para criar experiências de
              aprendizagem mais inteligentes, acessíveis e personalizadas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/sobre"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 text-sm font-bold text-primary-foreground shadow-glow hover:scale-105 active:scale-95 transition-transform"
              >
                Conheça a Aur.IA <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/luminaur"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-10 py-4 text-sm font-bold hover:bg-secondary transition-colors"
              >
                Conheça o LUMINAUR
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Aprender tecnologia ainda pode ser difícil</h2>
          <p className="mt-4 text-muted-foreground">O conhecimento disperso e a falta de personalização são barreiras reais.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[
            { t: "Conteúdos dispersos", d: "Informação fragmentada em diversas fontes." },
            { t: "Linguagem excessivamente técnica", d: "Termos complexos que dificultam o início." },
            { t: "Falta de personalização", d: "Um método único para perfis diferentes." },
            { t: "Baixo engajamento", d: "Dificuldade em manter o foco e a motivação." },
            { t: "Nível de conhecimento", d: "Dificuldade para identificar por onde começar." },
            { t: "Evolução lenta", d: "Falta de acompanhamento claro do progresso." },
          ].map((p) => (
            <article key={p.t} className="rounded-3xl bg-card p-7 hairline hover:border-primary/50 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs tracking-widest text-accent uppercase">Inovação</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Uma nova forma de aprender.</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              A Aur.IA é a startup que combina <strong>Educação + Tecnologia + Inteligência Artificial</strong> para transformar conteúdos complexos em experiências simples e interativas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="rounded-3xl bg-background p-8 hairline text-center">
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
                <span className="text-sm font-semibold">Educação</span>
             </div>
             <div className="rounded-3xl bg-background p-8 hairline text-center">
                <Sparkles className="h-8 w-8 text-accent mx-auto mb-3" />
                <span className="text-sm font-semibold">Tecnologia</span>
             </div>
             <div className="col-span-2 rounded-3xl bg-primary/5 p-8 border border-primary/20 text-center">
                <Brain className="h-10 w-10 text-primary mx-auto mb-3" />
                <span className="text-lg font-bold">Inteligência Artificial</span>
             </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">Como funciona</h2>
          <p className="mt-4 text-muted-foreground">Quatro etapas para uma jornada de aprendizado eficiente.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Conheça", d: "O usuário cria seu perfil e realiza uma avaliação inicial." },
            { n: "02", t: "Descubra", d: "O sistema identifica seu nível real de conhecimento." },
            { n: "03", t: "Aprenda", d: "O usuário recebe uma trilha de aprendizagem personalizada." },
            { n: "04", t: "Evolua", d: "IA acompanha o progresso e sugere melhorias contínuas." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-3xl p-8 bg-card hairline group hover:bg-surface transition-all">
              <span className="absolute -top-8 left-6 text-8xl font-black text-primary/40 group-hover:text-primary/60 transition-colors drop-shadow-[0_0_20px_rgba(var(--primary),0.5)] select-none">{s.n}</span>
              <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
          <Lightbulb className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl font-semibold sm:text-4xl">IA que ajuda você a aprender.</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A Inteligência Artificial é utilizada na Aur.IA como uma <strong>ferramenta de apoio</strong> para personalizar conteúdos, adaptar explicações e identificar dificuldades, garantindo que ninguém fique para trás.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-4xl bg-gradient-to-br from-card to-background p-10 hairline border-primary/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <h2 className="text-3xl font-semibold mb-8">Siga-nos no Instagram</h2>
          <div className="flex flex-col items-center gap-6">
            <p className="text-muted-foreground max-w-xl">
              Acompanhe nossa jornada, novidades e conteúdos exclusivos sobre educação e IA diretamente no nosso perfil oficial.
            </p>
            <a 
              href="https://www.instagram.com/aur.iabr?igsh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <svg 
                className="h-6 w-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Abrir Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-4xl bg-gradient-to-br from-card to-background p-10 hairline border-primary/20 text-center">
           <h2 className="text-3xl font-semibold">Nossa evolução</h2>
           <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { v: "v1.0", d: "Primeira versão do produto." },
                { v: "v2.0", d: "Expansão da IA e personalização." },
                { v: "v2.0.1", d: "Melhorias e otimizações." }
              ].map(r => (
                <div key={r.v} className="rounded-2xl bg-surface p-6 hairline">
                  <span className="text-primary font-bold">{r.v}</span>
                  <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </>
  );
}
