<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import AboutLinkComponent from '$lib/AboutLinkComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'About me',
		description:
			"Hello, I'm Marco Kellershoff. I craft things with the use of ShellFu and Neovim on Linux every day."
	}}
/>

<div class="container">
	<div class="inner">
		<p>Hello, I'm Marco Kellershoff.</p>
		<p>
			I'm a loud 📢 introvert who loves ❤️ CI/CD, Cloud ☁️ and on-premise ✨, generally speaking,
			all things DevOps 🥷.
		</p>
		<p>
			I tend to automate everything 🤖 and can't live without
			<AboutLinkComponent
				data={{
					nobr: true,
					href: 'https://manjaro.org/',
					color: 'orange',
					text: 'Linux'
				}}
			/> 🐧 and
			<AboutLinkComponent
				data={{
					nobr: true,
					href: 'https://neovim.io/',
					color: 'neovimblue',
					text: 'Neovim',
					hrefSup: '/about/neovim'
				}}
			/>.
		</p>
		<p>
			Maybe you're interested in the tools I
			<AboutLinkComponent
				data={{
					nobr: true,
					href: '/uses',
					color: 'yellow',
					text: 'use'
				}}
			/>, or you want to know what I'm up to right
			<AboutLinkComponent
				data={{
					href: '/now',
					color: 'poisonousgreen',
					text: 'now'
				}}
			/>. I got you 😎.
		</p>
		<p>
			I also keep track of
			<AboutLinkComponent
				data={{
					href: '/books',
					color: 'red',
					text: 'books'
				}}
			/> I read and the things I
			<AboutLinkComponent
				data={{
					href: '/wishlist',
					color: 'purple',
					text: 'want'
				}}
			/>.
		</p>
		<p>
			You can find me on
			<AboutLinkComponent
				data={{
					nobr: true,
					href: 'https://bsky.app/profile/gorilla.moe',
					color: 'blue',
					text: 'Bluesky',
					hrefSup: '/about/bluesky'
				}}
			/>, and
			<AboutLinkComponent
				data={{
					nobr: true,
					href: 'https://github.com/gorillamoe',
					color: 'grey',
					text: 'Github',
					hrefSup: '/about/collab'
				}}
			/>.
		</p>
		<p>
			I have
			<AboutLinkComponent
				data={{
					href: '/journey',
					color: 'yellow',
					text: '15+ years experience'
				}}
			/>
			in the broad field of IT, including some personal
			<AboutLinkComponent
				data={{
					nobr: true,
					href: '/projects',
					color: 'poisonousgreen',
					text: 'projects'
				}}
			/>.
		</p>
		<p>
			You can find me living a peaceful ✌🏾 life in Germany 🇩🇪 with my wife, my daughter and our dogs
			🐶.
		</p>
		<p>Want to know even more about me?</p>
		<p>
			Check out my
			<AboutLinkComponent
				data={{
					nobr: true,
					href: '/blog',
					color: 'turquoiseblue',
					text: 'blog',
					hrefSup: '/about/writing'
				}}
			/>
		</p>
	</div>
</div>

<style>
	@import './page.css';
</style>
