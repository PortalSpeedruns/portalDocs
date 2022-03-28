<script context="module">
	export const prerender = true;

	export async function load({ fetch }) {
		const res = await fetch('/docs.json');

		return {
			props: {
				sections: await res.json()
			}
		};
	}
</script>

<script>
	import Contents from '$lib/docs/Contents.svelte';
	import '../../app.css';

	export let sections;

	$: contents = sections.map((section) => ({
		path: `/docs/${section.slug}`,
		title: section.title,
		sections: section.sections.map((subsection) => ({
			path: `/docs/${section.slug}#${subsection.slug}`,
			title: subsection.title,
			sections: subsection.sections.map((subsection) => ({
				path: `/docs/${section.slug}#${subsection.slug}`,
				title: subsection.title
			}))
		}))
	}));
</script>

<main>
	<div>
		<Contents {contents} />
	</div>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	/* @media (min-width: 832px) {
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
	} */
</style>
