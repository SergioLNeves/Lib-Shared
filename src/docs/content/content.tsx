import type { ReactNode } from "react";
import styles from "./content.module.css";

interface ContentProps {
	children: ReactNode;
}

function Content({ children }: ContentProps) {
	return (
		<main className={styles.content}>
			<div className={styles.inner}>{children}</div>
		</main>
	);
}

export { Content };
export type { ContentProps };
