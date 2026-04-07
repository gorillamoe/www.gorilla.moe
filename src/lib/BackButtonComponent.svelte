<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import BackButtonIcon from '$lib/icons/fontawesome/arrow-circle-left.svg?raw';

	let backButton: HTMLElement | null = null;

	const { path } = $props();

	onMount(() => {
		backButton?.addEventListener('click', () => {
			goto(path);
		});
	});
</script>

<div class="back-button-container" bind:this={backButton}>
	<span class="icon">{@html BackButtonIcon}</span>
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
