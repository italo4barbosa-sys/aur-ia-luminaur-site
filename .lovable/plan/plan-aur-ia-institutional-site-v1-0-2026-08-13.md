# Plan: Aur.IA Institutional Site v1.0

Update the Aur.IA institutional site to match the full specified identity, including new visual style (Blue/Purple), detailed sections (Problem, Solution, How it Works, etc.), and real Lovable Cloud integration for contact and team management.

## User Review Required

> [!IMPORTANT]
> The site will use a new color palette (Blue/Purple/Dark) to replace the current Teal/Amber theme, as requested.

- **Supabase Integration**: I will set up tables for `contatos` and `equipe`. Should I prepopulate the `equipe` table with the provided names, or just build the UI to show them? (I will assume prepopulating for a 100% functional site).

## Proposed Changes

### 1. Visual Identity & Styles
- Update `src/styles.css` with the new modern/tech palette: Blue, Purple, White, with dark contrasts.
- Adjust gradients and "aura" effects to use these new colors.
- Update `src/components/logo.tsx` to match the new identity (Intelligence + Light).

### 2. Database Schema (Lovable Cloud)
- Create `contatos` table: `id`, `nome`, `email`, `mensagem`, `created_at`.
- Create `equipe` table: `id`, `nome`, `cargo`, `area`, `descricao`, `foto`, `ordem`, `ativo`, `created_at`.
- Enable RLS and set appropriate policies (public insert for contacts, public read for team).

### 3. Core Pages Update
#### Home (`src/routes/index.tsx`)
- New Hero with the specified title/subtitle and "Conheça o LUMINAUR" / "Conheça a Aur.IA" buttons.
- **Problem Section**: Cards for dispersed content, technical language, etc.
- **Solution Section**: "Educação + Tecnologia + IA" visual.
- **How it Works**: 4-step process (Conheça, Descubra, Aprenda, Evolua).
- **AI Section**: Explaining IA as a support tool.

#### LUMINAUR (`src/routes/luminaur.tsx`)
- Detailed features: adaptive trails, AI tutor, progress tracking.
- Clear separation between Startup (Aur.IA) and App (LUMINAUR).

#### Sobre (`src/routes/sobre.tsx`)
- Updated "Quem somos" text.
- Mission, Vision, and Values sections with the new content.

#### Equipe (`src/routes/equipe.tsx`)
- Organized by area: Gestão, Pesquisa, Administrativo/Redes, Desenvolvimento.
- Dynamic fetching from Supabase with a fallback to the provided names.

#### Contato (`src/routes/contato.tsx`)
- Connect the form to the real `contatos` table.
- Implement loading states, success/error toasts, and validation.

### 4. Components & Navigation
- Update `src/components/site-header.tsx` and `src/components/site-footer.tsx` with corrected links and links to social media (Instagram).
- Ensure full responsiveness across all viewports.

## Technical Details
- **Stack**: TanStack Start v1 (React 19, Vite 7).
- **Styling**: Tailwind CSS v4.
- **Backend**: Lovable Cloud (Supabase) via `@supabase/supabase-js`.
- **Form Handling**: Client-side validation + server-side storage.
- **Security**: RLS for all tables; no sensitive keys in frontend.
