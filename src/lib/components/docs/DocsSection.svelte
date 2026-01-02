<script lang="ts">
	const {
		title,
		children,
	} = $props<{
		title?: string;
		children?: import("svelte").Snippet;
	}>();
</script>

<section class="space-y-5">
	{#if title}
		<h2 class="text-xl font-semibold tracking-tight">{title}</h2>
	{/if}

	<div
		class="space-y-4 leading-7 text-muted-foreground [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2"
	>
		{@render children?.()}
	</div>
</section>
