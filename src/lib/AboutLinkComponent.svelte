<script>
	export let data;
</script>

{#if data.nobr}
	<span class="nobr">
		<a href={data.href} class={data.color}>{data.text}</a>
		{#if data.hrefSup}
			<a class="sup" href={data.hrefSup}>
				<sup class={data.color}></sup>
			</a>
		{/if}
	</span>
{:else}
	<a href={data.href} class={data.color}>{data.text}</a>
	{#if data.hrefSup}
		<a class="sup" href={data.hrefSup}>
			<sup class={data.color}></sup>
		</a>
	{/if}
{/if}

<style>
	@import './AboutLinkComponent.css';
</style>
