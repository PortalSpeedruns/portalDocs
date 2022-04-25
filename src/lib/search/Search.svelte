<script>
	import flexsearch from 'flexsearch';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';

	let nav;
	if (browser) {
		nav = navigator;
	}

	let results = [];

	let index;
	let lookup;
	let query = '';

	onMount(async () => {
		const res = await fetch(`/docs/${$page.params.category}/content.json`);
		const { blocks } = await res.json();

		index = new flexsearch.Index({
			tokenize: 'forward'
		});

		lookup = new Map();

		let time = Date.now();
		for (const block of blocks) {
			const title = block.breadcrumbs[block.breadcrumbs.length - 1];
			lookup.set(block.href, {
				title,
				href: block.href,
				breadcrumbs: block.breadcrumbs.slice(0, -1),
				content: block.content
			});
			index.add(block.href, `${title} ${block.content}`);

			// poor man's way of preventing blocking
			if (Date.now() - time > 25) {
				await new Promise((f) => setTimeout(f, 0));
				time = Date.now();
			}
		}

		update();
	});

	function update() {
		results = (index ? index.search(query) : []).map((href) => lookup.get(href));
	}

	function escape(text) {
		return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	function excerpt(content, query) {
		const index = content.toLowerCase().indexOf(query.toLowerCase());
		if (index === -1) {
			return content.slice(0, 100);
		}

		const prefix = index > 20 ? `…${content.slice(index - 15, index)}` : content.slice(0, index);
		const suffix = content.slice(
			index + query.length,
			index + query.length + (80 - (prefix.length + query.length))
		);

		return (
			escape(prefix) +
			`<mark>${escape(content.slice(index, index + query.length))}</mark>` +
			escape(suffix)
		);
	}
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'k' && (navigator.platform === 'MacIntel' ? e.metaKey : e.ctrlKey)) {
			e.preventDefault();
		}
	}}
/>

<div class="searchContainer">
	<input
		type="search"
		bind:value={query}
		on:input={(e) => {
			update();
		}}
		on:mousedown={() => {}}
		on:touchstart={() => {}}
		class="searchInput"
		id="search"
	/>
	<label for="#search">
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path
				fill="currentColor"
				d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
			/>
		</svg>
		<span>Search</span> <kbd>{nav?.platform === 'MacIntel' ? '⌘' : 'Ctrl'}</kbd>
		<kbd>K</kbd>
	</label>

	<div class="results">
		<ul>
			{#each results as result}
				<li>
					<a
						on:click={() => {
							query = '';
							update();
						}}
						href={result.href}
					>
						<small>{result.breadcrumbs.join('/')}</small>
						<strong>{@html excerpt(result.title, query)}</strong>
						<span>{@html excerpt(result.content, query)}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	.results {
		position: absolute;
		top: 3rem;
		width: calc(100% + 4rem);
		transform: translateX(-2rem);
		max-height: 48vh;

		overflow: auto;
		overscroll-behavior-y: none;

		box-shadow: var(--shadow-md);
		background-color: #fff;

		ul {
			display: flex;
			flex-direction: column;
			list-style: none;
		}

		a {
			display: block;
			text-decoration: none;
			line-height: 1;
			padding: 1rem;

			&:hover {
				background: #eee;
			}

			&:focus {
				background: var(--second);
				color: white;
				outline: none;
			}

			small,
			strong,
			span {
				display: block;
				color: var(--text-color);
			}

			small {
				font-size: 0.75rem;
			}

			strong {
				font-size: 1rem;
				margin: 0.4em 0;
			}

			span {
				font-size: 0.75rem;
			}

			:global(mark) {
				background: var(--second);
				color: #fff;
				text-decoration: none;
				border-radius: 1px;

				font-size: inherit;
			}
		}
	}

	.searchContainer {
		display: flex;
		position: relative;

		svg {
			position: absolute;
			width: 1.25rem;
			height: 1.25rem;
			left: 0.65rem;
			top: calc(50% - 0.625rem);
			color: #ccc;
		}

		input {
			height: 2rem;
			padding: 0.5em 1.25em;
			border-radius: 2rem;

			border: 1px solid #ccc;

			&:focus {
				outline: none;
				border-color: var(--prime);
			}
		}

		label {
			color: #666;
			position: absolute;
			top: calc(50% - 0.5rem);
			width: 100%;
			text-align: center;
			pointer-events: none;
			font-size: 0.7rem;
			text-transform: uppercase;
		}

		kbd {
			display: none;
			background: #eee;
			border: 1px solid #ddd;
			padding: 0rem 0.2em 0.05rem 0.2em;
			color: inherit;
			font-size: inherit;
			font-family: inherit;
			border-radius: 2px;

			@media (min-width: 800px) {
				display: inline;
			}
		}

		label,
		kbd {
			text-align: center;
		}
	}
</style>
