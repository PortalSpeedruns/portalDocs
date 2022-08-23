<script>
	import Contents from '$lib/docs/Contents.svelte';
	import SearchBox from '$lib/search/SearchBox.svelte';

	import { browser } from '$app/env';

	export let data;
	let { sections, params } = data;
	$: ({ sections, params } = data); // to keep data in sync

	$: contents = sections.map((section) => ({
		path: `/docs/${params.category}/${section.slug}`,
		title: section.title,
		sections: section.sections.map((subsection) => ({
			path: `/docs/${params.category}/${section.slug}#${subsection.slug}`,
			title: subsection.title,
			sections: subsection.sections.map((subsection) => ({
				path: `/docs/${params.category}/${section.slug}#${subsection.slug}`,
				title: subsection.title
			}))
		}))
	}));
</script>

<div class="grid">
	<slot />
	<div class="toc-container">
		<Contents {contents} />
	</div>

	{#if browser}
		<SearchBox />
	{/if}
</div>

<style lang="scss">
	@media (min-width: 832px) {
		.grid {
			grid-template-rows: unset;
			grid-template-columns: var(--sidebar-w) 1fr;
		}

		.toc-container {
			width: var(--sidebar-w);
			height: 100vh;
			overflow: auto;
			position: fixed;
			left: 0;
			top: 0;
		}
	}
</style>
