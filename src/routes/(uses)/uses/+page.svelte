<script>
	export let data;
  import HeadComponent from '$lib/HeadComponent.svelte';
  import './page.css';
</script>

<HeadComponent
  title={data.metadata.title}
  description={data.metadata.description}
  publishedTime={data.metadata.date}
  ogImage="/og-image-uses.jpg" />

<article>
	<h1 class="title">{data.metadata.title}</h1>
	<time datetime={new Date(data.metadata.date).toISOString()}>
		⚡ Last updated: {data.metadata.date}
	</time>
	<svelte:component this={data.content} />
</article>

