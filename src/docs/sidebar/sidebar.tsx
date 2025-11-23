import { Link } from "@tanstack/react-router";
import { getComponentDocs } from "@/lib/md-parser";
import styles from "./sidebar.module.css";

interface SidebarProps {
	activeRoute?: string;
}

function Sidebar({ activeRoute }: SidebarProps) {
	const docs = getComponentDocs();

	return (
		<aside className={styles.sidebar}>
			<div className={styles.header}>
				<h1>Lib Shared</h1>
				<p>Biblioteca de Componentes</p>
			</div>
			<nav className={styles.nav}>
				<Link
					to="/"
					className={`${styles.navItem} ${activeRoute === "/" ? styles.active : ""}`}
				>
					Início
				</Link>
				<div className={styles.navSection}>
					<h3>Componentes</h3>
					{docs.map((doc) => (
						<a
							key={doc.name}
							href={`/docs/${doc.name}`}
							className={`${styles.navItem} ${activeRoute === `/docs/${doc.name}` ? styles.active : ""}`}
						>
							{doc.name.charAt(0).toUpperCase() + doc.name.slice(1)}
						</a>
					))}
				</div>
			</nav>
		</aside>
	);
}

export { Sidebar };
export type { SidebarProps };
