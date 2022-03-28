<script context="module">
	export const prerender = true;

	// TODO should use a shadow endpoint instead, need to fix a bug first
	// /** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const res = await fetch(`/docs/${params.slug}.json`);
		// const { prev, next, section } = await res.json();
		const { section } = await res.json();

		// prev,
		// next,
		return {
			props: {
				section
			}
		};
	}
</script>

<script>
	// import { Icon } from '@sveltejs/site-kit';
	// import '@sveltejs/site-kit/code.css';
	// import '$lib/docs/client/docs.css';
	// import '$lib/docs/client/shiki.css';
	// import * as hovers from '$lib/docs/client/hovers.js';

	// export let prev;
	// export let next;
	export let section;

  console.log(section)

	// hovers.setup();
</script>

<svelte:head>
	<title>{section.title} • Docs • Portal 1</title>

	<meta name="twitter:title" content="Portal docs" />
	<meta name="twitter:description" content="{section.title} • Portal documentation" />
	<meta name="Description" content="{section.title} • Portal documentation" />
</svelte:head>

<section>
  {@html section.content}
</section>
