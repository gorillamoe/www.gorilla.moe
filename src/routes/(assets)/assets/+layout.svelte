<script>
	import '$lib/apps/fonts.css';
</script>

<div class="app">
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
