<script lang="ts">
  import { getContext, setContext } from 'svelte';
	let { title, description, ogImage, publishedTime } = $props();
  if (getContext('ogImage') === undefined) {
    setContext('ogImage', () => '/og-image.png');
  }
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="fediverse:creator" content="@gorillamoe@mastodon.social">
  <meta property="og:image" content={ogImage} />
  {#if publishedTime}
    <meta property="article:published_time" content={publishedTime} />
  {/if}
</svelte:head>
