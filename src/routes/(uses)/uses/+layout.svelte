<script>
	import Footer from './footer.svelte';
	import '@fontsource/manrope';
	import '@fontsource/jetbrains-mono';
	import './layout.css';
</script>

<div class="layout-container-uses">
	<div class="layout-centered-uses">
		<div class="layout-uses">
			<main>
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</div>
