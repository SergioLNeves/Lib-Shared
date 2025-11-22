import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "tertiary", "link"],
      description: "Button variant style",
    },
    asChild: {
      control: "boolean",
      description: "Render as child component using Slot",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    children: {
      control: "text",
      description: "Button content",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "200px" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="link">Link</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
};
