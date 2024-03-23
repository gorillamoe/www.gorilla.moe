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
		<p>This is my now page.</p>
	</div>
</div>
