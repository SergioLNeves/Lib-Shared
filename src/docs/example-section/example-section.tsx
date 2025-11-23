import type { ReactNode } from "react";
import styles from "./example-section.module.css";

interface ExampleSectionProps {
	title: string;
	children: ReactNode;
	code: string;
}

function ExampleSection({ title, children, code }: ExampleSectionProps) {
	return (
		<div className={styles.section}>
			<h3>{title}</h3>
			<div className={styles.demo}>{children}</div>
			<pre>
				<code>{code}</code>
			</pre>
		</div>
	);
}

export { ExampleSection };
export type { ExampleSectionProps };
