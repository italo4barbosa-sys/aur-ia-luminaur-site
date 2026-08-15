import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Route as RouteIcon, MessageSquareText, BarChart3, Users, Layout, Database, Cloud, Tablet, ShieldCheck, Zap, Laptop, Smartphone } from "lucide-react";

export const Route = createFileRoute("/luminaur")({
  head: () => ({
    meta: [
      { title: "LUMINAUR | A plataforma educacional inteligente da Aur.IA" },
      {
        name: "description",
        content:
          "O LUMINAUR é a plataforma educacional inteligente da Aur.IA. Uma experiência de aprendizagem baseada em trilhas, desafios, quizzes e IA.",
      },
      { property: "og:title", content: "LUMINAUR | Plataforma Educacional Inteligente" },
      {
        property: "og:description",
        content: "Trilhas de aprendizagem, conteúdo interativo e tutor baseado em IA.",
      },
    ],
  }),
  component: LuminaurPage,
});

const features = [
  {
    icon: RouteIcon,
    title: "Trilhas de aprendizagem",
    text: "Caminhos estruturados para garantir que cada etapa do conhecimento seja consolidada.",
  },
  {
    icon: Layout,
    title: "Conteúdo interativo",
    text: "Experiências imersivas que transformam o aprendizado em algo dinâmico.",
  },
  {
    icon: Sparkles,
    title: "Quizzes e Desafios",
    text: "Prática constante para validar o entendimento e fixar o conteúdo.",
  },
  {
    icon: Zap,
    title: "Gamificação",
    text: "Elementos de jogos que tornam o processo de aprender muito mais engajador.",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento",
    text: "Visão clara do progresso e da evolução em cada módulo ou tema.",
  },
  {
    icon: MessageSquareText,
    title: "Tutor baseado em IA",
    text: "Suporte inteligente que entende suas dúvidas e adapta as explicações.",
  },
  {
    icon: Users,
    title: "Aprendizagem personalizada",
    text: "O sistema se ajusta ao seu ritmo e ao seu estilo de aprender.",
  },
];

const techStacks = [
  { icon: Sparkles, title: "Inteligência Artificial" },
  { icon: Database, title: "Banco de dados" },
  { icon: Cloud, title: "Computação em nuvem" },
  { icon: Tablet, title: "Sistemas responsivos" },
  { icon: ShieldCheck, title: "Autenticação" },
  { icon: BarChart3, title: "Análise de dados" },
];

function LuminaurPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-background to-surface/30">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
              Principal Produto
            </span>
            <h1 className="mt-5 text-5xl font-bold sm:text-7xl lg:text-8xl tracking-tight">LUMINAUR</h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              O LUMINAUR é a plataforma educacional inteligente da Aur.IA. Uma experiência de aprendizagem moderna baseada em trilhas, desafios, quizzes, progresso e Inteligência Artificial.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/contato"
                className="rounded-full bg-primary px-10 py-4 text-sm font-bold text-primary-foreground shadow-glow hover:scale-105 active:scale-95 transition-transform"
              >
                Conhecer o projeto
              </Link>
              <span className="inline-flex items-center justify-center rounded-full border border-border px-10 py-4 text-sm font-bold text-muted-foreground bg-secondary/30 backdrop-blur-sm">
                Em breve
              </span>
            </div>
          </div>
          <div className="relative w-full max-w-[420px] mx-auto lg:max-w-none">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-4xl blur-2xl opacity-20"></div>
            <div className="relative rounded-4xl border border-white/10 bg-card p-4 shadow-2xl aspect-[9/16] lg:aspect-auto lg:min-h-[500px] flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 group-hover:opacity-60 transition-opacity" />
               <div className="z-10 flex flex-col items-center gap-6">
                 <Smartphone className="h-24 w-24 text-primary animate-bounce-slow" />
                 <div className="text-center">
                    <p className="font-display font-bold text-xl mb-2">Interface Mobile-First</p>
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-8 bg-white/20 rounded-full" />)}
                    </div>
                 </div>
               </div>
               <div className="absolute bottom-10 left-6 right-6 space-y-3">
                  <div className="h-10 w-full bg-white/5 rounded-xl border border-white/5" />
                  <div className="h-10 w-full bg-white/5 rounded-xl border border-white/5" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Funcionalidades Inteligentes</h2>
          <p className="mt-4 text-muted-foreground">Tecnologia a serviço de uma educação mais eficiente.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="rounded-3xl bg-card p-8 hairline hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                <f.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Tecnologia que impulsiona nossas soluções</h2>
            <p className="mt-4 text-muted-foreground">A base técnica que sustenta o LUMINAUR e a Aur.IA.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStacks.map((t) => (
              <div key={t.title} className="flex items-center gap-4 p-6 rounded-2xl bg-background hairline group hover:bg-primary/5 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <t.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold">{t.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <div className="p-12 rounded-4xl bg-card hairline border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <h2 className="text-3xl font-bold relative z-10">O LUMINAUR é o produto principal da startup Aur.IA</h2>
          <p className="mt-6 text-lg text-muted-foreground relative z-10">
            Focado em transformar conteúdos complexos em trilhas simples, a plataforma é a materialização da nossa visão de futuro para a educação.
          </p>
          <div className="mt-10 relative z-10">
            <Link
              to="/contato"
              className="inline-flex rounded-full bg-primary px-10 py-4 text-sm font-bold text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
            >
              Falar sobre o LUMINAUR
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
