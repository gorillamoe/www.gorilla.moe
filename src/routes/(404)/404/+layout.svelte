<script>
	import Footer from './footer.svelte';
	import '@fontsource/manrope';
	import '@fontsource/jetbrains-mono';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import './layout.css';
</script>

<div class="layout-container">
	<div class="layout-centered">
		<div class="layout">
			<main class="e404">
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</div>

<style>
	:global(html:has(main.e404)) :global(body:has(main.e404)) {
		font-size: 1rem;
		text-align: left;
	}
</style>
