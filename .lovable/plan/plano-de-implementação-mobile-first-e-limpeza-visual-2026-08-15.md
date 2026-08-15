# Plano de Implementação: Mobile First e Limpeza Visual

O objetivo é transformar a arquitetura do site para seguir a abordagem **Mobile First**, remover imagens genéricas não solicitadas e garantir que todos os links do Instagram apontem para o perfil oficial.

## 1. Abordagem Mobile First (CSS e Componentes)
*   **Ajustes Globais (CSS):** Revisar `src/styles.css` para garantir que utilitários e variáveis favoreçam telas pequenas por padrão.
*   **Componentes Estruturais:**
    *   `SiteHeader`: Garantir que o menu mobile seja a interação principal e ocupe bem o espaço.
    *   `SiteFooter`: Ajustar o empilhamento de colunas para mobile (single column).
*   **Páginas (Responsividade):**
    *   Reorganizar grids de `1fr` (mobile) para `repeat(n, 1fr)` (desktop) usando prefixos `sm:`, `md:`, `lg:`.
    *   Ajustar tamanhos de fonte (`text-2xl` no mobile vs `text-4xl` no desktop).
    *   Garantir que botões tenham área de toque mínima de 44px.

## 2. Remoção de Imagens Genéricas
*   **Remover Assets:** Deletar `src/assets/hero-aurora.jpg` e `src/assets/luminaur-app.jpg`.
*   **Substituição Visual:**
    *   Substituir a imagem do Hero por elementos abstratos em CSS (gradientes, glows, formas geométricas).
    *   Substituir mockups do app por representações esquemáticas (skeletons) ou ícones tecnológicos estilizados.

## 3. Link do Instagram
*   **Padronização:** Substituir todas as ocorrências de links do Instagram pelo link oficial: `https://www.instagram.com/aur.iabr?igsh`.
*   **Verificação:** Garantir que todos abram em nova aba (`target="_blank"`).

## Detalhes Técnicos
*   Utilização intensiva de `grid-cols-1` por padrão e expansão progressiva.
*   Uso de `aspect-ratio` e gradientes OKLCH para preencher espaços visuais sem imagens.
*   Remoção de imports de imagens nos arquivos `.tsx`.

---
**Observação:** O desenvolvimento focará primeiro na perfeição da visualização em smartphones (360px-480px) antes de qualquer ajuste para telas maiores.
