<script>
	import GithubIcon from './icons/fontawesome/github.svelte';
	export let data;

	/**
	 * @param {string} slug
	 */
	function createJumpId(slug) {
		return slug
			.split('/')[1]
			.replace(/[^a-z0-9-_]/gi, '-')
			.toLowerCase();
	}
</script>

<div class="card">
	<!-- svelte-ignore a11y-missing-attribute -->
	<a class="jump" id={createJumpId(data.githubSlug)}>
		{#if data.imgsrc}
			<img src={data.imgsrc} alt={data.imgalt} />
		{/if}
		{#if data.videosrc}
			<video loop muted autoplay>
				<source src={data.videosrc} type="video/mp4" />
			</video>
		{/if}
	</a>
	<div class="container">
		<a href="#{createJumpId(data.githubSlug)}"><h4>{data.title}</h4></a>
		<p>{data.text}</p>
	</div>
	<a class="github" href="https://github.com/{data.githubSlug}">
		<GithubIcon />
	</a>
</div>

<style>
	@import './CardComponent.css';
</style>
