<script context="module">
	export const prerender = true;

	export async function load({ params, fetch }) {
		const res = await fetch(`/docs/${params.category}.json`);

		// jank way to force prerendering of endpoint
		const content = await fetch(`/docs/${params.category}/content.json`);

		return {
			props: {
				sections: await res.json(),
				content: await content.json(),
				params
			}
		};
	}
</script>

<script>
	import Contents from '$lib/docs/Contents.svelte';
	import SearchBox from '$lib/search/SearchBox.svelte';

	import { browser } from '$app/env';

	export let sections;
	export let params;

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
