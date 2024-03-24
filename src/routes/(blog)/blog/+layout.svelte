<script>
	import Footer from './footer.svelte';
	import '@fontsource/manrope';
	import '@fontsource/jetbrains-mono';
	import '$lib/prismjs-themes/xonokai.css';
	import './style.css';
</script>

<div class="layout-container">
	<div class="layout">
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</div>
