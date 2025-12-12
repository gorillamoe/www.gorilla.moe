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
			<main>
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</div>
