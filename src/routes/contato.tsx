import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Aur.IA" },
      {
        name: "description",
        content: "Entre em contato com a equipe da Aur.IA. Estamos prontos para tirar suas dúvidas e ouvir suas sugestões.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("contatos")
        .insert([formData]);

      if (error) throw error;

      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (error: any) {
      console.error("Erro ao enviar contato:", error);
      toast.error("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-5 py-20 lg:grid-cols-[1fr_1.1fr] items-start">
      <div className="space-y-8">
        <div>
          <span className="text-xs tracking-widest text-primary font-bold uppercase">Contato</span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl leading-tight">Fale com a Aur.IA</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Tem alguma dúvida, sugestão ou interesse em nossa tecnologia? Preencha o formulário e nossa equipe retornará o mais rápido possível.
          </p>
        </div>
        
        <div className="space-y-6">
          <a href="mailto:contato@auria.tech" className="flex items-center gap-4 group">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">E-mail</p>
              <p className="font-semibold">contato@auria.tech</p>
            </div>
          </a>
          
          <a href="#" className="flex items-center gap-4 group">
            <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Instagram className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Acompanhe-nos</p>
              <p className="font-semibold">Instagram da Aur.IA</p>
            </div>
          </a>
        </div>

        <div className="rounded-3xl bg-surface p-8 hairline border-primary/10">
           <h3 className="font-bold">Acompanhe a Aur.IA</h3>
           <p className="mt-2 text-sm text-muted-foreground">Conteúdos sobre tecnologia, Inteligência Artificial, educação e inovação.</p>
        </div>
      </div>

      <form
        className="rounded-4xl bg-card p-8 sm:p-10 hairline shadow-glow relative overflow-hidden"
        onSubmit={handleSubmit}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="nome" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Nome</label>
            <input
              id="nome"
              required
              name="nome"
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
              placeholder="Seu nome completo"
              className="w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">E-mail</label>
            <input
              id="email"
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="seu@email.com"
              className="w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="mensagem" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Mensagem</label>
            <textarea
              id="mensagem"
              required
              name="mensagem"
              value={formData.mensagem}
              onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              rows={5}
              placeholder="Como podemos ajudar?"
              className="w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-glow hover:opacity-95 disabled:opacity-70 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <><Send className="h-4 w-4" /> Enviar mensagem</>}
          </button>
        </div>
      </form>
    </section>
  );
}
