import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

import styles from "./styles.module.css";

const badgeVariants = cva(styles.base, {
	variants: {
		variant: {
			default: styles.default,
			success: styles.success,
			warning: styles.warning,
			error: styles.error,
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

interface BadgeProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	({ className, variant, ...props }, ref) => {
		return (
			<span
				data-slot="badge"
				className={cn(badgeVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
export type { BadgeProps };
