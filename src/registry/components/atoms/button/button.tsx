import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./button.module.css";
import { cn } from "@/lib/utils";

const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.primary,
      primary: styles.primary,
      secondary: styles.secondary,
      link: styles.link,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
