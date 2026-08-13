import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato Aur.IA — fale com o time" },
      {
        name: "description",
        content:
          "Fale com a Aur.IA sobre o LUMINAUR: demonstrações, pilotos em escolas, parcerias e imprensa.",
      },
      { property: "og:title", content: "Contato Aur.IA" },
      {
        property: "og:description",
        content: "Demonstrações do LUMINAUR, pilotos em escolas e parcerias.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <span className="text-xs tracking-widest text-primary uppercase">Contato</span>
        <h1 className="mt-4 text-4xl font-bold">Vamos conversar</h1>
        <p className="mt-5 text-muted-foreground">
          Conte seu contexto — rede pública, escola particular, cursinho ou pesquisa — e retornamos
          com os próximos passos.
        </p>
        <ul className="mt-8 space-y-4 text-sm">
          <li className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-accent" aria-hidden="true" /> contato@auria.tech
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-accent" aria-hidden="true" /> Brasil · time distribuído
          </li>
          <li className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-accent" aria-hidden="true" /> Resposta em até 2 dias úteis
          </li>
        </ul>
      </div>

      <form
        className="rounded-3xl bg-card p-6 sm:p-8 hairline"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          toast.success("Mensagem registrada! Em breve entraremos em contato.");
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm">
            Nome
            <input
              required
              name="nome"
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="text-sm">
            E-mail
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </label>
        </div>
        <label className="mt-4 block text-sm">
          Instituição
          <input
            name="instituicao"
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="mt-4 block text-sm">
          Assunto
          <select
            name="assunto"
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          >
            <option>Demonstração do LUMINAUR</option>
            <option>Piloto em escola</option>
            <option>Parceria</option>
            <option>Imprensa</option>
            <option>Trabalhar na Aur.IA</option>
          </select>
        </label>
        <label className="mt-4 block text-sm">
          Mensagem
          <textarea
            required
            name="mensagem"
            rows={5}
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </label>
        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Enviar mensagem
        </button>
        {sent && (
          <p className="mt-4 text-sm text-accent">
            Recebemos seu interesse. Responderemos no e-mail informado.
          </p>
        )}
      </form>
    </section>
  );
}