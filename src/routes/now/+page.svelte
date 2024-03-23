<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import BackButtonComponent from '$lib/BackButtonComponent.svelte';
	import './styles.css';
</script>

<HeadComponent
	data={{
		title: 'Now page',
		description: 'What I am doing right now.'
	}}
/>

<BackButtonComponent data={{ path: '/' }} />

<div class="container">
	<div class="inner">
		<h3 class="poisonousgreen">What I am doing right now</h3>
		<p>Here is a list of things I am currently working on or learning.</p>

		<h3 class="elephantblue">now powered by SvelteKit</h3>
		<p>I have migrated this site (gorilla.moe) to SvelteKit.</p>
		<p>The site is now statically generated and hosted on a cheap Hetzner cloud instance.</p>
		<p>The deployment is automated with GitHub Actions.</p>

		<h3 class="turquoiseblue">Learning SvelteKit</h3>
		<p>
			I am currently learning SvelteKit, a framework for building web applications with Svelte.
			I am excited to see how it compares to other frameworks like React and Vue.
		</p>
	</div>
</div>
