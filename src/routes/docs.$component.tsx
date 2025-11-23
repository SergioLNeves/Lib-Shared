import { createFileRoute } from "@tanstack/react-router";
import { Content } from "@/docs/content/content";
import { Layout } from "@/docs/layout/layout";
import { MarkdownRenderer } from "@/docs/markdown-renderer/markdown-renderer";
import { Sidebar } from "@/docs/sidebar/sidebar";
import { getComponentDocs } from "@/lib/md-parser";

export const Route = createFileRoute("/docs/$component")({
	component: ComponentDocs,
	loader: ({ params }) => {
		const docs = getComponentDocs();
		const componentDoc = docs.find((doc) => doc.name === params.component);

		if (!componentDoc) {
			throw new Error(`Component ${params.component} not found`);
		}

		return { componentDoc };
	},
});

function ComponentDocs() {
	const { componentDoc } = Route.useLoaderData();

	return (
		<Layout>
			<Sidebar activeRoute={`/docs/${componentDoc.name}`} />
			<Content>
				<MarkdownRenderer sections={componentDoc.sections} />
			</Content>
		</Layout>
	);
}
