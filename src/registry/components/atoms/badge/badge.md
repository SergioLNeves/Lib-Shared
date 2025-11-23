# Badge

Componente de badge para exibir status, contadores ou categorias de forma compacta.

## Importação

```tsx
import { Badge } from "@/registry/components/atoms/badge";
```

## Uso Básico

```tsx live
<Badge>Novo</Badge>
```

## Variantes

```tsx live
<>
  <Badge variant="default">Default</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="error">Error</Badge>
</>
```

- **Default**: Estilo padrão neutro
- **Success**: Indica sucesso ou estado positivo
- **Warning**: Alerta ou atenção necessária
- **Error**: Erro ou estado crítico

## Exemplos de Uso

```tsx live
<>
  <Badge>Novo</Badge>
  <Badge variant="success">Ativo</Badge>
  <Badge variant="warning">Pendente</Badge>
  <Badge variant="error">Bloqueado</Badge>
</>
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `variant` | `'default'` \| `'success'` \| `'warning'` \| `'error'` | `'default'` | Estilo visual do badge |
| `className` | `string` | - | Classes CSS adicionais |

Todas as propriedades nativas do elemento `<span>` também são suportadas.
