<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Examples from "$lib/components/Examples.svelte";
	import Hero from "$lib/components/Hero.svelte";
</script>

<svelte:head>
	<title>mapcn - Map components for Svelte</title>
</svelte:head>

<div class="mx-auto flex min-h-svh max-w-5xl flex-col gap-8 px-4 py-8">
	<Header class="mx-auto w-full max-w-5xl" />

	<main class="mx-auto w-full flex-1 px-6 py-16">
		<Hero />
		<Examples />
	</main>

	<Footer />
</div>
