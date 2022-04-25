<script>
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	export let contents = [];

	let path = null;
	let content;
	let headings;
	let positions = [];

	onMount(async () => {
		await document.fonts.ready;

		update();
		highlight();
	});

	afterNavigate(() => {
		update();
		highlight();
	});

	function update() {
		content = document.querySelector('.content');
		const { top } = content.getBoundingClientRect();

		// don't update `selected` for headings above level 4, see _sections.js
		headings = content.querySelectorAll('[id]:not([data-scrollignore])');

		positions = Array.from(headings).map((heading) => {
			return heading.getBoundingClientRect().top - top;
		});
	}

	function highlight() {
		const { top } = content.getBoundingClientRect();

		let i = headings.length;

		while (i--) {
			if (positions[i] + top < 120) {
				const heading = headings[i];
				path = `${$page.url.pathname}#${heading.id}`;
				return;
			}
		}

		path = $page.url.pathname;
	}
</script>

<svelte:window on:scroll={highlight} on:resize={update} />

<nav>
	<ul class="sidebar">
		{#each contents as section}
			<li>
				<a
					class="section"
					sveltekit:prefetch
					class:active={section.path === path}
					href={section.path}
				>
					{@html section.title}
				</a>

				<ul>
					{#each section.sections as subsection}
						<li>
							<a
								class="subsection"
								sveltekit:prefetch
								class:active={subsection.path === path}
								href={subsection.path}
							>
								<b>{@html subsection.title}</b>
							</a>

							{#if section.path === $page.url.pathname}
								<ul>
									{#each subsection.sections as subsection}
										<li>
											<a
												class="nested subsection"
												class:active={subsection.path === path}
												href={subsection.path}
												sveltekit:prefetch
											>
												{@html subsection.title}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		top: 0;
		left: 0;
		overflow: hidden;
		background-color: var(--white);
		color: black;
	}

	.sidebar {
		padding: var(--top-offset) 0 0 0;
		font-family: var(--font);
		overflow-y: auto;
		height: 100%;
		bottom: auto;
		width: 100%;
		columns: 2;
	}

	li {
		display: block;
		line-height: 1.2;
		margin: 0;
		margin-bottom: 1.5rem;
	}

	a {
		position: relative;
		transition: color 0.2s;
		padding: 0.375rem 1rem;
		color: var(--sidebar-text);
		border-radius: 0.25rem;
		user-select: none;

		font-size: 1.125rem;
		font-weight: 700;
	}

	.section {
		display: block;
		font-size: var(--h6);
		font-weight: 600;
	}

	.subsection {
		display: block;
		font-size: 1rem;
		font-family: var(--font);
		padding-bottom: 0.5em;
		margin-left: 1rem;
	}

	.section,
	.subsection {
		margin-bottom: 0.25rem;
	}

	.nested {
		margin-left: 2rem;
	}

	ul ul,
	ul ul li {
		margin: 0;
	}

	a:hover,
	.section:hover,
	.subsection:hover,
	.active {
		background-color: rgba(0, 0, 0, 0.1);
		text-decoration: none;
	}

	.active {
		color: var(--orange);
	}

	@media (min-width: 600px) {
		.sidebar {
			columns: 2;
			padding-left: var(--side-nav);
			padding-right: var(--side-nav);
		}
	}

	@media (min-width: 832px) {
		.sidebar {
			columns: 1;
			padding-left: 1rem;
			padding-right: 1rem;
			padding-bottom: 1rem;
		}

		nav::after {
			content: '';
			position: fixed;
			left: 0;
			bottom: 0;
			width: var(--sidebar-w);
			height: 2em;
			pointer-events: none;
			height: var(--top-offset);
		}
	}
</style>
