# Button

O componente `Button` é um elemento de interface fundamental utilizado para acionar ações ou navegar entre páginas. Ele é altamente personalizável e suporta múltiplas variantes visuais.

## Importação

```tsx
import { Button } from "@/registry/components/atoms/button/button";
```

## Uso Básico

O uso mais simples do botão renderiza a variante padrão (primária).

```tsx
<Button>Clique aqui</Button>
```

## Variantes

O componente oferece diferentes estilos visuais para comunicar a hierarquia e a intenção da ação.

### Primary (Padrão)

Utilizado para a ação principal da página.

```tsx
<Button variant="primary">Salvar alterações</Button>
// ou simplesmente
<Button>Salvar alterações</Button>
```

### Secondary

Para ações secundárias ou de menor ênfase.

```tsx
<Button variant="secondary">Cancelar</Button>
```

### Destructive

Indica ações perigosas ou irreversíveis, como excluir um item.

```tsx
<Button variant="destructive">Excluir conta</Button>
```

### Link

Aparência de link textual, mas com comportamento de botão.

```tsx
<Button variant="link">Ler mais</Button>
```

## Polimorfismo (`asChild`)

A propriedade `asChild` permite que o botão delegue sua renderização ao elemento filho imediato. Isso é extremamente útil quando você precisa que o botão funcione como um link de navegação (por exemplo, usando `react-router-dom/link` ou tags `<a>`), mas mantendo a aparência visual do componente `Button`.

```tsx
import Link from "react-router-dom/link";
import { Button } from "@/registry/components/atoms/button/button";

export function LoginButton() {
  return (
    <Button asChild>
      <Link href="/login">
        Entrar
      </Link>
    </Button>
  );
}
```

## Propriedades (Props)

O componente aceita todas as propriedades nativas do elemento HTML `<button>`, além das listadas abaixo:

| Propriedade | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `'default'` \| `'primary'` \| `'secondary'` \| `'destructive'` \| `'link'` | `'default'` | Define o estilo visual do botão. |
| `asChild` | `boolean` | `false` | Quando verdadeiro, renderiza o componente filho como o elemento raiz, mesclando as props e estilos. Útil para integração com bibliotecas de roteamento ou outros componentes. |
| `className` | `string` | `undefined` | Permite adicionar classes CSS personalizadas para ajustes finos de estilo. |
