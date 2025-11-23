import React from "react";
import { LiveProvider, LivePreview, LiveError } from "react-live";
import { Button } from "@/registry/components/atoms/button";
import { Badge } from "@/registry/components/atoms/badge";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/registry/components/atoms/card";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/registry/components/atoms/navigation-menu";
import styles from "./live-code.module.css";

interface LiveCodeProps {
	code: string;
	language?: string;
	meta?: string;
}

// Scope with all available components
const scope = {
	React,
	Button,
	Badge,
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardAction,
	CardContent,
	CardFooter,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
};

function LiveCode({ code, meta }: LiveCodeProps) {
	const isLive = meta?.includes("live");

	if (!isLive) {
		return (
			<pre>
				<code>{code}</code>
			</pre>
		);
	}

	// Remove imports/exports from code
	const cleanCode = code
		.replace(/^import\s+.*$/gm, "")
		.replace(/^export\s+(default\s+)?/gm, "")
		.trim();

	return (
		<div className={styles.liveCode}>
			<LiveProvider code={cleanCode} scope={scope} noInline={false}>
				<div className={styles.preview}>
					<LiveError className={styles.error} />
					<LivePreview />
				</div>
				<details className={styles.codeDetails}>
					<summary>Ver código</summary>
					<pre>
						<code>{code}</code>
					</pre>
				</details>
			</LiveProvider>
		</div>
	);
}

export { LiveCode };
export type { LiveCodeProps };
