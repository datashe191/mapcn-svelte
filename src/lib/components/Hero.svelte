<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index";
	import { ArrowRight } from "@lucide/svelte";
	import CopyButton from "$lib/components/CopyButton.svelte";

	const installCommand = `npx shadcn@latest add https://mapcn.vercel.app/maps/map.json`;
</script>

<div class="space-y-6 mb-12">
	<div class="text-center space-y-4">
		<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-fade-up">
			Beautiful maps, made simple.
		</h1>
		<p class="text-foreground/80 text-lg max-w-2xl mx-auto animate-fade-up delay-100">
			Free & open source map components. Zero config, one command setup. Built on MapLibre GL, styled with Tailwind,
			works seamlessly with shadcn/ui.
		</p>
	</div>

	<div class="flex justify-center animate-fade-up delay-200 w-full px-4">
		<div
			class="inline-flex items-center gap-3 bg-secondary/50 border border-border/50 rounded-full px-5 py-2.5 font-mono text-sm max-w-full overflow-x-auto">
			<span class="text-muted-foreground shrink-0">$</span>
			<code>{installCommand}</code>
			<CopyButton command={installCommand} />
		</div>
	</div>

	<div class="flex flex-wrap justify-center items-center gap-3 animate-fade-up delay-300">
		<Button href="/docs" class="inline-flex items-center gap-2">
			Get Started
			<ArrowRight class="size-4" />
		</Button>
		<Button variant="outline" size="lg">
			<a href="/docs/basic-map">View Examples</a>
		</Button>
	</div>
</div>
