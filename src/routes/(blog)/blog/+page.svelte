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
				<h2 class="list-title">
					{post.metadata.title}
					<a href={post.path}>
						<span class="fa fa-link" aria-hidden="true"></span>
					</a>
				</h2>
				<p>{post.metadata.description}</p>
				<time datetime={new Date(post.metadata.date).toISOString()}>
					⏰ Last updated {post.metadata.date}
				</time>
			</li>
		{/each}
	</ul>
</div>

<style>
	@import './page.css';
</style>
