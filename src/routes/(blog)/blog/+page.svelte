<script>
	export let data;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Latest blog-posts of Marco Kellershoff a.k.a. Gorilla Moe" />
</svelte:head>

<div class="container">
	<h1>Weblog</h1>

	<ul>
		{#each data.posts as post}
			<li class="list-item">
				<h2>
					<a href={post.path} aria-label="Permalink to {post.metadata.title}">
						{post.metadata.title}
						<span class="fa fa-link" aria-hidden="true"></span>
					</a>
				</h2>
				<p>{post.metadata.description}</p>
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
