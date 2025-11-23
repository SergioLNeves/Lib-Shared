# Sistema de Documentação Automática

## Visão Geral

Este projeto possui um sistema de documentação automática que gera páginas de documentação a partir dos arquivos Markdown (.md) localizados nos componentes atoms.

## Estrutura

### Parser de Markdown (`src/lib/md-parser.ts`)

- **`parseMarkdown(content: string)`**: Converte conteúdo Markdown em estrutura de dados
- **`getComponentDocs()`**: Carrega automaticamente todos os arquivos `.md` dos componentes atoms usando Vite's `import.meta.glob`

### Renderer de Markdown (`src/docs/markdown-renderer/`)

Componente React que renderiza a estrutura de seções do Markdown com suporte a:
- Headings (h1-h6)
- Parágrafos com formatação inline (bold, italic, code)
- Blocos de código
- Tabelas
- Links

### Rotas Dinâmicas

#### `/docs/$component` (`src/routes/docs.$component.tsx`)
Rota dinâmica que carrega e renderiza automaticamente a documentação de qualquer componente atom que tenha um arquivo `.md` correspondente.

**Exemplo**: `/docs/button` renderiza o conteúdo de `button.md`

### Componentes de Documentação

#### Header (`src/docs/header/`)
- Usa o componente **NavigationMenu** dos atoms
- Menu dropdown com lista de componentes
- Link para GitHub usando o componente **Button** dos atoms

#### Sidebar (`src/docs/sidebar/`)
- Gera automaticamente links para todos os componentes documentados
- Indica a rota ativa

#### Layout (`src/docs/layout/`)
- Estrutura principal com header e container
- Suporta opção de ocultar o header

## Componentes Disponíveis

Atualmente documentados via Markdown:
- **button** - `/docs/button`
- **card** - `/docs/card`
- **navigation-menu** - `/docs/navigation-menu`

## Como Adicionar Novos Componentes

1. Crie um arquivo `.md` na pasta do componente:
   ```
   src/registry/components/atoms/[nome-componente]/[nome-componente].md
   ```

2. Siga o template padrão em `DOCS_TEMPLATE.md`:
   - Título e descrição curta
   - Seção de Importação
   - Uso Básico com exemplo `live`
   - Variantes/Estrutura (se aplicável)
   - Tabela de propriedades

3. O componente aparecerá automaticamente:
   - Na sidebar
   - No dropdown do header
   - Na página inicial como botão

Para detalhes sobre o padrão de documentação, consulte `DOCS_TEMPLATE.md`.

## Exemplos Interativos

Os exemplos de código podem ser renderizados como componentes interativos ao vivo adicionando a flag `live` após a linguagem do bloco de código:

### Sintaxe

````markdown
```tsx live
<Button variant="primary">Clique aqui</Button>
```
````

### Recursos

- ✅ Renderização ao vivo do componente
- ✅ Preview interativo (você pode clicar nos botões!)
- ✅ Código colapsável com "Ver código"
- ✅ Suporte a dark mode
- ✅ Suporte a múltiplos componentes juntos

### Componentes Disponíveis

Os seguintes componentes podem ser usados nos exemplos `live`:
- `Button` - Todas as variantes
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink`

### Exemplo com Múltiplos Componentes

````markdown
```tsx live
<>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
</>
```
````

### Código Estático (sem `live`)

Para mostrar apenas o código sem renderização:

````markdown
```tsx
<Button variant="primary">Exemplo</Button>
```
````

## Uso dos Componentes Atoms na Documentação

### Button
Usado para links de ação na página inicial e no header:
```tsx
<Button variant="primary" asChild>
  <a href="/docs/button">Button</a>
</Button>
```

### NavigationMenu
Usado no header para navegação principal:
```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Componentes</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* Links dos componentes */}
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Desenvolvimento

Para rodar o servidor de desenvolvimento:
```bash
pnpm run dev
```

Acesse:
- Página inicial: `http://localhost:3000`
- Documentação do Button: `http://localhost:3000/docs/button`
- Documentação do Card: `http://localhost:3000/docs/card`
- Documentação do Navigation Menu: `http://localhost:3000/docs/navigation-menu`

## Dark Mode

O sistema de documentação possui suporte completo ao modo escuro, seguindo o mesmo padrão dos componentes atoms (`.dark` class).

### Implementação

- **Hook**: `useDarkMode` - Gerencia o estado do tema com localStorage e preferência do sistema
- **Toggle**: Botão no header com ícones de Sun/Moon (lucide-react)
- **Persistência**: O tema escolhido é salvo no localStorage
- **Auto-detect**: Detecta automaticamente a preferência do sistema operacional

### Uso

O botão de toggle está disponível no header. Ao clicar, alterna entre modo claro e escuro. A preferência é salva automaticamente.

### Estilos Dark Mode

Todos os componentes de documentação possuem variáveis CSS específicas para dark mode:
- Header
- Sidebar
- Content (incluindo código, tabelas, texto)
- Markdown renderer

Os componentes atoms (Button, NavigationMenu, Card) já possuem suporte nativo ao dark mode através da classe `:global(.dark)`.

## Características

✅ **Geração automática** - Novos componentes com `.md` aparecem automaticamente
✅ **Type-safe** - Totalmente tipado com TypeScript
✅ **Roteamento dinâmico** - Usa TanStack Router para rotas dinâmicas
✅ **Integração nativa** - Usa os próprios componentes da biblioteca para UI
✅ **Hot reload** - Mudanças nos arquivos MD são refletidas automaticamente
✅ **Dark Mode** - Suporte completo com toggle e persistência de preferência
