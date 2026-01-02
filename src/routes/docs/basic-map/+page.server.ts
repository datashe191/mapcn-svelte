import { highlightCode } from "$lib/highlight";

/**
 * Load all example Svelte files as raw strings at build time.
 * Vite guarantees these exist in production.
 */
const examples = import.meta.glob("$lib/components/docs/preview/examples/*.svelte", { as: "raw" });

export const load = async () => {
	const key = "/src/lib/components/docs/preview/examples/BasicMapExample.svelte";

	const loader = examples[key];

	if (!loader) {
		throw new Error(`Example file not found: ${key}`);
	}

	const source = await loader();

	return {
		basicMapSource: source,
		basicMapHighlighted: await highlightCode(source, "svelte"),
	};
};

