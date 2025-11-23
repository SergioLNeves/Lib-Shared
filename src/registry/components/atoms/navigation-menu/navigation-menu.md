# Navigation Menu

Menu de navegação hierárquico acessível com suporte a submenus, indicadores de foco e animações fluidas.

## Importação

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/registry/components/atoms/navigation-menu";
```

## Uso Básico

```tsx live
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="/">Início</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/sobre">Sobre</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/contato">Contato</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Com Submenu

```tsx live
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div style="padding: 1rem; display: grid; gap: 0.5rem; min-width: 200px;">
          <NavigationMenuLink href="/produtos/novo">
            Lançamentos
          </NavigationMenuLink>
          <NavigationMenuLink href="/produtos/populares">
            Mais Vendidos
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/contato">Contato</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Estrutura

O Navigation Menu é composto por subcomponentes hierárquicos:

- **NavigationMenu**: Contêiner raiz que gerencia o estado e acessibilidade
- **NavigationMenuList**: Lista principal de itens de navegação (`<ul>`)
- **NavigationMenuItem**: Item individual da lista (`<li>`)
- **NavigationMenuTrigger**: Botão que expande/colapsa o submenu
- **NavigationMenuContent**: Painel de conteúdo exibido ao ativar o trigger
- **NavigationMenuLink**: Link de navegação estilizado e acessível

## Propriedades

### NavigationMenu

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `orientation` | `'horizontal'` \| `'vertical'` | `'horizontal'` | Define a orientação do menu |

### NavigationMenuLink

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `active` | `boolean` | `false` | Indica se o link corresponde à rota atual |
| `asChild` | `boolean` | `false` | Renderiza o elemento filho com os estilos do link |
| `href` | `string` | - | URL de destino do link |

### NavigationMenuTrigger

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `asChild` | `boolean` | `false` | Renderiza o elemento filho com os estilos do trigger |

Todos os componentes suportam propriedades HTML nativas de seus elementos base. O menu gerencia automaticamente foco, navegação por teclado (setas, Tab, Esc) e acessibilidade (ARIA).
