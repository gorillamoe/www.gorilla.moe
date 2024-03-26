<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import DefaultContainerComponent from '$lib/DefaultContainerComponent.svelte';
	import CardComponent from '$lib/CardComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'Apps brought to you by Marco Kellershoff a.k.a. Gorilla Moe',
		description: 'A list of apps brought to you by Marco Kellershoff a.k.a. Gorilla Moe.'
	}}
/>

<DefaultContainerComponent>
	<h3 class="yellow">Some apps I crafted</h3>
	<p>This is a list of some apps I worked on.</p>

	<CardComponent
		data={{
			imgsrc: '/assets/apps/tmux-sexy.png',
			imgalt: 'tmux-sexy',
			title: 'tmux-sexy',
			text: 'A tmux theme that is sexy 💋 and minimal.',
			githubSlug: 'mistweaverco/tmux-sexy'
		}}
	/>

	<CardComponent
		data={{
			imgsrc: '/assets/apps/githubutils.nvim.gif',
			imgalt: 'GithubUtils.nvim',
			title: 'GithubUtils.nvim',
			text: '🐙 simple utils for working with Github inside Neovim. Written in Lua.',
			githubSlug: 'mistweaverco/githubutils.nvim'
		}}
	/>

	<CardComponent
		data={{
			imgsrc: '/assets/apps/arte7-downloader.png',
			imgalt: 'ARTE-7-Downloader',
			title: 'ARTE-7-Downloader',
			text: 'User script to download videos from the ARTE+7 website',
			githubSlug: 'GuGuss/ARTE-7-Downloader'
		}}
	/>

	<CardComponent
		data={{
			imgsrc: '/assets/apps/brigadeterm.gif',
			imgalt: 'brigadeterm',
			title: 'brigadeterm',
			text: 'A simple terminal ui for brigade pipelining system. Written in Go.',
			githubSlug: 'slok/brigadeterm'
		}}
	/>

	<CardComponent
		data={{
			imgsrc: '/assets/apps/super-evil-newtab-redux.png',
			imgalt: 'Super Evil New Tab Redux',
			title: 'Super Evil New Tab Redux',
			text: 'Customize your new tab page with HTML, JavaScript and CSS.',
			githubSlug: 'mistweaverco/super-evil-new-tab-redux'
		}}
	/>

	<CardComponent
		data={{
			imgsrc: '/assets/apps/www.gorilla.moe.png',
			imgalt: 'www.gorilla.moe',
			title: 'www.gorilla.moe',
			text: 'My personal website. Built with SvelteKit.',
			githubSlug: 'gorillamoe/www.gorilla.moe'
		}}
	/>

	<CardComponent
		data={{
			imgsrc: '/assets/apps/cheza.js.png',
			imgalt: 'Cheza.js',
			title: 'Cheza.js',
			text: 'Customizable 📦, extensible ⚡ and small HTML5 Videoplayer 📼',
			githubSlug: 'mistweaverco/cheza.js'
		}}
	/>

	<CardComponent
		data={{
			imgsrc: '/assets/apps/aws-cf-invalidate-tui.gif',
			imgalt: 'AWS CloudFront Invalidation TUI',
			title: 'AWS CloudFront Invalidation TUI',
			text: 'TUI 🖥️ for managing Cloudfront ☁️ Invalidations ⚡. Written in Go.',
			githubSlug: 'mistweaverco/aws-cf-invalidate'
		}}
	/>

	<CardComponent
		data={{
			videosrc: '/assets/apps/github-tui.mp4',
			title: 'Github TUI',
			text: 'A terminal user interface for Github. Written in Go.',
			githubSlug: 'gorillamoe/github-tui'
		}}
	/>
</DefaultContainerComponent>

<style>
	@import '$lib/colors.css';
	@import '$lib/text.css';
	.yellow {
		color: var(--sexy-color-yellow);
	}
</style>
