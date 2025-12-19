<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import BackButtonComponent from '$lib/BackButtonComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'Bluesky',
		description:
			"Because Twitter has become a toxic place, full of hate and misinformation, I'm trying to find a new home on Bluesky."
	}}
/>

<BackButtonComponent data={{ path: '/about' }} />

<div class="container">
	<div class="inner">
		<h3 class="blue">Bluesky</h3>
		<p>
			Because Twitter has become a toxic place, full of hate and misinformation, I'm trying to find a new home on
			Bluesky.
		</p>
		<p>
			You can find me on Bluesky under the username <a href="https://bsky.app/profile/gorilla.moe" class="blue"
				>@gorilla.moe</a
			>.
		</p>
	</div>
</div>

<style>
	@import '$lib/colors.css';
	@import './../page.css';
	.blue {
		color: var(--sexy-color-blue);
	}
</style>
