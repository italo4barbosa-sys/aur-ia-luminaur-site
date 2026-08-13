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
CREATE POLICY "Allow authenticated read" ON public.contatos FOR SELECT TO authenticated USING (true);

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

INSERT INTO public.equipe (nome, cargo, area) VALUES
('Kizan Nóbrega', 'Gerente de Projetos', 'GESTÃO'),
('Igor', 'Pesquisador', 'PESQUISA'),
('Júlio César', 'Pesquisador', 'PESQUISA'),
('Aurea', NULL, 'ADMINISTRATIVO E REDES SOCIAIS'),
('Jesumira', NULL, 'ADMINISTRATIVO E REDES SOCIAIS'),
('Anny', NULL, 'ADMINISTRATIVO E REDES SOCIAIS'),
('Junior', NULL, 'DESENVOLVIMENTO'),
('Kaleb', NULL, 'DESENVOLVIMENTO'),
('Italo', NULL, 'DESENVOLVIMENTO');
