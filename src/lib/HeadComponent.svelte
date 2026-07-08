<script lang="ts">
	const { title, description } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="fediverse:creator" content="@gorillamoe@mastodon.social">
  <meta property="og:image" content="/og-image.png" />
</svelte:head>
