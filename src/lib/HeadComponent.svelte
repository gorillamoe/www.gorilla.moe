<script lang="ts">
	const { title, description } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
