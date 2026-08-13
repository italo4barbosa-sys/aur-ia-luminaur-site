import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe Aur.IA — time multidisciplinar" },
      {
        name: "description",
        content:
          "A equipe da Aur.IA reúne educação, engenharia, dados, design e negócios para construir o LUMINAUR.",
      },
      { property: "og:title", content: "Equipe Aur.IA" },
      {
        property: "og:description",
        content: "Conheça as áreas que formam o time multidisciplinar da Aur.IA.",
      },
    ],
  }),
  component: EquipePage,
});

const areas = [
  {
    area: "Educação e currículo",
    initials: "EC",
    text: "Desenha as trilhas, os critérios de domínio e a linguagem dos feedbacks do LUMINAUR.",
  },
  {
    area: "Engenharia de software",
    initials: "ES",
    text: "Constrói o aplicativo, a infraestrutura e as integrações com sistemas escolares.",
  },
  {
    area: "Ciência de dados e IA",
    initials: "IA",
    text: "Modela a adaptação das trilhas, avalia qualidade das respostas e mede impacto real.",
  },
  {
    area: "Produto e design",
    initials: "PD",
    text: "Traduz pesquisa com estudantes e professores em interfaces simples e acessíveis.",
  },
  {
    area: "Pesquisa e avaliação",
    initials: "PA",
    text: "Acompanha pilotos, define indicadores e valida hipóteses pedagógicas com evidências.",
  },
  {
    area: "Parcerias e operações",
    initials: "PO",
    text: "Cuida do relacionamento com escolas, implantação e formação das equipes docentes.",
  },
];

function EquipePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-24">
          <span className="text-xs tracking-widest text-primary uppercase">Equipe</span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Pessoas de áreas diferentes, um mesmo objetivo
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A Aur.IA é formada por um time multidisciplinar. Cada decisão de produto passa por olhares
            pedagógicos, técnicos e humanos antes de chegar ao estudante.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <article key={a.area} className="rounded-3xl bg-card p-6 hairline">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary font-display text-sm font-semibold text-primary">
                {a.initials}
              </div>
              <h2 className="mt-4 text-lg font-semibold">{a.area}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-3xl font-semibold">Quer construir com a gente?</h2>
          <p className="mt-4 text-muted-foreground">
            Estamos sempre abertos a conversar com profissionais de educação, tecnologia e pesquisa.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Enviar mensagem
          </Link>
        </div>
      </section>
    </>
  );
}