<script>
	import '$lib/styles.css';
	import AudioComponent from '$lib/Audio.svelte';
</script>

<div class="app">
	<main>
		<AudioComponent />
		<slot />
	</main>
</div>

<style>
	.app {
		display: block;
		flex-direction: column;
		height: 100%;
	}
</style>
