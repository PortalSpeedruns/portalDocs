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
			if (positions[i] + top < 40) {
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
					{section.title}
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
								{subsection.title}
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
												{subsection.title}
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

<style>
</style>
