<script>
import { onMount } from 'svelte';

/** @type {HTMLElement} */
let swapper;

onMount(() => {
	swapper.addEventListener("click", () => {
		swapper.querySelectorAll("img").forEach((img) => {
			img.classList.toggle("hidden");
		});
	});
});
</script>

<svelte:head>
	<title>Marco Kellershoff a.k.a. Gorilla Moe</title>
	<meta name="description" content="Marco Kellershoff a.k.a. Gorilla Moe is a Web-, Android-, iOS-, Java- and CSharp developer." />
</svelte:head>

<div class="container">
	<div class="inner">
		<header>
			Just do it!
		</header>
		<div class="swapper" bind:this={swapper}>
			<img src="/me-heforshe.png" alt="Marco Kellershoff a.k.a. Gorilla Moe holding a sign saying he for she." />
			<img src="/pool.jpg" class="hidden" alt="Marco Kellershoff a.k.a. Gorilla Moe floating in a pool." />
		</div>
		<div class="get-in-touch">
			<a href="tel:+491755509040" title="Call me">
				<i class="fas fa-phone"></i>
			</a>
			<a href="https://wa.me/491755509040" title="Message me via WhatsApp Messenger">
				<i class="fab fa-whatsapp"></i>
			</a>
			<a href="https://walialu.com/now" title="This page is about what I am doing right now">
				<i class="fas fa-link"></i>
			</a>
			<a href="/about" id="aboutmelink" title="About Me Page">
				<i class="fas fa-id-card"></i>
			</a>
			<div class="divider"></div>
			<a href="https://github.com/walialu" title="Check out my Github profile">
				<i class="fab fa-github"></i>
			</a>
			<a href="https://fb.me/walialu" title="Check out my Facebook profile">
				<i class="fab fa-facebook"></i>
			</a>
			<a href="https://twitter.com/walialu" title="Check out my Twitter account">
				<i class="fab fa-twitter"></i>
			</a>
			<a href="https://instagram.com/walialu" title="Check out my Instagram feed">
				<i class="fab fa-instagram"></i>
			</a>
		</div>
	</div>
</div>

<style>
.container {
	margin: 0;
	padding: 0;
	transition: background-color 1s;
	width: 100%;
	height: 100%;
	text-align: center;
	position: relative;
	font-size: 1.5rem;
	color: #fff;
	background-color: #19cf85;
}

header {
	font-family: "Permanent Marker", cursive;
	font-size: 2rem;
}

.inner {
	text-align: center;
	width: 85%;
	margin: auto;
	margin-bottom: 2rem;
	font-family: monospace;
	max-width: 530px;
	opacity: 1;
	transition: opacity 1s, visibility 1s;
}

a {
	color: #fff;
	text-decoration: none;
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
