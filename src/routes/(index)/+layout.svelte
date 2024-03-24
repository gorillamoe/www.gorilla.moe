<script>
	import { fade } from 'svelte/transition';
	import '$lib/index-fonts.css';
	import AudioComponent from '$lib/Audio.svelte';

	export let data;

	$: pathname = data.pathname;
</script>

<div class="app">
	<AudioComponent />

	{#key pathname}
		<main transition:fade>
			<slot />
		</main>
	{/key}
</div>

<style>
	.app {
		display: block;
		flex-direction: column;
		height: auto;
		min-height: 100vh;
	}
</style>
