import { highlightCode } from "$lib/highlight";

/**
 * Bundle all example components as raw strings at build time.
 */
const examples = import.meta.glob("$lib/components/docs/preview/examples/*.svelte", { as: "raw" });

function normalizeImports(source: string) {
	return source.replace(/@\/registry\/map/g, "@/components/ui/map");
}

async function getExampleSource(name: string): Promise<string> {
	const key = `/src/lib/components/docs/preview/examples/${name}.svelte`;
	const loader = examples[key];

	if (!loader) {
		throw new Error(`Example file not found: ${name}`);
	}

	const source = await loader();
	return normalizeImports(source);
}

export const load = async () => {
	const markersSource = await getExampleSource("MarkersExample");
	const popupSource = await getExampleSource("PopupExample");

	return {
		markersSource,
		markersHighlighted: await highlightCode(markersSource, "svelte"),

		popupSource,
		popupHighlighted: await highlightCode(popupSource, "svelte"),
	};
};
