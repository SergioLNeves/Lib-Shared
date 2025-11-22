import * as React from "react";
import { Button, type ButtonProps } from "../../atoms/button";
import { Spinner } from "../../atoms/spinner";
import styles from "./styles.module.css";

export interface LoadingButtonProps extends ButtonProps {
	loading?: boolean;
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
	({ loading = false, disabled, children, variant, ...props }, ref) => {
		return (
			<Button
				ref={ref}
				disabled={loading || disabled}
				variant={variant}
				{...props}
			>
				{loading ? (
					<div className={styles.spinnerWrapper}>
						<Spinner />
						{children}
					</div>
				) : (
					children
				)}
			</Button>
		);
	},
);

LoadingButton.displayName = "LoadingButton";

export { LoadingButton };
