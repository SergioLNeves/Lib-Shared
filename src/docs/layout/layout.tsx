import type { ReactNode } from "react";
import { Header } from "@/docs/header/header";
import styles from "./layout.module.css";

interface LayoutProps {
	children: ReactNode;
	showHeader?: boolean;
}

function Layout({ children, showHeader = true }: LayoutProps) {
	return (
		<div className={styles.wrapper}>
			{showHeader && <Header />}
			<div className={styles.container}>{children}</div>
		</div>
	);
}

export { Layout };
export type { LayoutProps };
