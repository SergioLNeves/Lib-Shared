import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/registry/components/atoms/button/button'
import { Layout } from '@/docs/layout/layout'
import { Sidebar } from '@/docs/sidebar/sidebar'
import { Content } from '@/docs/content/content'
import { ExampleSection } from '@/docs/example-section/example-section'
import { PropsTable } from '@/docs/props-table/props-table'

export const Route = createFileRoute('/components/button')({
  component: ButtonDocs,
})

function ButtonDocs() {
  const propsData = [
    {
      name: "variant",
      type: '"primary" | "secondary" | "link"',
      defaultValue: '"primary"',
      description: "Variante visual do botão",
    },
    {
      name: "asChild",
      type: "boolean",
      defaultValue: "false",
      description: "Permite composição com outros elementos",
    },
    {
      name: "className",
      type: "string",
      description: "Classes CSS adicionais",
    },
  ];

  return (
    <Layout>
      <Sidebar activeRoute="/components/button" />
      <Content>
        <h1>Button</h1>
        <p>Componente de botão versátil com múltiplas variantes e suporte para composição.</p>
        
        <section>
          <h2>Importação</h2>
          <pre><code>{`import { Button } from '@/registry/components/atoms/button/button'`}</code></pre>
        </section>

        <section>
          <h2>Variantes</h2>
          
          <ExampleSection
            title="Primary"
            code={`<Button variant="primary">Primary Button</Button>`}
          >
            <Button variant="primary">Primary Button</Button>
          </ExampleSection>

          <ExampleSection
            title="Secondary"
            code={`<Button variant="secondary">Secondary Button</Button>`}
          >
            <Button variant="secondary">Secondary Button</Button>
          </ExampleSection>

          <ExampleSection
            title="Link"
            code={`<Button variant="link">Link Button</Button>`}
          >
            <Button variant="link">Link Button</Button>
          </ExampleSection>
        </section>

        <section>
          <h2>Props</h2>
          <PropsTable data={propsData} />
        </section>

        <section>
          <h2>Exemplos de Uso</h2>
          
          <ExampleSection
            title="Com evento onClick"
            code={`<Button 
  variant="primary" 
  onClick={() => alert('Clicou!')}
>
  Clique aqui
</Button>`}
          >
            <Button 
              variant="primary" 
              onClick={() => alert('Clicou!')}
            >
              Clique aqui
            </Button>
          </ExampleSection>

          <ExampleSection
            title="Botão desabilitado"
            code={`<Button variant="primary" disabled>
  Desabilitado
</Button>`}
          >
            <Button variant="primary" disabled>
              Desabilitado
            </Button>
          </ExampleSection>

          <ExampleSection
            title="Usando asChild"
            code={`<Button variant="primary" asChild>
  <a href="https://github.com">Ir para GitHub</a>
</Button>`}
          >
            <Button variant="primary" asChild>
              <a href="https://github.com">Ir para GitHub</a>
            </Button>
          </ExampleSection>
        </section>
      </Content>
    </Layout>
  )
}
