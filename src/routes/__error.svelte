<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	export let error;
	export let status;
</script>

<main>
	<div>
		{#if status === 404}
			<h1>4 <span>0</span> 4</h1>
			<p>You're not meant to be here 😳😂</p>
		{:else}
			<h1>{status}</h1>
			<p>{error.message}</p>
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: flex;
		align-items: center;

		padding-top: var(--top-offset);
		padding-bottom: var(--top-offset);

		background-image: url('/images/404background.png');
		background-size: cover;
	}

	div {
		max-width: var(--linemax);
		width: var(--linemax);
		margin-left: auto;
		margin-right: auto;
		color: white;
	}

	h1 {
		font-size: 5.5rem;
	}

	p {
		font-size: 3.5rem;
	}
</style>
