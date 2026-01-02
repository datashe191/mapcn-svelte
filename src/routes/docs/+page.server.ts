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

	return normalizeImports(await loader());
}

export const load = async () => {
	const routeSource = await getExampleSource("RouteExample");
	const osrmRouteSource = await getExampleSource("OsrmRouteExample");

	return {
		routeSource,
		routeHighlighted: await highlightCode(routeSource, "svelte"),

		osrmRouteSource,
		osrmRouteHighlighted: await highlightCode(osrmRouteSource, "svelte"),
	};
};
