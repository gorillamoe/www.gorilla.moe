<!-- Footer -->
<footer>
	<p>
		Coded by <a href="/">Marco Kellershoff a.k.a. Gorilla Moe 🦍🍌</a> - Powered by
		<a class="powered-by-svelte" href="https://kit.svelte.dev/">SvelteKit</a>
		- &copy {new Date().getFullYear()}
	</p>
</footer>

<style>
	footer {
		font-family: var(--font-sans);
		font-size: var(--font-size-xs);
	}
	.powered-by-svelte::before {
		content: '';
		display: inline-block;
		background-image: url('/svelte-logo.svg');
		background-size: contain;
		background-repeat: no-repeat;
		width: var(--font-size-xs);
		height: var(--font-size-xs);
	}
</style>
