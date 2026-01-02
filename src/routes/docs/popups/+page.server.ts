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
	const source = getExampleSource("StandalonePopupExample.svelte");

	return {
		popupSource: source,
		popupHighlighted: await highlightCode(source, "svelte"),
	};
};
