<script>
	export let data;
	let { docs } = data;
</script>

<div>
	<h1>Portal docs</h1>

	<ul>
		{#each docs as doc, i}
			<li>
				<a href="/docs/{doc}">
					<span>
						{(i + 1).toString().padStart(2, '0')}
					</span>

					<h3>
						{doc}
					</h3>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	div {
		padding: var(--top-offset) 2rem 0 2rem;
		// padding: var(--top-offset)
		margin: 0 auto;
		max-width: var(--linemax);
	}

	h1 {
		margin-bottom: 1ch;
	}

	ul {
		width: 100%;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1rem;

		list-style: none;
	}

	li {
		width: auto;
	}

	a {
		background: #efefef;
		display: flex;
		flex-direction: column;

		padding: 1rem;
		border-radius: 0.5rem;

		border: 2px solid #161616;

		color: black;
		box-shadow: 0 1.5px 3px 0 rgb(0 0 0 / 15%);
		transition: all 0.15s ease-in;

		&:hover {
			border-color: var(--orange);
			text-decoration: none;
			box-shadow: 0 0px 3px 0 rgb(0 0 0 / 15%);
		}

		span {
			font-size: 4rem;
			color: black;

			line-height: 1.25;

			padding-bottom: 0.25rem;
			border-bottom: 1px solid black;

			margin-bottom: 0.5ch;
		}

		h3 {
			font-weight: 400;
			color: black;
		}
	}
</style>
