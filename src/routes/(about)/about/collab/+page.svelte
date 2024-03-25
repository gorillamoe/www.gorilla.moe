<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import BackButtonComponent from '$lib/BackButtonComponent.svelte';
</script>

<HeadComponent
	data={{
		title: 'Collaboration',
		description: 'Git is my favorite version control system, but I can work with Subversion, too.'
	}}
/>

<BackButtonComponent data={{ path: '/about' }} />

<div class="container">
	<div class="inner">
		<h3 class="poisonousgreen">Collaboration</h3>
		<p>
			I really dig Git <span class="red">&hearts;</span> and it itches me when I see commit messages
			that are not well formatted and lack proper grammar and/or meaning.
		</p>
		<p>
			Subversion is also something I can work with, but I've to admit, that I'm not very fond of it.
		</p>
		<p>Jira, Confluence, Bitbucket, GitHub, GitLab, you name it, I've worked with it.</p>
		<p>
			I've set up and maintained various pipelines, workflows, processes and integrations for teams
			and projects.
		</p>
	</div>
</div>

<style>
	@import './../page.css';
</style>
