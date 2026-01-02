<script lang="ts">
	import { cn } from "$lib/utils";
	import CopyButton from "$lib/components/CopyButton.svelte";

	const {
		code,
		highlightedCode,
		className,
		children,
	} = $props<{
		code: string;
		highlightedCode: string;
		className?: string;
		children?: import("svelte").Snippet;
	}>();

	let activeTab = $state<"preview" | "code">("preview");
</script>

<div class="w-full overflow-hidden rounded-lg border">
	<div
		class="flex h-12 items-center justify-between border-b bg-muted/30 px-2"
	>
		<div class="flex gap-2">
			<button
				onclick={() => (activeTab = "preview")}
				class={cn(
					"rounded px-2 py-1 text-xs font-medium transition-colors",
					activeTab === "preview"
						? "bg-muted text-foreground dark:bg-muted/80"
						: "text-muted-foreground hover:bg-muted hover:text-foreground dark:hover:bg-muted/80"
				)}
			>
				Preview
			</button>

			<button
				onclick={() => (activeTab = "code")}
				class={cn(
					"rounded px-3 py-1 text-xs font-medium transition-colors",
					activeTab === "code"
						? "bg-muted text-foreground dark:bg-muted/80"
						: "text-muted-foreground hover:bg-muted hover:text-foreground dark:hover:bg-muted/80"
				)}
			>
				Code
			</button>
		</div>

		<CopyButton command={code} />
	</div>

	<div class={cn("h-[400px] overflow-hidden", className)}>
		{#if activeTab === "preview"}
			<div class="h-full">
				{@render children?.()}
			</div>
		{:else}
			<div
				class="h-full overflow-auto bg-muted/20 p-4 text-sm [&_pre]:bg-transparent! [&_code]:bg-transparent!"
			>
				{@html highlightedCode}
			</div>
		{/if}
	</div>
</div>
