<script>
	import '$lib/about/fonts.css';
</script>

<div class="app">
	<main class="about">
		<slot />
	</main>
</div>

<style>
	:global(html:has(main.about)) :global(body:has(main.about)) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		position: relative;
		background-color: #272b30;
	}

	:global(main.about) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-size: 2.3rem;
		color: #fff;
	}

	.app {
		display: block;
		flex-direction: column;
		height: auto;
		min-height: 100vh;
	}
</style>
