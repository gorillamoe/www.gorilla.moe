<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	/** @type {HTMLElement} */
	let backButton;

	export let data;

	onMount(() => {
		backButton.addEventListener('click', () => {
			goto(data.path);
		});
	});
</script>

<div class="back-button-container">
	<i id="back-button" bind:this={backButton} class="fas fa-arrow-circle-left back-button"></i>
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

	.back-button {
		transition: opacity 1s;
		cursor: pointer;
		font-size: 32px;
	}
</style>
