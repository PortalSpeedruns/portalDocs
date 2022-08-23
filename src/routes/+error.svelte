<script>
	import { page } from '$app/stores';
	import ErrorPage from '$lib/ErrorPage.svelte';
</script>

<ErrorPage status={$page.status} error={$page.error?.message} />

<style lang="scss">
</style>
