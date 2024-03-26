<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import AboutLinkComponent from '$lib/AboutLinkComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'About me',
		description:
			"Hello, I'm Marco Kellershoff. I craft apps with the use of Neovim on Arch Linux every day."
	}}
/>

<div class="container">
	<div class="inner">
		<p>Hello, I'm Marco Kellershoff.</p>
		<p>
			I craft
			<AboutLinkComponent
				data={{
					nobr: true,
					href: '/apps',
					color: 'yellow',
					text: 'apps',
					hrefSup: '/about/apps'
				}}
			/>
			with the use of
			<AboutLinkComponent
				data={{
					nobr: true,
					href: 'https://neovim.io/',
					color: 'neovimblue',
					text: 'Neovim',
					hrefSup: '/about/neovim'
				}}
			/>
			on
			<AboutLinkComponent
				data={{
					nobr: true,
					href: 'https://www.archlinux.org',
					color: 'orange',
					text: 'Arch Linux'
				}}
			/>
			every day.
		</p>
		<p>
			If you're
			<AboutLinkComponent
				data={{
					href: '/now',
					color: 'poisonousgreen',
					text: 'curious'
				}}
			/>, you can follow me on
			<AboutLinkComponent
				data={{
					href: 'https://bsky.app/profile/gorilla.moe',
					color: 'elephantblue',
					text: 'Bluesky'
				}}
			/>,
			<AboutLinkComponent
				data={{
					nobr: true,
					href: 'https://twitter.com/thisgorilla',
					color: 'blue',
					text: 'Twitter',
					hrefSup: '/about/twitter'
				}}
			/>,
			<AboutLinkComponent
				data={{
					href: 'https://instagram.com/gorilla.moe',
					color: 'purple',
					text: 'Instagram'
				}}
			/> and/or
			<AboutLinkComponent
				data={{
					nobr: true,
					href: 'https://github.com/gorillamoe',
					color: 'grey',
					text: 'Github',
					hrefSup: '/about/collab'
				}}
			/>
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
