<script>
	import { onMount } from 'svelte';

	/** @type {HTMLElement} */
	let speaker;
	/** @type {HTMLAudioElement} */
	let audio;

	onMount(() => {
		speaker.addEventListener('click', () => {
			speaker.classList.toggle('mute');
			if (audio.paused) {
				audio.play();
			} else {
				audio.pause();
			}
		});
	});
</script>

<div class="speaker-container">
	<div class="speaker mute" bind:this={speaker}>
		<span></span>
	</div>
</div>
<audio preload="none" loop bind:this={audio}>
	<source src="/just-do-it.m4a" type="audio/mp4" />
	<source src="/just-do-it.ogg" type="audio/ogg" />
</audio>

<style>
	audio {
		display: none;
	}

	.speaker-container {
		position: fixed;
		top: 10px;
		right: 10px;
		width: 30px;
		height: 30px;
		z-index: 9;
	}
	.speaker {
		height: 30px;
		width: 30px;
		position: relative;
		overflow: hidden;
		display: inline-block;
		cursor: pointer;
	}
	.speaker span {
		display: block;
		width: 8px;
		height: 8px;
		background: #fff;
		margin: 11px 0 0 2px;
	}
	.speaker span:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-color: transparent #fff transparent transparent;
		border-width: 10px 14px 10px 15px;
		left: -13px;
		top: 5px;
	}
	.speaker span:before {
		transform: rotate(45deg);
		border-radius: 0 50px 0 0;
		content: '';
		position: absolute;
		width: 5px;
		height: 5px;
		border-style: double;
		border-color: #fff;
		border-width: 7px 7px 0 0;
		left: 18px;
		top: 9px;
		transition: all 0.2s ease-out;
	}
	.speaker:hover span:before {
		transform: scale(0.8) translate(-3px, 0) rotate(42deg);
	}
	.speaker.mute span:before {
		transform: scale(0.5) translate(-15px, 0) rotate(36deg);
		opacity: 0;
	}
</style>
