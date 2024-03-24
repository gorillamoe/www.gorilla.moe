<script>
export let data;
</script>

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
					Published {post.metadata.date}
				</time>
				<p>{post.metadata.description}</p>
			</li>
		{/each}
	</ul>
</div>

<style>
@import './list.css';
</style>
