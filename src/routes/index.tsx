import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/docs/layout/layout";
import { Sidebar } from "@/docs/sidebar/sidebar";
import { Content } from "@/docs/content/content";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Sidebar activeRoute="/" />
      <Content>
        <h1>Bem-vindo à Lib Shared</h1>
        <p>Esta é uma biblioteca de componentes React reutilizáveis.</p>

        <section>
          <h2>Começando</h2>
          <p>
            Selecione um componente na sidebar para ver sua documentação e
            exemplos.
          </p>
        </section>

        <section>
          <h2>Instalação</h2>
          <pre>
            <code>npm install lib-shared</code>
          </pre>
        </section>

        <section>
          <h2>Uso</h2>
          <pre>
            <code>{`import { Button } from 'lib-shared'

function App() {
  return <Button>Click me</Button>
}`}</code>
          </pre>
        </section>
      </Content>
    </Layout>
  );
}
