<script lang="ts">
	const { children } = $props<{
		children?: import("svelte").Snippet;
	}>();
</script>

<div
	class="rounded-lg border bg-muted/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground
	       [&>strong]:font-medium [&>strong]:text-foreground"
>
	{@render children?.()}
</div>
