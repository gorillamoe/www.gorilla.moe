<script>
	import { onMount } from 'svelte';
	import HeadComponent from '$lib/HeadComponent.svelte';
	import HeartIcon from '$lib/icons/fontawesome/heart.svelte';
	import CardIcon from '$lib/icons/fontawesome/id-card.svelte';
	import GitHubIcon from '$lib/icons/fontawesome/github.svelte';
	import BlueskyIcon from '$lib/icons/fontawesome/bluesky.svelte';

	/** @type {HTMLElement} */
	let swapper;

	onMount(() => {
		swapper.addEventListener('click', () => {
			swapper.querySelectorAll('img').forEach((img) => {
				img.classList.toggle('hidden');
			});
		});
	});
</script>

<HeadComponent
	data={{
		title: 'Marco Kellershoff a.k.a. Gorilla Moe',
		description:
			"Marco Kellershoff a.k.a. Gorilla Moe is a loud 📢 introvert who can't live without Linux 🐧 and Neovim 🖥️!"
	}}
/>

<div class="container">
	<div class="inner">
		<header>Just do it!</header>
		<div class="swapper" bind:this={swapper}>
			<picture>
				<source srcset="/minimal-gorilla-dark-512.webp" type="image/webp" />
				<img src="/minimal-gorilla-dark-512.png" alt="Minimalistic Dark Gorilla Moe Logo" />
			</picture>
			<picture>
				<source srcset="/avatar.webp" type="image/webp" />
				<img src="/avatar.png" alt="Marco Kellershoff a.k.a. Gorilla Moe." class="hidden" />
			</picture>
		</div>
		<div class="get-in-touch">
			<a href="/about" id="aboutmelink" title="About Me Page" class="card-icon">
				<CardIcon />
			</a>
			<a
				href="https://github.com/gorillamoe"
				title="Check out my Github profile"
				class="github-icon"
			>
				<GitHubIcon />
			</a>
			<a
				href="https://bsky.app/profile/gorilla.moe"
				title="Check out my Bluesky account"
				class="bluesky-icon"
			>
				<BlueskyIcon />
			</a>
			<a href="https://ko-fi.com/gorillamoe" title="Buy me a coffee" class="heart-icon">
				<HeartIcon />
			</a>
		</div>
	</div>
</div>

<style>
	.container {
		margin: 0;
		padding: 0;
		width: 100%;
		height: auto;
		min-height: 100vh;
		text-align: center;
		position: relative;
		font-size: 1.5rem;
		color: #fff;
		background-color: #1b1b1b;
	}

	header {
		font-family: 'Permanent Marker', cursive;
		font-size: 2rem;
	}

	.inner {
		text-align: center;
		width: 85%;
		margin: auto;
		min-height: calc(100vh - 4rem);
		font-family: monospace;
		max-width: 530px;
	}

	.get-in-touch a {
		color: #fff;
		text-decoration: none;
		border: 0 none;
	}

	.heart-icon :global(svg):hover,
	.card-icon :global(svg):hover,
	.github-icon :global(svg):hover,
	.bluesky-icon :global(svg):hover {
		fill: #ff6480;
	}

	.heart-icon :global(svg),
	.card-icon :global(svg),
	.github-icon :global(svg),
	.bluesky-icon :global(svg) {
		transition: fill 0.5s;
		display: inline-block;
		cursor: pointer;
		height: 32px;
		width: 32px;
	}

	img {
		max-width: 100%;
		border-radius: 50%;
		border: 3px solid #fff;
	}

	.hidden {
		display: none;
	}
</style>
