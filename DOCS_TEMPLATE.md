# Template para Documentação de Componentes

Este documento define o padrão para criar documentação dos componentes atoms.

## Estrutura Padrão

```markdown
# [Nome do Componente]

[Descrição curta e objetiva do componente em uma linha]

## Importação

\`\`\`tsx
import { ComponentName } from "@/registry/components/atoms/[component-name]";
\`\`\`

## Uso Básico

\`\`\`tsx live
<ComponentName>Exemplo básico</ComponentName>
\`\`\`

## [Seções específicas do componente]

[Variantes, Estrutura, Exemplos, etc.]

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `prop1` | `string` | `'default'` | Descrição da propriedade |

[Texto adicional sobre as propriedades se necessário]
```

## Convenções

### Título e Descrição
- **Título**: Nome do componente em PascalCase
- **Descrição**: Uma frase curta e objetiva (máximo 80 caracteres)
- Use voz ativa e linguagem clara

### Importação
- Sempre mostre o import path correto
- Use o padrão `@/registry/components/atoms/[nome]`
- Mostre apenas os componentes que serão usados na documentação

### Exemplos
- **Use `tsx live`** sempre que possível para exemplos interativos
- Mantenha exemplos simples e focados
- Um exemplo por conceito
- Evite lógica complexa nos exemplos

### Código Live
```markdown
\`\`\`tsx live
<Button>Exemplo</Button>
\`\`\`
```

### Código Estático (apenas referência)
```markdown
\`\`\`tsx
// Código que não precisa ser interativo
import { Component } from './somewhere';
\`\`\`
```

### Seções Recomendadas

1. **Importação** (obrigatória)
2. **Uso Básico** (obrigatória, com exemplo live)
3. **Variantes** (se aplicável, com exemplos live)
4. **Estrutura** (para componentes compostos)
5. **Exemplos Avançados** (se necessário)
6. **Propriedades** (obrigatória, usar tabela)

### Tabelas de Propriedades

- Use formato Markdown simples
- Colunas: Propriedade, Tipo, Padrão, Descrição
- Tipos em código inline: `` `string` ``
- Valores padrão em código inline ou `-` se não houver
- Descrições curtas e objetivas

### Linguagem

- ✅ Use linguagem direta e objetiva
- ✅ Prefira voz ativa
- ✅ Seja conciso
- ❌ Evite floreios desnecessários
- ❌ Não seja verboso demais
- ❌ Não use jargões sem explicação

## Exemplo Completo

```markdown
# Button

Componente de botão versátil com múltiplas variantes e suporte para composição.

## Importação

\`\`\`tsx
import { Button } from "@/registry/components/atoms/button";
\`\`\`

## Uso Básico

\`\`\`tsx live
<Button>Clique aqui</Button>
\`\`\`

## Variantes

\`\`\`tsx live
<>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
</>
\`\`\`

- **Primary**: Ação principal da página (padrão)
- **Secondary**: Ações secundárias
- **Destructive**: Ações perigosas

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `variant` | `'primary'` \| `'secondary'` \| `'destructive'` | `'primary'` | Estilo visual do botão |
| `asChild` | `boolean` | `false` | Renderiza o elemento filho com os estilos |

Todas as propriedades nativas do `<button>` são suportadas.
```

## Checklist

Antes de submeter uma documentação, verifique:

- [ ] Título e descrição estão claros
- [ ] Importação está correta
- [ ] Uso básico tem exemplo `live`
- [ ] Exemplos são simples e focados
- [ ] Tabela de propriedades está completa
- [ ] Markdown está formatado corretamente
- [ ] Sem erros de digitação
- [ ] Componente renderiza corretamente no navegador
