import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

// Importando o CSS Module (onde estão suas classes .base, .primary, etc.)
import styles from "./button.module.css";

// Se as variáveis CSS (--button-primary...) estiverem aqui, importe.
// Se estiverem no global.css, pode remover essa linha.
import "./button-variants.css";

const buttonVariants = cva(styles.base, {
	variants: {
		variant: {
			default: styles.primary,
			primary: styles.primary,
			secondary: styles.secondary,
			destructive: styles.destructive,
			link: styles.link,
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				data-slot="button"
				className={cn(buttonVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
