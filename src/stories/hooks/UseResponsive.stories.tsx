import type { Meta, StoryObj } from "@storybook/react-vite";
import { useBreakpoint, useResponsive } from "@/hooks/use-responsive.tsx";

const UseBreakpointDemo = () => {
  const breakpoint = useBreakpoint();

  return (
    <div
      style={{ padding: "20px", border: "2px solid #ccc", borderRadius: "8px" }}
    >
      <h2 style={{ marginTop: 0 }}>useBreakpoint()</h2>
      <p>Redimensione a janela para ver o breakpoint mudar:</p>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        Breakpoint atual: <span style={{ color: "#0066cc" }}>{breakpoint}</span>
      </div>
      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <p>
          <strong>Breakpoints:</strong>
        </p>
        <ul>
          <li>base: {"<"} 640px</li>
          <li>sm: ≥ 640px</li>
          <li>md: ≥ 768px</li>
          <li>lg: ≥ 1024px</li>
          <li>xl: ≥ 1280px</li>
          <li>2xl: ≥ 1536px</li>
        </ul>
      </div>
    </div>
  );
};

const UseResponsiveDemo = () => {
  const direction = useResponsive({ base: "column", md: "row" });
  const fontSize = useResponsive({
    base: "14px",
    sm: "16px",
    lg: "18px",
    xl: "20px",
  });
  const backgroundColor = useResponsive({
    base: "#ffcccc",
    sm: "#ccffcc",
    md: "#ccccff",
    lg: "#ffccff",
    xl: "#ffffcc",
  });

  return (
    <div
      style={{ padding: "20px", border: "2px solid #ccc", borderRadius: "8px" }}
    >
      <h2 style={{ marginTop: 0 }}>useResponsive()</h2>
      <p>Redimensione a janela para ver os valores responsivos mudarem:</p>

      <div
        style={{
          display: "flex",
          flexDirection: direction as "row" | "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
            background: backgroundColor,
            borderRadius: "4px",
            flex: 1,
          }}
        >
          <strong>Direção do flex:</strong> {direction}
        </div>
        <div
          style={{
            padding: "20px",
            background: backgroundColor,
            borderRadius: "4px",
            flex: 1,
            fontSize: fontSize,
          }}
        >
          <strong>Tamanho da fonte:</strong> {fontSize}
        </div>
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#666",
          background: "#f9f9f9",
          padding: "15px",
          borderRadius: "4px",
        }}
      >
        <p>
          <strong>Valores configurados:</strong>
        </p>
        <pre
          style={{ margin: 0, whiteSpace: "pre-wrap" }}
        >{`direction: { base: "column", md: "row" }
fontSize: { base: "14px", sm: "16px", lg: "18px", xl: "20px" }
backgroundColor: {
  base: "#ffcccc",
  sm: "#ccffcc",
  md: "#ccccff",
  lg: "#ffccff",
  xl: "#ffffcc"
}`}</pre>
      </div>
    </div>
  );
};

const meta = {
  title: "Hooks/UseResponsive",
  component: UseBreakpointDemo,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Hooks React para criar interfaces responsivas baseadas em breakpoints.

## Instalação

### Método 1: Via CLI (Recomendado)

Copia o código-fonte diretamente para seu projeto:

\`\`\`bash
npx @sergiolneves/lib-shared add use-responsive

# Ou com pnpm
pnpm dlx @sergiolneves/lib-shared add use-responsive
\`\`\`

### Método 2: Como pacote NPM

\`\`\`bash
npm install @sergiolneves/lib-shared
# ou
pnpm add @sergiolneves/lib-shared
\`\`\`

## useBreakpoint()

Retorna o breakpoint atual baseado na largura da janela.

\`\`\`tsx
import { useBreakpoint } from "@/hooks/use-responsive"

export default function MyComponent() {
  const breakpoint = useBreakpoint();

  return <div>Breakpoint: {breakpoint}</div>
}
\`\`\`

## useResponsive()

Resolve um valor responsivo baseado no tamanho da tela atual.

\`\`\`tsx
import { useResponsive } from "@/hooks/use-responsive"

export default function MyComponent() {
  const direction = useResponsive({
    base: "column",
    md: "row"
  });

  return (
    <div style={{ flexDirection: direction }}>
      {/* Conteúdo */}
    </div>
  )
}
\`\`\`

## Exemplo Avançado

\`\`\`tsx
const columns = useResponsive({
  base: 1,
  sm: 2,
  md: 3,
  lg: 4
});

const isVisible = useResponsive({
  base: false,
  lg: true
});

const padding = useResponsive({
  base: "10px",
  md: "20px",
  xl: "30px"
});
\`\`\`

## Breakpoints

- **base**: < 640px (mobile)
- **sm**: ≥ 640px (mobile landscape)
- **md**: ≥ 768px (tablet)
- **lg**: ≥ 1024px (desktop)
- **xl**: ≥ 1280px (large desktop)
- **2xl**: ≥ 1536px (extra large desktop)

## Como Funciona

O hook \`useResponsive\` usa a estratégia "mobile-first". Ele busca o valor mais próximo do breakpoint atual, começando pelo atual e descendo até encontrar um valor definido.`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UseBreakpointDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UseBreakpointExample: Story = {
  render: () => <UseBreakpointDemo />,
};

export const UseResponsiveExample: Story = {
  render: () => <UseResponsiveDemo />,
};

const CombinedExampleComponent = () => {
  const breakpoint = useBreakpoint();
  const columns = useResponsive({ base: 1, sm: 2, md: 3, lg: 4 });
  const cardSize = useResponsive({ base: "100%", md: "300px" });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Exemplo Combinado</h2>
      <p style={{ marginBottom: "20px" }}>
        Breakpoint: <strong>{breakpoint}</strong> | Colunas:{" "}
        <strong>{columns}</strong>
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "15px",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            style={{
              padding: "20px",
              background: "#e0e0e0",
              borderRadius: "8px",
              textAlign: "center",
              minWidth: cardSize,
            }}
          >
            Card {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CombinedExample: Story = {
  render: () => <CombinedExampleComponent />,
};
