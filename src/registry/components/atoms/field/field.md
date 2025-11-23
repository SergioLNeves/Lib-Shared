# Field

Componente completo para criação de formulários acessíveis e bem estruturados. Fornece uma coleção de sub-componentes que trabalham juntos para criar campos de formulário com labels, descrições, validações e mensagens de erro.

## Características

- **Composável**: Múltiplos sub-componentes que podem ser combinados de diferentes formas
- **Acessível**: Suporte completo a atributos ARIA e semântica HTML
- **Flexível**: Suporta diferentes orientações (vertical, horizontal, responsivo)
- **Validação**: Sistema integrado de exibição de erros
- **Temas**: Suporte a modo claro e escuro via CSS Modules

## Instalação

```tsx
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
} from "@/registry/components/atoms/field";
```

## Sub-componentes

### FieldSet

Container principal para agrupar múltiplos campos relacionados. Renderiza um elemento `<fieldset>`.

**Props**: Aceita todas as props de `React.ComponentProps<"fieldset">`

```tsx
<FieldSet>
  <FieldLegend>Informações Pessoais</FieldLegend>
  {/* campos aqui */}
</FieldSet>
```

### FieldLegend

Legenda para o FieldSet. Renderiza um elemento `<legend>` com suporte a variantes.

**Props**:
- `variant`: `"legend"` | `"label"` (padrão: `"legend"`)
- Todas as props de `React.ComponentProps<"legend">`

```tsx
<FieldLegend variant="legend">Título do Grupo</FieldLegend>
<FieldLegend variant="label">Subtítulo</FieldLegend>
```

### FieldGroup

Agrupador de campos com suporte a container queries para layouts responsivos.

**Props**: Aceita todas as props de `React.ComponentProps<"div">`

```tsx
<FieldGroup>
  <Field>...</Field>
  <Field>...</Field>
</FieldGroup>
```

### Field

Container individual para um campo de formulário. Suporta diferentes orientações.

**Props**:
- `orientation`: `"vertical"` | `"horizontal"` | `"responsive"` (padrão: `"vertical"`)
- Todas as props de `React.ComponentProps<"div">`

```tsx
<Field orientation="vertical">
  <FieldLabel>Nome</FieldLabel>
  <Input />
</Field>

<Field orientation="horizontal">
  <FieldLabel>Aceito os termos</FieldLabel>
  <Checkbox />
</Field>
```

### FieldLabel

Label do campo. Wrapper do componente Label com estilos específicos para fields.

**Props**: Aceita todas as props do componente `Label`

```tsx
<FieldLabel htmlFor="email">Email</FieldLabel>
```

### FieldTitle

Título alternativo para o campo quando não é necessário um label semântico.

**Props**: Aceita todas as props de `React.ComponentProps<"div">`

```tsx
<FieldTitle>Configurações de Notificação</FieldTitle>
```

### FieldContent

Container para o conteúdo principal do field, agrupa elementos relacionados.

**Props**: Aceita todas as props de `React.ComponentProps<"div">`

```tsx
<FieldContent>
  <FieldTitle>Opção Premium</FieldTitle>
  <FieldDescription>Acesso a recursos exclusivos</FieldDescription>
</FieldContent>
```

### FieldDescription

Texto de ajuda ou descrição do campo.

**Props**: Aceita todas as props de `React.ComponentProps<"p">`

```tsx
<FieldDescription>
  Use um email válido que você tenha acesso
</FieldDescription>
```

### FieldSeparator

Separador visual entre campos. Pode incluir texto opcional.

**Props**:
- `children`: Texto opcional para exibir no separador
- Todas as props de `React.ComponentProps<"div">`

```tsx
<FieldSeparator />
<FieldSeparator>ou</FieldSeparator>
```

### FieldError

Exibe mensagens de erro de validação. Suporta múltiplos erros.

**Props**:
- `errors`: `Array<{ message?: string } | undefined>` - Array de objetos de erro
- `children`: Conteúdo customizado (sobrescreve `errors`)
- Todas as props de `React.ComponentProps<"div">`

```tsx
<FieldError>Campo obrigatório</FieldError>

<FieldError errors={[
  { message: "Email inválido" },
  { message: "Email já cadastrado" }
]} />
```

