CREATE TABLE public.contatos (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    nome text NOT NULL,
    email text NOT NULL,
    mensagem text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.contatos TO authenticated;
GRANT SELECT, INSERT ON public.contatos TO anon;
GRANT ALL ON public.contatos TO service_role;

ALTER TABLE public.contatos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON public.contatos FOR INSERT WITH CHECK (true);

CREATE TABLE public.equipe (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    nome text NOT NULL,
    cargo text,
    area text NOT NULL,
    descricao text,
    foto text,
    ordem integer DEFAULT 0,
    ativo boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now()
);

GRANT SELECT ON public.equipe TO anon;
GRANT SELECT ON public.equipe TO authenticated;
GRANT ALL ON public.equipe TO service_role;

ALTER TABLE public.equipe ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON public.equipe FOR SELECT USING (true);

INSERT INTO public.equipe (nome, cargo, area, ordem) VALUES
('Kizan Nóbrega', 'Gerente de Projetos', 'GESTÃO', 1),
('Igor', 'Pesquisador', 'PESQUISA', 2),
('Júlio César', 'Pesquisador', 'PESQUISA', 3),
('Aurea', 'Administrativo e Redes Sociais', 'ADMINISTRATIVO E REDES SOCIAIS', 4),
('Jesumira', 'Administrativo e Redes Sociais', 'ADMINISTRATIVO E REDES SOCIAIS', 5),
('Anny', 'Administrativo e Redes Sociais', 'ADMINISTRATIVO E REDES SOCIAIS', 6),
('Junior', 'Desenvolvimento', 'DESENVOLVIMENTO', 7),
('Kaleb', 'Desenvolvimento', 'DESENVOLVIMENTO', 8),
('Italo', 'Desenvolvimento', 'DESENVOLVIMENTO', 9);