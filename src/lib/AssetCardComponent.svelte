<script>
	export let data;

	if (data.bgColor === undefined) {
		data.bgColor = '#1a1a1a';
	}

	/**
	 * @param {string} slug
	 */
	function createJumpId(slug) {
		return slug.replace(/[^a-z0-9-_]/gi, '-').toLowerCase();
	}
</script>

<div class="card" style="background-color:{data.bgColor}">
	<a class="jump" id={createJumpId(data.title)}>
		<a href={data.coverSrc}><img src={data.previewSrc} alt={data.title} /></a>
	</a>
	<div class="container">
		<a href={data.avatarSrc} style="color:#{data.cssColor};"
			><h4>{data.title} #{data.cssColor}</h4></a
		>
	</div>
</div>

<style>
	@import '$lib/colors.css';
	@import './AssetCardComponent.css';
</style>
