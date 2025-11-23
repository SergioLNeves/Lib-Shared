# Button

Componente de botão versátil com múltiplas variantes e suporte para composição.

## Importação

```tsx
import { Button } from "@/registry/components/atoms/button";
```

## Uso Básico

```tsx live
<Button>Clique aqui</Button>
```

## Variantes

```tsx live
<>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="link">Link</Button>
</>
```

- **Primary**: Ação principal da página (padrão)
- **Secondary**: Ações secundárias ou de menor ênfase
- **Destructive**: Ações perigosas ou irreversíveis
- **Link**: Aparência de link textual com comportamento de botão

## Composição (asChild)

Use `asChild` para compor o botão com outros elementos, como links:

```tsx live
<Button variant="secondary" asChild>
  <a href="https://github.com" target="_blank" rel="noopener">
    GitHub
  </a>
</Button>
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `variant` | `'primary'` \| `'secondary'` \| `'destructive'` \| `'link'` | `'primary'` | Estilo visual do botão |
| `asChild` | `boolean` | `false` | Renderiza o elemento filho com os estilos do botão |
| `className` | `string` | - | Classes CSS adicionais |

Todas as propriedades nativas do elemento `<button>` também são suportadas (`onClick`, `disabled`, `type`, etc.).
