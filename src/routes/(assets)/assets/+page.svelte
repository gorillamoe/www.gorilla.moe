<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import DefaultContainerComponent from '$lib/DefaultContainerComponent.svelte';
	import AssetCardComponent from '$lib/AssetCardComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'Assets',
		description: 'This is a list of some assets I crafted.'
	}}
/>

<DefaultContainerComponent>
	<h3 class="yellow">Assets</h3>
	<p>This is a list of some assets I crafted.</p>

	<AssetCardComponent
		data={{
			title: 'Banana Yellow',
			cssColor: 'ffd866',
			previewSrc: '/resources/assets/banana-yellow.png',
			avatarSrc: '/resources/assets/gorilla-banana-yellow-2048x2048.png',
			coverSrc: '/resources/assets/cover-banana-yellow-3840x2160.png'
		}}
	/>
</DefaultContainerComponent>

<style>
	@import '$lib/colors.css';
	@import '$lib/text.css';
	.yellow {
		color: var(--sexy-color-yellow);
	}
</style>
