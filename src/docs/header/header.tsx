import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/docs/theme-toggle/theme-toggle";
import { getComponentDocs } from "@/lib/md-parser";
import { Button } from "@/registry/components/atoms/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/registry/components/atoms/navigation-menu";
import styles from "./header.module.css";

function Header() {
	const docs = getComponentDocs();

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to="/" className={styles.logo}>
					Lib Shared
				</Link>

				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link to="/">Início</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NavigationMenuTrigger>Componentes</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div className={styles.dropdown}>
									{docs.map((doc) => (
										<NavigationMenuLink key={doc.name} asChild>
											<a
												href={`/docs/${doc.name}`}
												className={styles.dropdownItem}
											>
												{doc.name.charAt(0).toUpperCase() + doc.name.slice(1)}
											</a>
										</NavigationMenuLink>
									))}
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>

				<div className={styles.actions}>
					<ThemeToggle />
					<Button variant="primary" asChild>
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					</Button>
				</div>
			</div>
		</header>
	);
}

export { Header };
