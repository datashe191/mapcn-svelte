<script lang="ts">
	import Map from "$lib/registry/blocks/map/Map.svelte";
	import MapMarker from "$lib/registry/blocks/map/MapMarker.svelte";
	import MarkerContent from "$lib/registry/blocks/map/MarkerContent.svelte";
	import MarkerPopup from "$lib/registry/blocks/map/MarkerPopup.svelte";
	import MarkerTooltip from "$lib/registry/blocks/map/MarkerTooltip.svelte";
	import MarkerLabel from "$lib/registry/blocks/map/MarkerLabel.svelte";
	import MapControls from "$lib/registry/blocks/map/MapControls.svelte";
	import MapRoute from "$lib/registry/blocks/map/MapRoute.svelte";
	import MapPopup from "$lib/registry/blocks/map/MapPopup.svelte";
	import Card from "$lib/registry/ui/card/card.svelte";
	import HelloWorld from "$lib/registry/blocks/hello-world/hello-world.svelte";
	import ExampleForm from "$lib/registry/blocks/example-form/example-form.svelte";
	import PokemonPage from "$lib/registry/blocks/complex-component/+page.svelte";
	import ExampleCard from "$lib/registry/blocks/example-with-css/example-card.svelte";

	const locations = [
		{ id: 1, name: "Berlin", longitude: 13.405, latitude: 52.52 },
		{ id: 2, name: "Potsdam", longitude: 13.0635, latitude: 52.3906 },
		{ id: 3, name: "Brandenburg", longitude: 12.5316, latitude: 52.4125 },
	];

	// Route coordinates connecting the locations
	const routeCoordinates: [number, number][] = [
		[13.405, 52.52],
		[13.25, 52.48],
		[13.0635, 52.3906],
		[12.8, 52.4],
		[12.5316, 52.4125],
	];

	// Standalone popup state
	let showStandalonePopup = $state(true);
</script>

<div class="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
	<header class="flex flex-col gap-1">
		<h1 class="text-3xl font-bold tracking-tight">Custom Registry</h1>
		<p class="text-muted-foreground">
			A custom registry for distributing code using shadcn-svelte.
		</p>
	</header>
	<main class="flex flex-1 flex-col gap-8">
		<!-- Map with all features: markers, popups, tooltips, labels, controls, and route -->
		<Card class="h-[450px] overflow-hidden p-0">
			<Map center={[13.0, 52.45]} zoom={9}>
				<!-- Map controls -->
				<MapControls showZoom showCompass showLocate showFullscreen />

				<!-- Route connecting locations -->
				<MapRoute coordinates={routeCoordinates} color="#3b82f6" width={4} opacity={0.7} />

				<!-- Standalone popup (not attached to a marker) -->
				{#if showStandalonePopup}
					<MapPopup
						longitude={13.25}
						latitude={52.48}
						closeButton
						onclose={() => (showStandalonePopup = false)}
					>
						<div class="min-w-[200px]">
							<h3 class="font-semibold">Standalone Popup</h3>
							<p class="text-muted-foreground text-sm">
								This popup is not attached to any marker. It can be placed anywhere on the map.
							</p>
						</div>
					</MapPopup>
				{/if}

				<!-- Markers with content, popups, tooltips, and labels -->
				{#each locations as loc (loc.id)}
					<MapMarker longitude={loc.longitude} latitude={loc.latitude}>
						<MarkerContent>
							<div class="relative">
								<div class="size-5 rounded-full border-2 border-white bg-primary shadow-lg"></div>
								<MarkerLabel position="top">{loc.name}</MarkerLabel>
							</div>
						</MarkerContent>

						<MarkerPopup closeButton>
							<div class="min-w-[180px]">
								<h3 class="font-semibold">{loc.name}</h3>
								<p class="text-muted-foreground text-sm">
									Lat: {loc.latitude.toFixed(4)}<br />
									Lng: {loc.longitude.toFixed(4)}
								</p>
							</div>
						</MarkerPopup>

						<MarkerTooltip>
							Click for details
						</MarkerTooltip>
					</MapMarker>
				{/each}
			</Map>
		</Card>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:ps-3">A simple hello world component</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center">
				<HelloWorld />
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:ps-3">A contact form with Zod validation.</h2>
			</div>
			<div class="relative flex min-h-[500px] items-center justify-center">
				<ExampleForm />
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:ps-3">
					A complex component showing hooks, libs and components.
				</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center">
				<PokemonPage />
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:ps-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center">
				<ExampleCard />
			</div>
		</div>
	</main>
</div>
