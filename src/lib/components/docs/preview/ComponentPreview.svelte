<script lang="ts">
	import ComponentPreviewClient from "$lib/components/docs/preview/ComponentPreviewClient.svelte";

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
</script>

<ComponentPreviewClient
	{code}
	{highlightedCode}
	class={className}
>
	{@render children?.()}
</ComponentPreviewClient>
