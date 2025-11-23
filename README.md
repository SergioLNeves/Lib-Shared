# Lib Shared

Biblioteca de componentes React modulares, acessíveis e customizáveis. Componentes prontos para uso com CSS Modules, TypeScript e documentação interativa.

## Introdução

Lib Shared é uma coleção de componentes React reutilizáveis construídos com foco em:

- **Acessibilidade**: Componentes seguem as melhores práticas WCAG
- **Customização**: CSS Modules com variáveis CSS para fácil personalização
- **TypeScript**: Totalmente tipado para melhor experiência de desenvolvimento
- **Documentação**: Exemplos interativos com visualização ao vivo

## Instalação

### Via CLI (Recomendado)

Copie componentes diretamente para seu projeto:

```bash
npx @sergiolneves/lib-shared add button
```

Ou com pnpm:

```bash
pnpm dlx @sergiolneves/lib-shared add button
```

Liste componentes disponíveis:

```bash
npx @sergiolneves/lib-shared list
```

O CLI irá:
- Criar o componente em `src/registry/components/atoms/`
- Instalar dependências necessárias
- Configurar utilitários (`cn`, etc)

### Como Pacote NPM

Instale a biblioteca completa:

```bash
npm install @sergiolneves/lib-shared
```

Ou:

```bash
pnpm add @sergiolneves/lib-shared
```

## Uso Básico

### Importar Componente

```tsx
import { Button } from "@sergiolneves/lib-shared";

function App() {
  return (
    <Button variant="primary" onClick={() => alert("Clicou!")}>
      Clique aqui
    </Button>
  );
}
```

### Com CLI (código local)

```tsx
import { Button } from "@/registry/components/atoms/button";

function App() {
  return <Button variant="primary">Clique aqui</Button>;
}
```

## Configuração

### CSS Modules

Os componentes usam CSS Modules. Certifique-se de que seu bundler suporta:

**Vite** (configuração padrão)

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
```

### Design Tokens

Customize as variáveis CSS no seu projeto:

```css
:root {
  --color-primary-100: #99c3ff;
  --color-primary-200: #5c9fff;
  --color-primary-300: #1f7cff;
  
  --font-size-14: 0.875rem;
  --font-size-16: 1rem;
  --font-size-18: 1.125rem;
  
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

## Desenvolvimento

### Scripts Disponíveis

```bash
pnpm dev              # Inicia servidor de desenvolvimento
pnpm build            # Build para produção
pnpm lint             # Executa linter
pnpm test             # Executa testes
```

### Estrutura do Projeto

```
lib-shared/
├── src/
│   ├── registry/
│   │   └── components/
│   │       └── atoms/
│   │           ├── button/
│   │           │   ├── index.tsx
│   │           │   ├── styles.module.css
│   │           │   └── button.md
│   │           ├── badge/
│   │           └── card/
│   ├── docs/
│   │   ├── layout/
│   │   ├── sidebar/
│   │   └── markdown-renderer/
│   └── lib/
│       ├── utils.ts
│       └── md-parser.ts
└── package.json
```

### Adicionar Novo Componente

1. Crie a estrutura de pastas:

```bash
mkdir -p src/registry/components/atoms/seu-componente
```

2. Adicione os arquivos:
   - `index.tsx` - Componente React
   - `styles.module.css` - Estilos
   - `seu-componente.md` - Documentação

3. O componente aparecerá automaticamente na sidebar!

## Padrões de Código

### Componente Base

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

const componentVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.default,
      primary: styles.primary,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(componentVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Component.displayName = "Component";

export { Component, componentVariants };
export type { ComponentProps };
```

## Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## Licença

MIT© [SergioLNeves](https://github.com/SergioLNeves) [G-Villarinho](https://github.com/g-villarinho)


## Links

- [Documentação Online](https://sergiolneves.github.io/Lib-Shared)
- [GitHub Repository](https://github.com/SergioLNeves/Lib-Shared)
- [Issues](https://github.com/SergioLNeves/Lib-Shared/issues)
- [NPM Package](https://www.npmjs.com/package/@sergiolneves/lib-shared)
