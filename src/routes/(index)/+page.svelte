<script lang="ts">
	import { onMount } from 'svelte';
	import HeadComponent from '$lib/HeadComponent.svelte';
	import HeartIcon from '$lib/icons/fontawesome/heart.svg?raw'
	import CardIcon from '$lib/icons/fontawesome/id-card.svg?raw'
	import GitHubIcon from '$lib/icons/fontawesome/github.svg?raw'
	import BlueskyIcon from '$lib/icons/fontawesome/bluesky.svg?raw'

	let swapper: HTMLElement | null = null;

	onMount(() => {
		swapper?.addEventListener('click', () => {
			swapper?.querySelectorAll('img').forEach((img) => {
				img.classList.toggle('hidden');
			});
		});
	});
</script>

<HeadComponent
	title="Marco 'gorillamoe' Kellershoff"
	description=
			"Marco Kellershoff a.k.a. gorillamoe / Gorilla Moe is a loud 📢 introvert who can't live without Linux 🐧 and Neovim 🖥️!"
/>

<div class="container">
	<div class="inner">
		<header>Just do it!</header>
		<div class="swapper" bind:this={swapper}>
			<picture>
				<source srcset="/avatar-marco-2026-cyberpunk-512x512.webp" type="image/webp" />
				<img src="/avatar-marco-2026-cyberpunk-512x512.png" alt="Minimalistic Dark Gorilla Moe Logo" />
			</picture>
			<picture>
				<source srcset="/avatar.webp" type="image/webp" />
				<img src="/avatar.png" alt="Marco Kellershoff a.k.a. Gorilla Moe." class="hidden" />
			</picture>
		</div>
		<div class="get-in-touch">
			<a href="/about" id="aboutmelink" title="About Me Page" class="card-icon">
				<span class="icon">
					{@html CardIcon}
				</span>
			</a>
			<a href="https://github.com/gorillamoe" title="Check out my Github profile" class="github-icon">
				<span class="icon">
					{@html GitHubIcon}
				</span>
			</a>
			<a href="https://bsky.app/profile/gorilla.moe" title="Check out my Bluesky account" class="bluesky-icon">
				<span class="icon">
					{@html BlueskyIcon}
				</span>
			</a>
			<a href="https://ko-fi.com/gorillamoe" title="Buy me a coffee" class="heart-icon">
				<span class="icon">
					{@html HeartIcon}
				</span>
			</a>
		</div>
	</div>
</div>

<style>
	:global(html, body) {
		height: 100%;
	}

	:global(body) {
		margin: 0;
	}

	.container {
		margin: 0;
		padding: 0;
		width: 100%;
		min-height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		position: relative;
		font-size: 1.5rem;
		color: #fff;
		background-color: #241533;
		box-sizing: border-box;
	}

	header {
		font-family: 'Permanent Marker', cursive;
		font-size: clamp(3.25rem, 7vh, 5rem);
		line-height: 1.05;
		font-weight: 800;
		overflow-wrap: anywhere;
	}

	.inner {
		text-align: center;
		width: 85%;
		margin: 0 auto;
		padding: 1.25rem;
		font-family: monospace;
		max-width: 530px;
		box-sizing: border-box;
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
