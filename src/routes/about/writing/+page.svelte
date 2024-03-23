<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import BackButtonComponent from '$lib/BackButtonComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'Writing and Documentation',
		description: "I really like to write, but I don't do it very often, at least not on my blog."
	}}
/>

<BackButtonComponent data={{ path: '/about' }} />

<div class="container">
	<div class="inner">
		<h3 class="turquoiseblue">Writing</h3>
		<p>
			I really like to write, but I don't do it very often, at least not on my <del>blog</del> treasure
			filled dumpster.
		</p>
		<p>
			My <del>blog</del> treasure filled dumpster is somehow like a big and shiny and awesome rainbow-colored
			dumpster! It's a treasure-chest-dumpster, filled with all the good stuff. Programming snippets,
			documentation and stories about me and my life.
		</p>
		<h3 class="orange">Documentation</h3>
		<p>
			I write a lot of documentation and I'm very good at it. Most of the stuff isn't publicly
			available though :(
		</p>
	</div>
</div>

<style>
	@import './../styles.css';
</style>
