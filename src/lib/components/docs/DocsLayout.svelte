<script lang="ts">
	import DocsHeader from "./DocsHeader.svelte";

	interface NavLink {
		title: string;
		href: string;
	}

	const {
		title,
		description,
		prev,
		next,
		children,
	} = $props<{
		title: string;
		description: string;
		prev?: NavLink;
		next?: NavLink;
		children?: import("svelte").Snippet;
	}>();
</script>

<div>
	<DocsHeader {title} {description} />

	<div class="mt-10 space-y-10">
		{@render children?.()}
	</div>

	{#if prev || next}
		<div class="mt-14 flex items-center justify-between gap-4 border-t pt-8">
			{#if prev}
				<a
					href={prev.href}
					class="group flex flex-col items-start gap-1.5"
				>
					<span class="text-xs text-muted-foreground">Previous</span>
					<span
						class="text-sm font-medium underline-offset-4 group-hover:underline"
					>
						{prev.title}
					</span>
				</a>
			{:else}
				<div />
			{/if}

			{#if next}
				<a
					href={next.href}
					class="group flex flex-col items-end gap-1.5"
				>
					<span class="text-xs text-muted-foreground">Next</span>
					<span
						class="text-sm font-medium underline-offset-4 group-hover:underline"
					>
						{next.title}
					</span>
				</a>
			{/if}
		</div>
	{/if}
</div>
