<script context="module">
	export const prerender = true;
</script>

<script>
	export let docs;
</script>

<div>
	<ul>
		{#each docs as doc}
			<li>
				<a href="/docs/{doc}">{doc}</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	div {
		padding: var(--top-offset) var(--side-nav);
		margin: 0 auto;
		max-width: var(--linemax);
	}

	ul {
		list-style: none;
	}
</style>
