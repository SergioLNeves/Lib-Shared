import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/registry/components/inputs/button.tsx";

const meta = {
  title: "Components/Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Um componente de botão versátil e acessível construído com React e Tailwind CSS.

## Instalação

### Método 1: Via CLI (Recomendado)

Copia o código-fonte diretamente para seu projeto:

\`\`\`bash
npx @sergiolneves/lib-shared add button

# Ou com pnpm
pnpm dlx @sergiolneves/lib-shared add button
\`\`\`

### Método 2: Como pacote NPM

\`\`\`bash
npm install @sergiolneves/lib-shared
# ou
pnpm add @sergiolneves/lib-shared
\`\`\`

## Uso Básico

\`\`\`tsx
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <Button>Clique aqui</Button>
  )
}
\`\`\`

## Variantes

O componente possui 6 variantes diferentes:

- **default**: Estilo padrão com cor primária
- **destructive**: Para ações destrutivas (deletar, remover)
- **outline**: Botão com borda sem preenchimento
- **secondary**: Estilo secundário com cor alternativa
- **ghost**: Sem borda ou fundo, apenas hover
- **link**: Estilo de link com sublinhado

## Tamanhos

Disponível em 3 tamanhos:

- **sm**: Pequeno (32px de altura)
- **default**: Padrão (36px de altura)
- **lg**: Grande (40px de altura)
- **icon**: Quadrado para ícones (36x36px)`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Define o estilo visual do botão",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "Define o tamanho do botão",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o botão",
    },
    children: {
      control: "text",
      description: "Conteúdo do botão",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};
