import { createFileRoute } from "@tanstack/react-router";
import { Content } from "@/docs/content/content";
import { Layout } from "@/docs/layout/layout";
import { Sidebar } from "@/docs/sidebar/sidebar";
import { MarkdownRenderer } from "@/docs/markdown-renderer/markdown-renderer";
import { parseMarkdown } from "@/lib/md-parser";
import readmeContent from "../../README.md?raw";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	const sections = parseMarkdown(readmeContent);

	return (
		<Layout>
			<Sidebar activeRoute="/" />
			<Content>
				<MarkdownRenderer sections={sections} />
			</Content>
		</Layout>
	);
}