## Exemplos de Uso

### Campo Simples

```tsx
<Field>
  <FieldLabel htmlFor="name">Nome Completo</FieldLabel>
  <Input id="name" placeholder="Digite seu nome" />
  <FieldDescription>Como você gostaria de ser chamado</FieldDescription>
</Field>
```

### Campo com Validação

```tsx
<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" />
  <FieldError errors={formErrors.email} />
</Field>
```

### Campo Horizontal (Checkbox)

```tsx
<Field orientation="horizontal">
  <FieldLabel htmlFor="terms">
    Aceito os termos e condições
  </FieldLabel>
  <Checkbox id="terms" />
</Field>
```

### Grupo de Campos

```tsx
<FieldSet>
  <FieldLegend>Endereço de Entrega</FieldLegend>
  
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="street">Rua</FieldLabel>
      <Input id="street" />
    </Field>

    <Field>
      <FieldLabel htmlFor="number">Número</FieldLabel>
      <Input id="number" />
    </Field>

    <Field>
      <FieldLabel htmlFor="city">Cidade</FieldLabel>
      <Input id="city" />
    </Field>
  </FieldGroup>
</FieldSet>
```

### Campo com Conteúdo Rico

```tsx
<Field orientation="horizontal">
  <FieldLabel>
    <Field>
      <FieldContent>
        <FieldTitle>Notificações por Email</FieldTitle>
        <FieldDescription>
          Receba atualizações sobre seu pedido
        </FieldDescription>
      </FieldContent>
      <Checkbox />
    </Field>
  </FieldLabel>
</Field>
```

### Separador entre Campos

```tsx
<FieldGroup>
  <Field>
    <FieldLabel htmlFor="login">Login</FieldLabel>
    <Input id="login" />
  </Field>

  <FieldSeparator>ou</FieldSeparator>

  <Field>
    <FieldLabel htmlFor="social">Login Social</FieldLabel>
    <Button>Continuar com Google</Button>
  </Field>
</FieldGroup>
```

### Orientação Responsiva

```tsx
<FieldGroup>
  <Field orientation="responsive">
    <FieldLabel htmlFor="newsletter">
      Receber newsletter
    </FieldLabel>
    <Checkbox id="newsletter" />
    <FieldDescription>
      Enviamos apenas conteúdo relevante, sem spam
    </FieldDescription>
  </Field>
</FieldGroup>
```

### Múltiplos Erros

```tsx
<Field>
  <FieldLabel htmlFor="password">Senha</FieldLabel>
  <Input id="password" type="password" />
  <FieldError errors={[
    { message: "Mínimo de 8 caracteres" },
    { message: "Deve conter pelo menos uma letra maiúscula" },
    { message: "Deve conter pelo menos um número" }
  ]} />
</Field>
```

## Integração com React Hook Form

```tsx
import { useForm } from "react-hook-form";

function MyForm() {
  const { register, formState: { errors } } = useForm();

  return (
    <form>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido"
            }
          })}
        />
        <FieldError errors={errors.email ? [errors.email] : undefined} />
      </Field>
    </form>
  );
}
```

## Acessibilidade

- Usa elementos semânticos HTML (`fieldset`, `legend`, `label`)
- Suporta atributo `htmlFor` para associação label-input
- Mensagens de erro com `role="alert"`
- Suporta `data-invalid` e `data-disabled` para estados
- Container queries para responsividade sem JavaScript

## Customização

Todos os sub-componentes aceitam a prop `className` para customização adicional:

```tsx
<Field className="custom-field">
  <FieldLabel className="custom-label">Label</FieldLabel>
  <Input />
</Field>
```

## Data Attributes

Os componentes expõem os seguintes data attributes para estilização:

- `data-slot`: Identificador do componente
- `data-orientation`: Orientação do field (vertical, horizontal, responsive)
- `data-variant`: Variante do legend (legend, label)
- `data-content`: Se o separator tem conteúdo (true/false)
- `data-invalid`: Estado de validação
- `data-disabled`: Estado desabilitado
- `data-state`: Estado de checkbox/radio (checked/unchecked)
