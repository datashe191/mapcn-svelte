<script lang="ts">
	import "../app.css";
	import { injectAnalytics } from "@vercel/analytics/sveltekit";

	injectAnalytics({ mode: "production" });

	let { children } = $props();
</script>

{@render children()}
