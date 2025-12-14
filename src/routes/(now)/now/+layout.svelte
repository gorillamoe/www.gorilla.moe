<script>
	import Footer from './footer.svelte';
	import '@fontsource/manrope';
	import '@fontsource/jetbrains-mono';
	import './layout.css';
</script>

<div class="layout-container-now">
	<div class="layout-centered-now">
		<div class="layout-now">
			<main class="now">
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</div>

<style>
	:global(html:has(main.now)) :global(body:has(main.now)) {
		font-size: 1rem;
		text-align: left;
	}
</style>
