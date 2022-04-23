<script context="module">
	export const prerender = true;

	export function load() {
		return {
			status: 307,
			redirect: '/docs/docs/introduction'
		};
	}
</script>

<script>
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Welcome to the Portal 1 speedrun docs</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
		text-align: center;
	}
</style>
