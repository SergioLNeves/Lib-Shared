import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Stack } from "@/registry/components/display/stack.tsx";

const meta = {
  title: "Components/Display/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Um componente Stack flexível para organizar elementos verticalmente ou horizontalmente com controle de alinhamento.

## Instalação

### Método 1: Via CLI (Recomendado)

Copia o código-fonte diretamente para seu projeto:

\`\`\`bash
npx @sergiolneves/lib-shared add stack

# Ou com pnpm
pnpm dlx @sergiolneves/lib-shared add stack
\`\`\`

### Método 2: Como pacote NPM

\`\`\`bash
npm install @sergiolneves/lib-shared
# ou
pnpm add @sergiolneves/lib-shared
\`\`\`

## Uso Básico

\`\`\`tsx
import { Stack } from "@/components/ui/stack"

export default function App() {
  return (
    <Stack gap={4}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  )
}
\`\`\`

## Stack Horizontal

\`\`\`tsx
<Stack direction="row" gap={2} alignItems="center">
  <button>Botão 1</button>
  <button>Botão 2</button>
</Stack>
\`\`\`

## Direções Disponíveis

- **column**: Empilha elementos verticalmente (padrão)
- **row**: Alinha elementos horizontalmente

## Alinhamento (alignItems)

- **stretch**: Estica elementos para preencher o container (padrão)
- **center**: Centraliza elementos no eixo transversal
- **start**: Alinha elementos no início
- **end**: Alinha elementos no final

## Justificação (justifyContent)

- **start**: Alinha no início (padrão)
- **center**: Centraliza no eixo principal
- **end**: Alinha no final
- **spaceBetween**: Espaço igual entre elementos
- **spaceAround**: Espaço igual ao redor de elementos
- **spaceEvenly**: Espaço distribuído uniformemente`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
      description: "Define a direção do empilhamento",
    },
    alignItems: {
      control: "select",
      options: ["stretch", "center", "start", "end"],
      description: "Define o alinhamento dos itens no eixo transversal",
    },
    justifyContent: {
      control: "select",
      options: ["start", "center", "end", "spaceBetween", "spaceAround", "spaceEvenly"],
      description: "Define a justificação dos itens no eixo principal",
    },
    gap: {
      control: "number",
      description: "Espaçamento entre os elementos (Tailwind gap units)",
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div style={{ background: "#3b82f6", color: "white", padding: "20px", borderRadius: "8px", fontWeight: "bold" }}>
          Item 1
        </div>
        <div style={{ background: "#8b5cf6", color: "white", padding: "20px", borderRadius: "8px", fontWeight: "bold" }}>
          Item 2
        </div>
        <div style={{ background: "#ec4899", color: "white", padding: "20px", borderRadius: "8px", fontWeight: "bold" }}>
          Item 3
        </div>
      </>
    ),
    direction: "column",
    gap: 4,
  },
};

export const Horizontal: Story = {
  args: {
    children: (
      <>
        <div style={{ background: "#10b981", color: "white", padding: "20px 30px", borderRadius: "8px", fontWeight: "bold" }}>
          Item 1
        </div>
        <div style={{ background: "#06b6d4", color: "white", padding: "20px 30px", borderRadius: "8px", fontWeight: "bold" }}>
          Item 2
        </div>
        <div style={{ background: "#f59e0b", color: "white", padding: "20px 30px", borderRadius: "8px", fontWeight: "bold" }}>
          Item 3
        </div>
      </>
    ),
    direction: "row",
    gap: 4,
  },
};

export const CenteredVertical: Story = {
  args: {
    children: (
      <>
        <div style={{ background: "#ef4444", color: "white", padding: "15px 40px", borderRadius: "8px", fontWeight: "bold" }}>
          Item Pequeno
        </div>
        <div style={{ background: "#f97316", color: "white", padding: "15px 80px", borderRadius: "8px", fontWeight: "bold" }}>
          Item Médio
        </div>
        <div style={{ background: "#eab308", color: "white", padding: "15px 120px", borderRadius: "8px", fontWeight: "bold" }}>
          Item Grande
        </div>
      </>
    ),
    direction: "column",
    alignItems: "center",
    gap: 4,
  },
};

