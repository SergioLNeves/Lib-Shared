export interface ComponentDoc {
	name: string;
	path: string;
	content: string;
	sections: Section[];
}

export interface Section {
	title: string;
	level: number;
	content: string;
	code?: CodeBlock[];
}

export interface CodeBlock {
	code: string;
	language?: string;
	meta?: string;
}

export function parseMarkdown(content: string): Section[] {
	const lines = content.split("\n");
	const sections: Section[] = [];
	let currentSection: Section | null = null;
	let currentContent: string[] = [];
	let inCodeBlock = false;
	let currentCode: string[] = [];

	let currentLanguage = "";
	let currentMeta = "";

	for (const line of lines) {
		// Check for code block
		if (line.trim().startsWith("```")) {
			inCodeBlock = !inCodeBlock;
			if (inCodeBlock) {
				currentCode = [];
				// Extract language and meta from ```tsx live or ```tsx
				const match = line.trim().match(/```(\w+)?\s*(.*)/);
				currentLanguage = match?.[1] || "";
				currentMeta = match?.[2] || "";
			} else if (currentSection) {
				if (!currentSection.code) {
					currentSection.code = [];
				}
				currentSection.code.push({
					code: currentCode.join("\n"),
					language: currentLanguage,
					meta: currentMeta,
				});
				currentCode = [];
				currentLanguage = "";
				currentMeta = "";
			}
			continue;
		}

		if (inCodeBlock) {
			currentCode.push(line);
			continue;
		}

		// Check for heading
		const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
		if (headingMatch) {
			// Save previous section
			if (currentSection) {
				currentSection.content = currentContent.join("\n").trim();
				sections.push(currentSection);
			}

			// Create new section
			currentSection = {
				title: headingMatch[2],
				level: headingMatch[1].length,
				content: "",
				code: [],
			};
			currentContent = [];
		} else if (currentSection) {
			currentContent.push(line);
		}
	}

	// Save last section
	if (currentSection) {
		currentSection.content = currentContent.join("\n").trim();
		sections.push(currentSection);
	}

	return sections;
}

export function getComponentDocs(): ComponentDoc[] {
	const docs: ComponentDoc[] = [];

	// Import all markdown files from registry recursively
	const markdownModules = import.meta.glob<string>(
		"/src/registry/components/**/*.md",
		{ query: "?raw", eager: true, import: "default" },
	);

	for (const [path, content] of Object.entries(markdownModules)) {
		// Extract component name from path (folder containing the .md file)
		const pathParts = path.split("/");
		const componentName = pathParts[pathParts.length - 2];
		const sections = parseMarkdown(content);

		docs.push({
			name: componentName,
			path: `/docs/${componentName}`,
			content,
			sections,
		});
	}

	return docs;
}
