# Navigation Menu

O componente `NavigationMenu` fornece uma estrutura acessível e estilizada para criar menus de navegação hierárquicos, com suporte a submenus, indicadores de foco e animações fluidas. É construído sobre as primitivas do Radix UI.

## Importação

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/registry/components/atoms/navigation-menu/navigation-menu";
```

## Estrutura

O menu é composto por várias partes que trabalham em conjunto:

- **NavigationMenu**: O contêiner raiz que gerencia o estado.
- **NavigationMenuList**: A lista principal de itens (`<ul>`).
- **NavigationMenuItem**: Cada item individual da lista (`<li>`).
- **NavigationMenuTrigger**: O botão que expande/colapsa o submenu.
- **NavigationMenuContent**: O painel de conteúdo que é exibido quando o gatilho é ativado.
- **NavigationMenuLink**: Um link de navegação padrão, estilizado como parte do menu.

## Uso Básico

Abaixo está um exemplo de como estruturar um menu simples com um item que possui submenu e outro que é apenas um link direto.

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/registry/components/atoms/navigation-menu/navigation-menu";

export function MenuPrincipal() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Item com Submenu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <NavigationMenuLink href="/produtos/novo">
                Lançamentos
              </NavigationMenuLink>
              <NavigationMenuLink href="/produtos/populares">
                Mais Vendidos
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Item Link Direto */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/sobre">
            Sobre Nós
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
```
## Posicionamento Customizado (Viewport)

Por padrão, o `NavigationMenu` renderiza o `NavigationMenuViewport` (o contêiner animado) automaticamente. Se você precisar de controle total sobre onde o painel de conteúdo aparece (por exemplo, para alinhar com a largura total da página ou posicionar em um local específico), você pode desativar o viewport automático e renderizá-lo manualmente.

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/registry/components/atoms/navigation-menu/navigation-menu";

export function MenuCustomizado() {
  return (
    <div className="relative flex justify-center">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[200px]">Conteúdo 1</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[200px]">Conteúdo 2</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Renderização manual do Viewport onde você desejar */}
        <div className="absolute top-full left-0 w-full flex justify-center">
          <NavigationMenuViewport />
        </div>
      </NavigationMenu>
    </div>
  );
}
```

## Propriedades (Props)

A maioria dos componentes aceita as propriedades padrão do HTML e do Radix UI. Abaixo estão as propriedades específicas adicionadas ou modificadas neste componente.

### NavigationMenu

| Propriedade | Tipo | Padrão | Descrição |
|---|---|---|---|
| `viewport` | `boolean` | `true` | Controla se o `NavigationMenuViewport` (o contêiner que anima a altura e largura do conteúdo) deve ser renderizado automaticamente. Se definido como `false`, você precisará renderizar o `NavigationMenuViewport` manualmente onde desejar. |

### NavigationMenuLink

| Propriedade | Tipo | Padrão | Descrição |
|---|---|---|---|
| `active` | `boolean` | `undefined` | Usado para indicar se o link corresponde à rota atual. |
| `asChild` | `boolean` | `false` | Permite composição com outros componentes de link (ex: `next/link`). |

## Dicas de Uso

- Use `NavigationMenuTrigger` apenas quando houver um `NavigationMenuContent` associado.
- Para links simples sem dropdown, use `NavigationMenuLink` diretamente dentro de um `NavigationMenuItem`.
- O componente gerencia automaticamente o foco e a navegação por teclado (setas, Tab, Esc), garantindo acessibilidade.
