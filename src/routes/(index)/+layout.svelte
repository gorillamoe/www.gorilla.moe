<script>
	import '$lib/index/fonts.css';
	import AudioComponent from '$lib/Audio.svelte';
</script>

<div class="app">
	<AudioComponent />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: block;
		flex-direction: column;
		height: auto;
		min-height: 100vh;
	}
</style>
