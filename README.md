# 🎨 Lib Shared

> Componentes React que você **copia** para o seu projeto. Sem dependências npm, sem breaking changes, controle total.

[![GitHub](https://img.shields.io/badge/GitHub-SergioLNeves-blue)](https://github.com/SergioLNeves/Lib-Shared)
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/SergioLNeves/Lib-Share)

---

## 🚀 Início Rápido

```bash
# 1. Adicione um componente
npx lib-shared add button

# 2. Use no seu código
import { Button } from '@/components/button/Button';

<Button variant="default">Clique aqui</Button>
```

**Pronto!** O código está no seu projeto em `src/components/button/Button.tsx` 🎉

---

## 💡 Por Que Usar?

| ✅ Vantagens | ❌ Bibliotecas Tradicionais |
|-------------|----------------------------|
| **Código no seu projeto** - Modifique à vontade | Dependência externa que você não controla |
| **Zero breaking changes** - Você decide quando atualizar | Updates podem quebrar seu código |
| **Bundle menor** - Só o que você usa | Instala tudo, mesmo o que não usa |
| **Aprendizado** - Veja e entenda o código | Código encapsulado em node_modules |

---

## 📋 Pré-requisitos

Seu projeto precisa ter:

- ✅ **React** (com TypeScript)
- ✅ **Tailwind CSS v4**
- ✅ **Vite**
- ✅ **Alias `@`** configurado no `vite.config.ts` apontando para `/src`

<details>
<summary>🔧 <strong>Como configurar do zero</strong></summary>

```bash
# 1. Criar projeto React
npm create vite@latest meu-projeto -- --template react-ts
cd meu-projeto

# 2. Instalar Tailwind CSS v4
pnpm add -D tailwindcss @tailwindcss/vite
```

**vite.config.ts:**
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",  // ⚠️ Obrigatório!
    },
  },
});
```

**src/index.css:**
```css
@import "tailwindcss";
```

</details>

---

## 🎯 Como Usar

### 1️⃣ Adicione um componente

```bash
npx lib-shared add button
```

**O que acontece:**
- ✅ Copia `Button.tsx` para `src/components/button/`
- ✅ Copia `utils.ts` para `src/lib/`
- ✅ Instala dependências: `class-variance-authority`, `clsx`, `tailwind-merge`

### 2️⃣ Use no seu código

```tsx
import { Button } from '@/components/button/Button';

function App() {
  return (
    <div className="p-8">
      <Button variant="default">Salvar</Button>
      <Button variant="destructive">Deletar</Button>
      <Button variant="outline" size="lg">Continuar</Button>
    </div>
  );
}
```

### 3️⃣ Personalize como quiser

O código está no **seu projeto**! Edite `src/components/button/Button.tsx`:

```tsx
// Adicionar nova variante
const buttonVariants = cva("...", {
  variants: {
    variant: {
      default: "bg-primary...",
      success: "bg-green-500 hover:bg-green-600", // ✨ Nova!
    },
  },
});

// Usar
<Button variant="success">Sucesso!</Button>
```

---

## 🎨 Componentes Disponíveis

### Exemplo: Button

📁 [Ver código-fonte completo](src/components/button/Button.tsx)

```tsx
// Variantes
<Button variant="default">Padrão</Button>
<Button variant="destructive">Deletar</Button>
<Button variant="outline">Contorno</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="ghost">Fantasma</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="sm">Pequeno</Button>
<Button size="default">Normal</Button>
<Button size="lg">Grande</Button>
<Button size="icon">📧</Button>

// Estados
<Button disabled>Desabilitado</Button>

// Com ícones
<Button>
  <svg className="size-4">...</svg>
  Adicionar
</Button>
```

**Props:**

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Estilo visual |
| `size` | `'sm' \| 'default' \| 'lg' \| 'icon'` | `'default'` | Tamanho |
| `disabled` | `boolean` | `false` | Desabilita o botão |
| `className` | `string` | - | Classes CSS extras |

---

## 🔧 Utilitários

### `cn` - Merge de classes CSS

```tsx
import { cn } from '@/lib/utils';

<Button 
  className={cn(
    'hover:scale-105',
    isLoading && 'opacity-50'
  )}
>
  {isLoading ? 'Carregando...' : 'Enviar'}
</Button>
```

---

## 🛠️ Stack

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS v4** - Estilos
- **CVA** - Variantes de componentes
- **Storybook** - Documentação

---

## 🔗 Links

- 📦 [GitHub](https://github.com/SergioLNeves/Lib-Share)
- 🐛 [Reportar Issue](https://github.com/SergioLNeves/Lib-Share/issues)

---

## 📄 Licença

MIT © [SergioLNeves](https://github.com/SergioLNeves)
