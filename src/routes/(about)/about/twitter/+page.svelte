<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import BackButtonComponent from '$lib/BackButtonComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'Twitter - the good, the bad and the ugly',
		description:
			"Twitter is a love-hate relationship for me. Let's explore the good, the bad, and the ugly sides."
	}}
/>

<BackButtonComponent data={{ path: '/about' }} />

<div class="container">
	<div class="inner">
		<h3 class="blue">Twitter</h3>
		<p>
			Twitter is a love-hate relationship for me 😠. I love the platform, but I hate the fact that
			it's so easy to get lost in the endless stream of tweets.
		</p>
		<p>
			Sad thing is, I deleted my first twitter 🐦 account a while ago, because I was so fed up with
			all the negativity and the hate. But I missed the platform so much, that I created a new
			account.
		</p>
		<p>
			Then I lost my username to another bud, now I'm stuck with @gmoebananas 🤷. Guess, that's life
			.🙈
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
