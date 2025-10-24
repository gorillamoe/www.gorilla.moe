<script>
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.description} />
	<meta property="article:published_time" content={data.metadata.date} />
	<style>
		@import './page.css';
	</style>
</svelte:head>

<article>
	<h1 class="title">
		<a href="/blog" class="back-link" aria-label="Back to blog overview">
			<span class="fa fa-arrow-left" aria-hidden="true"></span>
		</a>
		{data.metadata.title}
	</h1>
	<time datetime={new Date(data.metadata.date).toISOString()}>
		⏰ Last updated {data.metadata.date}
	</time>
	<svelte:component this={data.content} />
</article>
