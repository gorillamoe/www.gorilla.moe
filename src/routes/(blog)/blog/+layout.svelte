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
			<main class="blog">
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</div>

<style>
	:global(html:has(main.blog)) :global(body:has(main.blog)) {
		font-size: 1rem;
		text-align: left;
	}
</style>
