import { highlightCode } from "$lib/highlight";

/**
 * Bundle all example components as raw strings at build time.
 */
const examples = import.meta.glob("$lib/components/docs/preview/examples/*.svelte", { as: "raw" });

export const load = async () => {
	const key = "/src/lib/components/docs/preview/examples/MapControlsExample.svelte";

	const loader = examples[key];

	if (!loader) {
		throw new Error(`Example file not found: ${key}`);
	}

	const source = await loader();

	return {
		controlsSource: source,
		controlsHighlighted: await highlightCode(source, "svelte"),
	};
};
