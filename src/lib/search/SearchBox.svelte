<script>
	import { afterNavigate } from '$app/navigation';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { searching, query } from './stores';

	import flexsearch from 'flexsearch';

	let recent_searches = [];

	let results = [];
	let index;
	let lookup;

	let modal;

	afterNavigate(() => {
		close();
	});

	function close() {
		if ($searching) {
			$searching = false;
			const scroll = -parseInt(document.body.style.top || '0');
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.tabIndex = -1;
			document.body.focus();
			document.body.removeAttribute('tabindex');
			window.scrollTo(0, scroll);
		}
	}

	function update() {
		results = (index ? index.search($query) : []).map((href) => lookup.get(href));
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

	$: if ($searching) {
		update();
		document.body.style.top = `-${window.scrollY}px`;
		document.body.style.position = 'fixed';
	}

	onMount(async () => {
		const res = await fetch(`/docs/${$page.params.category}/content.json`);
		const { blocks } = await res.json();
		console.log(res, blocks);

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
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'k' && (navigator.platform === 'MacIntel' ? e.metaKey : e.ctrlKey)) {
			e.preventDefault();
			$query = '';
			$searching = !$searching;
		}

		if (e.code === 'Escape') {
			close();
		}
	}}
/>

{#if $searching && index}
	<div class="modal-background" on:click={close} />

	<div bind:this={modal} class="modal">
		<div class="search-box">
			<!-- svelte-ignore a11y-autofocus -->
			<input
				autofocus
				placeholder="Search"
				value={$query}
				on:input={(e) => {
					$query = e.target.value;
					update();
				}}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						if (results.length > 0) {
							modal.querySelector('a').click();
						}
					}
				}}
				type="text"
			/>

			<button class="close" aria-label="Close" on:click={close}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg
				>
			</button>

			<div class="results">
				{#if $query}
					{#if results.length > 0}
						<ul>
							{#each results as result}
								<li>
									<a href={result.href}>
										<small>{result.breadcrumbs.join('/')}</small>
										<strong>{@html excerpt(result.title, $query)}</strong>
										<span>{@html excerpt(result.content, $query)}</span>
									</a>
								</li>
							{/each}
						</ul>
					{:else}
						<p class="info">No results</p>
					{/if}
				{:else}
					<h2 class="info">{recent_searches.length ? 'Recent searches' : 'No recent searches'}</h2>
				{/if}
			</div>
		</div>
	</div>
{/if}

<div aria-live="assertive">
	{#if $searching && $query && results.length === 0}
		<p>No results</p>
	{/if}
</div>

<style lang="scss">
	.modal-background,
	.modal {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}

	.modal-background {
		background: rgba(255, 255, 255, 0.7);
	}

	.modal {
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
	}

	.search-box {
		position: relative;
		height: calc(100% - 2rem);
		width: calc(100vw - 2rem);
		max-width: 32rem;
		max-height: 32rem;
		filter: drop-shadow(2px 4px 16px rgba(0, 0, 0, 0.2));
		border-radius: var(--border-r);
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.close {
		position: absolute;
		top: 0;
		right: 0;
		width: 3rem;
		height: 3rem;
		background: none;

		color: #fff;
	}

	.search-box > * {
		pointer-events: all;
	}

	.info {
		padding: 1rem;
		font-size: 0.8125rem;
		font-weight: normal;
		text-transform: uppercase;
		background-color: white;
		border-radius: 0 0 var(--border-r) var(--border-r);
		pointer-events: all;
	}

	ul {
		margin: calc(-1 * var(--border-r)) 0 0 0;
		background-color: white;
		border-radius: 0 0 var(--border-r) var(--border-r);
		pointer-events: all;
	}

	li {
		position: relative;
		list-style: none;
		margin: 0;
	}

	a {
		display: block;
		text-decoration: none;
		line-height: 1;
		padding: 1rem;

		&:hover {
			background-color: #eee;
		}

		small,
		strong,
		span {
			display: block;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			line-height: 1;
		}

		small {
			font-size: 0.6rem;
			text-transform: uppercase;
			font-weight: 600;
			color: #999;
		}

		strong {
			font-size: 1rem;
			color: var(--text);
			margin: 0.4rem 0;
		}

		strong :global(mark) {
			background-color: #676778;
			color: white;
			text-decoration: none;
			border-radius: 1px;
		}

		span {
			font-size: 0.8rem;
			color: #999;
		}

		span :global(mark) {
			background: none;
			color: #111;
		}
	}

	input {
		font-family: inherit;
		font-size: 1rem;
		font-weight: 600;
		padding: 0.75rem 6rem 0.5rem 1rem;
		height: 3rem;
		border: none;
		border-bottom: 1px solid #eee;
		flex-shrink: 0;

		background-color: #676778;
		color: #fff;
		outline: none;

		&::placeholder {
			color: #ababb4;
		}
	}

	.results {
		overflow: auto;
		overscroll-behavior-y: none;
	}
</style>
