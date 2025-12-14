<script>
	import Footer from './footer.svelte';
	import '@fontsource/manrope';
	import '@fontsource/jetbrains-mono';
	import './layout.css';
</script>

<div class="layout-container-uses">
	<div class="layout-centered-uses">
		<div class="layout-uses">
			<main class="wishlist">
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</div>

<style>
	:global(html:has(main.wishlist)) :global(body:has(main.wishlist)) {
		font-size: 1rem;
		text-align: left;
	}
</style>
