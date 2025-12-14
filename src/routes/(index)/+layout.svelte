<script>
	import '$lib/index/fonts.css';
	import AudioComponent from '$lib/Audio.svelte';
</script>

<div class="app root">
	<AudioComponent />

	<main class="root">
		<slot />
	</main>
</div>

<style>
	:global(html:has(.app.root)),
	:global(body:has(.app.root)) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		position: relative;
		background-color: #272b30;
	}

	:global(main.root) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-size: 2.3rem;
		color: #fff;
		text-align: center;
	}

	.app {
		display: block;
		flex-direction: column;
		height: auto;
		min-height: 100vh;
	}
</style>
