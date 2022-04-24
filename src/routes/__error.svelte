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
	import ErrorPage from '$lib/errorPage.svelte';

	export let error;
	export let status;
</script>

<ErrorPage {status} {error} />

<style lang="scss">
</style>
