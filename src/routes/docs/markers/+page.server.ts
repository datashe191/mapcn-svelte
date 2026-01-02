import fs from "fs";
import path from "path";
import { highlightCode } from "$lib/highlight";

const EXAMPLES_DIR = path.resolve("src/lib/components/docs/preview/examples");

function getExampleSource(filename: string): string {
	const filePath = path.join(EXAMPLES_DIR, filename);

	if (!fs.existsSync(filePath)) {
		throw new Error(`Example file not found: ${filename}`);
	}

	const source = fs.readFileSync(filePath, "utf-8");

	// Normalize imports for display
	return source.replace(/@\/registry\/map/g, "@/components/ui/map");
}

export const load = async () => {
	const markersSource = getExampleSource("MarkersExample.svelte");
	const popupSource = getExampleSource("PopupExample.svelte");

	return {
		markersSource,
		markersHighlighted: await highlightCode(markersSource, "svelte"),

		popupSource,
		popupHighlighted: await highlightCode(popupSource, "svelte"),
	};
};
