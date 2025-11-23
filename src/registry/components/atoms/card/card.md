# Card

Contêiner versátil para agrupar conteúdo relacionado e ações com estrutura consistente.

## Importação

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/registry/components/atoms/card";
```

## Uso Básico

```tsx live
<Card style={{ width: '350px' }}>
  <CardHeader>
    <CardTitle>Criar Projeto</CardTitle>
    <CardDescription>Inicie um novo projeto em um clique</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Preencha os detalhes abaixo para começar.</p>
  </CardContent>
  <CardFooter>
    <Button>Criar</Button>
  </CardFooter>
</Card>
```

## Com Ação no Cabeçalho

```tsx live
<Card style={{ width: '350px' }}>
  <CardHeader>
    <CardTitle>Configurações</CardTitle>
    <CardDescription>Gerencie suas preferências</CardDescription>
    <CardAction>
      <Button variant="secondary">Editar</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Conteúdo do card</p>
  </CardContent>
</Card>
```

## Estrutura

O Card é composto por subcomponentes que trabalham juntos:

- **Card**: Contêiner principal com bordas e sombra
- **CardHeader**: Área superior para título e descrição
- **CardTitle**: Título principal do card
- **CardDescription**: Texto de apoio ou subtítulo
- **CardAction**: Ações no cabeçalho (botões, menus) - alinhado à direita
- **CardContent**: Corpo principal com padding
- **CardFooter**: Área inferior para ações finais

## Propriedades

Todos os componentes do Card aceitam as propriedades nativas de `<div>` (`className`, `style`, `onClick`, etc.).

| Componente | Descrição |
|------------|-----------|
| `Card` | Contêiner raiz com bordas arredondadas e sombra sutil |
| `CardHeader` | Cabeçalho com espaçamento interno adequado |
| `CardTitle` | Título com tipografia enfatizada |
| `CardDescription` | Descrição com cor de texto secundária |
| `CardAction` | Container para ações, posicionado à direita do header |
| `CardContent` | Área de conteúdo principal |
| `CardFooter` | Rodapé com borda superior opcional |
