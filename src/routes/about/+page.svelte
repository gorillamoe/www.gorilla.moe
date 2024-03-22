<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

/** @type {HTMLElement} */
let backButton;

/**
 * @param {HTMLAnchorElement} anchor
 */
const forEachDataTippyHtmlCallback = function(anchor) {
	anchor.addEventListener('click', (event) => {
		event.preventDefault();
	});
	/**
	 * @type {string}
	 */
	const id = anchor.getAttribute('data-tippy-html') || '';
	/**
	 * @type {HTMLElement}
	 */
	const htmlEl = document.querySelector(id);
	tippy(anchor, {
		allowHTML: true,
		content: htmlEl.innerHTML,
		trigger: 'click',
	});
};

onMount(() => {
	backButton.addEventListener('click', () => {
		goto('/');
	});

	/**
	 * @type {NodeListOf<HTMLAnchorElement>}
	 */
	const anchors = document.querySelectorAll('a[data-tippy-html]');

	anchors.forEach(forEachDataTippyHtmlCallback);
});
</script>

<svelte:head>
	<title>Marco Kellershoff a.k.a. Gorilla Moe</title>
	<meta name="description" content="Marco Kellershoff a.k.a. Gorilla Moe is a Web-, Android-, iOS-, Java- and CSharp developer." />
</svelte:head>

<div class="back-button-container">
	<i id="back-button" bind:this={backButton} class="fas fa-arrow-circle-left back-button"></i>
</div>

<div class="container">
	<div class="inner">
	<p>Hello, I'm Marco Kellershoff.</p>
	<p>
			I craft <span class="nobr"><a href="https://apps.walialu.com/" class="yellow">apps</a>
				<a href="#extendedinfo-apps" data-tippy-html="#extendedinfo-apps"><sup class="yellow"></sup></a></span>
			with the use of <span class="nobr"><a href="https://neovim.io" class="neovimblue">Neovim</a>
				<a href="#extendedinfo-neovim" data-tippy-html="#extendedinfo-neovim"><sup class="neovimblue"></sup></a></span>
			on <span class="nobr"><a href="https://www.archlinux.org" class="orange">Arch Linux</a> every day.
		</p>
	<p>
			If you're <a href="https://walialu.com/now" class="poisonousgreen">curious</a>, you can befriend me at
			<span class="nobr"><a href="https://jambo.social/@walialu" class="elephantblue obsolete">Mastodon</a></span>
			<span class="nobr"><a href="https://twitter.com/walialu" class="blue">Twitter</a>
				<a href="#extendedinfo-twitter" data-tippy-html="#extendedinfo-twitter"><sup class="blue"></sup></a></span>
			and/or
			<span class="nobr"><a href="https://github.com/walialu" class="grey">Github</a></span>
			<a href="#extendedinfo-git" data-tippy-html="#extendedinfo-git"><sup class="grey"></sup></a>
			<span class="nobr"><a href="https://git.superevilmegaco.com/walialu" class="gitlab-purple obsolete">GitLab</a></span>, or
			peek at my <span class="nobr"><span class="turquoiseblue obsolete">blog</span> <a href="https://walialu.com/" class="turquoiseblue">treasure filled dumpster</a>
				<a href="#extendedinfo-treasure-filled-dumpster" data-tippy-html="#extendedinfo-treasure-filled-dumpster"><sup class="turquoiseblue"></sup></a>.</span>
		</p>
	</div>
