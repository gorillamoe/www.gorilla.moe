<script>
	export let data;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Latest blog-posts of Marco Kellershoff a.k.a. Gorilla Moe" />
</svelte:head>

<div class="container">
	<h1>Programming snippets, documentation and stories about me and my life</h1>

	<ul>
		{#each data.posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.metadata.title}
					</a>
				</h2>
				<time datetime={new Date(post.metadata.date).toISOString()}>
					⏰ Last updated {post.metadata.date}
				</time>
				<p>{post.metadata.description}</p>
			</li>
		{/each}
	</ul>
</div>

<style>
	@import './page.css';
</style>
