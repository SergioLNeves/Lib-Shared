import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Button } from "@/registry/components/atoms/button";
import styles from "./theme-toggle.module.css";

function ThemeToggle() {
	const { isDark, toggle } = useDarkMode();

	return (
		<Button
			variant="secondary"
			onClick={toggle}
			className={styles.toggle}
			aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
		>
			{isDark ? <Sun size={20} /> : <Moon size={20} />}
		</Button>
	);
}

export { ThemeToggle };
