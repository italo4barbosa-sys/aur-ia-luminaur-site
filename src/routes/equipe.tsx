import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Nossa Equipe | Aur.IA" },
      {
        name: "description",
        content: "Conheça as pessoas por trás da Aur.IA, a startup de EdTech que está transformando o aprendizado.",
      },
    ],
  }),
  component: EquipePage,
});

type Membro = {
  id: string;
  nome: string;
  cargo: string | null;
  area: string;
  descricao: string | null;
};

const defaultEquipe: Membro[] = [
  { 
    id: "1", 
    nome: "Kizan Nóbrega", 
    cargo: "Gerente de Projetos", 
    area: "GESTÃO",
    descricao: "Responsável pelo gerenciamento, organização e acompanhamento do projeto."
  },
  { 
    id: "2", 
    nome: "Igor", 
    cargo: "Pesquisador", 
    area: "PESQUISA",
    descricao: "Responsáveis pelas atividades relacionadas à pesquisa e levantamento de informações que apoiam o desenvolvimento da solução."
  },
  { 
    id: "3", 
    nome: "Júlio César", 
    cargo: "Pesquisador", 
    area: "PESQUISA",
    descricao: "Responsáveis pelas atividades relacionadas à pesquisa e levantamento de informações que apoiam o desenvolvimento da solução."
  },
  { 
    id: "4", 
    nome: "Aurea", 
    cargo: "Administrativo e Redes Sociais", 
    area: "ADMINISTRATIVO E REDES SOCIAIS",
    descricao: "Responsáveis pelas atividades administrativas e pela presença/comunicação da Aur.IA nas redes sociais."
  },
  { 
    id: "5", 
    nome: "Jesumira", 
    cargo: "Administrativo e Redes Sociais", 
    area: "ADMINISTRATIVO E REDES SOCIAIS",
    descricao: "Responsáveis pelas atividades administrativas e pela presença/comunicação da Aur.IA nas redes sociais."
  },
  { 
    id: "6", 
    nome: "Anny", 
    cargo: "Administrativo e Redes Sociais", 
    area: "ADMINISTRATIVO E REDES SOCIAIS",
    descricao: "Responsáveis pelas atividades administrativas e pela presença/comunicação da Aur.IA nas redes sociais."
  },
  { 
    id: "7", 
    nome: "Junior", 
    cargo: "Desenvolvimento", 
    area: "DESENVOLVIMENTO",
    descricao: "Responsáveis pelo desenvolvimento técnico das soluções digitais da Aur.IA."
  },
  { 
    id: "8", 
    nome: "Kaleb", 
    cargo: "Desenvolvimento", 
    area: "DESENVOLVIMENTO",
    descricao: "Responsáveis pelo desenvolvimento técnico das soluções digitais da Aur.IA."
  },
  { 
    id: "9", 
    nome: "Italo", 
    cargo: "Desenvolvimento", 
    area: "DESENVOLVIMENTO",
    descricao: "Responsáveis pelo desenvolvimento técnico das soluções digitais da Aur.IA."
  },
];

function EquipePage() {
  const [equipe, setEquipe] = useState<Membro[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipe = async () => {
      try {
        const { data, error } = await supabase
          .from("equipe")
          .select("id, nome, cargo, area, descricao")
          .eq("ativo", true)
          .order("ordem", { ascending: true });

        if (error) throw error;
        setEquipe(data.length > 0 ? (data as Membro[]) : defaultEquipe);
      } catch (err) {
        console.error("Erro ao buscar equipe:", err);
        setEquipe(defaultEquipe);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipe();
  }, []);

  const areas = ["GESTÃO", "PESQUISA", "ADMINISTRATIVO E REDES SOCIAIS", "DESENVOLVIMENTO"];

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:py-24 text-center">
          <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Nossa Equipe</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-6xl tracking-tight leading-[1.1]">
            A equipe da <span className="text-gradient">Aur.IA</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Organizada por áreas, unindo especialistas dedicados a transformar a educação através da inovação.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        {loading && equipe.length === 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-40 rounded-3xl bg-surface animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-20">
            {areas.map((area) => (
              <div key={area}>
                <h2 className="text-xl font-bold text-primary mb-8 border-b border-primary/20 pb-2 inline-block">
                  {area}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {equipe
                    .filter((m) => m.area === area)
                    .map((m) => (
                      <article key={m.id} className="rounded-3xl bg-card p-8 hairline hover:border-primary/40 transition-colors flex flex-col justify-between">
                        <div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-bold">{m.nome}</h3>
                            {m.cargo && <p className="text-sm font-semibold text-accent">{m.cargo}</p>}
                          </div>
                          {m.descricao && (
                            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                              {m.descricao}
                            </p>
                          )}
                        </div>
                        <p className="mt-6 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                          {m.area}
                        </p>
                      </article>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="bg-surface border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="text-sm text-muted-foreground italic">
            Equipe multidisciplinar dedicada à inovação tecnológica e educacional.
          </p>
        </div>
      </section>
    </>
  );
}
