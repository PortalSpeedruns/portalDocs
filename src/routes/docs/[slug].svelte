<script context="module">
	export const prerender = true;
</script>

<script>
	import '$lib/docs/client/docs.scss';

	export let prev;
	export let next;
	export let section;

	// hovers.setup();
</script>

<svelte:head>
	<title>{section.title} • Docs • Portal 1</title>

	<meta name="twitter:title" content="Portal docs" />
	<meta name="twitter:description" content="{section.title} • Portal documentation" />
	<meta name="Description" content="{section.title} • Portal documentation" />
</svelte:head>

<div class="content listify">
	<h1>{section.title}</h1>

	<section>
		{@html section.content}
	</section>

	<div class="controls">
		<div>
			<span class:faded={!prev}>previous</span>
			{#if prev}
				<a href="/docs/{prev.slug}">{prev.title}</a>
			{/if}
		</div>

		<div>
			<span class:faded={!next}>next</span>
			{#if next}
				<a href="/docs/{next.slug}">{next.title}</a>
			{/if}
		</div>
	</div>
</div>

<style lang="scss"></style>