</div>
<div class="extended-infos">
	<div id="extendedinfo-equalist">
	<p>
			This whole <em>feminist/equalist thing</em> really
			started for me with the
			<a href="http://www.heforshe.org/en">#HeForShe</a>
			movement, on 20 September 2014.
		</p>
	</div>
	<div id="extendedinfo-apps">
		<h3>Programming languages</h3>
		<p>
			I write apps in
			Golang, C#, Java, PHP, JavaScript,
			jQuery, TypeScript, NodeJS.
		</p>
		<p>
			I've also written apps and
			software in various other languages,
			but these are my favorite ones.
		</p>
		<h3>Databases?</h3>
		<p>
			Yes! MySQL, SQLite, MongoDB, Apache Solr, you name it!
		</p>
		<h3>And what about DevOps?</h3>
		<p>
			Of course! I live and breath Linux,
			I really dig Docker, Kubernetes and
			Continuous Integration,
			but bare metal servers are fine, too!
		</p>
	</div>
	<div id="extendedinfo-neovim">
		<h3>Neovim, better than sliced-bread</h3>
		<p>
			I started using Vim in 2012 and the learning
			curve was very steep, but it was really worth it.
		</p>
		<p>
			The best decision I made, back in these days,
			was buying a cheap
			<a href="https://amzn.to/2JpjhXr">Cherry&trade; Stream XT Evolution US-Layout Keyboard</a>.
			This made everything so much easier.
			The layout is not only better with using Vim/Neovim,
			it just makes <strong>everything</strong>
			so much easier, when you're a programmer.
		</p>
		<p>
			I'm currently in love &hearts; with my
			<a href="pok3r.jpg">Pok3r keyboard and my custom keycaps</a>.
		</p>
	</div>
	<div id="extendedinfo-twitter">
		<h3>Twitter</h3>
		<p>Tweet at me &hearts;!</p>
	</div>
	<div id="extendedinfo-git">
		<h3>Collaboration</h3>
		<p>
			I'm a Git pro in the business world and it itches me
			when I see commit messages that are not well formatted
			and lack proper grammar and/or meaning.
		<p>
			Subversion is also something I can work with,
			but I've to admit, that I'm not very fond of it.
		</p>
	</div>
	<div id="extendedinfo-treasure-filled-dumpster">
		<h3>Writing</h3>
		<p>
			I really like to write, but I don't do it very often,
			at least not on my <del>blog</del> treasure filled dumpster.
		</p>
		<p>
			My <del>blog</del> treasure filled dumpster is somehow like a big and shiny and awesome
			rainbow-colored dumpster!
			It's a treasure-chest-dumpster,
			filled with all the good stuff.
			Programming snippets, documentation and stories about me
			and my life.
		</p>
		<h3>Documentation</h3>
		<p>
			I write a lot of documentation and I'm very good at it.
			Most of the stuff isn't publicly available though :(
		</p>
	</div>
</div>
<style>
.container {
	background-color: #272b30;
	font-size: 1.4rem;
	margin: 0;
	padding: 0;
	transition: background-color 1s;
	width: 100%;
	height: 100%;
	text-align: center;
	position: relative;
	color: #fff;
}

.inner {
	text-align: center;
	position: relative;
	width: 85%;
	margin: auto;
	padding-top: 2rem;
	margin-bottom: 2rem;
	font-family: "Nanum Pen Script", cursive;
	transition: opacity 1s, visibility 1s;
}

.back-button-container {
	position: fixed;
	top: 10px;
	left: 10px;
	width: 32px;
	height: 32px;
	z-index: 9;
}

.back-button {
	cursor: pointer;
	font-size: 32px;
}

p {
	line-height: 1.6rem;
}
a {
	color: #fff;
	text-decoration: none;
	border-bottom: 1px dashed;
	display: inline-block;
	height: 1.4rem;
}
a:hover {
	border-bottom: 0 none;
}
.grey {
	color: #aaa;
	border-color: #aaa;
}
.gitlab-purple {
	color: #575d88;
	border-color: #575d88;
}
.red {
	color: #ff6188;
	border-color: #ff6188;
}
.orange {
	color: #fc9867;
	border-color: #fc9867;
}
.yellow {
	color: #ffd866;
	border-color: #ffd866;
}
.poisonousgreen {
	color: #19cf85;
	border-color: #19cf85;
}
.green {
	color: #a9dc76;
	border-color: #a9dc76;
}
.blue {
	color: #78dce8;
	border-color: #78dce8;
}
.purple {
	color: #ab9df2;
	border-color: #ab9df2;
}
.neovimblue {
	color: #3c92d1;
	border-color: #3c92d1;
}
.elephantblue {
	color: #7e8bbd;
	border-color: #7e8bbd;
}
.turquoiseblue {
	color: #67ffdc;
	border-color: #67ffdc;
}
.extended-infos {
	display: none;
}
sup {
	margin-left: -7px;
	cursor: pointer;
}

sup:after {
	content: "*";
}

span.nobr {
	white-space: nowrap;
	display: inline-block;
}

.obsolete {
	text-decoration: line-through;
}
</style>
