import fs from "fs";
import path from "path";
import { highlightCode } from "$lib/highlight";

const EXAMPLES_DIR = path.resolve("src/lib/components/docs/preview/examples");

function getExampleSource(filename: string): string {
	const filePath = path.join(EXAMPLES_DIR, filename);

	if (!fs.existsSync(filePath)) {
		throw new Error(`Example file not found: ${filename}`);
	}

	return fs.readFileSync(filePath, "utf-8");
}

export const load = async () => {
	const source = getExampleSource("BasicMapExample.svelte");

	return {
		basicMapSource: source,
		basicMapHighlighted: await highlightCode(source, "svelte"),
	};
};
