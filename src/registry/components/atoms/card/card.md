# Card

O componente `Card` é um contêiner versátil utilizado para agrupar conteúdo relacionado e ações. Ele fornece uma estrutura consistente com cabeçalho, conteúdo e rodapé.

## Importação

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/registry/components/atoms/card/card";
```

## Estrutura

O card é composto por vários subcomponentes para organizar a informação:

- **Card**: O contêiner principal.
- **CardHeader**: Área superior para título e descrição.
- **CardTitle**: O título principal do card.
- **CardDescription**: Texto de apoio ou subtítulo.
- **CardAction**: Área para ações principais no cabeçalho (ex: botões, menus).
- **CardContent**: O corpo principal do card.
- **CardFooter**: Área inferior, geralmente para botões de ação final.

## Uso Básico

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/components/atoms/card/card";
import { Button } from "@/registry/components/atoms/button/button";

export function ExemploCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Criar Projeto</CardTitle>
        <CardDescription>Inicie um novo projeto em um clique.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Preencha os detalhes abaixo para começar.</p>
      </CardContent>
      <CardFooter>
        <Button>Criar</Button>
      </CardFooter>
    </Card>
  );
}
```

## Com Ação no Cabeçalho

O componente `CardAction` permite posicionar elementos (como botões ou menus) no canto superior direito do cabeçalho, alinhado com o título.

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/registry/components/atoms/card/card";
import { Button } from "@/registry/components/atoms/button/button";

export function CardComAcao() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações</CardTitle>
        <CardDescription>Gerencie suas preferências.</CardDescription>
        <CardAction>
          <Button variant="secondary">Editar</Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
```

## Propriedades (Props)

Todos os componentes do Card (`Card`, `CardHeader`, etc.) aceitam todas as propriedades nativas de uma `div` HTML (como `className`, `id`, `style`, etc.).

| Componente | Propriedade | Tipo | Descrição |
|---|---|---|---|
| Todos | `className` | `string` | Adiciona classes CSS personalizadas. |
| Todos | `children` | `ReactNode` | O conteúdo a ser renderizado dentro do componente. |
