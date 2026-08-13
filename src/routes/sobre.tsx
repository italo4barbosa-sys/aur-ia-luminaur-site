import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, HeartHandshake, ShieldCheck, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Aur.IA — propósito e valores" },
      {
        name: "description",
        content:
          "Conheça a Aur.IA: startup EdTech multidisciplinar que une educação, dados e design para tornar o aprendizado personalizado acessível.",
      },
      { property: "og:title", content: "Sobre a Aur.IA" },
      {
        property: "og:description",
        content: "Propósito, valores e forma de trabalho da startup EdTech criadora do LUMINAUR.",
      },
    ],
  }),
  component: SobrePage,
});

const values = [
  {
    icon: Compass,
    title: "Pedagogia primeiro",
    text: "Nenhuma tecnologia entra no produto sem uma justificativa pedagógica clara.",
  },
  {
    icon: HeartHandshake,
    title: "Feito com educadores",
    text: "Professores participam do desenho, dos testes e da avaliação de cada funcionalidade.",
  },
  {
    icon: ShieldCheck,
    title: "Dados com responsabilidade",
    text: "Privacidade, transparência e uso mínimo de dados como princípios de engenharia.",
  },
  {
    icon: Lightbulb,
    title: "Simplicidade radical",
    text: "Se a pessoa precisa de treinamento para usar, o problema é nosso, não dela.",
  },
];

function SobrePage() {
  return (
    <>
      <section className="border-b border-border aurora-bg">
        <div className="mx-auto max-w-3xl px-5 py-24">
          <span className="text-xs tracking-widest text-primary uppercase">Sobre nós</span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Aprender bem não deveria depender de sorte
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A Aur.IA nasceu da constatação de que o acompanhamento individual — aquilo que mais
            transforma o aprendizado — é justamente o que falta em salas cheias e rotinas apertadas.
            Construímos tecnologia para devolver esse acompanhamento a estudantes e educadores.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
        <div className="rounded-3xl bg-card p-8 hairline">
          <h2 className="text-2xl font-semibold">Missão</h2>
          <p className="mt-3 text-muted-foreground">
            Tornar a aprendizagem personalizada acessível em qualquer contexto escolar, combinando
            inteligência artificial, ciência da aprendizagem e design cuidadoso.
          </p>
        </div>
        <div className="rounded-3xl bg-card p-8 hairline">
          <h2 className="text-2xl font-semibold">Visão</h2>
          <p className="mt-3 text-muted-foreground">
            Ser a referência latino-americana em tecnologia educacional que amplia o trabalho do
            professor em vez de tentar substituí-lo.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-semibold">Nossos valores</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <article key={v.title} className="rounded-3xl bg-background p-6 hairline">
                <v.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="text-3xl font-semibold">Uma equipe multidisciplinar</h2>
        <p className="mt-4 text-muted-foreground">
          Educação, engenharia, dados, design e negócios trabalhando no mesmo ritmo — é isso que
          permite ir de uma hipótese pedagógica a uma funcionalidade testada em sala.
        </p>
        <Link
          to="/equipe"
          className="mt-8 inline-flex rounded-full border border-border px-7 py-3 text-sm font-semibold hover:bg-secondary"
        >
          Conhecer a equipe
        </Link>
      </section>
    </>
  );
}