<script lang="ts">
	const { title, description } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<a rel="me" href="https://mastodon.social/@gorillamoe">Mastodon</a>
	<meta name="fediverse:creator" content="@gorillamoe@mastodon.social">
</svelte:head>
