import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Route as RouteIcon, MessageSquareText, BarChart3, Bell, Users } from "lucide-react";
import appShot from "../assets/luminaur-app.jpg";

export const Route = createFileRoute("/luminaur")({
  head: () => ({
    meta: [
      { title: "LUMINAUR — app de estudos com IA | Aur.IA" },
      {
        name: "description",
        content:
          "LUMINAUR é o aplicativo da Aur.IA que monta trilhas de estudo personalizadas, explica conteúdos e acompanha a evolução do estudante com IA.",
      },
      { property: "og:title", content: "LUMINAUR — app de estudos com IA" },
      {
        property: "og:description",
        content: "Trilhas de estudo personalizadas, tutor por IA e acompanhamento de evolução.",
      },
    ],
  }),
  component: LuminaurPage,
});

const features = [
  {
    icon: RouteIcon,
    title: "Trilhas adaptativas",
    text: "O plano de estudo se reorganiza a cada resposta, priorizando o que ainda não foi consolidado.",
  },
  {
    icon: MessageSquareText,
    title: "Tutor conversacional",
    text: "Explicações em diferentes níveis de profundidade, com exemplos e verificação de entendimento.",
  },
  {
    icon: Sparkles,
    title: "Geração de exercícios",
    text: "Questões inéditas a partir do próprio material do estudante ou da instituição.",
  },
  {
    icon: BarChart3,
    title: "Painel de evolução",
    text: "Indicadores de domínio por tema, ritmo de estudo e previsão de desempenho.",
  },
  {
    icon: Bell,
    title: "Rotina inteligente",
    text: "Lembretes e revisões espaçadas ajustados à agenda real de cada pessoa.",
  },
  {
    icon: Users,
    title: "Visão do educador",
    text: "Relatórios de turma que apontam lacunas coletivas antes da avaliação.",
  },
];

const steps = [
  { n: "01", t: "Diagnóstico", d: "Uma avaliação curta mapeia o repertório atual e os objetivos." },
  { n: "02", t: "Trilha viva", d: "A IA monta a sequência de conteúdos e ajusta a cada sessão." },
  { n: "03", t: "Prática guiada", d: "Exercícios, correções comentadas e revisões espaçadas." },
  { n: "04", t: "Evolução visível", d: "Painéis mostram progresso real para estudante e educador." },
];

function LuminaurPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs tracking-wider text-primary uppercase">
              Produto principal
            </span>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">LUMINAUR</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Um companheiro de estudos que entende o ponto de partida de cada estudante, ilumina o
              próximo passo e mostra a evolução em dados claros.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                Solicitar demonstração
              </Link>
              <Link
                to="/sobre"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                Conhecer a Aur.IA
              </Link>
            </div>
          </div>
          <img
            src={appShot}
            alt="Interface do aplicativo LUMINAUR com trilhas de estudo e indicadores de progresso"
            width={1200}
            height={1200}
            className="rounded-4xl shadow-soft"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-semibold">O que o LUMINAUR faz</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="rounded-3xl bg-card p-6 hairline">
              <f.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-semibold">Como funciona</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n}>
                <span className="font-display text-3xl font-bold text-primary/70">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Quer levar o LUMINAUR para sua <span className="text-gradient">escola</span>?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Trabalhamos com pilotos acompanhados de perto, com métricas definidas junto à instituição.
        </p>
        <Link
          to="/contato"
          className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Falar com o time
        </Link>
      </section>
    </>
  );
}