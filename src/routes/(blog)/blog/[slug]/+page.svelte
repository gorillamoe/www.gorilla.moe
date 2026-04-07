<script lang="ts">
	export let data;
	import { copyAction } from '@mistweaverco/mdsvex-shiki/copyAction';
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.description} />
	{#if data.metadata.updated}<meta property="article:published_time" content={data.metadata.updated} />{:else}<meta
			property="article:published_time"
			content={data.metadata.created}
		/>{/if}
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
	{#if data.metadata.updated}
		<time datetime={new Date(data.metadata.updated).toISOString()}>
			⚡ Last updated: {data.metadata.updated}
		</time>
	{/if}
	<time datetime={new Date(data.metadata.created).toISOString()}>
		🗓️ Published: {data.metadata.created}
	</time>
	<div use:copyAction>
		<svelte:component this={data.content} />
	</div>
</article>
