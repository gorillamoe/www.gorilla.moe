<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import BackButtonComponent from '$lib/BackButtonComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'About me',
		description:
			"Hello, I'm Marco Kellershoff. I craft apps with the use of Neovim on Arch Linux every day."
	}}
/>

<BackButtonComponent data={{ path: '/' }} />

<div class="container">
	<div class="inner">
		<p>Hello, I'm Marco Kellershoff.</p>
		<p>
			I craft
			<span class="nobr">
				<a href="https://apps.walialu.com/" class="yellow">apps</a>
				<a class="sup" href="/about/apps">
					<sup class="yellow"></sup>
				</a>
			</span>
			with the use of
			<span class="nobr">
				<a href="https://neovim.io" class="neovimblue">Neovim</a>
				<a class="sup" href="/about/neovim">
					<sup class="neovimblue"></sup>
				</a>
			</span>
			on
			<span class="nobr">
				<a href="https://www.archlinux.org" class="orange">Arch Linux</a>
			</span>
			every day.
		</p>
		<p>
			If you're
			<a href="/now" class="poisonousgreen">curious</a>, you can follow me on
			<span class="nobr">
				<a href="https://bsky.app/profile/gorillamoe.bsky.social" class="elephantblue">Bluesky</a>
			</span>,
			<span class="nobr">
				<a href="https://twitter.com/gmoebananas" class="blue">Twitter</a>
				<a class="sup" href="/about/twitter">
					<sup class="blue"></sup>
				</a>
			</span>,
			<a href="https://instagram.com/gorilla.moe" class="purple">Instagram</a>
			and/or
			<span class="nobr">
				<a href="https://github.com/walialu" class="grey">Github</a>
				<a class="sup" href="/about/collab">
					<sup class="grey"></sup>
				</a>.
			</span>
		</p>
		<p>
			Want to know even more about me?
		<p>
			Check out my
			<span class="nobr">
				<a href="https://walialu.com/" class="turquoiseblue">blog</a>
				<a class="sup" href="/about/writing">
					<sup class="turquoiseblue"></sup>
				</a>.
			</span>
		</p>
	</div>
</div>

<style>
	@import './styles.css';
</style>
