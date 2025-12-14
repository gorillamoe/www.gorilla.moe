<script>
	import '$lib/apps/fonts.css';
</script>

<div class="app">
	<main class="assets">
		<slot />
	</main>
</div>

<style>
	:global(html:has(main.assets)) :global(body:has(main.assets)) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		position: relative;
		background-color: #272b30;
	}

	:global(main.assets) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-size: 1.5rem;
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
