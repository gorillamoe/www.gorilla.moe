<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import BackButtonComponent from '$lib/BackButtonComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'Neovim, better than sliced-bread',
		description:
			'I started using Vim in 2012 and the learning curve was very steep, but it was really worth it.'
	}}
/>

<BackButtonComponent data={{ path: '/about' }} />

<div class="container">
	<div class="inner">
		<h3 class="neovimblue">Neovim, better than sliced-bread</h3>
		<p>
			I started using Vim in 2012 and the learning curve was very steep, but it was really worth it.
		</p>
		<p>
			The best decision I made, back in these days, was buying a cheap
			<a href="https://amzn.to/2JpjhXr" class="yellow"
				>Cherry&trade; Stream XT Evolution US-Layout Keyboard</a
			>. This made everything so much easier. The layout is not only better with using Vim/Neovim,
			it just makes <strong>everything</strong>
			so much easier, when you're a programmer.
		</p>
		<p>
			I'm currently in love <span class="red">&hearts;</span> with my
			<a href="/resources/uses/vortex-10-limited-edition.jpg" class="orange"
				>Vortex 10 Limited Edition keyboard</a
			>.
		</p>
	</div>
</div>

<style>
	@import '$lib/colors.css';
	@import './../page.css';
	.neovimblue {
		color: var(--sexy-color-neovimblue);
	}
	.yellow {
		color: var(--sexy-color-yellow);
	}
	.red {
		color: var(--sexy-color-red);
	}
	.orange {
		color: var(--sexy-color-orange);
	}
</style>
