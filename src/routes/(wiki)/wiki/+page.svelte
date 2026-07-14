<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Wiki</title>
	<meta name="description" content="Personal wiki of Marco 'gorillamoe' Kellershoff a.k.a. Gorilla Moe" />
</svelte:head>

<div class="wiki-root-content">
	<h1>Wiki</h1>
	<ul class="pages">
		{#each data.posts as post}
			<li>
				<h2>
					<a href={post.path} aria-label="Permalink to {post.metadata.title}">
						{post.metadata.title}
						<span class="fa fa-link" aria-hidden="true"></span>
					</a>
				</h2>
				<p>{post.metadata.excerpt}</p>
				{#if post.metadata.updated}
					<time datetime={new Date(post.metadata.updated).toISOString()}>
						⚡ Last updated {post.metadata.updated}
					</time>
				{/if}
				<time datetime={new Date(post.metadata.created).toISOString()}>
					🗓️ Published {post.metadata.created}
				</time>
			</li>
		{/each}
	</ul>
</div>

<style>
	@import './page.css';
</style>
