<script>
	import '$lib/docs/client/docs.scss';
	import '$lib/docs/client/code.scss';
	import 'prismjs/themes/prism.css';

	export let data;
	let { prev, next, section, params } = data;
	$: ({ prev, next, section, params } = data); // to keep data in sync
</script>

<svelte:head>
	<title>{section.title} • Portal Docs</title>

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
				<a href="/docs/{params.category}/{prev.slug}">{prev.title}</a>
			{/if}
		</div>

		<div>
			<span class:faded={!next}>next</span>
			{#if next}
				<a href="/docs/{params.category}/{next.slug}">{next.title}</a>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.controls {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		border-top: 1px solid #ddd;
		margin-top: 4.5rem;
		padding-top: 1.25rem;

		div {
			&:first-child {
				text-align: start;
			}

			&:last-child {
				text-align: right;
			}

			span {
				text-transform: uppercase;
				font-size: 0.75rem;
				display: block;
			}
		}

		.faded {
			color: rgb(143, 143, 143);
		}
	}
</style>
