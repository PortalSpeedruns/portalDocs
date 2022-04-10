<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
</script>

<Header />

<main id="main">
	<slot />
</main>

<style>
	main {
		position: relative;
		margin: 0 auto;
		padding-top: var(--top-offset);
		/* overflow-x: hidden; */
	}
</style>
