import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, GraduationCap, LineChart } from "lucide-react";
import hero from "../assets/hero-aurora.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aur.IA — EdTech criadora do LUMINAUR" },
      {
        name: "description",
        content:
          "A Aur.IA é uma startup de tecnologia educacional que desenvolve o LUMINAUR, aplicativo de aprendizagem personalizada com inteligência artificial.",
      },
      { property: "og:title", content: "Aur.IA — EdTech criadora do LUMINAUR" },
      {
        property: "og:description",
        content:
          "Aprendizagem personalizada com IA para estudantes e educadores. Conheça o LUMINAUR.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Brain,
    title: "Inteligência aplicada",
    text: "Modelos de IA usados onde geram aprendizado real: diagnóstico, explicação e revisão.",
  },
  {
    icon: GraduationCap,
    title: "Base pedagógica",
    text: "Ciência da aprendizagem e prática de sala de aula orientando cada decisão de produto.",
  },
  {
    icon: LineChart,
    title: "Impacto medido",
    text: "Indicadores de domínio e engajamento acompanhados junto com as instituições parceiras.",
  },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs tracking-widest text-primary uppercase">
              Startup EdTech
            </span>
            <h1 className="mt-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              Tecnologia que <span className="text-gradient">ilumina</span> o caminho de cada
              estudante
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              A Aur.IA une educação, dados e inteligência artificial para criar experiências de
              aprendizagem personalizadas. Nosso produto principal é o LUMINAUR.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/luminaur"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                Conhecer o LUMINAUR <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/sobre"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
              >
                Sobre a Aur.IA
              </Link>
            </div>
          </div>
          <img
            src={hero}
            alt="Ilustração de uma esfera luminosa emergindo entre formas geométricas escuras"
            width={1600}
            height={1200}
            className="rounded-4xl shadow-soft"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="rounded-3xl bg-card p-7 hairline">
              <p.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs tracking-widest text-accent uppercase">Produto</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">LUMINAUR</h2>
            <p className="mt-5 text-muted-foreground">
              Um app que diagnostica o ponto de partida, monta trilhas adaptativas, explica conteúdos
              como um tutor e mostra a evolução em painéis claros para estudantes e professores.
            </p>
            <Link
              to="/luminaur"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Ver detalhes do produto <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <dl className="grid gap-5 sm:grid-cols-2">
            {[
              ["Trilhas adaptativas", "Ajuste contínuo conforme o desempenho"],
              ["Tutor por IA", "Explicações em vários níveis de profundidade"],
              ["Revisão espaçada", "Retomada dos temas no momento certo"],
              ["Painel do educador", "Lacunas da turma visíveis antes da prova"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-background p-5 hairline">
                <dt className="font-semibold">{t}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Construímos com escolas, não apenas para elas
        </h2>
        <p className="mt-5 text-muted-foreground">
          Nossa equipe multidisciplinar acompanha cada implantação de perto, definindo métricas junto
          com coordenadores e professores.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/contato"
            className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Falar com o time
          </Link>
          <Link
            to="/equipe"
            className="rounded-full border border-border px-7 py-3 text-sm font-semibold hover:bg-secondary"
          >
            Conhecer a equipe
          </Link>
        </div>
      </section>
    </>
  );
}
