<script lang="ts">
	const {
		href,
		external = false,
		children,
	} = $props<{
		href: string;
		external?: boolean;
		children?: import("svelte").Snippet;
	}>();
</script>

<a
	href={href}
	target={external ? "_blank" : undefined}
	rel={external ? "noopener noreferrer" : undefined}
	class="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
>
	{@render children?.()}
</a>
