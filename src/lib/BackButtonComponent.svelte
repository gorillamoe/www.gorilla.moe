<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import BackButtonIcon from '$lib/icons/fontawesome/arrow-circle-left.svelte';

	/** @type {HTMLElement} */
	let backButton;

	export let data;

	onMount(() => {
		backButton.addEventListener('click', () => {
			goto(data.path);
		});
	});
</script>

<div class="back-button-container" bind:this={backButton}>
	<BackButtonIcon />
</div>

<style>
	.back-button-container {
		position: fixed;
		top: 10px;
		left: 10px;
		width: 32px;
		height: 32px;
		z-index: 9;
	}

	.back-button-container:first-child {
		cursor: pointer;
		height: 32px;
		width: 32px;
	}
</style>
