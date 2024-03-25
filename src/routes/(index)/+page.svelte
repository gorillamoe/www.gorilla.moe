<script>
	import { onMount } from 'svelte';
	import HeadComponent from '$lib/HeadComponent.svelte';
	import PhoneIcon from '$lib/icons/fontawesome/phone.svelte';
	import WhatsAppIcon from '$lib/icons/fontawesome/whatsapp.svelte';
	import LinkIcon from '$lib/icons/fontawesome/link.svelte';
	import CardIcon from '$lib/icons/fontawesome/id-card.svelte';
	import GitHubIcon from '$lib/icons/fontawesome/github.svelte';
	import FacebookIcon from '$lib/icons/fontawesome/facebook.svelte';
	import TwitterIcon from '$lib/icons/fontawesome/x-twitter.svelte';
	import InstagramIcon from '$lib/icons/fontawesome/instagram.svelte';

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
			'Marco Kellershoff a.k.a. Gorilla Moe is a Web-, Android-, iOS-, Java- and CSharp developer.'
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
				<source srcset="/me-heforshe.webp" type="image/webp" />
				<img
					src="/me-heforshe.png"
					alt="Marco Kellershoff a.k.a. Gorilla Moe holding a sign saying he for she."
					class="hidden"
				/>
			</picture>
		</div>
		<div class="get-in-touch">
			<a href="tel:+491755509040" title="Call me" class="phone-icon">
				<PhoneIcon />
			</a>
			<a
				href="https://wa.me/491755509040"
				title="Message me via WhatsApp Messenger"
				class="whatsapp-icon"
			>
				<WhatsAppIcon />
			</a>
			<a href="/now" title="This page is about what I am doing right now" class="link-icon">
				<LinkIcon />
			</a>
			<a href="/about" id="aboutmelink" title="About Me Page" class="card-icon">
				<CardIcon />
			</a>
			<div class="divider"></div>
			<a
				href="https://github.com/gorillamoe"
				title="Check out my Github profile"
				class="github-icon"
			>
				<GitHubIcon />
			</a>
			<a href="https://fb.me/walialu" title="Check out my Facebook profile" class="facebook-icon">
				<FacebookIcon />
			</a>
			<a
				href="https://twitter.com/gmoebananas"
				title="Check out my Twitter account"
				class="twitter-icon"
			>
				<TwitterIcon />
			</a>
			<a
				href="https://instagram.com/gorilla.moe"
				title="Check out my Instagram feed"
				class="instagram-icon"
			>
				<InstagramIcon />
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

	.phone-icon :global(svg),
	.whatsapp-icon :global(svg),
	.link-icon :global(svg),
	.card-icon :global(svg),
	.github-icon :global(svg),
	.facebook-icon :global(svg),
	.twitter-icon :global(svg),
	.instagram-icon :global(svg) {
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
