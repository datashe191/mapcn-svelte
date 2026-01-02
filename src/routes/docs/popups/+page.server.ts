import { highlightCode } from "$lib/highlight";

/**
 * Bundle all example components as raw strings at build time.
 */
const examples = import.meta.glob("$lib/components/docs/preview/examples/*.svelte", { as: "raw" });

async function getExampleSource(name: string): Promise<string> {
	const key = `/src/lib/components/docs/preview/examples/${name}.svelte`;
	const loader = examples[key];

	if (!loader) {
		throw new Error(`Example file not found: ${name}`);
	}

	return loader();
}

export const load = async () => {
	const source = await getExampleSource("StandalonePopupExample");

	return {
		popupSource: source,
		popupHighlighted: await highlightCode(source, "svelte"),
	};
};
