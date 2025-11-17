# Lib Shared 🎨

Biblioteca de componentes React com **Tailwind CSS v4**, **TypeScript** e **Storybook**. Componentes prontos para copiar e colar no seu projeto.

---

## 🚀 Instalação Rápida

Dois métodos para adicionar componentes:

### Método 1: Via CLI (Estilo shadcn/ui - Recomendado)

Copia o código-fonte diretamente para seu projeto:

```bash
# Adicionar componente Button
npx @sergiolneves/lib-shared add button

# Ou com pnpm
pnpm dlx @sergiolneves/lib-shared add button

# Listar componentes disponíveis
npx @sergiolneves/lib-shared list
```

**O que acontece:**
- ✅ Cria `src/components/ui/button.tsx` no seu projeto
- ✅ Cria `src/lib/utils.ts` (utilitário cn)
- ✅ Instala dependências necessárias automaticamente

### Método 2: Instalação como pacote NPM

Instala a biblioteca completa:

```bash
npm install @sergiolneves/lib-shared
# ou
pnpm add @sergiolneves/lib-shared
# ou
yarn add @sergiolneves/lib-shared
```

---

## 📖 Uso

### Com CLI (código no seu projeto)

```tsx
import { Button } from '@/components/ui/button'

function App() {
  return <Button variant="default">Clique aqui</Button>
}
```

### Como pacote NPM

```tsx
import { Button } from '@sergiolneves/lib-shared'

function App() {
  return <Button variant="default">Clique aqui</Button>
}
```

---

## ⚙️ Configuração Tailwind CSS v4

A biblioteca usa Tailwind CSS v4. Configure no seu projeto:

**1. Instalar Tailwind:**

```bash
pnpm add -D tailwindcss @tailwindcss/vite
```

**2. Configurar `vite.config.ts`:**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src", // Importante para os imports
    },
  },
})
```

**3. Adicionar ao `src/index.css`:**

```css
@import "tailwindcss";
```

---

## 🎨 Componentes

### Button

Componente de botão versátil com múltiplas variantes e tamanhos.

**Variantes:** `default` | `destructive` | `outline` | `secondary` | `ghost` | `link`  
**Tamanhos:** `sm` | `default` | `lg` | `icon` | `icon-sm` | `icon-lg`

```tsx
import { Button } from '@sergiolneves/lib-shared'

// Variantes
<Button variant="default">Padrão</Button>
<Button variant="destructive">Deletar</Button>
<Button variant="outline">Cancelar</Button>

// Tamanhos
<Button size="sm">Pequeno</Button>
<Button size="lg">Grande</Button>

// Com ícones
<Button>
  <svg className="size-4">...</svg>
  Adicionar
</Button>

// Desabilitado
<Button disabled>Desabilitado</Button>
```

### cn (utilitário)

Combina classes CSS com Tailwind merge:

```tsx
import { cn } from '@sergiolneves/lib-shared'

const className = cn(
  'base-class',
  condition && 'conditional-class'
)
```

---

## 🛠️ Desenvolvimento

```bash
pnpm run dev              # Dev server
pnpm run storybook        # Storybook (porta 6006)
pnpm run build:lib        # Build da biblioteca
pnpm run lint             # ESLint
```

---

## 📦 Estrutura

```
lib-shared/
├── src/
│   ├── index.ts                  # Exportações
│   ├── lib/
│   │   └── utils.ts              # Utilitários (cn)
│   └── stories/
│       └── button/
│           ├── Button.tsx        # Componente
│           └── Button.stories.ts # Storybook
├── dist/                         # Build gerado
├── cli.js                        # CLI para copiar componentes
└── package.json
```

---

## 📄 Licença

MIT © [SergioLNeves](https://github.com/SergioLNeves)

---

## 🔗 Links

- [GitHub](https://github.com/SergioLNeves/Lib-Shared)
- [Documentação](https://sergiolneves.github.io/Lib-Shared)
- [Issues](https://github.com/SergioLNeves/Lib-Share/issues)
