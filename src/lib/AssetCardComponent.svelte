<script lang="ts">
	let { bgColor, cssColor, title, previewSrc, avatarSrc, coverSrc }:
	{
		bgColor?: string;
		cssColor: string;
		title: string;
		previewSrc: string;
		avatarSrc: string;
		coverSrc: string;
	}
	= $props();

	if (bgColor === undefined) {
		bgColor = '#1a1a1a';
	}

	function createJumpId(slug: string): string {
		return slug.replace(/[^a-z0-9-_]/gi, '-').toLowerCase();
	}
</script>

<div class="card" style="background-color:{bgColor}">
	<!-- svelte-ignore a11y_missing_attribute -->
	<a class="jump" id={createJumpId(title)} aria-hidden="true"></a>
	<a href={coverSrc}><img src={previewSrc} alt={title} /></a>
	<div class="container">
		<a href={avatarSrc} style="color:#{cssColor};"><h4>{title} #{cssColor}</h4></a>
	</div>
</div>

<style>
	@import '$lib/colors.css';
	@import './AssetCardComponent.css';
</style>
