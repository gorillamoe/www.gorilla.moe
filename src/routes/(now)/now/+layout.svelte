<script>
	import Footer from './footer.svelte';
	import '@fontsource/manrope';
	import '@fontsource/jetbrains-mono';
	import './layout.css';
</script>

<div class="layout-container-now">
	<div class="layout-centered-now">
		<div class="layout-now">
			<main>
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</div>
