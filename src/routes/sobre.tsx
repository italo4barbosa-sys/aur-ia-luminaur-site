import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, HeartHandshake, ShieldCheck, Lightbulb, Target, Eye, Star } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Aur.IA | Iluminando caminhos para um aprendizado inteligente" },
      {
        name: "description",
        content:
          "A Aur.IA é uma startup de tecnologia educacional (EdTech) que utiliza Inteligência Artificial para tornar o aprendizado mais acessível, prático e personalizado.",
      },
      { property: "og:title", content: "Sobre a Aur.IA" },
      {
        property: "og:description",
        content: "A EdTech que utiliza IA para democratizar o acesso ao conhecimento tecnológico.",
      },
    ],
  }),
  component: SobrePage,
});

const values = [
  {
    icon: Star,
    title: "Inovação",
    text: "Buscar novas formas de utilizar tecnologia para melhorar a educação.",
  },
  {
    icon: HeartHandshake,
    title: "Acessibilidade",
    text: "Tornar o conhecimento mais acessível a todos.",
  },
  {
    icon: ShieldCheck,
    title: "Ética",
    text: "Utilizar Inteligência Artificial de maneira responsável e transparente.",
  },
  {
    icon: Compass,
    title: "Aprendizado",
    text: "Valorizar a evolução contínua e o desenvolvimento humano.",
  },
  {
    icon: Lightbulb,
    title: "Pessoas",
    text: "Colocar o estudante no centro de toda a experiência educacional.",
  },
];

function SobrePage() {
  return (
    <>
      <section className="border-b border-border aurora-bg">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:py-24 text-center sm:text-left">
          <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Sobre a Aur.IA</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-6xl leading-[1.1] tracking-tight">
            Iluminando caminhos para um aprendizado <span className="text-gradient">mais inteligente</span>.
          </h1>
          <div className="mt-10 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed mx-auto sm:mx-0 max-w-2xl">
            <p>
              A Aur.IA é uma startup de tecnologia educacional (EdTech) que utiliza Inteligência Artificial, tecnologia e metodologias de aprendizagem interativa para tornar o aprendizado mais acessível, prático e personalizado.
            </p>
            <p>
              Acreditamos que aprender tecnologia não precisa ser complicado. Por isso, desenvolvemos soluções que transformam conteúdos complexos em experiências mais simples, interativas e personalizadas.
            </p>
            <p>
              Nosso objetivo é utilizar a tecnologia não para substituir o processo de aprendizagem, mas para torná-lo mais eficiente e acessível a todas as pessoas.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
        <div className="rounded-4xl bg-card p-10 hairline flex flex-col items-start gap-4 hover:border-primary/40 transition-colors">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Nossa Missão</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Democratizar o acesso ao conhecimento tecnológico por meio de experiências educacionais inteligentes, tornando o aprendizado mais acessível, interativo e personalizado.
          </p>
        </div>
        <div className="rounded-4xl bg-card p-10 hairline flex flex-col items-start gap-4 hover:border-accent/40 transition-colors">
          <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Eye className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-2xl font-bold">Nossa Visão</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Tornar a Aur.IA uma referência em soluções educacionais baseadas em Inteligência Artificial, contribuindo para formar pessoas mais preparadas para o futuro tecnológico.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold text-center">Nossos Valores</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <article key={v.title} className="rounded-3xl bg-background p-8 hairline hover:shadow-glow transition-all">
                <v.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="text-3xl font-bold">Conheça o time por trás da Aur.IA</h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Uma equipe multidisciplinar focada em transformar a educação através da inovação.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/equipe"
            className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
          >
            Ver nossa equipe
          </Link>
          <Link
            to="/contato"
            className="rounded-full border border-border px-8 py-4 text-sm font-bold hover:bg-secondary transition-colors"
          >
            Entre em contato
          </Link>
        </div>
      </section>
    </>
  );
}
