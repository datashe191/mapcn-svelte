<script lang="ts">
	import { highlightCode } from "$lib/highlight";
	import CopyButton from "$lib/components/CopyButton.svelte";
	import { onMount } from "svelte";

	const {
		code,
		language = "tsx",
		showCopyButton = true,
	} = $props<{
		code: string;
		language?: string;
		showCopyButton?: boolean;
	}>();

	let highlightedCode = $state<string>("");

	onMount(async () => {
		highlightedCode = await highlightCode(code, "tsx");
	});
</script>

<div class="w-full overflow-hidden rounded-lg border">
	{#if showCopyButton}
		<div
			class="flex h-9 items-center justify-end border-b bg-muted/30 px-2"
		>
			<CopyButton command={code} />
		</div>
	{/if}

	<div
		class="overflow-auto bg-muted/20 p-4 text-sm [&_pre]:bg-transparent! [&_code]:bg-transparent!"
	>
		{@html highlightedCode}
	</div>
</div>
