import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Lightbulb, Sparkles, GraduationCap } from "lucide-react";
import hero from "../assets/hero-aurora.jpg";

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
      <section className="relative overflow-hidden border-b border-border aurora-bg">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs tracking-widest text-primary uppercase">
              Startup EdTech
            </span>
            <h1 className="mt-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              Inteligência que <span className="text-gradient">transforma</span> o aprendizado.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Na Aur.IA, unimos educação, tecnologia e Inteligência Artificial para criar experiências de
              aprendizagem mais inteligentes, acessíveis e personalizadas.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                Conheça a Aur.IA <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/luminaur"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
              >
                Conheça o LUMINAUR
              </Link>
            </div>
          </div>
          <div className="relative rounded-4xl bg-surface p-1 shadow-soft">
            <div className="absolute -inset-4 rounded-4xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
            <img
              src={hero}
              alt="Conceito de Inteligência Artificial e Educação"
              className="relative rounded-3xl w-full h-auto"
            />
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
              <span className="absolute -top-6 left-8 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">{s.n}</span>
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
