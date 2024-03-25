<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import BackButtonComponent from '$lib/BackButtonComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'Programming languages and databases',
		description:
			'Go, C#, Java, PHP, JavaScript, jQuery, TypeScript, NodeJS, Terraform, MySQL, SQLite, MongoDB, Apache Solr.'
	}}
/>

<BackButtonComponent data={{ path: '/about' }} />

<div class="container">
	<div class="inner">
		<h3 class="yellow">Programming languages</h3>
		<p>I write apps in Golang, C#, Java, PHP, JavaScript, jQuery, TypeScript, NodeJS.</p>
		<p>
			I've also written apps and software in various other languages, but these are my favorite
			ones.
		</p>
		<h3 class="green">Databases?</h3>
		<p>Yes! MySQL, SQLite, MongoDB, Apache Solr, you name it!</p>
		<h3 class="devopspurple">And what about DevOps?</h3>
		<p>
			Of course! I live and breath Linux, I really dig Docker, Kubernetes and Continuous
			Integration, but bare metal servers are fine, too!
		</p>
	</div>
</div>

<style>
	@import '$lib/colors.css';
	@import './../page.css';
	.yellow {
		color: var(--sexy-color-yellow);
	}
	.green {
		color: var(--sexy-color-poisonousgreen);
	}
	.devopspurple {
		color: var(--sexy-color-devopspurple);
	}
</style>
