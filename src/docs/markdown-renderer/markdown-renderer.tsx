import type { Section } from "@/lib/md-parser";
import { LiveCode } from "@/docs/live-code/live-code";
import styles from "./markdown-renderer.module.css";

interface MarkdownRendererProps {
	sections: Section[];
}

function MarkdownRenderer({ sections }: MarkdownRendererProps) {
	return (
		<div className={styles.markdown}>
			{sections.map((section, index) => (
				<section key={`section-${index}-${section.title}`} className={styles.section}>
					{renderHeading(section.title, section.level)}
					{section.content && (
						<div
							// biome-ignore lint/security/noDangerouslySetInnerHtml: Markdown content is parsed and sanitized
							dangerouslySetInnerHTML={{
								__html: formatContent(section.content),
							}}
						/>
					)}
					{section.code && section.code.length > 0 && (
						<div>
							{/* biome-ignore lint/suspicious/noArrayIndexKey: Code blocks are static content */}
							{section.code.map((codeBlock, idx) => (
								<LiveCode
									key={`code-${index}-${idx}`}
									code={codeBlock.code}
									language={codeBlock.language}
									meta={codeBlock.meta}
								/>
							))}
						</div>
					)}
				</section>
			))}
		</div>
	);
}

function renderHeading(title: string, level: number) {
	const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	return <Tag>{title}</Tag>;
}

function formatContent(content: string): string {
	// Convert markdown tables FIRST (before any other processing)
	let formatted = convertMarkdownTables(content);

	// Convert markdown links [text](url) to HTML
	formatted = formatted.replace(
		/\[([^\]]+)\]\(([^)]+)\)/g,
		'<a href="$2">$1</a>',
	);

	// Convert **bold** to <strong>
	formatted = formatted.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

	// Convert *italic* to <em>
	formatted = formatted.replace(/\*([^*]+)\*/g, "<em>$1</em>");

	// Convert inline code `code` to <code>
	formatted = formatted.replace(/`([^`]+)`/g, "<code>$1</code>");

	// Convert line breaks to <br> but preserve paragraph structure
	formatted = formatted.replace(/\n\n/g, "</p><p>");
	formatted = formatted.replace(/\n/g, "<br>");

	// Wrap in paragraph if not already wrapped
	if (!formatted.startsWith("<p>")) {
		formatted = `<p>${formatted}</p>`;
	}

	return formatted;
}

function convertMarkdownTables(content: string): string {
	const lines = content.split("\n");
	const result: string[] = [];
	let inTable = false;
	let tableRows: string[] = [];

	for (const line of lines) {
		const trimmed = line.trim();

		// Check if this line is part of a table
		if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
			if (!inTable) {
				inTable = true;
				tableRows = [];
			}
			tableRows.push(trimmed);
		} else {
			// If we were in a table, convert it now
			if (inTable && tableRows.length > 0) {
				result.push(buildTableHTML(tableRows));
				tableRows = [];
				inTable = false;
			}
			// Add non-table line
			result.push(line);
		}
	}

	// Don't forget the last table if file ends with one
	if (inTable && tableRows.length > 0) {
		result.push(buildTableHTML(tableRows));
	}

	return result.join("\n");
}

function buildTableHTML(rows: string[]): string {
	if (rows.length < 2) return rows.join("\n");

	const headerRow = rows[0];
	const separatorRow = rows[1];
	const dataRows = rows.slice(2);

	// Validate separator row (---|---|---)
	if (!separatorRow.includes("---")) {
		return rows.join("\n");
	}

	const parseRow = (row: string) => {
		return row
			.split("|")
			.slice(1, -1)
			.map((cell) => cell.trim());
	};

	const headers = parseRow(headerRow);
	const data = dataRows.map(parseRow);

	let html = "<table><thead><tr>";
	for (const header of headers) {
		html += `<th>${header}</th>`;
	}
	html += "</tr></thead><tbody>";

	for (const row of data) {
		html += "<tr>";
		for (const cell of row) {
			html += `<td>${cell}</td>`;
		}
		html += "</tr>";
	}

	html += "</tbody></table>";
	return html;
}

export { MarkdownRenderer };
export type { MarkdownRendererProps };
