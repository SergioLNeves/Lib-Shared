import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Container } from "@/registry/components/display/container.tsx";

const meta = {
  title: "Components/Display/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Um componente Container versátil para centralizar e controlar o layout do conteúdo com suporte a grid.

## Instalação

### Método 1: Via CLI (Recomendado)

Copia o código-fonte diretamente para seu projeto:

\`\`\`bash
npx @sergiolneves/lib-shared add container

# Ou com pnpm
pnpm dlx @sergiolneves/lib-shared add container
\`\`\`

### Método 2: Como pacote NPM

\`\`\`bash
npm install @sergiolneves/lib-shared
# ou
pnpm add @sergiolneves/lib-shared
\`\`\`

## Uso Básico

\`\`\`tsx
import { Container } from "@/components/ui/container"

export default function App() {
  return (
    <Container>
      <h1>Conteúdo centralizado</h1>
    </Container>
  )
}
\`\`\`

## Com Grid Layout

\`\`\`tsx
<Container display="grid" cols="3" gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Container>
\`\`\`

## Tamanhos Disponíveis

- **sm**: Max width ~640px
- **md**: Max width ~768px
- **lg**: Max width ~1024px (padrão)
- **xl**: Max width ~1280px
- **2xl**: Max width ~1536px
- **full**: Largura total sem limite

## Grid Responsivo

Você pode definir colunas diferentes para desktop usando \`colsLg\`:

\`\`\`tsx
<Container display="grid" cols="1" colsLg="3" gap="md">
  {/* 1 coluna no mobile, 3 colunas no desktop */}
</Container>
\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
      description: "Define a largura máxima do container",
    },
    padded: {
      control: "boolean",
      description: "Adiciona padding interno ao container",
    },
    display: {
      control: "select",
      options: ["block", "grid"],
      description: "Define o tipo de display do container",
    },
    cols: {
      control: "select",
      options: ["1", "2", "3", "4", "6", "12"],
      description: "Número de colunas do grid",
    },
    colsLg: {
      control: "select",
      options: ["1", "2", "3", "4", "6", "12"],
      description: "Número de colunas do grid em telas grandes",
    },
    gap: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
      description: "Espaçamento entre itens do grid",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ background: "#3b82f6", color: "white", padding: "40px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Container padrão (lg - max 1024px)
        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
          Centralizado com padding responsivo
        </div>
      </div>
    ),
    size: "lg",
    padded: true,
  },
};

export const Small: Story = {
  args: {
    children: (
      <div style={{ background: "#8b5cf6", color: "white", padding: "40px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Container Small
        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
          Largura máxima: 640px
        </div>
      </div>
    ),
    size: "sm",
    padded: true,
  },
};

export const Medium: Story = {
  args: {
    children: (
      <div style={{ background: "#ec4899", color: "white", padding: "40px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Container Medium
        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
          Largura máxima: 768px
        </div>
      </div>
    ),
    size: "md",
    padded: true,
  },
};

export const ExtraLarge: Story = {
  args: {
    children: (
      <div style={{ background: "#10b981", color: "white", padding: "40px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Container Extra Large
        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
          Largura máxima: 1280px
        </div>
      </div>
    ),
    size: "xl",
    padded: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: (
      <div style={{ background: "#f59e0b", color: "white", padding: "40px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Container Full Width
        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
          Sem limite de largura - ocupa 100% do espaço disponível
        </div>
      </div>
    ),
    size: "full",
    padded: true,
  },
};

export const WithoutPadding: Story = {
  args: {
    children: (
      <div style={{ background: "#ef4444", color: "white", padding: "40px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Container sem padding externo
        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
          padded=false - útil para conteúdo que vai até as bordas
        </div>
      </div>
    ),
    size: "lg",
    padded: false,
  },
};

export const GridTwoColumns: Story = {
  args: {
    children: (
      <>
        <div style={{ background: "#3b82f6", color: "white", padding: "30px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", fontSize: "16px" }}>
          Coluna 1
          <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
            Grid com 2 colunas
          </div>
        </div>
        <div style={{ background: "#8b5cf6", color: "white", padding: "30px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", fontSize: "16px" }}>
          Coluna 2
          <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
            Gap: medium
          </div>
        </div>
      </>
    ),
    display: "grid",
    cols: "2",
    gap: "md",
    padded: true,
  },
};

export const GridThreeColumns: Story = {
  args: {
    children: (
      <>
        <div style={{ background: "#ec4899", color: "white", padding: "30px", borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}>
          Card 1
          <div style={{ marginTop: "8px", fontSize: "14px", opacity: 0.9 }}>
            3 colunas iguais
          </div>
        </div>
        <div style={{ background: "#f43f5e", color: "white", padding: "30px", borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}>
          Card 2
          <div style={{ marginTop: "8px", fontSize: "14px", opacity: 0.9 }}>
            Gap: large
          </div>
        </div>
        <div style={{ background: "#ef4444", color: "white", padding: "30px", borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}>
          Card 3
          <div style={{ marginTop: "8px", fontSize: "14px", opacity: 0.9 }}>
            Display: grid
          </div>
        </div>
      </>
    ),
    display: "grid",
    cols: "3",
    gap: "lg",
    padded: true,
  },
};

export const ResponsiveGrid: Story = {
  args: {
    children: (
      <>
        <div style={{ background: "#10b981", color: "white", padding: "30px", borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}>
          📱 Mobile
          <div style={{ marginTop: "8px", fontSize: "14px", opacity: 0.9 }}>
            1 coluna
          </div>
        </div>
        <div style={{ background: "#059669", color: "white", padding: "30px", borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}>
          💻 Desktop
          <div style={{ marginTop: "8px", fontSize: "14px", opacity: 0.9 }}>
            4 colunas
          </div>
        </div>
        <div style={{ background: "#047857", color: "white", padding: "30px", borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}>
          🎯 Responsivo
          <div style={{ marginTop: "8px", fontSize: "14px", opacity: 0.9 }}>
            Adapta-se ao tamanho
          </div>
        </div>
        <div style={{ background: "#065f46", color: "white", padding: "30px", borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}>
          ✨ Automático
          <div style={{ marginTop: "8px", fontSize: "14px", opacity: 0.9 }}>
            cols=1 / colsLg=4
          </div>
        </div>
      </>
    ),
    display: "grid",
    cols: "1",
    colsLg: "4",
    gap: "md",
    padded: true,
  },
};