export const CenteredHorizontal: Story = {
  args: {
    children: (
      <>
        <div style={{ background: "#14b8a6", color: "white", padding: "10px 20px", borderRadius: "8px", fontWeight: "bold", height: "60px", display: "flex", alignItems: "center" }}>
          Baixo
        </div>
        <div style={{ background: "#06b6d4", color: "white", padding: "20px 30px", borderRadius: "8px", fontWeight: "bold", height: "100px", display: "flex", alignItems: "center" }}>
          Médio
        </div>
        <div style={{ background: "#0ea5e9", color: "white", padding: "10px 20px", borderRadius: "8px", fontWeight: "bold", height: "60px", display: "flex", alignItems: "center" }}>
          Baixo
        </div>
      </>
    ),
    direction: "row",
    alignItems: "center",
    gap: 3,
  },
};

export const SpaceBetween: Story = {
  args: {
    children: (
      <div style={{ width: "600px" }}>
        <Stack direction="row" justifyContent="spaceBetween">
          <div style={{ background: "#6366f1", color: "white", padding: "15px 25px", borderRadius: "8px", fontWeight: "bold" }}>
            Início
          </div>
          <div style={{ background: "#8b5cf6", color: "white", padding: "15px 25px", borderRadius: "8px", fontWeight: "bold" }}>
            Centro
          </div>
          <div style={{ background: "#a855f7", color: "white", padding: "15px 25px", borderRadius: "8px", fontWeight: "bold" }}>
            Fim
          </div>
        </Stack>
      </div>
    ),
  },
};

export const SpaceAround: Story = {
  args: {
    children: (
      <div style={{ width: "600px" }}>
        <Stack direction="row" justifyContent="spaceAround">
          <div style={{ background: "#ec4899", color: "white", padding: "15px 25px", borderRadius: "8px", fontWeight: "bold" }}>
            Item 1
          </div>
          <div style={{ background: "#f43f5e", color: "white", padding: "15px 25px", borderRadius: "8px", fontWeight: "bold" }}>
            Item 2
          </div>
          <div style={{ background: "#ef4444", color: "white", padding: "15px 25px", borderRadius: "8px", fontWeight: "bold" }}>
            Item 3
          </div>
        </Stack>
      </div>
    ),
  },
};

export const SpaceEvenly: Story = {
  args: {
    children: (
      <div style={{ width: "600px" }}>
        <Stack direction="row" justifyContent="spaceEvenly">
          <div style={{ background: "#10b981", color: "white", padding: "15px 25px", borderRadius: "8px", fontWeight: "bold" }}>
            Item 1
          </div>
          <div style={{ background: "#059669", color: "white", padding: "15px 25px", borderRadius: "8px", fontWeight: "bold" }}>
            Item 2
          </div>
          <div style={{ background: "#047857", color: "white", padding: "15px 25px", borderRadius: "8px", fontWeight: "bold" }}>
            Item 3
          </div>
        </Stack>
      </div>
    ),
  },
};

export const EndAligned: Story = {
  args: {
    children: (
      <>
        <div style={{ background: "#f59e0b", color: "white", padding: "15px 30px", borderRadius: "8px", fontWeight: "bold" }}>
          Alinhado à direita
        </div>
        <div style={{ background: "#d97706", color: "white", padding: "15px 50px", borderRadius: "8px", fontWeight: "bold" }}>
          Também à direita
        </div>
        <div style={{ background: "#b45309", color: "white", padding: "15px 70px", borderRadius: "8px", fontWeight: "bold" }}>
          Direita novamente
        </div>
      </>
    ),
    direction: "column",
    alignItems: "end",
    gap: 4,
  },
};

export const NoGap: Story = {
  args: {
    children: (
      <>
        <div style={{ background: "#6366f1", color: "white", padding: "20px", fontWeight: "bold" }}>
          Sem espaçamento
        </div>
        <div style={{ background: "#8b5cf6", color: "white", padding: "20px", fontWeight: "bold" }}>
          Colados
        </div>
        <div style={{ background: "#a855f7", color: "white", padding: "20px", fontWeight: "bold" }}>
          Gap = 0
        </div>
      </>
    ),
    direction: "column",
    gap: 0,
  },
};

export const LargeGap: Story = {
  args: {
    children: (
      <>
        <div style={{ background: "#06b6d4", color: "white", padding: "20px", borderRadius: "8px", fontWeight: "bold" }}>
          Espaçamento grande
        </div>
        <div style={{ background: "#0891b2", color: "white", padding: "20px", borderRadius: "8px", fontWeight: "bold" }}>
          Gap = 8
        </div>
        <div style={{ background: "#0e7490", color: "white", padding: "20px", borderRadius: "8px", fontWeight: "bold" }}>
          Muito espaço entre
        </div>
      </>
    ),
    direction: "column",
    gap: 8,
  },
};
